const photo = (id: number, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const ysdfi = (file: string) => `/ysdfi-gallery/${file}`;

export const whatsappMessage =
  "Hello YSDA, I would like to know more about your sports training programs, admissions, events, and registration process.";

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
    "Youth Sports Development Academy, commonly known as YSDA, is a professionally managed sports academy established in 2021 and based in Mhow, Indore, Madhya Pradesh. YSDA works as a sports-development branch associated with the Youth Sports Development Federation of India - YSDFI. The academy identifies, trains, guides, and promotes talented young athletes through structured coaching, competitive exposure, and opportunities to participate in school, district, state, national, and international sporting events.",
  belief:
    "YSDA believes that every talented player deserves professional guidance, the right platform, fair opportunities, and recognition."
};

export const media = {
  heroVideo: "https://videos.pexels.com/video-files/31370183/13386254_3840_2160_24fps.mp4",
  heroPoster: ysdfi("ysdfi-135-gallery2-p18.jpg"),
  fallback: "/brand/ysda-logo-white.png",
  heroAction: ysdfi("ysdfi-135-gallery2-p18.jpg"),
  heroTeam: ysdfi("ysdfi-088-gallery3-p24.jpg"),
  heroMultiSport: ysdfi("ysdfi-144-gallery2-p27.jpg"),
  heroSquad: ysdfi("ysdfi-132-gallery2-p15.jpg"),
  heroMatch: ysdfi("ysdfi-113-gallery3-p49.jpg"),
  heroTraining: ysdfi("ysdfi-107-gallery3-p43.jpg"),
  footballWarmup: ysdfi("ysdfi-107-gallery3-p43.jpg"),
  footballTeam: ysdfi("ysdfi-132-gallery2-p15.jpg"),
  footballCoach: ysdfi("ysdfi-141-gallery2-p24.jpg"),
  cricket: ysdfi("ysdfi-040-gallery4-p40.jpg"),
  cricketWide: ysdfi("ysdfi-030-gallery4-p30.jpg"),
  basketball: ysdfi("ysdfi-206-gallery1-p12.jpg"),
  basketballCourt: ysdfi("ysdfi-210-gallery1-p16.jpg"),
  volleyball: photo(6203581, 1400),
  badminton: photo(8007500, 1400),
  athletics: ysdfi("ysdfi-226-gallery1-p32.jpg"),
  kabaddi: photo(10347115, 1400),
  skating: photo(30933662, 1400),
  skatingAction: photo(16767210, 1200),
  fitness: ysdfi("ysdfi-199-gallery1-p05.jpg"),
  teamTraining: ysdfi("ysdfi-144-gallery2-p27.jpg"),
  trophy: ysdfi("ysdfi-058-gallery4-p58.jpg"),
  leadership: ysdfi("ysdfi-196-gallery1-p02.jpg"),
  officials: ysdfi("ysdfi-026-gallery4-p26.jpg"),
  certificates: ysdfi("ysdfi-061-gallery4-p61.jpg"),
  awards: ysdfi("ysdfi-030-gallery4-p30.jpg"),
  girlsTeam: ysdfi("ysdfi-033-gallery4-p33.jpg"),
  referee: ysdfi("ysdfi-005-gallery4-p05.jpg"),
  schoolProgram: ysdfi("ysdfi-197-gallery1-p03.jpg"),
  trials: ysdfi("ysdfi-201-gallery1-p07.jpg"),
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
    caption: "A clean academy team portrait with strong sporting presence."
  },
  {
    src: media.heroMultiSport,
    title: "Multi-sports achievement team",
    tag: "Multi-Sports",
    caption: "Players and mentors representing wider academy development."
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
  ["Sports", "#sports"],
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
      "To identify and develop talented athletes by providing professional coaching, structured training, competitive exposure, and a safe and supportive sporting environment."
  },
  {
    title: "Our Vision",
    text:
      "To become one of India's most trusted sports-development academies, recognised for producing disciplined, confident, skilled, and successful athletes."
  },
  {
    title: "Our Goal",
    text:
      "To create a professional and inclusive sports ecosystem where young athletes can learn, train, compete, and grow from grassroots to competitive levels."
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
    text: "Punctuality, consistency, commitment, and responsible habits are treated as foundations of sporting success."
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
  "Organise local, district, state, national, and international sporting events.",
  "Conduct inter-school championships and sports-development programmes.",
  "Support athletes with competition preparation and performance guidance.",
  "Develop coaches, referees, volunteers, and sports-management professionals.",
  "Collaborate with schools, academies, clubs, government organisations, and sporting bodies.",
  "Promote sports awareness, physical fitness, and healthy lifestyles.",
  "Create opportunities for deserving athletes to participate on bigger sporting platforms."
];

