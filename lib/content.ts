const photo = (id: number, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const ysdfi = (file: string) => `/ysdfi-gallery/${file}`;

export const whatsappMessage =
  "Hello YSDA, I would like to know more about your football training programs, admissions, events, and registration process.";

export const links = {
  whatsapp: `https://wa.me/919009071697?text=${encodeURIComponent(whatsappMessage)}`,
  instagram:
    "https://www.instagram.com/ysda_official?igsh=c2F4cGpjZnViMHg=",
  youtube: "https://youtube.com/@ysdfi_india?si=pnIkmhD_cx8Ki-I4",
  email: "mailto:Info@ysdasports.com",
  phone: "tel:+919009071697",
  maps: "https://www.google.com/maps/search/?api=1&query=Youth%20Sports%20Development%20Academy%20Mhow%20Indore%20Madhya%20Pradesh"
};

export const academyInfo = {
  name: "Youth Sports Development Academy",
  shortName: "YSDA",
  established: "2021",
  location: "Mhow, Indore, Madhya Pradesh",
  organisation: "Youth Sports Development Federation of India - YSDFI",
  president: "Mr. Rafik Raja",
  secretary: "Mr. Ramiz Raja",
  tagline: "Developing Talent. Building Character. Creating Champions.",
  about:
    "Youth Sports Development Academy, commonly known as YSDA, is a professionally managed football academy established in 2021 and based in Mhow, Indore, Madhya Pradesh. YSDA works as a football-development academy associated with the Youth Sports Development Federation of India - YSDFI. The academy identifies, trains, guides, and promotes talented young footballers through structured coaching, competitive exposure, and opportunities to participate in school, district, state, national, and international football events.",
  belief:
    "YSDA believes that every talented player deserves professional guidance, the right platform, fair opportunities, and recognition."
};

export const media = {
  heroVideo: "/ysda-hero-football.mp4",
  heroVideoFallback: "https://videos.pexels.com/video-files/31370183/13386254_3840_2160_24fps.mp4",
  heroPoster: "/ysda-football-team-award.png",
  fallback: "/brand/ysda-logo-white.png",
  heroAction: ysdfi("ysdfi-135-gallery2-p18.jpg"),
  heroTeam: ysdfi("ysdfi-088-gallery3-p24.jpg"),
  heroDevelopment: ysdfi("ysdfi-141-gallery2-p24.jpg"),
  heroSquad: ysdfi("ysdfi-089-gallery3-p25.jpg"),
  heroMatch: ysdfi("ysdfi-136-gallery2-p19.jpg"),
  heroTraining: ysdfi("ysdfi-140-gallery2-p23.jpg"),
  footballWarmup: ysdfi("ysdfi-144-gallery2-p27.jpg"),
  footballTeam: ysdfi("ysdfi-132-gallery2-p15.jpg"),
  footballCoach: ysdfi("ysdfi-107-gallery3-p43.jpg"),
  fitness: ysdfi("ysdfi-106-gallery3-p42.jpg"),
  teamTraining: ysdfi("ysdfi-113-gallery3-p49.jpg"),
  trophy: ysdfi("ysdfi-039-gallery4-p39.jpg"),
  leadership: "/ysda-president-rafik-raja.jpg",
  secretaryPortrait: "/ysda-secretary-ramiz-raja.png",
  officials: ysdfi("ysdfi-005-gallery4-p05.jpg"),
  certificates: ysdfi("ysdfi-025-gallery4-p25.jpg"),
  awards: ysdfi("ysdfi-032-gallery4-p32.jpg"),
  girlsTeam: ysdfi("ysdfi-034-gallery4-p34.jpg"),
  referee: ysdfi("ysdfi-006-gallery4-p06.jpg"),
  schoolProgram: ysdfi("ysdfi-197-gallery1-p03.jpg"),
  trials: ysdfi("ysdfi-199-gallery1-p05.jpg"),
  community: ysdfi("ysdfi-202-gallery1-p08.jpg")
};

export const heroImages = [
  {
    src: media.heroAction,
    title: "Football match energy",
    tag: "Match Action",
    caption: "Young footballers competing with focus and intensity."
  },
  {
    src: media.heroTeam,
    title: "YSDA football squad",
    tag: "Team Identity",
    caption: "A clean academy team portrait with strong football identity."
  },
  {
    src: media.heroDevelopment,
    title: "Football development team",
    tag: "Football Pathway",
    caption: "Players and mentors representing focused football development."
  },
  {
    src: media.heroSquad,
    title: "Tournament-ready football unit",
    tag: "Competition Exposure",
    caption: "Organised teams, officials, and match-day discipline."
  },
  {
    src: media.heroMatch,
    title: "Live football environment",
    tag: "Academy Impact",
    caption: "Training and match moments with real on-ground energy."
  },
  {
    src: media.heroTraining,
    title: "Skill-focused football training",
    tag: "Player Development",
    caption: "Structured practice, ball control, and tactical awareness."
  }
];

export const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Training", "#sports"],
  ["Football Academy", "#football"],
  ["Courses", "#programs"],
  ["Team", "#coaches"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Achievements", "#achievements"],
  ["Contact Us", "#contact"]
] as const;

export const heroStats = [
  { label: "Players Connected", value: 5000, suffix: "+" },
  { label: "Championships and Events", value: 50, suffix: "+" },
  { label: "Clubs, Units and Academies", value: 70, suffix: "+" },
  { label: "Coaches and Officials", value: 150, suffix: "+" }
];

export const valueCards = [
  {
    title: "Our Mission",
    text:
      "To identify and develop talented footballers by providing professional coaching, structured training, competitive exposure, and a safe and supportive football environment."
  },
  {
    title: "Our Vision",
    text:
      "To become one of India's most trusted football-development academies, recognised for producing disciplined, confident, skilled, and successful players."
  },
  {
    title: "Our Goal",
    text:
      "To create a professional and inclusive football ecosystem where young players can learn, train, compete, and grow from grassroots to competitive levels."
  },
  {
    title: "Our Belief",
    text:
      "Every talented player deserves professional guidance, the right platform, fair opportunities, personal development, and recognition."
  }
];

export const coreValues = [
  {
    title: "Discipline",
    text: "Punctuality, consistency, commitment, and responsible habits are treated as foundations of football success."
  },
  {
    title: "Integrity",
    text: "YSDA promotes honesty, transparency, fairness, and ethical conduct in training, selection, and competition."
  },
  {
    title: "Teamwork",
    text: "Athletes learn to respect teammates, coaches, opponents, officials, and support staff."
  },
  {
    title: "Excellence",
    text: "Every athlete is motivated to improve physical, technical, tactical, and mental abilities."
  },
  {
    title: "Equal Opportunity",
    text: "YSDA aims to provide fair opportunities regardless of gender, location, background, or financial circumstances."
  },
  {
    title: "Sportsmanship",
    text: "Winning matters, but respect, character, and responsible behaviour are equally valuable."
  },
  {
    title: "Safety",
    text: "The physical and emotional safety of players remains a priority during training, travel, and competition."
  },
  {
    title: "Inclusivity",
    text: "YSDA welcomes players from different communities and encourages participation from both girls and boys."
  }
];

export const objectives = [
  "Identify talented players through trials, school programmes, camps, and tournaments.",
  "Provide age-appropriate structured training under qualified coaches.",
  "Improve technical skills, tactical knowledge, fitness, discipline, and confidence.",
  "Organise local, district, state, national, and international football events.",
  "Conduct inter-school football championships and player-development programmes.",
  "Support athletes with competition preparation and performance guidance.",
  "Develop football coaches, referees, volunteers, and event-management professionals.",
  "Collaborate with schools, football academies, clubs, government organisations, and football bodies.",
  "Promote football awareness, physical fitness, and healthy lifestyles.",
  "Create opportunities for deserving footballers to participate on bigger competitive platforms."
];

export const sports = [
  {
    name: "Football Academy",
    icon: "football",
    image: media.footballWarmup,
    description:
      "YSDA focuses on professional football coaching with technical training, tactical awareness, match preparation, fitness, goalkeeper development, and tournament exposure.",
    level: "Foundation to Elite",
    featured: true,
    color: "from-blue-600 via-sky-500 to-orange-400"
  },
  {
    name: "Grassroots Football",
    icon: "football",
    image: media.footballTeam,
    description:
      "Age-wise foundation training for young footballers covering movement, ball familiarity, discipline, teamwork, and confidence.",
    level: "Foundation",
    color: "from-green-500 via-sky-500 to-blue-600"
  },
  {
    name: "Beginner Football Coaching",
    icon: "target",
    image: media.heroTraining,
    description:
      "Beginner-friendly sessions for passing, receiving, dribbling, first touch, body shape, simple decisions, and regular practice habits.",
    level: "Beginner",
    color: "from-orange-500 via-red-500 to-blue-600"
  },
  {
    name: "Technical Skills Training",
    icon: "activity",
    image: media.footballCoach,
    description:
      "Focused football skill work for ball control, scanning, turning, shooting, finishing, defending, and decision-making under pressure.",
    level: "Skill Development",
    color: "from-sky-500 via-blue-600 to-green-500"
  },
  {
    name: "Goalkeeper Training",
    icon: "goalkeeper",
    image: media.heroAction,
    description:
      "Position-specific coaching for handling, catching, positioning, footwork, diving, one-on-one situations, distribution, and communication.",
    level: "Specialised",
    color: "from-red-500 via-pink-500 to-orange-400"
  },
  {
    name: "Football Fitness and Conditioning",
    icon: "fitness",
    image: media.fitness,
    description:
      "Football-specific strength, speed, agility, balance, mobility, injury-prevention awareness, and match-readiness conditioning.",
    level: "All Players",
    color: "from-yellow-400 via-orange-500 to-red-500"
  },
  {
    name: "Match Practice and Tournaments",
    icon: "tournament",
    image: media.heroMatch,
    description:
      "Small-sided games, friendly matches, tournament preparation, match temperament, team shape, and competitive exposure.",
    level: "Competitive",
    color: "from-orange-500 via-green-500 to-blue-600"
  },
  {
    name: "School Football Programme",
    icon: "school",
    image: media.schoolProgram,
    description:
      "Football coaching and event support for schools, including trials, fitness assessments, inter-house matches, and championship preparation.",
    level: "School Level",
    color: "from-sky-400 via-purple-500 to-orange-400"
  },
  {
    name: "Personal Football Coaching",
    icon: "coaching",
    image: media.trials,
    description:
      "Individual or small-group football training designed around the player's position, ability, weaknesses, and development goals.",
    level: "Custom Plan",
    color: "from-green-500 via-yellow-400 to-orange-500"
  }
];

export const footballPrograms = [
  "Ball control",
  "Passing and receiving",
  "Dribbling",
  "Shooting and finishing",
  "Defending",
  "Positioning",
  "Tactical awareness",
  "Small-sided games",
  "Match preparation",
  "Fitness and conditioning",
  "Goalkeeper handling",
  "Goalkeeper positioning",
  "Distribution and communication",
  "Performance evaluation"
];

export const timeline = [
  {
    week: "Phase 01",
    title: "Foundation and Movement",
    text: "Fundamental movement, coordination, balance, discipline, teamwork, and basic football skills."
  },
  {
    week: "Phase 02",
    title: "Technical Development",
    text: "Age-appropriate skill development, confidence, game understanding, and regular match practice."
  },
  {
    week: "Phase 03",
    title: "Advanced Performance",
    text: "Advanced techniques, tactical development, conditioning, match analysis, and tournament preparation."
  },
  {
    week: "Phase 04",
    title: "Exposure and Pathway",
    text: "Competition exposure, fitness monitoring, feedback, school partnerships, and career guidance."
  }
];

export const whyChoose = [
  "Associated with YSDFI football-development network",
  "Professionally managed academy established in 2021",
  "Grassroots, school, district, state, national and international football pathway",
  "Structured coaching and age-appropriate training",
  "Safe, ethical and supportive football environment",
  "Equal participation encouragement for girls and boys",
  "Talent identification through trials, camps and tournaments",
  "Connections with schools, clubs, academies and football organisations",
  "Competition preparation and performance guidance",
  "Focus on discipline, confidence, leadership and sportsmanship"
];

export const coachingPrograms = [
  {
    title: "Foundation Football Programme",
    text:
      "Suitable for beginners and young children. Focuses on fundamental movement, coordination, balance, discipline, teamwork, and basic football skills.",
    details: ["Age group: Young beginners", "Level: Foundation", "Certificate: Available where applicable"]
  },
  {
    title: "Junior Development Programme",
    text:
      "Suitable for school-level and developing athletes. Covers technical skills, fitness, game understanding, confidence, and regular match practice.",
    details: ["Age group: School-level athletes", "Level: Junior development", "Schedule: Batch-wise"]
  },
  {
    title: "Advanced Player Development Programme",
    text:
      "Suitable for competitive athletes. Focuses on advanced techniques, tactical development, conditioning, match analysis, and tournament preparation.",
    details: ["Age group: Competitive players", "Level: Advanced", "Coach: Assigned by football role"]
  },
  {
    title: "Elite Performance Programme",
    text:
      "For selected high-performing athletes with individual performance plans, advanced training, exposure, fitness monitoring, and career guidance.",
    details: ["Selection: Performance based", "Level: Elite", "Capacity: Limited batches"]
  },
  {
    title: "Football Development Programme",
    text:
      "Focused football training covering ball control, passing, receiving, dribbling, shooting, defending, positioning, tactical awareness, small-sided games, match preparation, and fitness.",
    details: ["Sport: Football", "Level: Foundation to Elite", "Venue: Mhow, Indore"]
  },
  {
    title: "Goalkeeper Training Programme",
    text:
      "Position-specific goalkeeper development covering handling, catching, positioning, footwork, diving, one-on-one situations, distribution, communication, and decision-making.",
    details: ["Sport: Football", "Specialisation: Goalkeeping", "Equipment: Gloves recommended"]
  },
  {
    title: "School Football Development Programme",
    text:
      "Football training and event support for schools, including coaching sessions, inter-house football tournaments, talent identification, fitness assessments, football-day support, and inter-school championship preparation.",
    details: ["For: Schools", "Services: Football coaching and events", "Partnerships: Open"]
  },
  {
    title: "Holiday and Summer Football Camps",
    text:
      "Short-term football camps designed to improve skills, fitness, teamwork, confidence, and match experience during school holidays.",
    details: ["Duration: Short-term", "Level: All abilities", "Registration: Batch-wise"]
  },
  {
    title: "Personal Football Training Programme",
    text:
      "Individual or small-group football coaching designed around the player's position, ability, weaknesses, and development goals.",
    details: ["Format: Individual or small group", "Plan: Player-specific", "Enquiry: WhatsApp"]
  },
  {
    title: "Coaches and Officials Development Programme",
    text:
      "Workshops and certification-support programmes for football coaches, referees, volunteers, team managers, and match officials.",
    details: ["For: Football coaches and officials", "Focus: Workshops", "Certificate support: Available where verified"]
  }
];

export const coaches = [
  {
    name: "YSDA Football Coaching and Technical Team",
    role: "Football Coaching Unit",
    sport: "Football development",
    experience: "Profiles published after verification",
    qualification: "Verified licences and certificates to be displayed when available",
    image: media.footballCoach,
    intro:
      "YSDA coaches focus on complete athlete development through technical skill, tactical awareness, conditioning, match preparation, mental confidence, discipline, sportsmanship, performance evaluation, and individual feedback."
  },
  {
    name: "Football Development Staff",
    role: "Head Coach / Assistant Coach / Goalkeeping Coach",
    sport: "Football",
    experience: "Sport-specific experience verified by academy",
    qualification: "Coaching licence or certificate to be listed after verification",
    image: media.footballWarmup,
    intro:
      "The football team supports ball control, passing, receiving, dribbling, shooting, defending, positioning, tactical awareness, match preparation, and goalkeeper development."
  },
  {
    name: "Fitness and Conditioning Staff",
    role: "Football Fitness Coach / Trainer",
    sport: "Strength, speed, agility and injury-prevention awareness",
    experience: "Trainer details published after verification",
    qualification: "Fitness or football-training credentials to be verified",
    image: media.fitness,
    intro:
      "Conditioning sessions support strength, speed, agility, balance, coordination, injury-prevention awareness, confidence, and player readiness for competition."
  },
  {
    name: "School and Event Technical Team",
    role: "Coaches, Referees, Officials and Volunteers",
    sport: "School football programmes and championship support",
    experience: "Connected with 150+ coaches and football officials",
    qualification: "Includes AIFF-registered professional coaches and officials in the wider network",
    image: media.teamTraining,
    intro:
      "The technical network supports football trials, school activities, tournaments, camps, event management, player welfare, and competition exposure."
  }
];

export const leadershipMessages = [
  {
    name: "Mr. Rafik Raja",
    role: "President, Youth Sports Development Academy",
    image: media.leadership,
    message:
      "YSDA was established with a commitment to providing young footballers with professional guidance, structured training, competitive exposure, and opportunities to achieve their football potential. Through our association with YSDFI, schools, clubs, coaches, academies, and football organisations, we aim to create meaningful pathways for players to participate in state, national, and international competitions.",
    closing:
      "Together, we will develop talent, strengthen grassroots football, and create future champions."
  },
  {
    name: "Mr. Ramiz Raja",
    role: "Secretary, Youth Sports Development Academy",
    image: media.secretaryPortrait,
    message:
      "YSDA is committed to creating an organised, transparent, and player-focused football environment. We support the planning and coordination of academy programmes, tournaments, training sessions, school activities, affiliations, camps, and competitive events.",
    closing:
      "We welcome schools, coaches, players, academies, clubs, sponsors, and football organisations to join our mission of strengthening grassroots football."
  }
];

export const events = [
  {
    title: "YSDA D Licence Certification Courses",
    date: "2026-08-20",
    endDate: "2026-08-25",
    time: "Course schedule to be announced",
    venue: "Mhow, Indore, Madhya Pradesh",
    sport: "Football Coaching Certification",
    age: "Aspiring coaches, trainers and football-development professionals",
    status: "Upcoming",
    type: "Certification Course",
    deadline: "Contact academy for registration",
    fee: "Contact academy",
    documents: "Photo ID, passport-size photograph, coaching/player details and applicable certificates",
    image: ysdfi("ysdfi-123-gallery2-p06.jpg"),
    description:
      "YSDA D Licence Certification Courses are scheduled from 20 August to 25 August 2026 for aspiring coaches, trainers and football-development professionals. Interested participants can contact the academy for registration, eligibility, schedule, fee and required documents."
  },
  {
    title: "Regular YSDA Training Batches",
    date: "2026-07-19",
    time: "Morning and evening batches",
    venue: "Mhow, Indore, Madhya Pradesh",
    sport: "Football",
    age: "Beginner to competitive athletes",
    status: "Ongoing",
    type: "Training Programme",
    deadline: "Open enquiry",
    fee: "Contact academy",
    documents: "Player details and age proof may be required",
    image: ysdfi("ysdfi-124-gallery2-p07.jpg"),
    description:
      "Ongoing academy admissions and training programmes for selected YSDA courses, regular practice, fitness development, match exposure, and academy activities."
  },
  {
    title: "Joshua Benjamin Memorial Event - Mhow",
    date: "2026-05-27",
    endDate: "2026-05-30",
    time: "Completed",
    venue: "Mhow, Indore, Madhya Pradesh",
    sport: "Football Event",
    age: "Participating categories to be verified",
    status: "Completed",
    type: "Memorial Event",
    deadline: "Closed",
    fee: "Closed",
    documents: "Event report, results and certificates to be verified",
    image: ysdfi("ysdfi-125-gallery2-p08.jpg"),
    description:
      "Completed event record. Verified results, participating teams, winners, awards, photographs and event report should be added before publishing final result details."
  },
  {
    title: "Goa Invitational Event",
    date: "2026-05-04",
    endDate: "2026-05-09",
    time: "Completed",
    venue: "Goa",
    sport: "Football Invitational Event",
    age: "Team details to be verified",
    status: "Completed",
    type: "Invitational Event",
    deadline: "Closed",
    fee: "Closed",
    documents: "Team details, results, photographs and player achievements to be verified",
    image: ysdfi("ysdfi-126-gallery2-p09.jpg"),
    description:
      "Completed invitational event. Official title, venue, team details, results, photographs and player achievements should be verified before final publication."
  },
  {
    title: "Indo-Nepal Football Exposure - Pokhara",
    date: "2025-12-31",
    endDate: "2026-01-03",
    time: "Completed",
    venue: "Pokhara, Nepal",
    sport: "International Football Exposure",
    age: "Participation details to be verified",
    status: "Completed",
    type: "International Exposure",
    deadline: "Closed",
    fee: "Closed",
    documents: "Participation details, certificates, photographs and results to be verified",
    image: ysdfi("ysdfi-127-gallery2-p10.jpg"),
    description:
      "Completed international exposure event connected with Indo-Nepal football participation. Verified participation details, results, certificates, photographs and international-exposure highlights should be added."
  }
];

export const gallery = [
  {
    title: "Training Sessions",
    category: "Training Sessions",
    image: ysdfi("ysdfi-135-gallery2-p18.jpg"),
    eventName: "YSDA Regular Training",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Structured coaching, discipline, fitness and player-development activities."
  },
  {
    title: "Match Action",
    category: "Match Action",
    image: ysdfi("ysdfi-136-gallery2-p19.jpg"),
    eventName: "Academy Match Practice",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Competitive match practice and team-building experience."
  },
  {
    title: "National Championships",
    category: "National Championships",
    image: ysdfi("ysdfi-039-gallery4-p39.jpg"),
    eventName: "National-Level Football Network",
    date: "2021-2026",
    location: "India",
    caption: "YSDA is connected with national-level football exposure through its wider network."
  },
  {
    title: "International Championships",
    category: "International Championships",
    image: ysdfi("ysdfi-032-gallery4-p32.jpg"),
    eventName: "International Football Exposure",
    date: "2021-2026",
    location: "International network",
    caption: "International exposure opportunities for selected football players and teams."
  },
  {
    title: "Inter-School Championships",
    category: "Inter-School Championships",
    image: ysdfi("ysdfi-028-gallery4-p28.jpg"),
    eventName: "School Football Development",
    date: "2021-2026",
    location: "Madhya Pradesh and network states",
    caption: "School-level football training, trials, partnerships and championship preparation."
  },
  {
    title: "Football Development",
    category: "Football",
    image: ysdfi("ysdfi-141-gallery2-p24.jpg"),
    eventName: "Football Development Programme",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Ball control, tactical awareness, fitness, match preparation and goalkeeper training."
  },
  {
    title: "Football Event Exposure",
    category: "Football Events",
    image: ysdfi("ysdfi-140-gallery2-p23.jpg"),
    eventName: "YSDA Football Network",
    date: "2021-2026",
    location: "10+ states",
    caption: "Collaborations across football events, camps, trials and championships."
  },
  {
    title: "Awards and Trophies",
    category: "Awards and Trophies",
    image: ysdfi("ysdfi-034-gallery4-p34.jpg"),
    eventName: "Certificate and Award Distribution",
    date: "Ongoing",
    location: "YSDA events",
    caption: "Recognition through certificates, medals, trophies and achievement awards."
  },
  {
    title: "Player Trials",
    category: "Player Trials",
    image: ysdfi("ysdfi-199-gallery1-p05.jpg"),
    eventName: "Talent Identification",
    date: "Ongoing",
    location: "Schools, camps and tournaments",
    caption: "Trials and assessment activities to identify deserving athletes."
  },
  {
    title: "Football Camps",
    category: "Football Camps",
    image: ysdfi("ysdfi-105-gallery3-p41.jpg"),
    eventName: "Holiday and Summer Football Camps",
    date: "Seasonal",
    location: "Mhow, Indore",
    caption: "Short-term football camps for skills, fitness, teamwork, confidence and match experience."
  },
  {
    title: "Team Photographs",
    category: "Team Photographs",
    image: ysdfi("ysdfi-089-gallery3-p25.jpg"),
    eventName: "YSDA Teams",
    date: "2026",
    location: "Academy activities",
    caption: "Players, coaches, officials and support teams connected with the academy."
  },
  {
    title: "Coaches and Officials",
    category: "Coaches and Officials",
    image: ysdfi("ysdfi-005-gallery4-p05.jpg"),
    eventName: "Technical Team Coordination",
    date: "Ongoing",
    location: "YSDA network",
    caption: "Coaches, referees, officials, volunteers and event-management professionals supporting player pathways."
  },
  {
    title: "School Programmes",
    category: "School Programmes",
    image: ysdfi("ysdfi-200-gallery1-p06.jpg"),
    eventName: "School Football Development Programme",
    date: "Ongoing",
    location: "Associated schools",
    caption: "Football coaching sessions, inter-house matches, talent identification, fitness assessment and championship preparation."
  },
  {
    title: "Certificate Distribution",
    category: "Certificate Distribution",
    image: ysdfi("ysdfi-031-gallery4-p31.jpg"),
    eventName: "Recognition and Records",
    date: "After verified events",
    location: "Academy and event venues",
    caption: "Certificates, medals, trophies and recognition awards should be published after official verification."
  },
  {
    title: "Behind the Scenes",
    category: "Behind the Scenes",
    image: ysdfi("ysdfi-006-gallery4-p06.jpg"),
    eventName: "Academy Operations",
    date: "Ongoing",
    location: "Mhow, Indore",
    caption: "Planning, coordination, partnerships, registrations and player-welfare work behind academy activities."
  },
  {
    title: "Community Activities",
    category: "Community Activities",
    image: ysdfi("ysdfi-202-gallery1-p08.jpg"),
    eventName: "Grassroots Football Awareness",
    date: "Ongoing",
    location: "Schools and community spaces",
    caption: "Football awareness, healthy lifestyle promotion and inclusive participation for boys and girls."
  },

  {
    title: "Inter-School Champions",
    category: "Awards and Trophies",
    image: ysdfi("ysdfi-029-gallery4-p29.jpg"),
    eventName: "3rd Talent Cup Inter School Championship 2026",
    date: "2026",
    location: "YSDFI football network",
    caption: "Award-stage photo documenting school championship participation and recognition."
  },
  {
    title: "Girls Football Team",
    category: "Team Photographs",
    image: ysdfi("ysdfi-033-gallery4-p33.jpg"),
    eventName: "Girls school championship participation",
    date: "2026",
    location: "Inter-school football event",
    caption: "A clean team photograph showing equal participation and girls' football development."
  },
  {
    title: "Football Match Action",
    category: "Match Action",
    image: ysdfi("ysdfi-096-gallery3-p32.jpg"),
    eventName: "Football match development",
    date: "2026",
    location: "Football venue",
    caption: "Fast match movement, pressure decisions and football competition exposure."
  },
  {
    title: "Referee and Match Officials",
    category: "Coaches and Officials",
    image: ysdfi("ysdfi-121-gallery2-p04.jpg"),
    eventName: "Match official coordination",
    date: "2026",
    location: "Championship venue",
    caption: "Officials and referees supporting structured and fair competition."
  },
  {
    title: "School Player Line-Up",
    category: "School Programmes",
    image: ysdfi("ysdfi-198-gallery1-p04.jpg"),
    eventName: "School football development",
    date: "2026",
    location: "School football venue",
    caption: "Students prepared for inter-school participation and discipline-led events."
  },
  {
    title: "Player Trial Interaction",
    category: "Player Trials",
    image: ysdfi("ysdfi-201-gallery1-p07.jpg"),
    eventName: "Talent-identification activity",
    date: "2026",
    location: "YSDA football network",
    caption: "Player interaction and assessment moments during academy-connected events."
  },
  {
    title: "Community Football Interaction",
    category: "Community Activities",
    image: ysdfi("ysdfi-204-gallery1-p10.jpg"),
    eventName: "Grassroots football outreach",
    date: "2026",
    location: "School and community football venue",
    caption: "Community engagement supporting confident participation and football culture."
  },
  {
    title: "Trophy Display",
    category: "Awards and Trophies",
    image: ysdfi("ysdfi-030-gallery4-p30.jpg"),
    eventName: "Championship awards",
    date: "2026",
    location: "YSDFI football event network",
    caption: "Trophies and recognition visuals for academy achievement storytelling."
  },
  {
    title: "Academy Video Highlight",
    category: "Media Coverage",
    image: ysdfi("ysdfi-113-gallery3-p49.jpg"),
    video: media.heroVideo,
    eventName: "YSDA Media",
    date: "2026",
    location: "Official channels",
    caption: "Video highlights and academy media moments."
  },
  {
    title: "Football Championship Award",
    category: "Awards and Trophies",
    image: ysdfi("ysdfi-024-gallery4-p24.jpg"),
    eventName: "Invitation Talent Search Inter-School Championship",
    date: "2025",
    location: "Indore",
    caption: "YSDA football team celebrating a championship award with coaches and supporters."
  }
];

export const videoHighlights = [
  {
    title: "Football development highlights",
    tag: "Football",
    image: media.footballTeam,
    video: media.heroVideo
  },
  {
    title: "Training and fitness sessions",
    tag: "Training",
    image: media.footballWarmup,
    video: media.heroVideo
  },
  {
    title: "Events, camps and championship exposure",
    tag: "Events",
    image: media.teamTraining,
    video: media.heroVideo
  }
];

export const news = [
  {
    title: "Latest Academy Admissions Open",
    date: "2026-07-19",
    category: "Admissions",
    image: media.footballWarmup,
    summary:
      "Admissions are open for selected YSDA training programmes. Young athletes can register for professional coaching, regular practice, fitness development, match exposure and academy activities."
  },
  {
    title: "Upcoming Tournament Registrations",
    date: "2026-07-18",
    category: "Events",
    image: media.teamTraining,
    summary:
      "Players, teams, schools, clubs and academies can enquire for upcoming football tournaments, trials, camps and championship events before announced deadlines."
  },
  {
    title: "New School and Football Academy Partnerships",
    date: "2026-07-15",
    category: "Partnerships",
    image: media.schoolProgram,
    summary:
      "YSDA welcomes collaborations with schools, football academies, clubs, coaches and organisations interested in developing grassroots football."
  },
  {
    title: "Player Selection and Trial Updates",
    date: "2026-07-12",
    category: "Trials",
    image: media.trials,
    summary:
      "Selection updates, reporting times, eligibility conditions and required documents for player trials will be published through official channels."
  },
  {
    title: "Training Schedule Updates",
    date: "2026-07-10",
    category: "Training",
    image: media.fitness,
    summary:
      "Changes to training timings, venues, batches, holidays or match schedules will be announced on the website and official social-media channels."
  },
  {
    title: "Championship Results",
    date: "2026-06-01",
    category: "Results",
    image: media.trophy,
    summary:
      "Tournament results, points tables, award winners, photographs, match reports and player achievements will be published after each verified event."
  },
  {
    title: "Certificate and Award Distribution",
    date: "2026-05-31",
    category: "Awards",
    image: media.certificates,
    summary:
      "Players, coaches, schools, teams, officials and volunteers may receive certificates, medals, trophies and recognition awards according to event rules."
  }
];

export const achievements = [
  { value: 9, suffix: "+", label: "Football training modules" },
  { value: 50, suffix: "+", label: "Championships and football events" },
  { value: 10, suffix: "+", label: "States reached" },
  { value: 70, suffix: "+", label: "Clubs, units and academies connected" },
  { value: 40, suffix: "+", label: "Schools associated" },
  { value: 150, suffix: "+", label: "Coaches and football officials connected" },
  { value: 30, suffix: "+", label: "National and international championships" },
  { value: 5000, suffix: "+", label: "Players connected" }
];

export const achievementTimeline = [
  {
    year: "2021",
    title: "YSDA established",
    text: "Youth Sports Development Academy was established in Mhow, Indore as a professionally managed football academy."
  },
  {
    year: "2021-2026",
    title: "Grassroots football network expanded",
    text: "Training, camps, school programmes, tournaments, trials and player-development activities supported grassroots football development."
  },
  {
    year: "YSDFI Network",
    title: "National and international exposure",
    text: "Through association with YSDFI, YSDA is connected with a growing national and international football-development network."
  }
];

export const achievementCards = [
  {
    title: "National Championship Participation",
    category: "National Exposure",
    image: media.trophy,
    text:
      "YSDA players and teams have received opportunities to participate in national-level football competitions through the academy's wider football network."
  },
  {
    title: "International Exposure",
    category: "International Network",
    image: media.footballTeam,
    text:
      "Selected players and teams have been connected with international football events, helping them gain valuable competition experience and cultural exposure."
  },
  {
    title: "School Football Development",
    category: "School Partnerships",
    image: media.schoolProgram,
    text:
      "YSDA encourages school-level football participation through championships, training programmes, trials, football-day support and partnerships."
  }
];

export const certificateCategories = [
  "Academy registration documents",
  "Affiliation certificates",
  "Coaching licences",
  "AIFF coaching certificates",
  "Referee and official certificates",
  "Tournament-participation certificates",
  "Event-authorisation documents",
  "School partnership certificates",
  "Appreciation certificates",
  "Player-achievement certificates",
  "International participation certificates",
  "Awards and recognition documents"
];

export const successStories = [
  {
    name: "National Championship Participation",
    sport: "Football Achievement Gallery",
    achievement: "State and national football opportunities",
    image: media.trophy,
    journey:
      "YSDA contributes to grassroots football by connecting players and teams with championship pathways through its wider football network.",
    testimonial:
      "Verified photographs, results and certificates can be added as official records become available."
  },
  {
    name: "International Exposure",
    sport: "Football Achievement Gallery",
    achievement: "International events and cultural exposure",
    image: media.footballTeam,
    journey:
      "Selected players and teams have been connected with international football events, helping athletes experience higher competitive platforms.",
    testimonial:
      "Sensitive identity details should be hidden before certificate or document publication."
  },
  {
    name: "Inter-School Development",
    sport: "Football Achievement Gallery",
    achievement: "School participation and talent identification",
    image: media.schoolProgram,
    journey:
      "YSDA works with school football programmes, inter-school championships and talent-identification activities to increase participation.",
    testimonial:
      "Event reports, award winners, media coverage and testimonials can be added after verification."
  }
];

export const testimonials = [
  {
    name: "Player Community",
    role: "Athletes",
    image: media.footballTeam,
    rating: 5,
    text:
      "YSDA focuses on professional guidance, structured training, fitness, confidence, teamwork and competitive exposure."
  },
  {
    name: "Parent Community",
    role: "Parents",
    image: media.teamTraining,
    rating: 5,
    text:
      "The academy aims to provide a safe, supportive, transparent and player-focused environment for young athletes."
  },
  {
    name: "School Partners",
    role: "Schools",
    image: media.schoolProgram,
    rating: 5,
    text:
      "YSDA welcomes school partnerships for football training programmes, inter-school championships, football-day support and talent identification."
  },
  {
    name: "Football Network",
    role: "Coaches, clubs and organisations",
    image: media.officials,
    rating: 5,
    text:
      "YSDA works with coaches, clubs, academies, officials and football organisations to strengthen grassroots football."
  }
];

export const partners = [
  "Youth Sports Development Federation of India - YSDFI",
  "40+ Associated Schools",
  "70+ Clubs, Units and Academies",
  "150+ Coaches and Football Officials",
  "10+ State Football Network",
  "National and International Event Partners"
];

export const galleryCategories = [
  "All",
  "Training Sessions",
  "Match Action",
  "National Championships",
  "International Championships",
  "Inter-School Championships",
  "Football",
  "Football Events",
  "Awards and Trophies",
  "Player Trials",
  "Football Camps",
  "Team Photographs",
  "Coaches and Officials",
  "School Programmes",
  "Certificate Distribution",
  "Behind the Scenes",
  "Media Coverage",
  "Community Activities"
];

export const newsCategories = [
  "All",
  "Admissions",
  "Events",
  "Partnerships",
  "Trials",
  "Training",
  "Results",
  "Awards"
];
