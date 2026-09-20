export const BUSINESS_CONFIG = {
  // Real Business Information
  businessName: "WELCOME CAR AC SERVICE",
  ownerName: "Mani",
  phoneNumber: "9884465741",
  whatsappNumber: "919884465741",
  fullAddress: "Old No: 58, New No: 55, Anna Nagar Colony (100Feet Road), Near SRP Tools, Tharamani, Chennai, Tamil Nadu 600041",
  area: "Tharamani",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600041",
  landmark: "Near SRP Tools (100Feet Road)",
  googleMapsUrl: "https://maps.google.com/?q=Old+No+58+New+No+55+Anna+Nagar+Colony+100Feet+Road+Near+SRP+Tools+Tharamani+Chennai+600041",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Old+No+58+New+No+55+Anna+Nagar+Colony+100Feet+Road+Near+SRP+Tools+Tharamani+Chennai+600041&output=embed",
  workingHours: "9:00 AM – 8:30 PM",
  yearsOfExperience: "15+ Years",
  websiteUrl: "https://welcomecaracservice.com",

  // Positioning & Taglines
  tagline: "Car AC Service & Repair Specialists",
  subTagline: "Dedicated Automotive Air-Conditioning Diagnosis & Technical Repair",
  heroDescription: "Professional air-conditioning service for your car — from cooling problems and diagnosis to AC system repair.",

  // Local SEO
  seo: {
    title: "Car AC Service in Tharamani, Chennai | Welcome Car AC Service",
    h1: "Welcome Car AC Service — Car AC Service & Repair in Chennai",
    description: "Professional car AC service, diagnosis and repair in Tharamani, Chennai near SRP Tools. Specialized solutions for car AC cooling problems, gas recharge, and compressor repairs.",
    keywords: [
      "car AC service in Chennai",
      "car AC repair in Chennai",
      "car AC specialist in Tharamani",
      "car AC service near SRP Tools",
      "car AC cooling problem Chennai",
      "car AC gas service Tharamani",
      "car AC leak check Chennai",
      "car AC compressor service Chennai"
    ]
  }
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tag: string;
}