export const sports = [
  {
    name: "Football",
    icon: "football",
    image: media.footballWarmup,
    description:
      "Football receives the strongest academy focus, with technical training, tactical awareness, match preparation, fitness, goalkeeper development, and tournament exposure.",
    level: "Foundation to Elite",
    featured: true,
    color: "from-blue-600 via-sky-500 to-orange-400"
  },
  {
    name: "Cricket",
    icon: "cricket",
    image: media.cricket,
    description:
      "Batting, bowling, fielding, fitness, school participation, match temperament, and competitive exposure through camps and events.",
    level: "School to Competitive",
    color: "from-green-500 via-sky-500 to-blue-600"
  },
  {
    name: "Basketball",
    icon: "basketball",
    image: media.basketball,
    description:
      "Ball handling, shooting, movement, court awareness, agility, team play, confidence, and inter-school development.",
    level: "Foundation to Team",
    color: "from-orange-500 via-red-500 to-blue-600"
  },
  {
    name: "Volleyball",
    icon: "volleyball",
    image: media.volleyball,
    description:
      "Serving, receiving, setting, attacking, defensive movement, communication, school competition, and team discipline.",
    level: "Beginner to Team",
    color: "from-sky-500 via-blue-600 to-green-500"
  },
  {
    name: "Badminton",
    icon: "badminton",
    image: media.badminton,
    description:
      "Footwork, racket control, shot selection, court coverage, speed, singles or doubles tactics, and regular practice.",
    level: "Foundation to Performance",
    color: "from-red-500 via-pink-500 to-orange-400"
  },
  {
    name: "Athletics",
    icon: "athletics",
    image: media.athletics,
    description:
      "Sprint mechanics, endurance, jumps, throws, flexibility, power, fitness assessment, and event-specific preparation.",
    level: "Age-Group Training",
    color: "from-yellow-400 via-orange-500 to-red-500"
  },
  {
    name: "Kabaddi",
    icon: "kabaddi",
    image: media.kabaddi,
    description:
      "Strength, agility, raiding basics, defensive teamwork, confidence, discipline, and community sports participation.",
    level: "Youth Development",
    color: "from-orange-500 via-green-500 to-blue-600"
  },
  {
    name: "Skating",
    icon: "skating",
    image: media.skating,
    description:
      "Balance, speed control, safe movement, turns, coordination, confidence, and beginner-friendly skill development.",
    level: "Starter to Skill",
    color: "from-sky-400 via-purple-500 to-orange-400"
  },
  {
    name: "Fitness and Conditioning",
    icon: "fitness",
    image: media.fitness,
    description:
      "Strength, mobility, speed, agility, balance, coordination, injury-prevention awareness, and athlete conditioning.",
    level: "All Athletes",
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
    text: "Fundamental movement, coordination, balance, discipline, teamwork, and basic sporting skills."
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
  "Associated with YSDFI sports-development network",
  "Professionally managed academy established in 2021",
  "Grassroots, school, district, state, national and international pathway",
  "Structured coaching and age-appropriate training",
  "Safe, ethical and supportive sporting environment",
  "Equal participation encouragement for girls and boys",
  "Talent identification through trials, camps and tournaments",
  "Connections with schools, clubs, academies and sports organisations",
  "Competition preparation and performance guidance",
  "Focus on discipline, confidence, leadership and sportsmanship"
];

export const coachingPrograms = [
  {
    title: "Foundation Sports Programme",
    text:
      "Suitable for beginners and young children. Focuses on fundamental movement, coordination, balance, discipline, teamwork, and basic sporting skills.",
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
    details: ["Age group: Competitive players", "Level: Advanced", "Coach: Assigned by sport"]
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
    title: "School Sports Development Programme",
    text:
      "Sports-training and event-support for schools, including coaching sessions, inter-house tournaments, talent identification, fitness assessments, sports-day support, and inter-school championship preparation.",
    details: ["For: Schools", "Services: Coaching and events", "Partnerships: Open"]
  },
  {
    title: "Holiday and Summer Sports Camps",
    text:
      "Short-term camps designed to improve sporting skills, fitness, teamwork, confidence, and match experience during school holidays.",
    details: ["Duration: Short-term", "Level: All abilities", "Registration: Batch-wise"]
  },
  {
    title: "Personal Training Programme",
    text:
      "Individual or small-group coaching designed around the player's position, ability, weaknesses, and development goals.",
    details: ["Format: Individual or small group", "Plan: Player-specific", "Enquiry: WhatsApp"]
  },
  {
    title: "Coaches and Officials Development Programme",
    text:
      "Workshops and certification-support programmes for coaches, referees, volunteers, team managers, and sports officials.",
    details: ["For: Coaches and officials", "Focus: Workshops", "Certificate support: Available where verified"]
  }
];

export const coaches = [
  {
    name: "YSDA Coaching and Technical Team",
    role: "Multi-Sports Coaching Unit",
    sport: "Football and multi-sports development",
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
    role: "Fitness Coach / Sports Trainer",
    sport: "Strength, speed, agility and injury-prevention awareness",
    experience: "Trainer details published after verification",
    qualification: "Fitness or sports-training credentials to be verified",
    image: media.fitness,
    intro:
      "Conditioning sessions support strength, speed, agility, balance, coordination, injury-prevention awareness, confidence, and player readiness for competition."
  },
  {
    name: "School and Event Technical Team",
    role: "Coaches, Referees, Officials and Volunteers",
    sport: "School programmes and championship support",
    experience: "Connected with 150+ coaches and sports officials",
    qualification: "Includes AIFF-registered professional coaches and officials in the wider network",
    image: media.teamTraining,
    intro:
      "The technical network supports trials, school activities, tournaments, camps, event management, player welfare, and competition exposure."
  }
];

export const leadershipMessages = [
  {
    name: "Mr. Rafik Raja",
    role: "President, Youth Sports Development Academy",
    image: media.leadership,
    message:
      "YSDA was established with a commitment to providing young athletes with professional guidance, structured training, competitive exposure, and opportunities to achieve their sporting potential. Through our association with YSDFI, schools, clubs, coaches, academies, and sports organisations, we aim to create meaningful pathways for athletes to participate in state, national, and international competitions.",
    closing:
      "Together, we will develop talent, strengthen grassroots sports, and create future champions."
  },
  {
    name: "Mr. Ramiz Raja",
    role: "Secretary, Youth Sports Development Academy",
    image: media.officials,
    message:
      "YSDA is committed to creating an organised, transparent, and player-focused sporting environment. We support the planning and coordination of academy programmes, tournaments, training sessions, school activities, affiliations, camps, and competitive events.",
    closing:
      "We welcome schools, coaches, players, academies, clubs, sponsors, and sporting organisations to join our mission of strengthening grassroots sports."
  }
];

export const events = [
  {
    title: "Mewar Sporting Event - Udaipur",
    date: "2026-08-07",
    endDate: "2026-08-09",
    time: "Schedule to be announced",
    venue: "Udaipur, Rajasthan",
    sport: "Multi-Sports",
    age: "Official age categories to be announced",
    status: "Upcoming",
    type: "Tournament / Championship",
    deadline: "To be announced",
    fee: "Verified amount to be announced",
    documents: "Age proof, player photograph, school ID and event-specific documents",
    image: media.teamTraining,
    description:
      "Upcoming Mewar Sporting Event connected with YSDA's wider sports network. Official title, venue, age categories, registration information and participating teams should be verified before publishing final event details."
  },
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
    image: media.certificates,
    description:
      "YSDA D Licence Certification Courses are scheduled from 20 August to 25 August 2026 for aspiring coaches, trainers and football-development professionals. Interested participants can contact the academy for registration, eligibility, schedule, fee and required documents."
  },
  {
    title: "Regular YSDA Training Batches",
    date: "2026-07-19",
    time: "Morning and evening batches",
    venue: "Mhow, Indore, Madhya Pradesh",
    sport: "Football and Multi-Sports",
    age: "Beginner to competitive athletes",
    status: "Ongoing",
    type: "Training Programme",
    deadline: "Open enquiry",
    fee: "Contact academy",
    documents: "Player details and age proof may be required",
    image: media.footballWarmup,
    description:
      "Ongoing academy admissions and training programmes for selected YSDA courses, regular practice, fitness development, match exposure, and academy activities."
  },
  {
    title: "Joshua Benjamin Memorial Event - Mhow",
    date: "2026-05-27",
    endDate: "2026-05-30",
    time: "Completed",
    venue: "Mhow, Indore, Madhya Pradesh",
    sport: "Sporting Event",
    age: "Participating categories to be verified",
    status: "Completed",
    type: "Memorial Event",
    deadline: "Closed",
    fee: "Closed",
    documents: "Event report, results and certificates to be verified",
    image: media.trophy,
    description:
      "Completed event record. Verified results, participating teams, winners, awards, photographs and event report should be added before publishing final result details."
  },
  {
    title: "Goa Invitational Event",
    date: "2026-05-04",
    endDate: "2026-05-09",
    time: "Completed",
    venue: "Goa",
    sport: "Invitational Sports Event",
    age: "Team details to be verified",
    status: "Completed",
    type: "Invitational Event",
    deadline: "Closed",
    fee: "Closed",
    documents: "Team details, results, photographs and player achievements to be verified",
    image: media.cricketWide,
    description:
      "Completed invitational event. Official title, venue, team details, results, photographs and player achievements should be verified before final publication."
  },
  {
    title: "Indo-Nepal Sporting Event - Pokhara",
    date: "2025-12-31",
    endDate: "2026-01-03",
    time: "Completed",
    venue: "Pokhara, Nepal",
    sport: "International Sporting Event",
    age: "Participation details to be verified",
    status: "Completed",
    type: "International Exposure",
    deadline: "Closed",
    fee: "Closed",
    documents: "Participation details, certificates, photographs and results to be verified",
    image: media.footballTeam,
    description:
      "Completed international exposure event connected with Indo-Nepal sporting participation. Verified participation details, results, certificates, photographs and international-exposure highlights should be added."
  }
];

