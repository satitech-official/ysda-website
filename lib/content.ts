export const whatsappMessage =
  "Hello YSDA, I would like to know more about your football training programs, admissions, events, and registration process.";

export const links = {
  whatsapp: `https://wa.me/919009071697?text=${encodeURIComponent(whatsappMessage)}`,
  instagram: "https://www.instagram.com/ysda_official?igsh=c2F4cGpjZnViMHg=",
  youtube: "https://www.youtube.com/",
  email: "mailto:Info@ysdasports.com",
  phone: "tel:+919009071697",
  maps: "https://www.google.com/maps/search/?api=1&query=Youth%20Sports%20Development%20Academy%20Mhow%20Indore%20Madhya%20Pradesh"
};

export const academyInfo = {
  name: "Youth Sports Development Academy",
  shortName: "YSDA",
  established: "2021",
  location: "Mhow, Indore, Madhya Pradesh",
  organisation: "YSDA Football Academy",
  president: "Mr. Rafik Raja",
  secretary: "Mr. Ramiz Raja",
  tagline: "Developing Talent. Building Character. Creating Champions.",
  about:
    "Youth Sports Development Academy, commonly known as YSDA, is a professionally managed football academy established in 2021 and based in Mhow, Indore, Madhya Pradesh. The academy is fully focused on football development and identifies, trains, guides, and promotes young footballers through structured coaching, technical and tactical training, fitness, goalkeeper development, match preparation, trials, camps, and competitive exposure.",
  belief:
    "YSDA believes that every talented footballer deserves professional guidance, the right platform, fair opportunities, and recognition."
};

export const media = {
  heroVideo: "/ysda-hero-football.mp4",
  heroVideoFallback: "https://videos.pexels.com/video-files/31370183/13386254_3840_2160_24fps.mp4",
  heroPoster: "/ysda-football-team-award.png",
  fallback: "/brand/ysda-logo-white.png",
  heroAction: "/ysda-gallery/team-training.jpg",
  heroTeam: "/ysda-gallery/football-team.jpg",
  heroDevelopment: "/ysda-gallery/hero-development.jpg",
  heroSquad: "/ysda-gallery/hero-squad.jpg",
  heroMatch: "/ysda-gallery/hero-match.jpg",
  heroTraining: "/ysda-gallery/hero-training.jpg",
  footballWarmup: "/ysda-football/replacements/pdf-football-01.jpg",
  footballTeam: "/ysda-gallery/football-team.jpg",
  footballCoach: "/ysda-gallery/football-coach.jpg",
  fitness: "/ysda-gallery/fitness.jpg",
  teamTraining: "/ysda-gallery/team-training.jpg",
  trophy: "/ysda-football-team-award.png",
  leadership: "/ysda-president-rafik-raja.jpg",
  secretaryPortrait: "/ysda-secretary-ramiz-raja.png",
  officials: "/ysda-football/replacements/pdf-football-02.jpg",
  certificates: "/ysda-gallery/hero-squad.jpg",
  awards: "/ysda-football-team-award.png",
  girlsTeam: "/ysda-football/replacements/pdf-football-02.jpg",
  referee: "/ysda-football/replacements/pdf-football-06.jpg",
  schoolProgram: "/ysda-football/replacements/pdf-football-07.jpg",
  trials: "/ysda-gallery/hero-development.jpg",
  community: "/ysda-gallery/team-training.jpg"
};

export const heroImages = [
  { src: media.heroAction, title: "Football training energy", tag: "Training", caption: "Focused on-ball football development at YSDA." },
  { src: media.heroTeam, title: "YSDA football training", tag: "Football Academy", caption: "Football-first coaching, teamwork and player development." },
  { src: media.heroDevelopment, title: "Technical football development", tag: "Player Development", caption: "Structured skill work and football fundamentals." },
  { src: media.heroSquad, title: "Team football environment", tag: "Teamwork", caption: "Disciplined football sessions and team-based learning." },
  { src: media.heroMatch, title: "Football practice", tag: "Match Preparation", caption: "Game-focused practice and competitive readiness." },
  { src: media.heroTraining, title: "Football coaching", tag: "Coaching", caption: "Technical guidance for young footballers." }
];