export const AC_SERVICES: ServiceItem[] = [
  {
    id: "ac-diagnosis",
    number: "01",
    title: "AC DIAGNOSIS",
    subtitle: "Pressure, thermal delta & electrical analysis",
    description: "Digital dual-gauge pressure scans and laser temperature delta measurement to accurately isolate why the cabin is not reaching target chill.",
    highlights: ["High & low side pressure test", "Vent delta temp probe", "Compressor electrical check"],
    tag: "Diagnostics"
  },
  {
    id: "cooling-problems",
    number: "02",
    title: "COOLING PROBLEM RESOLUTION",
    subtitle: "Intermittent or weak cooling diagnosis",
    description: "Resolving cabins that take too long to cool, cut out in traffic jams, or blow warm air during highway driving.",
    highlights: ["Condenser thermal exchange", "Evaporator de-ice sensor", "Blend door airflow check"],
    tag: "Cooling"
  },
  {
    id: "refrigerant-gas-service",
    number: "03",
    title: "AC GAS / REFRIGERANT SERVICE",
    subtitle: "R134a & R1234yf vacuum recovery & recharge",
    description: "Automated evacuation of old refrigerant, deep moisture vacuum pull, and exact OEM gram-weight recharge with fresh PAG compressor oil.",
    highlights: ["Deep vacuum moisture pull", "OEM gram-weight recharge", "PAG compressor lubrication"],
    tag: "Refrigerant"
  },
  {
    id: "gas-leak-check",
    number: "04",
    title: "AC LEAK DIAGNOSIS",
    subtitle: "Nitrogen pressure & electronic sniffing",
    description: "Systematic multi-stage leak pinpointing using 250+ PSI Oxygen-Free Nitrogen hydrostatic testing and electronic halogen sniffers.",
    highlights: ["250+ PSI Nitrogen hold test", "Electronic sniffer probe", "UV dye joint scanning"],
    tag: "Leak Check"
  },
  {
    id: "compressor-service",
    number: "05",
    title: "COMPRESSOR SERVICE & REPAIR",
    subtitle: "Clutch, control valve, bearing & seals",
    description: "Specialized servicing of the AC compressor - magnetic clutch air-gap adjustment, internal displacement valve testing, and shaft seal refurbishment.",
    highlights: ["Clutch air-gap calibration", "Control valve testing", "Pulley bearing repair"],
    tag: "Mechanical"
  },
  {
    id: "ac-system-repair",
    number: "06",
    title: "AC SYSTEM REPAIR & OVERHAUL",
    subtitle: "Condenser, evaporator & complete HVAC lines",
    description: "End-to-end component replacement and closed-loop solvent chemical flushing after mechanical seizure to prevent recurring contamination.",
    highlights: ["Closed-loop solvent flush", "Condenser & coil replacement", "Post-service load validation"],
    tag: "Full Overhaul"
  }
,
  {
    id: "evaporator-service",
    number: "07",
    title: "EVAPORATOR COIL & CABIN AIR QUALITY",
    subtitle: "Under-dash coil sanitization and pollen filtration",
    description: "Deep chemical foam disinfection of the cooling coil, unclogging condensation drain pans, and replacing high-efficiency PM2.5 pollen filters.",
    highlights: ["Foam core sanitization", "Condensate drain clear", "PM2.5 pollen filtration"],
    tag: "Air Quality"
  },
  {
    id: "ac-electrical-scan",
    number: "08",
    title: "AC ELECTRICAL & SENSOR DIAGNOSIS",
    subtitle: "Climate control sensors, blend actuators and relays",
    description: "Diagnostic scan of automotive climate ECU data, ambient/cabin thermistor testing, dual-action radiator fan relay and actuator motor checks.",
    highlights: ["HVAC sensor live data", "Blend door motor calibration", "High/low pressure switches"],
    tag: "Electrical"
  }
];

export interface ProblemItem {
  id: string;
  symptom: string;
  shortDesc: string;
  possibleCauses: string[];
  recommendedInspection: string;
  urgency: "Immediate" | "High" | "Moderate";
}