export const gallery = [
  {
    title: "Training Sessions",
    category: "Training Sessions",
    image: media.footballWarmup,
    eventName: "YSDA Regular Training",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Structured coaching, discipline, fitness and player-development activities."
  },
  {
    title: "Match Action",
    category: "Match Action",
    image: media.footballTeam,
    eventName: "Academy Match Practice",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Competitive match practice and team-building experience."
  },
  {
    title: "National Championships",
    category: "National Championships",
    image: media.trophy,
    eventName: "National-Level Sports Network",
    date: "2021-2026",
    location: "India",
    caption: "YSDA is connected with 15+ national-level championships through its wider network."
  },
  {
    title: "International Championships",
    category: "International Championships",
    image: media.teamTraining,
    eventName: "International Sports Exposure",
    date: "2021-2026",
    location: "International network",
    caption: "Association with 15+ international multi-sports championships."
  },
  {
    title: "Inter-School Championships",
    category: "Inter-School Championships",
    image: media.cricketWide,
    eventName: "School Sports Development",
    date: "2021-2026",
    location: "Madhya Pradesh and network states",
    caption: "School-level training, trials, partnerships and championship preparation."
  },
  {
    title: "Football Development",
    category: "Football",
    image: media.footballCoach,
    eventName: "Football Development Programme",
    date: "2026",
    location: "Mhow, Indore",
    caption: "Ball control, tactical awareness, fitness, match preparation and goalkeeper training."
  },
  {
    title: "Multi-Sports Events",
    category: "Multi-Sports Events",
    image: media.basketball,
    eventName: "YSDA Multi-Sports Network",
    date: "2021-2026",
    location: "10+ states",
    caption: "Collaborations across multi-sports events, camps and championships."
  },
  {
    title: "Awards and Trophies",
    category: "Awards and Trophies",
    image: media.trophy,
    eventName: "Certificate and Award Distribution",
    date: "Ongoing",
    location: "YSDA events",
    caption: "Recognition through certificates, medals, trophies and achievement awards."
  },
  {
    title: "Player Trials",
    category: "Player Trials",
    image: media.athletics,
    eventName: "Talent Identification",
    date: "Ongoing",
    location: "Schools, camps and tournaments",
    caption: "Trials and assessment activities to identify deserving athletes."
  },
  {
    title: "Sports Camps",
    category: "Sports Camps",
    image: media.fitness,
    eventName: "Holiday and Summer Camps",
    date: "Seasonal",
    location: "Mhow, Indore",
    caption: "Short-term camps for skills, fitness, teamwork, confidence and match experience."
  },
  {
    title: "Team Photographs",
    category: "Team Photographs",
    image: media.teamTraining,
    eventName: "YSDA Teams",
    date: "2026",
    location: "Academy activities",
    caption: "Players, coaches, officials and support teams connected with the academy."
  },
  {
    title: "Coaches and Officials",
    category: "Coaches and Officials",
    image: media.officials,
    eventName: "Technical Team Coordination",
    date: "Ongoing",
    location: "YSDA network",
    caption: "Coaches, referees, officials, volunteers and event-management professionals supporting player pathways."
  },
  {
    title: "School Programmes",
    category: "School Programmes",
    image: media.cricketWide,
    eventName: "School Sports Development Programme",
    date: "Ongoing",
    location: "Associated schools",
    caption: "Coaching sessions, inter-house events, talent identification, fitness assessment and championship preparation."
  },
  {
    title: "Certificate Distribution",
    category: "Certificate Distribution",
    image: media.certificates,
    eventName: "Recognition and Records",
    date: "After verified events",
    location: "Academy and event venues",
    caption: "Certificates, medals, trophies and recognition awards should be published after official verification."
  },
  {
    title: "Behind the Scenes",
    category: "Behind the Scenes",
    image: media.leadership,
    eventName: "Academy Operations",
    date: "Ongoing",
    location: "Mhow, Indore",
    caption: "Planning, coordination, partnerships, registrations and player-welfare work behind academy activities."
  },
  {
    title: "Community Activities",
    category: "Community Activities",
    image: media.athletics,
    eventName: "Grassroots Sports Awareness",
    date: "Ongoing",
    location: "Schools and community spaces",
    caption: "Sports awareness, healthy lifestyle promotion and inclusive participation for boys and girls."
  },

  {
    title: "Inter-School Champions",
    category: "Awards and Trophies",
    image: media.awards,
    eventName: "3rd Talent Cup Inter School Championship 2026",
    date: "2026",
    location: "YSDFI sports network",
    caption: "Award-stage photo documenting school championship participation and recognition."
  },
  {
    title: "Girls Football Team",
    category: "Team Photographs",
    image: media.girlsTeam,
    eventName: "Girls school championship participation",
    date: "2026",
    location: "Inter-school sports event",
    caption: "A clean team photograph showing equal participation and girls' sports development."
  },
  {
    title: "Basketball Match Action",
    category: "Multi-Sports Events",
    image: media.basketball,
    eventName: "Court sports development",
    date: "2026",
    location: "School sports venue",
    caption: "Fast court movement and competition exposure beyond football."
  },
  {
    title: "Referee and Match Officials",
    category: "Coaches and Officials",
    image: media.referee,
    eventName: "Match official coordination",
    date: "2026",
    location: "Championship venue",
    caption: "Officials and referees supporting structured and fair competition."
  },
  {
    title: "School Player Line-Up",
    category: "School Programmes",
    image: media.schoolProgram,
    eventName: "School sports development",
    date: "2026",
    location: "School court venue",
    caption: "Students prepared for inter-school participation and discipline-led events."
  },
  {
    title: "Player Trial Interaction",
    category: "Player Trials",
    image: media.trials,
    eventName: "Talent-identification activity",
    date: "2026",
    location: "YSDA sports network",
    caption: "Player interaction and assessment moments during academy-connected events."
  },
  {
    title: "Community Sports Interaction",
    category: "Community Activities",
    image: media.community,
    eventName: "Grassroots sports outreach",
    date: "2026",
    location: "School and community sports venue",
    caption: "Community engagement supporting confident participation and sports culture."
  },
  {
    title: "Trophy Display",
    category: "Awards and Trophies",
    image: media.trophy,
    eventName: "Championship awards",
    date: "2026",
    location: "YSDFI event network",
    caption: "Trophies and recognition visuals for academy achievement storytelling."
  },
  {
    title: "Academy Video Highlight",
    category: "Media Coverage",
    image: media.heroPoster,
    video: media.heroVideo,
    eventName: "YSDA Media",
    date: "2026",
    location: "Official channels",
    caption: "Video highlights and academy media moments."
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
      "Players, teams, schools, clubs and academies can enquire for upcoming tournaments, trials, sports camps and championship events before announced deadlines."
  },
  {
    title: "New School and Academy Partnerships",
    date: "2026-07-15",
    category: "Partnerships",
    image: media.cricketWide,
    summary:
      "YSDA welcomes collaborations with schools, sports academies, clubs, coaches and organisations interested in developing grassroots sports."
  },
  {
    title: "Player Selection and Trial Updates",
    date: "2026-07-12",
    category: "Trials",
    image: media.athletics,
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
  { value: 9, suffix: "+", label: "Sports promoted" },
  { value: 50, suffix: "+", label: "Championships and sporting events" },
  { value: 10, suffix: "+", label: "States reached" },
  { value: 70, suffix: "+", label: "Clubs, units and academies connected" },
  { value: 40, suffix: "+", label: "Schools associated" },
  { value: 150, suffix: "+", label: "Coaches and sports officials connected" },
  { value: 30, suffix: "+", label: "National and international championships" },
  { value: 5000, suffix: "+", label: "Players connected" }
];

export const achievementTimeline = [
  {
    year: "2021",
    title: "YSDA established",
    text: "Youth Sports Development Academy was established in Mhow, Indore as a professionally managed sports academy."
  },
  {
    year: "2021-2026",
    title: "Grassroots network expanded",
    text: "Training, camps, school programmes, tournaments, trials and player-development activities supported grassroots sports development."
  },
  {
    year: "YSDFI Network",
    title: "National and international exposure",
    text: "Through association with YSDFI, YSDA is connected with a growing national and international sports-development network."
  }
];

export const achievementCards = [
  {
    title: "National Championship Participation",
    category: "National Exposure",
    image: media.trophy,
    text:
      "YSDA players and teams have received opportunities to participate in national-level sporting competitions through the academy's wider sports network."
  },
  {
    title: "International Exposure",
    category: "International Network",
    image: media.footballTeam,
    text:
      "Selected players and teams have been connected with international sporting events, helping them gain valuable competition experience and cultural exposure."
  },
  {
    title: "School Sports Development",
    category: "School Partnerships",
    image: media.cricketWide,
    text:
      "YSDA encourages school-level participation through championships, training programmes, trials, sports-day support and partnerships."
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
    sport: "Achievement Gallery",
    achievement: "State and national sporting opportunities",
    image: media.trophy,
    journey:
      "YSDA contributes to grassroots sports by connecting players and teams with championship pathways through its wider sports network.",
    testimonial:
      "Verified photographs, results and certificates can be added as official records become available."
  },
  {
    name: "International Exposure",
    sport: "Achievement Gallery",
    achievement: "International events and cultural exposure",
    image: media.footballTeam,
    journey:
      "Selected players and teams have been connected with international sporting events, helping athletes experience higher competitive platforms.",
    testimonial:
      "Sensitive identity details should be hidden before certificate or document publication."
  },
  {
    name: "Inter-School Development",
    sport: "Achievement Gallery",
    achievement: "School participation and talent identification",
    image: media.cricketWide,
    journey:
      "YSDA works with school programmes, inter-school championships and talent-identification activities to increase sports participation.",
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
    image: media.cricketWide,
    rating: 5,
    text:
      "YSDA welcomes school partnerships for training programmes, inter-school championships, sports-day support and talent identification."
  },
  {
    name: "Sports Network",
    role: "Coaches, clubs and organisations",
    image: media.officials,
    rating: 5,
    text:
      "YSDA works with coaches, clubs, academies, officials and sporting organisations to strengthen grassroots sports."
  }
];

export const partners = [
  "Youth Sports Development Federation of India - YSDFI",
  "40+ Associated Schools",
  "70+ Clubs, Units and Academies",
  "150+ Coaches and Sports Officials",
  "10+ State Sports Network",
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
  "Multi-Sports Events",
  "Awards and Trophies",
  "Player Trials",
  "Sports Camps",
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
