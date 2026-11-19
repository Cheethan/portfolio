export const profile = {
  name: "Cheethan Aadithya Bokkolla",
  short: "Cheethan Aadithya",
  role: "Solutions Engineer",
  company: "Threatcop",
  location: "India — Noida",
  email: "cheethan2004@gmail.com",
  site: "https://google.com",
  resume: "/cheethan_aadithya_resume.pdf",
  bio: [
    "I'm a Presales/Solutions Engineer at Threatcop, working on cybersecurity solutions, enterprise PoCs, and email security.",
    "Outside work, I'm curious about technology and enjoy exploring cybersecurity, experimenting with AI, and building things in my homelab.",
  ],
} as const;

// key -> lucide icon is mapped in Socials.tsx, so this file stays React-free
export const socials = [
  {
    key: "github",
    label: "GitHub",
    handle: "Cheethan",
    href: "https://github.com/Cheethan",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "cheethan-aadithya",
    href: "https://www.linkedin.com/in/cheethan-aadithya/",
  },
  {
    key: "mail",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
] as const;

type Role = { title: string; period: string; bullets: string[] };

export const experience: {
  company: string;
  location: string;
  roles: Role[];
}[] = [
  {
    company: "Threatcop",
    location: "Noida, India",
    roles: [
      {
        title: "Presales Engineer / Solutions Engineer",
        period: "Jul 2026 — Present",
        bullets: [
          "Worked on PoCs for 40+ enterprise customers, troubleshooting email delivery issues and analyzing mail traces.",
          "Handled SSO integrations, SMTP configurations, Microsoft 365 whitelisting, and email gateway troubleshooting.",
          "Built a WebRTC based deepfake simulation PoC for Google Meet, Teams, and Zoom, supporting up to 10 concurrent streams and later adopted for production.",
          "Managed DNS and email authentication records (SPF, DKIM, DMARC) across 20+ domains.",
        ],
      },
      {
        title: "Presales Engineer Intern",
        period: "Jan 2026 — Jul 2026",
        bullets: [
          "Worked on customer PoCs and handled technical requirements for enterprise clients.",
          "Assisted with Microsoft 365 whitelisting, SMTP configurations, email gateways, and Active Directory integrations.",
          "Built a RAG based system with a team of three to automate the RFP process.",
        ],
      },
    ],
  },
  {
    company: "AmberFlux EdgeAI Pvt Ltd.",
    location: "Remote",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "May 2025 — Jul 2025",
        bullets: [
          "Integrated the D-ID SDK with a vector database and RAG pipeline for real time AI driven media interactions.",
          "Built React and TypeScript components for analytics dashboards, data driven interfaces, and WebRTC based video features.",
          "Implemented WebRTC keep alive handling for connections affected by NAT and firewall timeouts.",
          "Customized the Zoom Meeting SDK with branded layouts and UI components.",
        ],
      },
    ],
  },
];

// export const earlier: { company: string; role: string; period: string }[] = [
//   {
//     company: "Maxint, Inc",
//     role: "Backend Developer Intern",
//     period: "Sep 2024 — Jan 2025",
//   },
//   {
//     company: "Nomorede",
//     role: "Full Stack Developer Intern",
//     period: "Jul — Sep 2024",
//   },
//   {
//     company: "ONBO",
//     role: "Frontend Developer Intern",
//     period: "Aug — Dec 2023",
//   },
// ];


export const featured: {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  repo: string;
  live?: string;
  video?: string;
  article?: string;
}[] = [
  {
    slug: "homelab",
    title: "Homelab",
    tagline: "A self-hosted media server built with Linux and Jellyfin.",
    stack: ["Linux", "CasaOS", "Jellyfin", "ngrok"],
    bullets: [
      "Set up a Linux home server on a 1TB hard disk for self-hosted media and file management.",
      "Used CasaOS for server administration, file transfers, and service deployment.",
      "Deployed Jellyfin for media streaming across multiple devices, supporting 7 simultaneous streams.",
      "Configured remote access using ngrok to access media and personal documents securely outside the local network.",
    ],
    repo: "https://github.com/Cheethan/Homelab",
    article: "YOUR_MEDIUM_ARTICLE_URL",
  },
  {
    slug: "universal-price-comparison",
    title: "Universal Product Price Comparison",
    tagline: "A real-time price comparison platform for discovering the best e-commerce deals.",
    stack: [
      "Python",
      "Scrapy",
      "ScraperAPI",
      "Cheerio",
      "IP Rotation",
      "Web Scraping",
    ],
    bullets: [
      "Built a platform to scrape product listings from Amazon, Flipkart, and Croma, comparing prices, ratings, and deals.",
      "Implemented product bookmarking, price history tracking, and automated price drop alerts.",
      "Used Scrapy for static websites and ScraperAPI for JavaScript heavy platforms to aggregate product data.",
      "Applied rate limiting, and custom request headers to improve scraping reliability.",
      "Optimized search performance with live data retrieval in approximately 15 seconds and instant results for subsequent searches through caching.",
    ],
    repo: "https://github.com/Cheethan/Price-Comparison-site",
    live: "https://price-comparison-site-smoky.vercel.app/",
  },
];



export const otherWork: {
  title: string;
  note: string;
  repo: string;
  live?: string;
}[] = [
  {
    title: "Flipkart Mobile Scraper",
    note: "An Apify actor for scraping Flipkart mobile product listings.",
    repo: "https://github.com/Cheethan/flipkart-scraper-mobiles",
  },
  {
    title: "Kanban Dashboard",
    note: "A responsive project management dashboard with dark and light themes.",
    repo: "https://github.com/Cheethan/Project-Dashboard",
  },
  {
    title: "URL Shortener with Analytics",
    note: "URL shortening, QR code generation, and click analytics.",
    repo: "https://github.com/Cheethan/URL-Shortener",
  },
];



export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["C/C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend & Frameworks",
    items: [
      "Node.js",
      "Next.js",
      "MERN Stack",
      "REST APIs",
      "Scrapy",
      "Cheerio",
      "WebRTC",
      "RAG",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    label: "Databases & Infrastructure",
    items: [
      "MySQL",
      "MongoDB",
      "Linux",
      "CasaOS",
      "Docker",
      "ngrok",
    ],
  },
  {
    label: "Cybersecurity & Email Security",
    items: [
      "SPF",
      "DKIM",
      "DMARC",
      "SMTP",
      "SSO",
      "Microsoft O365",
      "Active Directory",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "OSINT",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Grep",
      "Debugger",
      "ScraperAPI",
      "IP Rotation",
      "Playwright",
      "Apify",
    ],
  },
];


export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Jaypee Institute of Information Technology, Noida",
  period: "2022 — 2026",
};

// export const achievements: { title: string; note: string; period: string }[] = [
//   {
//     title: "Code with Cisco 2025 Finalist",
//     note: "Selected among the top 75 of 30,000+ applicants and named one of three project nominees in the code-a-thon.",
//     period: "2025",
//   },
// ];

export const community: {
  role: string;
  org: string;
  period: string;
  note: string;
}[] = [
  {
    role: "Social Media Manager",
    org: "Optica Society, JIIT Noida",
    period: "Jan - Sep 2023",
    note: "Managed the society's Instagram presence, creating and publishing posts to engage the student community and promote events and activities.",
  },
];