export const AC_PROBLEMS: ProblemItem[] = [
  {
    id: "not-cooling",
    symptom: "NOT COOLING",
    shortDesc: "Vents blow warm or ambient air immediately when switched on.",
    possibleCauses: [
      "Refrigerant loss due to pinhole leak in condenser or pipe joints",
      "Compressor magnetic clutch or displacement valve failure",
      "Tripped high-pressure safety switch or blown fan relay",
      "Faulty temperature blend door actuator trapped on heater mode"
    ],
    recommendedInspection: "Dual-manifold high/low pressure test to verify standing charge, followed by compressor coil electrical continuity check.",
    urgency: "Immediate"
  },
  {
    id: "weak-airflow",
    symptom: "WEAK AIRFLOW",
    shortDesc: "Fan motor is active but minimal air velocity exits dashboard louvers.",
    possibleCauses: [
      "Severe dust and debris clogging the cabin pollen filter",
      "Evaporator coil frozen solid into an ice block due to faulty thermistor",
      "Blower motor squirrel cage packed with lint or road grit",
      "Detached or misaligned internal dashboard air duct seals"
    ],
    recommendedInspection: "Endoscopic camera inspection of evaporator face and cabin filter airflow delta benchmark.",
    urgency: "Moderate"
  },
  {
    id: "bad-smell",
    symptom: "BAD SMELL",
    shortDesc: "Damp, sour, moldy or vinegar odor discharging into the cabin upon start.",
    possibleCauses: [
      "Bacterial colonies and fungus growing in the dark, damp evaporator box",
      "Decomposing organic matter trapped in the fresh air cowl intake",
      "Stagnant condensation water pooled due to a blocked drain line",
      "Saturated, mildewed activated carbon cabin filter"
    ],
    recommendedInspection: "Chemical antibacterial foam sanitization of cooling core and pressurized condensate drain flush.",
    urgency: "Moderate"
  },
  {
    id: "no-air",
    symptom: "NO AIR",
    shortDesc: "Blower fan fails to spin at all speeds, no airflow whatsoever.",
    possibleCauses: [
      "Blown blower motor fuse or burned thermal resistor pack",
      "Seized blower motor bearings or worn carbon brushes",
      "Faulty climate control head unit or fan switch wiring harness",
      "Damaged ground wire or electronic blower speed control module"
    ],
    recommendedInspection: "12V electrical feed and ground probing at blower connector, plus blower resistor pack resistance check.",
    urgency: "High"
  },
  {
    id: "strange-noise",
    symptom: "STRANGE NOISE",
    shortDesc: "Hissing, metallic screech, grinding or loud clicks when AC activates.",
    possibleCauses: [
      "Worn compressor pulley idler bearing producing high-pitch whine",
      "Slipping magnetic clutch plate air-gap causing squeal on engagement",
      "Refrigerant rushing through expansion valve due to severe gas starvation (hiss)",
      "Foreign debris in blower motor wheel creating flapping or ticking noise"
    ],
    recommendedInspection: "Stethoscopic acoustic inspection of compressor pulley bearings and system pressure equalization test.",
    urgency: "Immediate"
  },
  {
    id: "water-leak",
    symptom: "WATER LEAK",
    shortDesc: "Water dripping onto the passenger footwell carpet during or after AC use.",
    possibleCauses: [
      "Clogged or kinked HVAC evaporator condensate drain hose",
      "Cracked evaporator drain pan assembly inside the central dashboard",
      "Dislodged rubber firewall grommet allowing runoff back into cabin",
      "Severe evaporator coil icing melting rapidly when parked"
    ],
    recommendedInspection: "Underbody drain hose purge with low-pressure air and water-pan flood test.",
    urgency: "High"
  }
];

export interface AnatomyComponent {
  id: string;
  name: string;
  stepNumber: string;
  state: string;
  shortDescription: string;
  technicalRole: string;
  commonFailureSign: string;
}

export const ANATOMY_COMPONENTS: AnatomyComponent[] = [
  {
    id: "compressor",
    name: "AC Compressor",
    stepNumber: "01",
    state: "High-Pressure Gas Pump",
    shortDescription: "The engine-driven heart of the system that pressurizes refrigerant.",
    technicalRole: "Compresses low-pressure cool refrigerant vapor into high-pressure, high-temperature gas, propelling it directly to the condenser.",
    commonFailureSign: "Warm air, repeated clutch clicking, metallic grinding sound, or belt squeal."
  },
  {
    id: "condenser",
    name: "AC Condenser",
    stepNumber: "02",
    state: "Heat Dissipation Radiator",
    shortDescription: "Front-mounted radiator that sheds absorbed cabin heat to the outside air.",
    technicalRole: "Extracts latent heat from hot gas as ambient air passes through its micro-fins, condensing the refrigerant into high-pressure liquid.",
    commonFailureSign: "Stone impact leaks, bent cooling fins, weak cooling when idling in traffic."
  },
  {
    id: "expansion",
    name: "Expansion Valve (TXV)",
    stepNumber: "03",
    state: "Pressure Drop Metering Nozzle",
    shortDescription: "Precision metering valve that creates the thermodynamic temperature drop.",
    technicalRole: "Restricts high-pressure liquid and sprays it into a low-pressure atomized mist, causing an immediate thermodynamic temperature plunge.",
    commonFailureSign: "Stuck closed (warm vents) or stuck open (frost on pipes and poor cooling)."
  },
  {
    id: "evaporator",
    name: "Evaporator Core",
    stepNumber: "04",
    state: "Under-Dashboard Cooling Coil",
    shortDescription: "Chilled aluminum core located inside the dashboard that absorbs cabin heat.",
    technicalRole: "Cold low-pressure refrigerant absorbs cabin heat through its aluminum core, turning back into vapor while condensing out humidity.",
    commonFailureSign: "Micro-leaks emitting sweet gas odor, ice buildup, damp musty smell."
  },
  {
    id: "cabin",
    name: "Cabin Blower & Vents",
    stepNumber: "05",
    state: "Cold Air Delivery",
    shortDescription: "Directs ice-cold, dehumidified air into the passenger compartment.",
    technicalRole: "Draws cabin air across the freezing evaporator fins and discharges purified, high-velocity chilled air through the dashboard vents.",
    commonFailureSign: "Weak airflow, noisy fan bearing, intermittent fan speed control."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "INSPECT",
    subtitle: "Customer complaint analysis",
    description: "Understand the customer cooling complaint and conduct non-intrusive vent temperature delta benchmarking."
  },
  {
    step: "02",
    title: "DIAGNOSE",
    subtitle: "Dual-gauge & leak testing",
    description: "Dual-manifold pressure testing, electrical circuit scans, and electronic leak sniffing to find the root cause."
  },
  {
    step: "03",
    title: "SERVICE",
    subtitle: "Specialized HVAC repair",
    description: "Execute dedicated AC repair - deep vacuum evacuation, component repair, and OEM-spec oil & gas recharge."
  },
  {
    step: "04",
    title: "TEST",
    subtitle: "Thermal validation under load",
    description: "Validate vent discharge temperature under load (idle & 2000 RPM) to ensure ice-cold cabin comfort before delivery."
  }
];