export const navItems = [
  ["Home", "#home"], ["About Us", "#about"], ["Training", "#sports"],
  ["Football Academy", "#football"], ["Courses", "#programs"], ["Team", "#coaches"],
  ["Events", "#events"], ["Gallery", "#gallery"], ["Achievements", "#achievements"], ["Contact Us", "#contact"]
] as const;

export const heroStats = [
  { label: "Players Connected", value: 5000, suffix: "+" },
  { label: "Football Events", value: 50, suffix: "+" },
  { label: "Clubs and Academies", value: 70, suffix: "+" },
  { label: "Coaches and Officials", value: 150, suffix: "+" }
];

export const valueCards = [
  { title: "Our Mission", text: "To identify and develop talented footballers through professional coaching, structured football training, competitive exposure, and a safe and supportive academy environment." },
  { title: "Our Vision", text: "To become a trusted football-development academy recognised for producing disciplined, confident, skilled, and successful players." },
  { title: "Our Goal", text: "To create a professional and inclusive football ecosystem where young players can learn, train, compete, and grow from grassroots to competitive levels." },
  { title: "Our Belief", text: "Every talented footballer deserves professional guidance, fair opportunities, personal development, and recognition." }
];

export const coreValues = [
  { title: "Discipline", text: "Punctuality, consistency, commitment, and responsible habits are foundations of football development." },
  { title: "Integrity", text: "YSDA promotes honesty, transparency, fairness, and ethical conduct in training, selection, and competition." },
  { title: "Teamwork", text: "Footballers learn to respect teammates, coaches, opponents, officials, and support staff." },
  { title: "Excellence", text: "Every player is motivated to improve technical, tactical, physical, and mental abilities." },
  { title: "Equal Opportunity", text: "YSDA aims to provide fair football opportunities regardless of gender, location, background, or financial circumstances." },
  { title: "Sportsmanship", text: "Winning matters, but respect, character, fair play, and responsible behaviour are equally valuable." },
  { title: "Safety", text: "The physical and emotional safety of players remains a priority during football training, travel, and competition." },
  { title: "Inclusivity", text: "YSDA welcomes footballers from different communities and encourages participation from both girls and boys." }
];

export const objectives = [
  "Identify talented footballers through trials, school programmes, camps, and tournaments.",
  "Provide age-appropriate structured football training under qualified coaches.",
  "Improve ball control, passing, receiving, dribbling, finishing, defending, tactical knowledge, fitness, discipline, and confidence.",
  "Organise football matches, tournaments, camps, trials, and player-development activities.",
  "Conduct inter-school football championships and development programmes.",
  "Support footballers with competition preparation and performance guidance.",
  "Develop football coaches, referees, volunteers, and match officials.",
  "Collaborate with schools, football academies, clubs, coaches, and football organisations.",
  "Promote football awareness, physical fitness, and healthy lifestyles.",
  "Create opportunities for deserving footballers to progress toward bigger competitive platforms."
];

export const sports = [
  { name: "Football Academy", icon: "football", image: media.footballWarmup, description: "Professional football coaching with technical training, tactical awareness, match preparation, fitness, goalkeeper development, and competition exposure.", level: "Foundation to Elite", featured: true, color: "from-blue-600 via-sky-500 to-orange-400" },
  { name: "Grassroots Football", icon: "football", image: media.footballTeam, description: "Age-wise foundation training covering movement, ball familiarity, discipline, teamwork, and confidence.", level: "Foundation", color: "from-green-500 via-sky-500 to-blue-600" },
  { name: "Beginner Football Coaching", icon: "target", image: media.heroTraining, description: "Beginner sessions for passing, receiving, dribbling, first touch, body shape, simple decisions, and regular practice habits.", level: "Beginner", color: "from-orange-500 via-red-500 to-blue-600" },
  { name: "Technical Skills Training", icon: "activity", image: media.footballCoach, description: "Focused football skill work for ball control, scanning, turning, shooting, finishing, defending, and decision-making under pressure.", level: "Skill Development", color: "from-sky-500 via-blue-600 to-green-500" },
  { name: "Goalkeeper Training", icon: "goalkeeper", image: media.heroAction, description: "Position-specific football coaching for handling, catching, positioning, footwork, diving, one-on-one situations, distribution, and communication.", level: "Specialised", color: "from-red-500 via-pink-500 to-orange-400" },
  { name: "Football Fitness and Conditioning", icon: "fitness", image: media.fitness, description: "Football-specific strength, speed, agility, balance, mobility, injury-prevention awareness, and match-readiness conditioning.", level: "All Players", color: "from-yellow-400 via-orange-500 to-red-500" },
  { name: "Match Practice and Tournaments", icon: "tournament", image: media.heroMatch, description: "Small-sided football games, friendly matches, tournament preparation, match temperament, team shape, and competitive exposure.", level: "Competitive", color: "from-orange-500 via-green-500 to-blue-600" },
  { name: "School Football Programme", icon: "school", image: media.schoolProgram, description: "Football coaching for schools, including trials, fitness assessments, inter-house matches, and championship preparation.", level: "School Level", color: "from-sky-400 via-purple-500 to-orange-400" },
  { name: "Personal Football Coaching", icon: "coaching", image: media.trials, description: "Individual or small-group football training designed around a player's position, ability, weaknesses, and development goals.", level: "Custom Plan", color: "from-green-500 via-yellow-400 to-orange-500" }
];

