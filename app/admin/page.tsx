"use client";

import { useEffect, useMemo, useState } from "react";
import {
  academyInfo,
  achievements,
  coaches,
  coachingPrograms,
  events,
  gallery,
  news
} from "../../lib/content";
import {
  fetchManagedSection,
  YSDA_ADMIN_ENDPOINT
} from "../../lib/managedContent";

type SectionKey = "academyInfo" | "events" | "news" | "gallery" | "coaches" | "programs" | "achievements";
type JsonObject = Record<string, unknown>;

const sections: Array<{ key: SectionKey; label: string; description: string }> = [
  { key: "academyInfo", label: "Site Info", description: "Academy name, tagline, location, leadership and about text" },
  { key: "events", label: "Events", description: "Tournaments, camps, trials and course entries" },
  { key: "news", label: "News", description: "Announcements, results and academy updates" },
  { key: "gallery", label: "Gallery", description: "Gallery cards, captions and media paths" },
  { key: "coaches", label: "Team", description: "Coach and technical-team profiles" },
  { key: "programs", label: "Programs", description: "Training and course programme cards" },
  { key: "achievements", label: "Achievements", description: "Homepage achievement counters" }
];

const defaults: Record<SectionKey, unknown> = {
  academyInfo,
  events,
  news,
  gallery,
  coaches,
  programs: coachingPrograms,
  achievements
};

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

function emptyLike(value: unknown): unknown {
  if (Array.isArray(value)) return [];
  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value as JsonObject).map(([key, item]) => [key, emptyLike(item)]));
  }
  return "";
}

