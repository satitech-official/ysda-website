const photo = (id: number, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const whatsappMessage =
  "Hello YSDA, I would like to know more about your sports training programs.";

export const links = {
  whatsapp: `https://wa.me/919009071697?text=${encodeURIComponent(whatsappMessage)}`,
  instagram:
    "https://www.instagram.com/youth_sports_development_india?igsh=b2xpa2E0a3htbmZk",
  youtube: "https://youtube.com/@ysdfi_india?si=pnIkmhD_cx8Ki-I4",
  email: "mailto:Info@ysdasports.com",
  phone: "tel:+919009071697",
  maps: "https://www.google.com/maps/search/?api=1&query=Youth%20Sports%20Development%20Academy%20Indore%20Madhya%20Pradesh"
};

export const media = {
  heroVideo: "https://videos.pexels.com/video-files/31370183/13386254_3840_2160_24fps.mp4",
  heroPoster:
    "https://images.pexels.com/videos/31370183/pexels-photo-31370183.jpeg?auto=compress&cs=tinysrgb&w=1800",
  fallback: "/brand/ysda-logo-white.png",
  footballWarmup: photo(34135632, 1600),
  footballTeam: photo(30726603, 1600),
  footballCoach: photo(31649722, 1400),
  cricket: photo(17628651, 1200),
  cricketWide: photo(28758998, 1400),
  basketball: photo(37080042, 1400),
  basketballCourt: photo(974502, 1400),
  volleyball: photo(6203581, 1400),
  badminton: photo(8007500, 1400),
  athletics: photo(15292660, 1400),
  kabaddi: photo(10347115, 1400),
  skating: photo(30933662, 1400),
  skatingAction: photo(16767210, 1200),
  fitness: photo(1552242, 1400),
  teamTraining: photo(3768916, 1400),
  trophy: photo(7005569, 1200)
};

export const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Sports", "#sports"],
  ["Football Academy", "#football"],
  ["Coaches", "#coaches"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["News", "#news"],
  ["Achievements", "#achievements"],
  ["Contact Us", "#contact"]
] as const;

export const heroStats = [
  { label: "Trained Players", value: 500, suffix: "+" },
  { label: "Sports Programs", value: 10, suffix: "+" },
  { label: "Events Conducted", value: 50, suffix: "+" },
  { label: "Professional Coaches", value: 12, suffix: "+" }
];

export const valueCards = [
  {
    title: "Our Vision",
    text: "To become Indore's most trusted youth sports ecosystem where talent receives professional coaching, discipline, exposure, and a pathway to higher competition."
  },
  {
    title: "Our Mission",
    text: "To deliver structured football and multi-sports training with safe coaching methods, fitness development, tournament readiness, and personal growth."
  },
  {
    title: "Our Values",
    text: "Respect, teamwork, consistency, leadership, fairness, hard work, and confidence guide every session, match, camp, and academy interaction."
  },
  {
    title: "Our Objective",
    text: "To identify young talent, build strong fundamentals, create competitive opportunities, and help athletes grow on and off the field."
  }
];

export const sports = [
  {
    name: "Football",
    icon: "football",
    image: media.footballWarmup,
    description:
      "Grassroots to advanced technical training, match practice, conditioning, tactical awareness, and tournament preparation.",
    level: "Beginner to Advanced",
    featured: true,
    color: "from-blue-600 via-sky-500 to-orange-400"
  },
  {
    name: "Cricket",
    icon: "cricket",
    image: media.cricket,
    description:
      "Batting, bowling, fielding, fitness, nets, match temperament, and age-group competition exposure.",
    level: "Foundation to Competitive",
    color: "from-green-500 via-sky-500 to-blue-600"
  },
  {
    name: "Basketball",
    icon: "basketball",
    image: media.basketball,
    description:
      "Ball handling, shooting, movement, court awareness, agility, team play, and confidence under pressure.",
    level: "School to Club",
    color: "from-orange-500 via-red-500 to-blue-600"
  },
  {
    name: "Volleyball",
    icon: "volleyball",
    image: media.volleyball,
    description:
      "Serving, receiving, setting, attacking, defensive movement, communication, and game rhythm.",
    level: "Beginner to Team",
    color: "from-sky-500 via-blue-600 to-green-500"
  },
  {
    name: "Badminton",
    icon: "badminton",
    image: media.badminton,
    description:
      "Footwork, racket control, shot selection, court coverage, speed, and singles or doubles tactics.",
    level: "Foundation to Performance",
    color: "from-red-500 via-pink-500 to-orange-400"
  },
  {
    name: "Athletics",
    icon: "athletics",
    image: media.athletics,
    description:
      "Sprint mechanics, endurance, jumps, throws, flexibility, power, and event-specific preparation.",
    level: "Age-Group Training",
    color: "from-yellow-400 via-orange-500 to-red-500"
  },
  {
    name: "Kabaddi",
    icon: "kabaddi",
    image: media.kabaddi,
    description:
      "Strength, agility, raiding basics, defensive chains, mat movement, confidence, and team discipline.",
    level: "Youth Development",
    color: "from-orange-500 via-green-500 to-blue-600"
  },
  {
    name: "Skating",
    icon: "skating",
    image: media.skating,
    description:
      "Balance, speed control, safe movement, turns, coordination, confidence, and beginner-friendly drills.",
    level: "Starter to Skill",
    color: "from-sky-400 via-purple-500 to-orange-400"
  },
  {
    name: "Fitness and Conditioning",
    icon: "fitness",
    image: media.fitness,
    description:
      "Strength, mobility, speed, endurance, recovery habits, injury prevention, and athlete-specific conditioning.",
    level: "All Athletes",
    color: "from-green-500 via-yellow-400 to-orange-500"
  }
];

export const footballPrograms = [
  "Grassroots football training",
  "Beginner football coaching",
  "Advanced player development",
  "Technical skill training",
  "Passing and receiving",
  "Dribbling and ball control",
  "Shooting and finishing",
  "Tactical awareness",
  "Small-sided games",
  "Match practice",
  "Goalkeeping training",
  "Fitness and conditioning",
  "Tournament preparation",
  "Player performance assessment"
];

export const timeline = [
  {
    week: "Phase 01",
    title: "Foundation and Body Shape",
    text: "Posture, ball familiarity, movement, warm-up habits, simple passing lanes, and safe training rhythm."
  },
  {
    week: "Phase 02",
    title: "Technique Under Pressure",
    text: "First touch, dribbling patterns, passing speed, receiving angles, finishing basics, and 1v1 confidence."
  },
  {
    week: "Phase 03",
    title: "Game Intelligence",
    text: "Small-sided games, transition moments, scanning, support runs, defensive shape, and role awareness."
  },
  {
    week: "Phase 04",
    title: "Competition Readiness",
    text: "Match practice, tactical review, player assessment, tournament preparation, leadership, and recovery."
  }
];

export const whyChoose = [
  "Qualified and experienced coaches",
  "Professional coaching methods",
  "Player-focused training",
  "Modern training equipment",
  "Safe training environment",
  "Match and tournament exposure",
  "Physical fitness development",
  "Technical and tactical development",
  "Discipline and leadership",
  "Individual player assessment"
];

export const coachingPrograms = [
  {
    title: "Beginner Development Program",
    text: "Confidence-building sessions for new athletes with movement, balance, basic techniques, and safe game habits."
  },
  {
    title: "Grassroots Training Program",
    text: "Age-appropriate coaching that develops fundamentals, discipline, coordination, and love for sport."
  },
  {
    title: "Intermediate Player Program",
    text: "Progressive skill development, competitive drills, match understanding, and improved fitness routines."
  },
  {
    title: "Advanced Performance Program",
    text: "High-intensity technical and tactical training for players preparing for trials, leagues, and tournaments."
  },
  {
    title: "Football Skill Development",
    text: "Focused football modules covering dribbling, receiving, finishing, passing, defending, and game intelligence."
  },
  {
    title: "Goalkeeper Training",
    text: "Handling, diving, positioning, distribution, reaction speed, communication, and match-specific goalkeeper work."
  },
  {
    title: "Holiday Sports Camps",
    text: "Structured seasonal camps combining fitness, skills, friendly competitions, teamwork, and fun challenges."
  },
  {
    title: "School Sports Training",
    text: "Custom school programs for sports days, team preparation, physical education support, and inter-school events."
  },
  {
    title: "Personal Coaching",
    text: "One-to-one or small group training for targeted improvement, personal assessment, and confidence building."
  },
  {
    title: "Tournament Preparation",
    text: "Match scenarios, conditioning, tactical planning, set pieces, team roles, and performance review before events."
  }
];

export const coaches = [
  {
    name: "Aarav Sharma",
    role: "Head Football Coach",
    sport: "Football Development",
    experience: "9+ years",
    qualification: "AIFF grassroots licensed coach",
    image: photo(936075, 900),
    intro:
      "Leads YSDA's football pathway with a focus on first touch, confidence, team habits, and competition readiness."
  },
  {
    name: "Meera Rajput",
    role: "Fitness and Conditioning Coach",
    sport: "Strength, speed and mobility",
    experience: "7+ years",
    qualification: "Certified youth conditioning specialist",
    image: photo(3768916, 900),
    intro:
      "Builds safe athlete conditioning plans that improve speed, endurance, recovery, and movement quality."
  },
  {
    name: "Rohan Verma",
    role: "Multi-Sports Coach",
    sport: "Cricket, athletics and camps",
    experience: "8+ years",
    qualification: "School sports program coordinator",
    image: photo(220453, 900),
    intro:
      "Coordinates multi-sports sessions, talent identification, school programs, and event training modules."
  },
  {
    name: "Nisha Khan",
    role: "Youth Skills Coach",
    sport: "Badminton, skating and beginners",
    experience: "6+ years",
    qualification: "Youth sports safety trained",
    image: photo(774909, 900),
    intro:
      "Specializes in beginner confidence, discipline, skill foundations, and positive training environments."
  }
];

export const events = [
  {
    title: "YSDA Indore Youth Football Cup",
    date: "2026-07-12",
    time: "7:00 AM",
    venue: "Indore Sports Ground",
    sport: "Football",
    age: "U-10, U-13, U-16",
    status: "Upcoming",
    image: media.footballTeam,
    description:
      "A high-energy academy tournament with group games, player awards, coach feedback, and parent-friendly scheduling."
  },
  {
    title: "Football Trials and Assessment Day",
    date: "2026-07-20",
    time: "6:30 AM",
    venue: "YSDA Training Field, Indore",
    sport: "Football",
    age: "U-12 to U-18",
    status: "Upcoming",
    image: media.footballWarmup,
    description:
      "Technical, tactical, and fitness assessment for players looking to enter the football development pathway."
  },
  {
    title: "Monsoon Multi-Sports Camp",
    date: "2026-08-05",
    time: "5:00 PM",
    venue: "YSDA Partner School Campus",
    sport: "Multi-Sports",
    age: "8 to 16 years",
    status: "Upcoming",
    image: media.teamTraining,
    description:
      "Rotational football, cricket, basketball, athletics, fitness, leadership, and team-building sessions."
  },
  {
    title: "Summer Fitness and Skills Camp",
    date: "2026-06-21",
    time: "6:00 AM",
    venue: "Indore Outdoor Arena",
    sport: "Fitness",
    age: "10 to 17 years",
    status: "Ongoing",
    image: media.fitness,
    description:
      "A focused conditioning block with sprint mechanics, mobility, strength basics, recovery, and sport-specific drills."
  },
  {
    title: "Inter-Academy Friendly Match Day",
    date: "2026-05-28",
    time: "7:30 AM",
    venue: "YSDA Football Ground",
    sport: "Football",
    age: "U-14",
    status: "Completed",
    image: media.footballCoach,
    description:
      "Friendly match exposure for academy players with match feedback, teamwork review, and sportsmanship awards."
  },
  {
    title: "School Sports Leadership Workshop",
    date: "2026-04-18",
    time: "10:00 AM",
    venue: "Indore School Auditorium",
    sport: "Workshop",
    age: "Students and PE teachers",
    status: "Completed",
    image: media.trophy,
    description:
      "A workshop on discipline, leadership, tournament readiness, injury awareness, and building a sports culture."
  }
];

export const gallery = [
  { title: "Football warm-up intensity", category: "Football", image: media.footballWarmup },
  { title: "Match day teamwork", category: "Football", image: media.footballTeam },
  { title: "Cricket batting drill", category: "Cricket", image: media.cricket },
  { title: "Basketball shooting focus", category: "Basketball", image: media.basketball },
  { title: "Volleyball teamwork", category: "Volleyball", image: media.volleyball },
  { title: "Badminton court movement", category: "Badminton", image: media.badminton },
  { title: "Track endurance training", category: "Athletics", image: media.athletics },
  { title: "Kabaddi strength session", category: "Training", image: media.kabaddi },
  { title: "Skating confidence", category: "Training", image: media.skating },
  { title: "Fitness and conditioning", category: "Training", image: media.fitness },
  { title: "Trophy celebration", category: "Events", image: media.trophy },
  { title: "Academy video highlight", category: "Videos", image: media.heroPoster, video: media.heroVideo }
];

export const videoHighlights = [
  {
    title: "Football match highlights",
    tag: "Football",
    image: media.footballTeam,
    video: media.heroVideo
  },
  {
    title: "Training session energy",
    tag: "Training",
    image: media.footballWarmup,
    video: media.heroVideo
  },
  {
    title: "Coach guidance and assessment",
    tag: "Coaching",
    image: media.footballCoach,
    video: media.heroVideo
  }
];

export const news = [
  {
    title: "Football trials open for July development batch",
    date: "2026-06-18",
    category: "Football",
    image: media.footballWarmup,
    summary:
      "YSDA is accepting registrations for technical assessment, age-group placement, and the next football training batch."
  },
  {
    title: "Monsoon multi-sports camp schedule announced",
    date: "2026-06-14",
    category: "Camps",
    image: media.teamTraining,
    summary:
      "The upcoming camp will include football, cricket, basketball, athletics, fitness, leadership, and teamwork modules."
  },
  {
    title: "U-14 football squad completes friendly match block",
    date: "2026-06-08",
    category: "Results",
    image: media.footballTeam,
    summary:
      "Players gained match exposure, positional feedback, and confidence through inter-academy competitive fixtures."
  },
  {
    title: "Fitness assessment week begins at YSDA",
    date: "2026-05-31",
    category: "Training",
    image: media.fitness,
    summary:
      "Coaches are tracking speed, agility, endurance, flexibility, and recovery habits for individual player plans."
  },
  {
    title: "School sports collaboration program expands",
    date: "2026-05-22",
    category: "Academy",
    image: media.trophy,
    summary:
      "YSDA is building school partnerships for sports days, team training, workshops, and talent identification."
  },
  {
    title: "Young athletes recognized for discipline and teamwork",
    date: "2026-05-12",
    category: "Achievements",
    image: media.cricketWide,
    summary:
      "Monthly recognition celebrates consistency, respect, effort, leadership, and improvement across sports."
  }
];

export const achievements = [
  { value: 18, suffix: "+", label: "Tournament podium finishes" },
  { value: 120, suffix: "+", label: "Players assessed this season" },
  { value: 24, suffix: "+", label: "School and academy collaborations" },
  { value: 50, suffix: "+", label: "Events and camps conducted" }
];

export const achievementTimeline = [
  {
    year: "2024",
    title: "Grassroots pathway launched",
    text: "Structured beginner and age-group training modules were introduced across football and multi-sports."
  },
  {
    year: "2025",
    title: "Competitive exposure expanded",
    text: "Friendly matches, school tournaments, and sports camps created regular development opportunities."
  },
  {
    year: "2026",
    title: "Football academy pathway strengthened",
    text: "Technical assessment, position-specific sessions, and tournament preparation became core program pillars."
  }
];

export const successStories = [
  {
    name: "Devansh Patel",
    sport: "Football",
    achievement: "Selected for inter-school district squad",
    image: media.footballTeam,
    journey:
      "Started as a beginner winger, improved first touch and confidence through small-sided games and match reviews.",
    testimonial:
      "YSDA helped me understand the game, not just play faster. I feel calmer during matches now."
  },
  {
    name: "Anaya Joshi",
    sport: "Athletics",
    achievement: "Improved sprint timing and relay selection",
    image: media.athletics,
    journey:
      "Focused on running mechanics, warm-up discipline, strength basics, and consistent attendance.",
    testimonial:
      "The coaches made training clear and exciting. I learned how to prepare like an athlete."
  },
  {
    name: "Kabir Khan",
    sport: "Cricket",
    achievement: "School team batting opener",
    image: media.cricket,
    journey:
      "Developed footwork, shot selection, fitness, and patience through regular cricket and conditioning sessions.",
    testimonial:
      "The academy gave me confidence and helped me handle pressure in real matches."
  }
];

export const testimonials = [
  {
    name: "Ritika Malhotra",
    role: "Parent",
    image: photo(774909, 600),
    rating: 5,
    text:
      "YSDA brings discipline and joy together. My son waits for football sessions and has become more confident at school too."
  },
  {
    name: "Arjun Singh",
    role: "Football Player",
    image: photo(220453, 600),
    rating: 5,
    text:
      "The coaches explain small details like body shape and first touch. Training feels professional and motivating."
  },
  {
    name: "Priya Nair",
    role: "School Coordinator",
    image: photo(415829, 600),
    rating: 5,
    text:
      "Their sports camp was organized, energetic, and safe. Students enjoyed the coaching and learned real teamwork."
  },
  {
    name: "Vikram Jain",
    role: "Coach",
    image: photo(91227, 600),
    rating: 5,
    text:
      "YSDA focuses on long-term development, not shortcuts. The player assessments and session design are thoughtful."
  }
];

export const partners = [
  "Indore Schools Network",
  "Youth Fitness Forum",
  "MP Sports Community",
  "Grassroots Football India",
  "Academy Events Circle",
  "Student Athlete Support"
];

export const galleryCategories = [
  "All",
  "Football",
  "Cricket",
  "Basketball",
  "Volleyball",
  "Badminton",
  "Athletics",
  "Events",
  "Training",
  "Videos"
];

export const newsCategories = ["All", "Football", "Camps", "Results", "Training", "Academy", "Achievements"];