export const footballPrograms = [
  "Ball control", "Passing and receiving", "Dribbling", "Shooting and finishing", "Defending", "Positioning",
  "Tactical awareness", "Small-sided games", "Match preparation", "Football fitness and conditioning",
  "Goalkeeper handling", "Goalkeeper positioning", "Distribution and communication", "Performance evaluation"
];

export const timeline = [
  { week: "Phase 01", title: "Foundation and Movement", text: "Fundamental movement, coordination, balance, discipline, teamwork, and basic football skills." },
  { week: "Phase 02", title: "Technical Development", text: "Age-appropriate football skill development, confidence, game understanding, and regular match practice." },
  { week: "Phase 03", title: "Advanced Performance", text: "Advanced football techniques, tactical development, conditioning, match analysis, and tournament preparation." },
  { week: "Phase 04", title: "Exposure and Pathway", text: "Football competition exposure, fitness monitoring, feedback, school partnerships, and career guidance." }
];

export const whyChoose = [
  "100% football-focused player development", "Professionally managed academy established in 2021",
  "Grassroots to competitive football pathway", "Structured coaching and age-appropriate football training",
  "Safe, ethical and supportive football environment", "Equal football participation encouragement for girls and boys",
  "Talent identification through football trials, camps and matches", "Connections with schools, clubs, academies and football professionals",
  "Competition preparation and performance guidance", "Focus on football discipline, confidence, leadership and sportsmanship"
];

export const coachingPrograms = [
  { title: "Foundation Football Programme", text: "For beginners and young children, focusing on movement, coordination, balance, discipline, teamwork, and basic football skills.", details: ["Age group: Young beginners", "Level: Foundation", "Focus: Football basics"] },
  { title: "Junior Football Development Programme", text: "For school-level footballers, covering technical skills, fitness, game understanding, confidence, and regular match practice.", details: ["Level: Junior development", "Sport: Football", "Schedule: Batch-wise"] },
  { title: "Advanced Football Player Programme", text: "For competitive footballers, focusing on advanced techniques, tactical development, conditioning, match analysis, and tournament preparation.", details: ["Level: Advanced", "Sport: Football", "Focus: Competition"] },
  { title: "Elite Football Performance Programme", text: "For selected high-performing footballers with individual performance plans, advanced training, exposure, fitness monitoring, and career guidance.", details: ["Selection: Performance based", "Level: Elite", "Capacity: Limited batches"] },
  { title: "Technical Football Development", text: "Focused football training covering ball control, passing, receiving, dribbling, shooting, defending, positioning, tactical awareness, small-sided games, and match preparation.", details: ["Sport: Football", "Level: Foundation to Elite", "Venue: Mhow, Indore"] },
  { title: "Goalkeeper Training Programme", text: "Position-specific football goalkeeper development covering handling, catching, positioning, footwork, diving, one-on-one situations, distribution, and communication.", details: ["Sport: Football", "Specialisation: Goalkeeping", "Format: Position-specific"] },
  { title: "School Football Development Programme", text: "Football training and event support for schools, including coaching sessions, inter-house football tournaments, talent identification, and championship preparation.", details: ["For: Schools", "Sport: Football", "Partnerships: Open"] },
  { title: "Holiday and Summer Football Camps", text: "Short-term football camps designed to improve skills, fitness, teamwork, confidence, and match experience during school holidays.", details: ["Sport: Football", "Duration: Short-term", "Registration: Batch-wise"] },
  { title: "Personal Football Training Programme", text: "Individual or small-group football coaching designed around the player's position, ability, weaknesses, and development goals.", details: ["Sport: Football", "Plan: Player-specific", "Enquiry: WhatsApp"] },
  { title: "Football Coaches and Officials Programme", text: "Development workshops for football coaches, referees, volunteers, team managers, and match officials.", details: ["Sport: Football", "Focus: Development", "Format: Workshops"] }
];

