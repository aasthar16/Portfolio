export const profile = {
  name: "Aastha Rathore",
  role: "Backend & AI Engineer",
  location: "Nagda, Madhya Pradesh, India",
  email: "rathoreaastha1510@gmail.com",
  phone: "+91 9244316773",
  linkedin: "https://www.linkedin.com/in/aastha-rathore-85a5b02a4/",
  github: "https://github.com/aasthar16",
  leetcode: "https://leetcode.com/u/aasthar_1611/",
  resume: "https://drive.google.com/file/d/1LjKDqXCEA5dZ_LD_jQlY_Dns8bfI9TX0/view?usp=sharing",
  tagline:
    "I build robust backend systems and intelligent AI applications, focusing on scalable architecture, precise data, and seamless performance.",
    about: [
    "I’m an undergraduate at MNIT Jaipur engineering scalable backend systems and reliable artificial intelligence applications. I work primarily with modern backend frameworks, distributed databases, and multi-agent AI ecosystems.",
    
    "I care about the foundation behind a polished product: secure data flows, intelligent workflows, and clean system design. I believe in tackling ambitious problems with steady, focused effort, prioritizing clear communication and a resilient mindset to build technology that truly matters."
  ],
};

export const stats = [
  { v: "600+", l: "LeetCode problems" },
  { v: "1600+", l: "Contest rating" },
  { v: "8.27", l: "GPA at MNIT" },
  { v: "25+", l: "GitHub repositories" },
];

export const education = [
  { t: "B.Tech, Electrical Engineering", s: "Malaviya National Institute of Technology (MNIT), Jaipur", d: "2023 – 2027", n: "GPA 8.27" },
];

export type Achievement = {
  icon: "trophy" | "medal" | "code" | "shield";
  label: string; title: string; tag: string;
};

export const achievements: Achievement[] = [
  { icon: "trophy", label: "Winner", title: "Google for Education Higher Ed Program", tag: "2025" },
  { icon: "medal", label: "Rank 992", title: "ICPC Amritapuri Preliminary Round", tag: "2025" },
  { icon: "code", label: "600+ problems solved", title: "LeetCode, 1600+ contest rating", tag: "DSA" },
  { icon: "shield", label: "Joint Secretary", title: "InfoSec Club, MNIT Jaipur", tag: "Sept 2025 – Present" },
];

export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  "Frameworks & Libraries": ["NestJS", "Next.js", "Prisma ORM", "Socket.io", "LangGraph", "LangChain", "Pydantic", "Scikit-learn", "FAISS"],
  Databases: ["PostgreSQL (pgvector)", "MongoDB", "Redis"],
  "Dev Tools & Cloud": ["Git", "Docker", "CI/CD", "Jira", "Vitest", "Artillery", "LangSmith", "MLflow", "DagsHub", "Railway", "Vercel", "Render"],
  "AI / ML": ["Multi-Agent Systems", "Agentic RAG", "LLM Tool Calling", "Vector Search", "NLP", "ML", "DL", "GenAI"],
  "CS Fundamentals": ["DSA", "System Design (HLD)", "OOPs", "DBMS", "Computer Networks", "Operating Systems", "REST APIs", "Agile Scrum"],
};

export const experience = {
  role: "Software Development Intern",
  org: "TECHNath Consultancy Services Pvt. Ltd.",
  period: "May 2026 –  July 2026",
};

export type Project = {
  title: string; blurb: string; stack: string[];
  metrics: { v: string; l: string }[]; github: string; demo?: string;
};

export const projects: Project[] = [
  {
    title: "HealthNode",
    blurb: "Multi-tiered NestJS healthcare booking backend with strict RBAC and an event-driven real-time alert pipeline.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Socket.io", "Artillery", "Railway"],
    metrics: [{ v: "−60.8%", l: "alert latency (51ms)" }, { v: "0", l: "double-bookings @ 500+ users" }, { v: "97%+", l: "payment success" }],
    github: "https://github.com/aasthar16/Healthcare-appointment-Booking-App",
    demo: "https://healthcare-appointment-booking-app-zeta.vercel.app",
  },
  {
    title: "Network Security System",
    blurb: "Malicious-traffic detection with a Random Forest classifier, a scalable MongoDB ETL pipeline and Dockerized CI deployment.",
    stack: ["Python", "MongoDB", "Scikit-learn", "Docker"],
    metrics: [{ v: "0.9889", l: "precision" }, { v: "0.9769", l: "F1-score" }],
    github: "https://github.com/aasthar16/Network-Security-ML-Project",
    demo: "https://network-security-ml-project.onrender.com",
  },
  {
    title: "Due Diligence System",
    blurb: "10-node agentic system: a Supervisor parses intent and resolves multi-turn references, then fans out to Market, Financial and Risk specialists in parallel.",
    stack: ["Python", "LangGraph", "LangChain", "Groq", "Pydantic", "PostgreSQL", "Docker"],
    metrics: [{ v: "~87%", l: "evidence grounding" }, { v: "100%", l: "validated outputs" }, { v: "−20%", l: "redundant LLM calls" }],
    github: "https://github.com/aasthar16/Due-Diligence_System",
  },
  {
    title: "Adaptive RAG System",
    blurb: "Agentic RAG that self-corrects weak retrieval by switching between semantic, keyword and hybrid search.",
    stack: ["LangGraph", "LangChain", "PostgreSQL", "pgvector", "LangSmith"],
    metrics: [{ v: "10K+", l: "chunks indexed" }, { v: "~88%", l: "answer faithfulness" }, { v: "500+", l: "queries evaluated" }],
    github: "https://github.com/aasthar16/Adaptive-RAG",
  },
  {
    title: "FinCFO",
    blurb: "Single-agent financial intelligence on a 3-node LangGraph workflow with human-in-the-loop approvals and deterministic tools in place of LLM arithmetic.",
    stack: ["Python", "Streamlit", "Groq", "PostgreSQL", "StatsForecast", "Pandas"],
    metrics: [{ v: "5", l: "deterministic tools" }, { v: "3-node", l: "LangGraph + HITL" }],
    github: "https://github.com/aasthar16/FinCFO",
  },
  {
    title: "Corrective RAG (CRAG)",
    blurb: "6-stage pipeline with an NLP context-evaluation layer that grades retrieved passages and dynamically triggers FAISS or web-search fallback.",
    stack: ["Python", "LangChain", "LangGraph", "FAISS", "NLP"],
    metrics: [{ v: "6", l: "pipeline stages" }, { v: "Graded", l: "retrieval control" }],
    github: "https://github.com/aasthar16/CRAG",
  },
];
