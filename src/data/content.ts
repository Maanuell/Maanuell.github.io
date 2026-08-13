export type Status = "live" | "wip" | "done";
export type Visual = "robot" | "hydrogen" | "solar" | "neural" | "chart" | "wave";

export interface Project {
  title: string;
  stack: string;
  status: Status;
  statusLabel: string;
  blurb: string;
  points?: string[];
  visual: Visual;
  span: string;
  aspect: string;
}

export const profile = {
  name: "Emmanuel Maduabum",
  initials: "EM",
  city: "Hangzhou",
  eyebrow: "PORTFOLIO '26",
  roles: ["Engineer", "Modeller", "Builder", "Data Analyst"],
  description:
    "Electrical engineer working across energy systems, financial modelling and machines that run themselves.",
  email: "emmanuelmaduabum@gmail.com",
  github: "https://github.com/Maanuell",
  linkedin: "https://www.linkedin.com/in/emmanuel-maduabum",
  site: "https://maanuell.github.io",
  cv: "Maduabum_Emmanuel_CV.pdf",
  phones: ["+86 189 6806 4285", "+233 54 539 9998"],
};

export const featured: Project[] = [
  {
    title: "Autonomous Lawn Mower Robot",
    stack: "Self-built platform · ROS · RTAB-Map SLAM · reinforcement learning",
    status: "wip",
    statusLabel: "Autonomy in progress",
    blurb:
      "A working outdoor robot I designed, built and wired myself — chassis, drive system, power and control electronics. The hardware runs. The interesting problem is getting it to navigate an outdoor space reliably enough to leave alone.",
    points: [
      "Built: mechanical platform, drive and power electronics, control wiring.",
      "In development: navigation on ROS with RTAB-Map for mapping and localisation.",
      "Exploring: reinforcement learning for coverage path planning.",
      "Outdoor failure modes have little to do with the algorithm — terrain, glare, seasonal change.",
    ],
    visual: "robot",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "Green Hydrogen & Fuel Cell Study",
    stack: "Technical & economic feasibility · system sizing",
    status: "wip",
    statusLabel: "Study stage",
    blurb:
      "Surplus renewable power is worth very little the moment it is generated and a great deal six hours later. This study asks whether an electrolyser and fuel cell can bridge that gap.",
    points: [
      "Coupling electrolyser and fuel cell to surplus renewable and waste-to-energy generation.",
      "Technology selection and indicative sizing against available surplus power and water.",
      "The point at which a demonstration unit becomes economically defensible.",
    ],
    visual: "hydrogen",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "Probabilistic Solar Forecasting",
    stack: "Python · PyTorch · multi-modal deep learning · MEng research",
    status: "wip",
    statusLabel: "MEng research",
    blurb:
      "A forecasting system that estimates its own prediction error and reports a confidence score with every forecast — so an operator knows not just the number, but whether to act on it.",
    points: [
      "Multi-modal fusion of sky imagery, ground sensors and numerical weather prediction.",
      "Data ingestion and quality-control pipeline built and validated across three sites.",
    ],
    visual: "neural",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
  {
    title: "Solar Irradiance Forecasting",
    stack: "MATLAB · LSTM, ConvLSTM · time-series modelling",
    status: "done",
    statusLabel: "Completed",
    blurb:
      "Recurrent and convolutional-recurrent models for short-horizon irradiance prediction, benchmarked against each other. The work that pulled me into my current research area.",
    visual: "solar",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
  },
];

export const alsoBuilt: Project[] = [
  {
    title: "Cloud Classification with CNNs",
    stack: "MATLAB · convolutional neural networks · image processing",
    status: "done",
    statusLabel: "Completed",
    blurb:
      "A CNN trained to classify sky-image cloud types — the perception half of a solar nowcasting system. You cannot predict what the sun will do without first reading the sky.",
    visual: "neural",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Sales Performance Dashboard",
    stack: "Microsoft Power BI · data modelling",
    status: "done",
    statusLabel: "Completed",
    blurb:
      "A raw transactional dataset turned into an interactive dashboard: cleaning and shaping, calculated measures, and visuals built for people who will never open the underlying table.",
    visual: "chart",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Speed-Bump Energy Generator",
    stack: "Mechanical design · energy conversion · system modelling",
    status: "done",
    statusLabel: "Completed",
    blurb:
      "A road-mounted harvester converting the motion of passing vehicles into electricity for street lighting — the conversion mechanism, and what a road's traffic volume is actually worth in watts.",
    visual: "wave",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

export const experience = [
  {
    role: "Business Operations Manager",
    org: "Cotto Enterprise",
    place: "Abia State, Nigeria",
    period: "Oct 2023 — Present",
    blurb:
      "Runs the commercial engine of a multi-region distribution business: sales, logistics, budgeting and compliance. Owns the numbers end to end, from the delivery schedule to the management report.",
  },
  {
    role: "Project Engineer",
    org: "Mcjones Energy",
    place: "Accra, Ghana",
    period: "Mar 2023 — Dec 2023",
    blurb:
      "Took renewable energy projects from first site visit to signed-off business case — the audit, the system design in PVsyst, and the financial model that decided whether the project went ahead.",
  },
  {
    role: "Junior Research Analyst",
    org: "HerrnHut Corp",
    place: "Tema, Ghana",
    period: "Sep 2022 — Feb 2023",
    blurb:
      "Research and financial analysis behind a multi-site eco-centre development. Contributed to the consolidated financial model and produced the power requirement analysis used to size its energy provision.",
  },
  {
    role: "Electrical Engineering Intern",
    org: "GFEEL Engineering",
    place: "Tema, Ghana",
    period: "Sep 2021 — Feb 2022",
    blurb:
      "Design, installation and maintenance of electrical systems across residential, commercial and industrial sites — wiring, CCTV, solar and electrical fencing.",
  },
];

export const stats = [
  { value: "4", suffix: "", label: "Years Experience" },
  { value: "3", suffix: "", label: "Countries Worked" },
  { value: "7", suffix: "", label: "Projects Built" },
];

export const toolkit = [
  { group: "Modelling", items: "Advanced Excel, financial modelling, sensitivity analysis, data analysis" },
  { group: "Programming", items: "Python (NumPy, Pandas, PyTorch), MATLAB" },
  { group: "Energy", items: "PVsyst, energy auditing, PV system design, feasibility studies" },
  { group: "Robotics", items: "ROS, RTAB-Map SLAM, embedded control, reinforcement learning" },
  { group: "Design", items: "AutoCAD 2D/3D, Proteus, technical documentation" },
  { group: "Languages", items: "English (fluent), Igbo (native), Mandarin (HSK 2)" },
];

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];