export interface WorkCaseItem {
  id: string;
  number: string;
  title: string;
  vehicle: string;
  category: string;
  issue: string;
  diagnostic: string;
  solution: string;
  stats: {
    initialTemp: string;
    finalTemp: string;
    duration: string;
    pressureDelta: string;
  };
  summary: string;
}

export const WORK_CASES: WorkCaseItem[] = [
  {
    id: "case-01",
    number: "01",
    title: "CAR AC COOLING RESTORATION",
    vehicle: "HONDA CITY i-VTEC",
    category: "Cooling Restoration",
    issue: "Vent discharge lukewarm at 22°C on hot afternoons; compressor clutch disengaging erratically in traffic.",
    diagnostic: "Dual-manifold gauges showed high head pressure (320 PSI) due to condenser fin contamination combined with slipped magnetic clutch air-gap.",
    solution: "Precision ultrasonic condenser cleaning, magnetic clutch shim recalibration to 0.45mm OEM spec, deep nitrogen vacuum & R134a precision recharge.",
    stats: {
      initialTemp: "22.0°C",
      finalTemp: "4.5°C",
      duration: "3.5 Hours",
      pressureDelta: "145 PSI Drop"
    },
    summary: "Restored ice-cold 4.5°C cabin delivery with whisper-quiet clutch engagement and balanced high/low pressures under highway and idle loads."
  },
  {
    id: "case-02",
    number: "02",
    title: "AC GAS & LEAK CHECK",
    vehicle: "HYUNDAI CRETA 1.6 CRDi",
    category: "Leak Diagnosis",
    issue: "Refrigerant emptied twice within 2 months following quick top-ups at non-specialist garages.",
    diagnostic: "280 PSI Oxygen-Free Nitrogen hold test combined with electronic halogen sniffing detected a micro-fracture at the lower condenser header tank weld.",
    solution: "Replaced damaged condenser with OEM spec unit, renewed HNBR rubber O-rings, 45-minute deep moisture vacuum evacuation, and exact 480g R134a recharge with PAG-46 oil.",
    stats: {
      initialTemp: "26.5°C",
      finalTemp: "5.0°C",
      duration: "2.5 Hours",
      pressureDelta: "0 PSI Leakage"
    },
    summary: "Guaranteed leak-free closed loop backed by 24h pressure retention test; immediate frost formation at center dash vents."
  },
  {
    id: "case-03",
    number: "03",
    title: "COMPRESSOR SERVICE",
    vehicle: "TOYOTA INNOVA CRYSTA",
    category: "Compressor Overhaul",
    issue: "Severe metallic grinding noise upon pressing AC button; engine RPM bogging down under AC load.",
    diagnostic: "Seized double-row pulley idler bearing and glazed magnetic clutch friction plate; internal displacement control valve functioning normally.",
    solution: "Bench-serviced compressor assembly: pressed in new Japanese high-speed NSK pulley bearing, resurfaced clutch drive plate, set air gap, and renewed shaft nose seal.",
    stats: {
      initialTemp: "19.5°C",
      finalTemp: "4.8°C",
      duration: "4.0 Hours",
      pressureDelta: "Zero Bearing Play"
    },
    summary: "Saved owner from expensive full compressor replacement; eliminated 100% of engine bay noise with seamless AC engagement."
  },
  {
    id: "case-04",
    number: "04",
    title: "CONDENSER CLEANING & FLUSH",
    vehicle: "VOLKSWAGEN POLO GT TSI",
    category: "Thermal Performance",
    issue: "AC cooling cuts out after 15 minutes of slow city driving; cooling resumes only when cruising at high speed.",
    diagnostic: "Severe mud and insect debris blinding the lower 60% of condenser micro-channels, causing high-pressure transducer cutoff in traffic.",
    solution: "Removed front grille for closed chemical foam descaling of condenser fins, radiator separation flush, and high-pressure sensor calibration.",
    stats: {
      initialTemp: "24.0°C",
      finalTemp: "5.2°C",
      duration: "2.0 Hours",
      pressureDelta: "Head Temp -18°C"
    },
    summary: "Unrestricted ram-air heat dissipation; steady continuous cooling during peak traffic congestion."
  }
];
export const WORK_PORTFOLIO = WORK_CASES;