function FieldEditor({
  label,
  value,
  onChange
}: {
  label: string;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  const niceLabel = label.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

  if (Array.isArray(value)) {
    return (
      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">{niceLabel}</span>
        <textarea
          value={value.join("\n")}
          onChange={(event) => onChange(event.target.value.split("\n").filter(Boolean))}
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
        />
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <label className="block">
        <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">{niceLabel}</span>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value || 0))}
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
        />
      </label>
    );
  }

  const text = String(value ?? "");
  const longField = /description|summary|intro|caption|text|qualification|documents/i.test(label) || text.length > 90;

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">{niceLabel}</span>
      {longField ? (
        <textarea
          value={text}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
        />
      ) : (
        <input
          value={text}
          onChange={(event) => onChange(event.target.value)}
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
        />
      )}
    </label>
  );
}

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("ramiz.king15@gmail.com");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState<SectionKey>("events");
  const [data, setData] = useState<unknown>(clone(defaults.events));
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const stored = window.sessionStorage.getItem("ysda-admin-token");
    if (stored) setToken(stored);
  }, []);

  useEffect(() => {
    if (!token) return;
    let active = true;
    setBusy(true);
    setMessage("");
    fetchManagedSection(section, clone(defaults[section]))
      .then((next) => {
        if (active) setData(clone(next));
      })
      .finally(() => {
        if (active) setBusy(false);
      });
    return () => {
      active = false;
    };
  }, [section, token]);

  const activeMeta = useMemo(() => sections.find((item) => item.key === section)!, [section]);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setLoginError("");
    try {
      const response = await fetch(YSDA_ADMIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", email, password })
      });
      const result = await response.json();
      if (!response.ok || !result.token) throw new Error(result.error || "Login failed");
      window.sessionStorage.setItem("ysda-admin-token", result.token);
      setToken(result.token);
      setPassword("");
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(YSDA_ADMIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", token, section, data })
      });
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error(result.error || "Save failed");
      }
      setMessage("Saved. Live website will use this updated content.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  async function resetSection() {
    if (!window.confirm("Reset this section to the website's original coded content?")) return;
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(YSDA_ADMIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset", token, section })
      });
      if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error("Reset failed");
      }
      setData(clone(defaults[section]));
      setMessage("Reset complete. Original website content is active again.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Reset failed");
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    window.sessionStorage.removeItem("ysda-admin-token");
    setToken("");
    setPassword("");
  }

  function updateItem(index: number, field: string, value: unknown) {
    if (!Array.isArray(data)) return;
    const next = clone(data) as JsonObject[];
    next[index] = { ...next[index], [field]: value };
    setData(next);
  }

  function addItem() {
    if (!Array.isArray(data)) return;
    const template = Array.isArray(defaults[section]) && (defaults[section] as unknown[])[0]
      ? (defaults[section] as unknown[])[0]
      : {};
    setData([...(data as unknown[]), emptyLike(template)]);
  }

  function removeItem(index: number) {
    if (!Array.isArray(data)) return;
    setData((data as unknown[]).filter((_, itemIndex) => itemIndex !== index));
  }

  if (!token) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
        <div className="mx-auto grid min-h-[78vh] max-w-5xl place-items-center">
          <form onSubmit={login} className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
            <div className="mb-7">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">YSDA Secure Admin</p>
              <h1 className="mt-3 text-3xl font-black">Website Management Panel</h1>
              <p className="mt-3 text-sm leading-6 text-slate-300">Sign in to manage live website content.</p>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-300">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-slate-900 outline-none"
                required
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-300">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-slate-900 outline-none"
                required
              />
            </label>
            {loginError && <p className="mt-4 rounded-xl bg-red-500/15 px-4 py-3 text-sm font-bold text-red-200">{loginError}</p>}
            <button
              type="submit"
              disabled={busy}
              className="mt-6 h-12 w-full rounded-2xl bg-blue-600 font-black transition hover:bg-blue-500 disabled:opacity-60"
            >
              {busy ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">YSDA Admin</p>
            <h1 className="text-xl font-black">Website Content Manager</h1>
          </div>
          <div className="flex gap-2">
            <a href="/" className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-black">View Website</a>
            <button onClick={logout} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white">Logout</button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[250px_1fr]">
        <aside className="h-fit rounded-[1.5rem] bg-white p-3 shadow-sm lg:sticky lg:top-24">
          {sections.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setSection(item.key)}
              className={`mb-2 w-full rounded-2xl px-4 py-3 text-left transition ${section === item.key ? "bg-blue-600 text-white" : "hover:bg-slate-100"}`}
            >
              <span className="block text-sm font-black">{item.label}</span>
              <span className={`mt-1 block text-xs leading-5 ${section === item.key ? "text-blue-100" : "text-slate-500"}`}>{item.description}</span>
            </button>
          ))}
        </aside>

        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">Editing</p>
              <h2 className="mt-1 text-3xl font-black">{activeMeta.label}</h2>
              <p className="mt-2 text-sm text-slate-500">{activeMeta.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(data) && (
                <button onClick={addItem} className="rounded-xl bg-white px-4 py-2 text-sm font-black shadow-sm">+ Add item</button>
              )}
              <button onClick={resetSection} disabled={busy} className="rounded-xl bg-white px-4 py-2 text-sm font-black shadow-sm disabled:opacity-60">Reset</button>
              <button onClick={save} disabled={busy} className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-black text-white shadow-sm disabled:opacity-60">
                {busy ? "Working..." : "Save changes"}
              </button>
            </div>
          </div>

          {message && <p className="mb-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800">{message}</p>}

          {busy && !Array.isArray(data) ? (
            <div className="rounded-3xl bg-white p-8 text-center font-bold text-slate-500">Loading...</div>
          ) : Array.isArray(data) ? (
            <div className="space-y-5">
              {(data as JsonObject[]).map((item, index) => (
                <article key={index} className="rounded-[1.75rem] bg-white p-5 shadow-sm">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="font-black">{activeMeta.label} #{index + 1}</h3>
                    <button onClick={() => removeItem(index)} className="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-600">Delete</button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(item).map(([field, value]) => (
                      <div key={field} className={/description|summary|intro|caption|text|qualification|documents/i.test(field) ? "md:col-span-2" : ""}>
                        <FieldEditor label={field} value={value} onChange={(next) => updateItem(index, field, next)} />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries((data || {}) as JsonObject).map(([field, value]) => (
                  <FieldEditor
                    key={field}
                    label={field}
                    value={value}
                    onChange={(next) => setData({ ...((data || {}) as JsonObject), [field]: next })}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
