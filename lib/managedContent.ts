"use client";

import { useEffect, useState } from "react";

export const SUPABASE_URL = "https://ylobnofwmryltbzdtkla.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YqLFRfMUlW5hzTOh_50hQQ_Ntr0pYa9";
export const YSDA_ADMIN_ENDPOINT = `${SUPABASE_URL}/functions/v1/ysda-admin`;

export async function fetchManagedSection<T>(section: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/ysda_content?section=eq.${encodeURIComponent(section)}&select=data`,
      {
        headers: { apikey: SUPABASE_PUBLISHABLE_KEY },
        cache: "no-store"
      }
    );

    if (!response.ok) return fallback;
    const rows = (await response.json()) as Array<{ data?: T }>;
    return rows?.[0]?.data ?? fallback;
  } catch {
    return fallback;
  }
}

export function useManagedSection<T>(section: string, fallback: T) {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let active = true;
    fetchManagedSection(section, fallback).then((next) => {
      if (active) setData(next);
    });
    return () => {
      active = false;
    };
  }, [section, fallback]);

  return data;
}