export const coaches = [
  { name: "YSDA Football Coaching and Technical Team", role: "Football Coaching Unit", sport: "Football", experience: "Player-development and academy training", qualification: "Verified football coaching credentials published when available", image: media.footballCoach, intro: "YSDA coaches focus on technical skill, tactical awareness, conditioning, match preparation, confidence, discipline, sportsmanship, performance evaluation, and individual feedback." },
  { name: "Football Development Staff", role: "Head Coach / Assistant Coach / Goalkeeping Coach", sport: "Football", experience: "Football-specific development", qualification: "Football coaching credentials published after verification", image: media.footballWarmup, intro: "The football team supports ball control, passing, receiving, dribbling, shooting, defending, positioning, tactical awareness, match preparation, and goalkeeper development." },
  { name: "Football Fitness Staff", role: "Football Fitness Coach / Trainer", sport: "Football conditioning", experience: "Strength, speed, agility and mobility", qualification: "Fitness credentials published after verification", image: media.fitness, intro: "Conditioning sessions support strength, speed, agility, balance, coordination, injury-prevention awareness, and football match readiness." },
  { name: "Football Match Technical Team", role: "Coaches, Referees and Match Officials", sport: "Football", experience: "Training, trials and football events", qualification: "Relevant football credentials published after verification", image: media.teamTraining, intro: "The technical team supports football trials, training sessions, matches, tournaments, camps, player welfare, and competitive exposure." }
];

export const leadershipMessages = [
  { name: "Mr. Rafik Raja", role: "President, Youth Sports Development Academy", image: media.leadership, message: "YSDA was established with a commitment to providing young footballers with professional guidance, structured football training, competitive exposure, and opportunities to achieve their potential. We aim to create meaningful football pathways through disciplined coaching, player development, matches, tournaments, camps, trials, and school football programmes.", closing: "Together, we will develop talent, strengthen grassroots football, and create future champions." },
  { name: "Mr. Ramiz Raja", role: "Secretary, Youth Sports Development Academy", image: media.secretaryPortrait, message: "YSDA is committed to creating an organised, transparent, and player-focused football environment. We support the planning and coordination of football training, tournaments, school programmes, camps, trials, and competitive events.", closing: "We welcome schools, coaches, footballers, academies, clubs, sponsors, and football organisations to join our mission of strengthening grassroots football." }
];

export const events = [
  { title: "YSDA Football Coach Development Course", date: "2026-08-20", endDate: "2026-08-25", time: "Course schedule to be announced", venue: "Mhow, Indore, Madhya Pradesh", sport: "Football Coaching", age: "Aspiring football coaches and trainers", status: "Upcoming", type: "Football Development Course", deadline: "Contact academy for registration", fee: "Contact academy", documents: "Photo ID and applicable football coaching details", image: media.footballCoach, description: "A football-focused development course for aspiring coaches and trainers. Contact YSDA for registration, eligibility, schedule, fee, and required documents." },
  { title: "Regular YSDA Football Training Batches", date: "2026-07-19", time: "Morning and evening batches", venue: "Mhow, Indore, Madhya Pradesh", sport: "Football", age: "Beginner to competitive footballers", status: "Ongoing", type: "Football Training", deadline: "Open enquiry", fee: "Contact academy", documents: "Player details and age proof may be required", image: media.heroTraining, description: "Ongoing YSDA football admissions and training covering regular practice, technical development, fitness, match preparation, and academy activities." },
  { title: "Football Memorial Match Programme - Mhow", date: "2026-05-27", endDate: "2026-05-30", time: "Completed", venue: "Mhow, Indore, Madhya Pradesh", sport: "Football", age: "Participating football categories", status: "Completed", type: "Football Event", deadline: "Closed", fee: "Closed", documents: "Event records to be verified", image: media.heroMatch, description: "Completed football event record featuring match participation, team activity, and academy competition experience." },
  { title: "Goa Football Invitational Exposure", date: "2026-05-04", endDate: "2026-05-09", time: "Completed", venue: "Goa", sport: "Football", age: "Football team categories", status: "Completed", type: "Football Invitational", deadline: "Closed", fee: "Closed", documents: "Team and event records to be verified", image: media.footballTeam, description: "Football invitational exposure for player development, team experience, and competitive learning." },
  { title: "International Football Exposure - Pokhara", date: "2025-12-31", endDate: "2026-01-03", time: "Completed", venue: "Pokhara, Nepal", sport: "Football", age: "Football participation categories", status: "Completed", type: "International Football Exposure", deadline: "Closed", fee: "Closed", documents: "Participation records to be verified", image: media.heroAction, description: "International football exposure focused on competitive experience, teamwork, confidence, and player development." }
];

