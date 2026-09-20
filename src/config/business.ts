export const BUSINESS_CONFIG = {
  // Business Identity
  businessName: "WELCOME CAR A/C SERVICE",
  websiteUrl: "https://welcomecaracservice.com",

  // Positioning & Taglines
  tagline: "Car A/C Service & Repair Specialists",
  subTagline: "Dedicated Automotive Air-Conditioning Diagnosis & Technical Repair",
  heroDescription: "Professional air-conditioning service for your car — from cooling problems and diagnosis to A/C system repair.",

  // Local SEO
  seo: {
    title: "Car A/C Service in Tharamani, Chennai | Welcome Car A/C Service",
    h1: "Welcome Car A/C Service — Car A/C Service & Repair in Chennai",
    description: "Professional car A/C service, diagnosis and repair in Tharamani, Chennai near SRP Tools. Specialized solutions for car A/C cooling problems, gas recharge, and compressor repairs.",
    keywords: [
      "car A/C service in Chennai",
      "car A/C repair in Chennai",
      "car A/C specialist in Tharamani",
      "car A/C service near SRP Tools",
      "car A/C cooling problem Chennai",
      "car A/C gas service Tharamani",
      "car A/C leak check Chennai",
      "car A/C compressor service Chennai"
    ]
  }
};

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
    shortDesc: "Hissing, metallic screech, grinding or loud clicks when A/C activates.",
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
    shortDesc: "Water dripping onto the passenger footwell carpet during or after A/C use.",
    possibleCauses: [
      "Clogged or kinked HVA/C evaporator condensate drain hose",
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
    name: "A/C Compressor",
    stepNumber: "01",
    state: "High-Pressure Gas Pump",
    shortDescription: "The engine-driven heart of the system that pressurizes refrigerant.",
    technicalRole: "Compresses low-pressure cool refrigerant vapor into high-pressure, high-temperature gas, propelling it directly to the condenser.",
    commonFailureSign: "Warm air, repeated clutch clicking, metallic grinding sound, or belt squeal."
  },
  {
    id: "condenser",
    name: "A/C Condenser",
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
    subtitle: "Specialized HVA/C repair",
    description: "Execute dedicated A/C repair - deep vacuum evacuation, component repair, and OEM-spec oil & gas recharge."
  },
  {
    step: "04",
    title: "TEST",
    subtitle: "Thermal validation under load",
    description: "Validate vent discharge temperature under load (idle & 2000 RPM) to ensure ice-cold cabin comfort before delivery."
  }
];

export const FAQ_LIST = [
  {
    question: "Why is my car A/C not cooling?",
    answer: "A car A/C blowing warm air is typically caused by low refrigerant gas from an undetected leak, a failed compressor clutch, a clogged cabin pollen filter, or a blocked condenser. A physical dual-gauge pressure inspection is required to determine the exact cause."
  },
  {
    question: "Why does car A/C gas keep reducing?",
    answer: "Automotive A/C systems are hermetically sealed closed-loop systems. Refrigerant does not simply 'evaporate' or get consumed by use. If your gas level is dropping, there is an active physical leak in the condenser, evaporator, rubber hoses, or compressor seals that must be repaired before recharging."
  },
  {
    question: "How often should car A/C be serviced?",
    answer: "We recommend a comprehensive A/C checkup once every 12 months or 15,000 km. This includes cleaning the condenser fins, replacing the cabin air filter, and testing operating pressures to prevent sudden compressor failure during hot seasons."
  },
  {
    question: "What causes weak A/C cooling?",
    answer: "Weak cooling at idle usually points to inadequate airflow through the front condenser. Common culprits include a failing radiator/condenser fan motor, road dirt clogging the condenser fins, or a compressor losing volumetric efficiency at lower engine RPMs."
  },
  {
    question: "Why is my car A/C blowing warm air?",
    answer: "Intermittent or warm cooling often results from an evaporator freezing over (faulty de-ice thermistor), an expanding magnetic clutch gap slipping when heated, or a high-pressure safety switch tripping due to overheating."
  },
  {
    question: "What can cause A/C compressor problems?",
    answer: "Signs of compressor distress include loud grinding or squealing noises upon pressing the A/C button, visible oil seepage around the compressor nose seal, burnt odor from the drive belt, or failure of the center clutch plate to spin."
  },
  {
    question: "Where can I get car A/C service in CITY?",
    answer: "You can visit WELCOME CAR A/C SERVICE located at FULL_ADDRESS, AREA, CITY. We specialize exclusively in automotive air conditioning diagnosis, electronic leak detection, gas recharge, and compressor repairs."
  }
];