export const FAQ_LIST = [
  {
    question: "Why is my car AC not cooling?",
    answer: "A car AC blowing warm air is typically caused by low refrigerant gas from an undetected leak, a failed compressor clutch, a clogged cabin pollen filter, or a blocked condenser. A physical dual-gauge pressure inspection is required to determine the exact cause."
  },
  {
    question: "Why does car AC gas keep reducing?",
    answer: "Automotive AC systems are hermetically sealed closed-loop systems. Refrigerant does not simply 'evaporate' or get consumed by use. If your gas level is dropping, there is an active physical leak in the condenser, evaporator, rubber hoses, or compressor seals that must be repaired before recharging."
  },
  {
    question: "How often should car AC be serviced?",
    answer: "We recommend a comprehensive AC checkup once every 12 months or 15,000 km. This includes cleaning the condenser fins, replacing the cabin air filter, and testing operating pressures to prevent sudden compressor failure during hot seasons."
  },
  {
    question: "What causes weak AC cooling?",
    answer: "Weak cooling at idle usually points to inadequate airflow through the front condenser. Common culprits include a failing radiator/condenser fan motor, road dirt clogging the condenser fins, or a compressor losing volumetric efficiency at lower engine RPMs."
  },
  {
    question: "Why is my car AC blowing warm air?",
    answer: "Intermittent or warm cooling often results from an evaporator freezing over (faulty de-ice thermistor), an expanding magnetic clutch gap slipping when heated, or a high-pressure safety switch tripping due to overheating."
  },
  {
    question: "What can cause AC compressor problems?",
    answer: "Signs of compressor distress include loud grinding or squealing noises upon pressing the AC button, visible oil seepage around the compressor nose seal, burnt odor from the drive belt, or failure of the center clutch plate to spin."
  },
  {
    question: "Where can I get car AC service in CITY?",
    answer: "You can visit WELCOME CAR AC SERVICE located at FULL_ADDRESS, AREA, CITY. We specialize exclusively in automotive air conditioning diagnosis, electronic leak detection, gas recharge, and compressor repairs."
  }
];