const galleryBase = [
  ["Football Training Session", "Training Sessions", media.heroTraining, "YSDA Football Training", "Structured football coaching and player development."],
  ["Ball Control Practice", "Training Sessions", media.footballWarmup, "Technical Football Session", "Football fundamentals, touch and ball-control development."],
  ["Football Match Practice", "Match Action", media.heroMatch, "YSDA Match Practice", "Competitive football practice and team-building experience."],
  ["Football Team Training", "Team Photographs", media.footballTeam, "YSDA Football Team", "Players training together in a football-focused academy environment."],
  ["Football Skills Development", "Football", media.heroDevelopment, "Football Development Programme", "Passing, receiving, dribbling, movement, and game awareness."],
  ["Goalkeeper Development", "Football", media.heroAction, "Goalkeeper Training", "Position-specific football goalkeeper work and communication."],
  ["Football Fitness Session", "Football Camps", media.fitness, "Football Conditioning", "Football-specific fitness, agility, speed, mobility, and readiness."],
  ["School Football Programme", "School Programmes", media.schoolProgram, "School Football Development", "School-level football coaching, trials, and match preparation."],
  ["Football Player Trials", "Player Trials", media.trials, "YSDA Football Trials", "Football talent identification and player assessment."],
  ["Football Coaches and Officials", "Coaches and Officials", media.officials, "YSDA Football Technical Team", "Football coaches and officials supporting structured development."],
  ["Football Achievement Moment", "Awards and Trophies", media.awards, "YSDA Football Achievement", "Recognition of football effort, participation, and development."],
  ["Grassroots Football Activity", "Community Activities", media.community, "YSDA Grassroots Football", "Football awareness and inclusive youth participation."]
] as const;

export const gallery = galleryBase.map(([title, category, image, eventName, caption], index) => ({
  title, category, image, eventName, date: "2026", location: index % 2 === 0 ? "Mhow, Indore" : "YSDA Football Academy", caption, video: undefined as string | undefined
}));

export const videoHighlights = [
  { title: "YSDA football development highlights", tag: "Football", image: media.footballTeam, video: media.heroVideo },
  { title: "Football training and fitness sessions", tag: "Training", image: media.footballWarmup, video: media.heroVideo },
  { title: "Football match and academy highlights", tag: "Football", image: media.teamTraining, video: media.heroVideo }
];

export const news = [
  { title: "YSDA Football Admissions Open", date: "2026-07-19", category: "Admissions", image: media.footballWarmup, summary: "Admissions are open for selected YSDA football training programmes with professional coaching, regular practice, fitness development, and match exposure." },
  { title: "Upcoming Football Tournament Registrations", date: "2026-07-18", category: "Events", image: media.teamTraining, summary: "Footballers, teams, schools, clubs, and academies can enquire for upcoming football tournaments, trials, camps, and match opportunities." },
  { title: "School Football Partnerships", date: "2026-07-15", category: "Partnerships", image: media.schoolProgram, summary: "YSDA welcomes collaborations with schools and football academies interested in strengthening grassroots football." },
  { title: "Football Player Trial Updates", date: "2026-07-12", category: "Trials", image: media.trials, summary: "Football trial reporting times, eligibility conditions, and player requirements will be published through official YSDA channels." },
  { title: "Football Training Schedule Updates", date: "2026-07-10", category: "Training", image: media.fitness, summary: "Changes to football training timings, venues, batches, holidays, or match schedules will be announced through official channels." },
  { title: "Football Match Results", date: "2026-06-01", category: "Results", image: media.trophy, summary: "Verified football match results, award winners, photographs, match reports, and player achievements will be published after events." },
  { title: "Football Achievement Recognition", date: "2026-05-31", category: "Awards", image: media.awards, summary: "YSDA recognises football players, coaches, teams, officials, and volunteers for participation, discipline, and achievement." }
];

