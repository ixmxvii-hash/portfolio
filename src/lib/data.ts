export const projects = [
  {
    title: "COPE Insurance",
    description:
      "Independent insurance agency platform with carrier comparison, instant quoting, and client portal. Built with a focus on conversion and trust.",
    url: "https://cope-gamma.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    color: "from-blue-500/20 to-blue-600/5",
    accent: "#0051BA",
  },
  {
    title: "ICIT Solutions",
    description:
      "Cloud-first IT services company site. Managed IT, cybersecurity, and cloud architecture for Texas businesses across 7 industries.",
    url: "https://icitsolutions.com/",
    tags: ["Web Design", "SEO", "Cloud", "Dark Theme"],
    color: "from-indigo-500/20 to-indigo-600/5",
    accent: "#4F46E5",
  },
  {
    title: "ICIT Odoo ERP",
    description:
      "Odoo ERP implementation partner portal. Quote-to-cash, procure-to-pay workflows with 90-day rollout methodology.",
    url: "https://odoo.icitsolutions.com/",
    tags: ["Odoo", "ERP", "Automation", "Next.js"],
    color: "from-orange-500/20 to-orange-600/5",
    accent: "#F97316",
  },
  {
    title: "The Frame Theory",
    description:
      "Photography portfolio and booking platform. Glassmorphism design, session booking, integrated payments, and community features.",
    url: "https://theframetheory.co/",
    tags: ["Next.js", "Glassmorphism", "Payments", "Photography"],
    color: "from-amber-500/20 to-amber-600/5",
    accent: "#D4A853",
  },
  {
    title: "Pairio",
    description:
      "macOS menu bar app that enables AirPods audio sharing on Mac. Select multiple devices, adjust volumes, and share audio instantly.",
    url: "#",
    tags: ["Swift", "SwiftUI", "CoreAudio", "CoreBluetooth"],
    color: "from-blue-500/20 to-blue-600/5",
    accent: "#3B82F6",
  },
  {
    title: "Fancy Organizer",
    description:
      "macOS desktop app for Fancy Apartments that uses AI/ML to analyze property footage and automatically sort and categorize it.",
    url: "#",
    tags: ["Swift", "CoreML", "macOS", "AI/ML"],
    color: "from-violet-500/20 to-violet-600/5",
    accent: "#8B5CF6",
  },
] as const

export const skills = [
  {
    category: "Frontend",
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion / Framer Motion",
      "Swift / SwiftUI",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "Supabase",
      "REST / GraphQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Vercel",
      "DigitalOcean",
      "Docker",
    ],
  },
  {
    category: "Native & AI",
    items: [
      "macOS / iOS Apps",
      "CoreML / Vision",
      "CoreAudio / Bluetooth",
      "Networking",
      "Cybersecurity",
    ],
  },
] as const

export const experience = [
  {
    role: "Computer Networking Student",
    company: "University of St. Thomas",
    period: "Present",
    description: "Studying computer networking, infrastructure, and systems administration.",
  },
  {
    role: "Founder & Developer",
    company: "The Frame Theory Co.",
    period: "Present",
    description: "Photography brand with a full-stack booking platform, community portal, and integrated payment processing.",
  },
  {
    role: "Developer",
    company: "Fancy Apartments",
    period: "Present",
    description: "Built a macOS app using AI/ML to analyze property footage and automatically sort and organize it.",
  },
  {
    role: "Junior Developer",
    company: "ICIT Solutions",
    period: "Present",
    description: "Building web platforms, Odoo ERP implementations, and cloud solutions for Texas businesses.",
  },
] as const