export const achievements = [
  { value: 9, suffix: "+", label: "Football training modules" },
  { value: 50, suffix: "+", label: "Football events and matches" },
  { value: 10, suffix: "+", label: "Football network states" },
  { value: 70, suffix: "+", label: "Football clubs and academies connected" },
  { value: 40, suffix: "+", label: "Schools associated with football activity" },
  { value: 150, suffix: "+", label: "Football coaches and officials connected" },
  { value: 30, suffix: "+", label: "Football competition exposures" },
  { value: 5000, suffix: "+", label: "Football players connected" }
];

export const achievementTimeline = [
  { year: "2021", title: "YSDA established", text: "Youth Sports Development Academy was established in Mhow, Indore with a clear focus on football development." },
  { year: "2021-2026", title: "Grassroots football activity expanded", text: "Football training, camps, school programmes, matches, trials, and player-development activity strengthened the academy pathway." },
  { year: "YSDA Football", title: "Competitive football exposure", text: "YSDA continues building football opportunities through structured coaching, match practice, tournaments, and player-development programmes." }
];

export const achievementCards = [
  { title: "Football Competition Participation", category: "Football Exposure", image: media.trophy, text: "YSDA footballers receive opportunities to develop through structured training and competitive football experiences." },
  { title: "Football Player Development", category: "Football Academy", image: media.footballTeam, text: "YSDA focuses on technical quality, tactical awareness, fitness, discipline, teamwork, and match readiness." },
  { title: "School Football Development", category: "School Football", image: media.schoolProgram, text: "YSDA encourages school-level football through coaching, matches, trials, and player-development programmes." }
];

export const certificateCategories = [
  "YSDA academy documents", "Football coaching licences", "Football coaching certificates", "Football referee and official certificates",
  "Football tournament participation certificates", "Football event documents", "School football partnership records",
  "Football appreciation certificates", "Football player achievement certificates", "Football awards and recognition records"
];

export const successStories = [
  { name: "Football Competition Pathway", sport: "Football Achievement Gallery", achievement: "Competitive football opportunities", image: media.trophy, journey: "YSDA contributes to grassroots football by preparing footballers for match and competition pathways through structured development.", testimonial: "Football progress is built through regular training, discipline, match experience, and feedback." },
  { name: "Football Player Growth", sport: "Football Achievement Gallery", achievement: "Technical and tactical development", image: media.footballTeam, journey: "YSDA footballers work on technique, football intelligence, fitness, confidence, and teamwork.", testimonial: "Consistent football training creates stronger habits and better match decisions." },
  { name: "School Football Development", sport: "Football Achievement Gallery", achievement: "School participation and talent identification", image: media.schoolProgram, journey: "YSDA supports school football programmes and player-identification activities to increase football participation.", testimonial: "School football creates an important pathway for young players to learn and compete." }
];

export const testimonials = [
  { name: "Football Player Community", role: "Footballers", image: media.footballTeam, rating: 5, text: "YSDA focuses on professional football guidance, structured training, fitness, confidence, teamwork, and competitive exposure." },
  { name: "Parent Community", role: "Parents", image: media.teamTraining, rating: 5, text: "The academy aims to provide a safe, supportive, transparent, and player-focused football environment." },
  { name: "School Football Partners", role: "Schools", image: media.schoolProgram, rating: 5, text: "YSDA welcomes school partnerships for football training, matches, trials, and talent identification." },
  { name: "Football Coaching Community", role: "Coaches and officials", image: media.officials, rating: 5, text: "YSDA works with football coaches and officials to strengthen grassroots player development." }
];

export const partners = [
  "YSDA Football Academy", "40+ School Football Connections", "70+ Football Clubs and Academies",
  "150+ Football Coaches and Officials", "10+ State Football Network", "Football Event and Training Partners"
];

export const galleryCategories = [
  "All", "Training Sessions", "Match Action", "Football", "Football Camps", "Team Photographs",
  "Player Trials", "Coaches and Officials", "School Programmes", "Awards and Trophies", "Community Activities"
];

export const newsCategories = ["All", "Admissions", "Events", "Partnerships", "Trials", "Training", "Results", "Awards"];
