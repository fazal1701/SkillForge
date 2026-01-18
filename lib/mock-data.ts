
export type UserRole = 'CANDIDATE' | 'COMPANY' | 'ADMIN';
export type SkillLevel = 'JUNIOR' | 'MID' | 'SENIOR';
export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CLOSED';

// --- NEW INTERFACES FOR LEARNING ---

export interface Tool {
    id: string;
    name: string;
    category: string;
    icon: string;
    description: string;
}


export interface Sector {
    id: string;
    slug: string;
    name: string;
    description: string;
    icon: string; // Lucide icon name
    accentColor: string; // HSL value
    courseCount: number;
    expertCount: number;
}

export interface Course {
    id: string;
    sectorId: string;
    title: string;
    description: string;
    instructor: string;
    instructorId: string;
    duration: string;
    level: SkillLevel;
    rating: number;
    enrolledCount: number;
    imageUrl: string;
    topics: string[];
}

export interface Expert {
    id: string;
    name: string;
    title: string;
    company: string;
    avatar: string;
    bio: string;
    specialties: string[];
    sectorIds: string[];
    yearsExperience: number;
    linkedIn?: string;
}

// --- BASE INTERFACES ---

export interface User {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
    headline?: string;
    verifiedSkills?: string[];
    bio?: string;
    location?: string;
    badges?: string[];
}

export interface Company {
    id: string;
    name: string;
    logo: string;
    industry: string;
    description: string;
    hiresCount: number;
}

export interface Task {
    id: string;
    title: string;
    companyId: string;
    reward: number;
    currency: string;
    difficulty: SkillLevel;
    requiredSkills: string[];
    description: string;
    status: TaskStatus;
    applicants: number;
    sectorId?: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    candidateId: string;
    imageUrl: string;
    skills: string[];
    description: string;
    verifiedBy: string;
}

export interface JobAnalysis {
    id: string;
    jobDescriptionSnippet: string;
    extractedSkills: { name: string; importance: 'HIGH' | 'MEDIUM' | 'LOW' }[];
    detectedLevel: SkillLevel;
    estimatedSalaryRange: string;
    culturalSignals: string[];
}

export interface MatchResult {
    candidateId: string;
    jobAnalysisId: string;
    matchScore: number;
    matchReasons: {
        type: 'SKILL' | 'EXPERIENCE' | 'VIBE';
        description: string;
        isPositive: boolean;
    }[];
}

export const MOCK_TOOLS: Tool[] = [
    { id: "t1", name: "Figma", category: "Design", icon: "Figma", description: "Interface design tool" },
    { id: "t2", name: "VS Code", category: "Development", icon: "Code", description: "Code editor" },
    { id: "t3", name: "Notion", category: "Productivity", icon: "FileText", description: "Workspace" },
    { id: "t4", name: "Linear", category: "Management", icon: "ListTodo", description: "Issue tracking" },
    { id: "t5", name: "Docker", category: "DevOps", icon: "Container", description: "Containerization" },
    { id: "t6", name: "Kubernetes", category: "DevOps", icon: "Server", description: "Orchestration" },
];


// --- MOCK SECTORS ---
export const MOCK_SECTORS: Sector[] = [
    {
        id: "s1",
        slug: "graphic-design",
        name: "Graphic Design & Visual Arts",
        description: "Master visual storytelling through typography, color theory, and brand identity design.",
        icon: "Palette",
        accentColor: "330 80% 55%",
        courseCount: 4,
        expertCount: 2
    },
    {
        id: "s2",
        slug: "digital-marketing",
        name: "Digital Marketing & SEO",
        description: "Learn to drive growth through data-driven campaigns, content strategy, and search optimization.",
        icon: "TrendingUp",
        accentColor: "200 80% 50%",
        courseCount: 5,
        expertCount: 2
    },
    {
        id: "s3",
        slug: "frontend-development",
        name: "Frontend Development",
        description: "Build modern, responsive web applications with React, TypeScript, and cutting-edge frameworks.",
        icon: "Code",
        accentColor: "220 80% 55%",
        courseCount: 5,
        expertCount: 2
    },
    {
        id: "s4",
        slug: "backend-engineering",
        name: "Backend Engineering",
        description: "Design scalable APIs, databases, and distributed systems that power enterprise applications.",
        icon: "Server",
        accentColor: "160 70% 45%",
        courseCount: 4,
        expertCount: 2
    },
    {
        id: "s5",
        slug: "data-science",
        name: "Data Science & Analytics",
        description: "Transform raw data into actionable insights using Python, SQL, and machine learning techniques.",
        icon: "BarChart3",
        accentColor: "270 70% 55%",
        courseCount: 4,
        expertCount: 2
    },
    {
        id: "s6",
        slug: "product-management",
        name: "Product Management",
        description: "Lead product strategy, roadmap planning, and cross-functional teams to deliver user value.",
        icon: "Lightbulb",
        accentColor: "45 90% 50%",
        courseCount: 3,
        expertCount: 2
    },
    {
        id: "s7",
        slug: "ux-ui-design",
        name: "UX/UI Design",
        description: "Create intuitive, accessible digital experiences through user research and interaction design.",
        icon: "Figma",
        accentColor: "350 80% 55%",
        courseCount: 4,
        expertCount: 2
    },
    {
        id: "s8",
        slug: "devops-cloud",
        name: "DevOps & Cloud",
        description: "Automate deployments, manage infrastructure, and ensure reliability at scale with modern DevOps practices.",
        icon: "Cloud",
        accentColor: "190 80% 45%",
        courseCount: 4,
        expertCount: 2
    }
];

// --- MOCK EXPERTS ---
export const MOCK_EXPERTS: Expert[] = [
    {
        id: "e1",
        name: "Marcus Chen",
        title: "Principal Design Director",
        company: "Dropbox Design",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        bio: "15+ years shaping digital brands. Previously led design at Spotify and Airbnb. Passionate about design systems and visual hierarchy.",
        specialties: ["Brand Identity", "Design Systems", "Visual Design"],
        sectorIds: ["s1", "s7"],
        yearsExperience: 15
    },
    {
        id: "e2",
        name: "Priya Sharma",
        title: "VP of Growth",
        company: "HubSpot",
        avatar: "https://i.pravatar.cc/150?u=priya",
        bio: "Scaled startups from 0 to 100M users. Expert in growth loops, experimentation, and data-driven marketing strategies.",
        specialties: ["Growth Marketing", "SEO", "Analytics"],
        sectorIds: ["s2"],
        yearsExperience: 12
    },
    {
        id: "e3",
        name: "James Rodriguez",
        title: "Staff Engineer",
        company: "Vercel",
        avatar: "https://i.pravatar.cc/150?u=james",
        bio: "Core contributor to Next.js. Builds performance-critical web applications used by millions. Speaker at React Conf.",
        specialties: ["React", "Next.js", "Performance"],
        sectorIds: ["s3"],
        yearsExperience: 10
    },
    {
        id: "e4",
        name: "Elena Kowalski",
        title: "Principal Engineer",
        company: "Stripe",
        avatar: "https://i.pravatar.cc/150?u=elena",
        bio: "Architected payment systems processing billions in transactions. Expert in distributed systems and API design.",
        specialties: ["System Design", "APIs", "PostgreSQL"],
        sectorIds: ["s4"],
        yearsExperience: 14
    },
    {
        id: "e5",
        name: "Dr. Aisha Patel",
        title: "Head of Data Science",
        company: "Spotify",
        avatar: "https://i.pravatar.cc/150?u=aisha",
        bio: "PhD in Machine Learning from MIT. Built recommendation systems serving 500M+ users. Published 30+ research papers.",
        specialties: ["Machine Learning", "Python", "Statistics"],
        sectorIds: ["s5"],
        yearsExperience: 11
    },
    {
        id: "e6",
        name: "David Kim",
        title: "VP of Product",
        company: "Notion",
        avatar: "https://i.pravatar.cc/150?u=davidk",
        bio: "Led product teams at Google and Slack. Specializes in turning complex problems into delightful user experiences.",
        specialties: ["Product Strategy", "User Research", "Roadmapping"],
        sectorIds: ["s6"],
        yearsExperience: 13
    },
    {
        id: "e7",
        name: "Sarah Mitchell",
        title: "Design Lead",
        company: "Figma",
        avatar: "https://i.pravatar.cc/150?u=sarahm",
        bio: "Pioneered design-to-dev workflows. Expert in accessibility and inclusive design. Teaches at Stanford d.school.",
        specialties: ["UX Research", "Prototyping", "Accessibility"],
        sectorIds: ["s7"],
        yearsExperience: 9
    },
    {
        id: "e8",
        name: "Michael Torres",
        title: "Principal SRE",
        company: "Netflix",
        avatar: "https://i.pravatar.cc/150?u=michael",
        bio: "Built infrastructure serving 200M+ subscribers. Expert in Kubernetes, chaos engineering, and reliability at scale.",
        specialties: ["Kubernetes", "AWS", "CI/CD"],
        sectorIds: ["s8"],
        yearsExperience: 12
    },
    {
        id: "e9",
        name: "Lisa Wang",
        title: "Creative Director",
        company: "Apple",
        avatar: "https://i.pravatar.cc/150?u=lisa",
        bio: "Designed iconic campaigns for Fortune 500 brands. Expert in motion graphics and visual storytelling.",
        specialties: ["Motion Design", "Branding", "Art Direction"],
        sectorIds: ["s1"],
        yearsExperience: 16
    },
    {
        id: "e10",
        name: "Chris Anderson",
        title: "SEO Director",
        company: "Moz",
        avatar: "https://i.pravatar.cc/150?u=chris",
        bio: "Grew organic traffic 10x for multiple SaaS companies. Author of 'The SEO Playbook' used by 50k+ marketers.",
        specialties: ["Technical SEO", "Content Strategy", "Analytics"],
        sectorIds: ["s2"],
        yearsExperience: 11
    },
    {
        id: "e11",
        name: "Nina Petrova",
        title: "Senior Staff Engineer",
        company: "Google",
        avatar: "https://i.pravatar.cc/150?u=nina",
        bio: "Works on Angular core team. Expert in TypeScript, performance optimization, and developer experience.",
        specialties: ["TypeScript", "Angular", "Web Performance"],
        sectorIds: ["s3"],
        yearsExperience: 10
    },
    {
        id: "e12",
        name: "Robert Chang",
        title: "Staff Data Scientist",
        company: "Airbnb",
        avatar: "https://i.pravatar.cc/150?u=robert",
        bio: "Built pricing algorithms used by 4M+ hosts. Expert in experimentation and causal inference.",
        specialties: ["A/B Testing", "Pricing", "Causal ML"],
        sectorIds: ["s5"],
        yearsExperience: 8
    },
    {
        id: "e13",
        name: "Yuki Tanaka",
        title: "Principal Artist",
        company: "Pixar",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
        bio: "Character shading and lighting expert. Worked on 3 Academy Award winning films.",
        specialties: ["Shading", "Lighting", "RenderMan"],
        sectorIds: ["s1"],
        yearsExperience: 14
    },
    {
        id: "e14",
        name: "Omar Farooq",
        title: "Cloud Architect",
        company: "Amazon AWS",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        bio: "Designing serverless architectures for enterprise clients. AWS Community Hero.",
        specialties: ["AWS Lambda", "DynamoDB", "System Design"],
        sectorIds: ["s8"],
        yearsExperience: 9
    },
    {
        id: "e15",
        name: "Sofia Rodriguez",
        title: "UX Research Manager",
        company: "Uber",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
        bio: "Leading global research studies to improve driver and rider experiences across 20 markets.",
        specialties: ["International Research", "Ethnography", "Strategy"],
        sectorIds: ["s7"],
        yearsExperience: 11
    },
    {
        id: "e16",
        name: "Kenji Sato",
        title: "Frontend Architect",
        company: "Stripe",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
        bio: "Building the design system and component library used by all Stripe engineers.",
        specialties: ["Design Systems", "React", "Accessibility"],
        sectorIds: ["s3"],
        yearsExperience: 12
    }
];

// --- MOCK COURSES ---
export const MOCK_COURSES: Course[] = [
    // Graphic Design
    {
        id: "c1",
        sectorId: "s1",
        title: "Brand Identity Masterclass",
        description: "Learn to create cohesive brand systems from logo design to complete visual identity guidelines.",
        instructor: "Marcus Chen",
        instructorId: "e1",
        duration: "8 weeks",
        level: "MID",
        rating: 4.9,
        enrolledCount: 2450,
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        topics: ["Logo Design", "Color Systems", "Typography", "Brand Guidelines"]
    },
    {
        id: "c2",
        sectorId: "s1",
        title: "Motion Graphics Fundamentals",
        description: "Master After Effects and create stunning animations for social media and product marketing.",
        instructor: "Lisa Wang",
        instructorId: "e9",
        duration: "6 weeks",
        level: "JUNIOR",
        rating: 4.8,
        enrolledCount: 1890,
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        topics: ["After Effects", "Keyframing", "Motion Principles", "Export Optimization"]
    },
    // Digital Marketing
    {
        id: "c3",
        sectorId: "s2",
        title: "Growth Marketing Intensive",
        description: "Build and optimize growth loops that drive sustainable user acquisition and retention.",
        instructor: "Priya Sharma",
        instructorId: "e2",
        duration: "10 weeks",
        level: "MID",
        rating: 4.9,
        enrolledCount: 3200,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        topics: ["Growth Loops", "Experimentation", "Funnel Optimization", "Analytics"]
    },
    {
        id: "c4",
        sectorId: "s2",
        title: "Technical SEO Deep Dive",
        description: "Master site architecture, Core Web Vitals, and advanced crawl optimization techniques.",
        instructor: "Chris Anderson",
        instructorId: "e10",
        duration: "6 weeks",
        level: "SENIOR",
        rating: 4.7,
        enrolledCount: 1560,
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
        topics: ["Technical Audits", "Core Web Vitals", "Schema Markup", "Site Architecture"]
    },
    // Frontend Development
    {
        id: "c5",
        sectorId: "s3",
        title: "Advanced React Patterns",
        description: "Master compound components, render props, and advanced hooks for scalable applications.",
        instructor: "James Rodriguez",
        instructorId: "e3",
        duration: "8 weeks",
        level: "SENIOR",
        rating: 4.9,
        enrolledCount: 4100,
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        topics: ["Custom Hooks", "State Machines", "Performance", "Testing"]
    },
    {
        id: "c6",
        sectorId: "s3",
        title: "Next.js Production Mastery",
        description: "Build and deploy production-grade Next.js applications with best practices from Vercel engineers.",
        instructor: "James Rodriguez",
        instructorId: "e3",
        duration: "10 weeks",
        level: "MID",
        rating: 4.8,
        enrolledCount: 3650,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        topics: ["App Router", "Server Components", "Edge Functions", "Deployment"]
    },
    // Backend Engineering
    {
        id: "c7",
        sectorId: "s4",
        title: "Distributed Systems Design",
        description: "Design scalable, fault-tolerant systems using real-world patterns from leading tech companies.",
        instructor: "Elena Kowalski",
        instructorId: "e4",
        duration: "12 weeks",
        level: "SENIOR",
        rating: 4.9,
        enrolledCount: 2890,
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        topics: ["CAP Theorem", "Consistency Models", "Message Queues", "Caching"]
    },
    {
        id: "c8",
        sectorId: "s4",
        title: "API Design Best Practices",
        description: "Create developer-friendly APIs with proper versioning, documentation, and error handling.",
        instructor: "Elena Kowalski",
        instructorId: "e4",
        duration: "6 weeks",
        level: "MID",
        rating: 4.7,
        enrolledCount: 2100,
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        topics: ["REST Design", "GraphQL", "OpenAPI", "Rate Limiting"]
    },
    // Data Science
    {
        id: "c9",
        sectorId: "s5",
        title: "Machine Learning in Production",
        description: "Deploy and monitor ML models at scale with MLOps best practices.",
        instructor: "Dr. Aisha Patel",
        instructorId: "e5",
        duration: "10 weeks",
        level: "SENIOR",
        rating: 4.9,
        enrolledCount: 2340,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        topics: ["MLOps", "Model Serving", "Monitoring", "Feature Stores"]
    },
    {
        id: "c10",
        sectorId: "s5",
        title: "Experimentation & A/B Testing",
        description: "Design rigorous experiments and make data-driven decisions with statistical confidence.",
        instructor: "Robert Chang",
        instructorId: "e12",
        duration: "6 weeks",
        level: "MID",
        rating: 4.8,
        enrolledCount: 1780,
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        topics: ["Hypothesis Testing", "Sample Size", "Bayesian Methods", "Pitfalls"]
    },
    // Product Management
    {
        id: "c11",
        sectorId: "s6",
        title: "Product Strategy Masterclass",
        description: "Learn to define product vision, prioritize ruthlessly, and align stakeholders around impact.",
        instructor: "David Kim",
        instructorId: "e6",
        duration: "8 weeks",
        level: "MID",
        rating: 4.9,
        enrolledCount: 2900,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        topics: ["Vision Setting", "OKRs", "Prioritization", "Stakeholder Management"]
    },
    // UX/UI Design
    {
        id: "c12",
        sectorId: "s7",
        title: "User Research Methods",
        description: "Master qualitative and quantitative research techniques to deeply understand user needs.",
        instructor: "Sarah Mitchell",
        instructorId: "e7",
        duration: "6 weeks",
        level: "MID",
        rating: 4.8,
        enrolledCount: 2150,
        imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
        topics: ["User Interviews", "Surveys", "Usability Testing", "Journey Mapping"]
    },
    {
        id: "c13",
        sectorId: "s7",
        title: "Accessible Design Systems",
        description: "Build inclusive design systems that work for everyone, regardless of ability.",
        instructor: "Sarah Mitchell",
        instructorId: "e7",
        duration: "8 weeks",
        level: "SENIOR",
        rating: 4.9,
        enrolledCount: 1650,
        imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
        topics: ["WCAG Guidelines", "Screen Readers", "Color Contrast", "Keyboard Navigation"]
    },
    // DevOps & Cloud
    {
        id: "c14",
        sectorId: "s8",
        title: "Kubernetes in Production",
        description: "Deploy and manage containerized applications at scale with Kubernetes best practices.",
        instructor: "Michael Torres",
        instructorId: "e8",
        duration: "10 weeks",
        level: "SENIOR",
        rating: 4.8,
        enrolledCount: 2560,
        imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
        topics: ["Pod Design", "Networking", "Security", "Observability"]
    },
    {
        id: "c15",
        sectorId: "s8",
        title: "CI/CD Pipeline Mastery",
        description: "Build reliable, fast deployment pipelines with GitHub Actions, ArgoCD, and modern tooling.",
        instructor: "Michael Torres",
        instructorId: "e8",
        duration: "6 weeks",
        level: "MID",
        rating: 4.7,
        enrolledCount: 1980,
        imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
        topics: ["GitHub Actions", "ArgoCD", "Testing Strategies", "Rollback"]
    }
];

// --- MOCK USERS (Candidates) - EXPANDED ---
export const MOCK_CANDIDATES: User[] = [
    {
        id: "u1",
        name: "Alex Rivera",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        headline: "Frontend Engineer | React + Tailwind Master",
        verifiedSkills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        bio: "Focusing on pixel-perfect UI and smooth animations. 3 years experience building SaaS dashboards.",
        location: "New York, USA",
        badges: ["Top Performer", "React Expert"]
    },
    {
        id: "u2",
        name: "Sarah Chen",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        headline: "Full Stack Developer | Node.js & Postgres",
        verifiedSkills: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        bio: "Backend specialist who loves optimizing database queries and building scalable APIs.",
        location: "San Francisco, USA",
        badges: ["Backend Architect"]
    },
    {
        id: "u3",
        name: "Jordan Smith",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        headline: "UI/UX Designer | Design Systems",
        verifiedSkills: ["Figma", "UI Design", "Prototyping"],
        bio: "Designing accessible and inclusive digital experiences. Expert in Figma variable modes.",
        location: "Remote (UK)"
    },
    {
        id: "u4",
        name: "Emily Zhang",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        headline: "Data Scientist | Python & ML",
        verifiedSkills: ["Python", "PyTorch", "Pandas", "SQL"],
        bio: "Turning messy data into actionable insights. PhD in Statistics.",
        location: "Boston, USA"
    },
    {
        id: "u5",
        name: "Michael Johnson",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=mic",
        headline: "DevOps Engineer | AWS & Terraform",
        verifiedSkills: ["AWS", "Terraform", "CI/CD", "Kubernetes"]
    },
    {
        id: "u6",
        name: "Jessica Lee",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=jes",
        headline: "Product Manager | Agile & Strategy",
        verifiedSkills: ["Product Strategy", "User Research", "Jira", "SQL"]
    },
    {
        id: "u7",
        name: "David Kim",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=dav",
        headline: "Mobile Developer | React Native",
        verifiedSkills: ["React Native", "iOS", "Android", "Redux"]
    },
    {
        id: "u8",
        name: "Olivia Wilson",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=oli",
        headline: "Content Strategist | SEO & Copywriting",
        verifiedSkills: ["SEO", "Content Marketing", "Copywriting", "Google Analytics"]
    },
    {
        id: "u9",
        name: "Nathan Park",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=nathan",
        headline: "Graphic Designer | Brand & Motion",
        verifiedSkills: ["Adobe Illustrator", "After Effects", "Figma", "Branding"],
        bio: "Creating visual stories that connect brands with audiences.",
        location: "Los Angeles, USA",
        badges: ["Design Star"]
    },
    {
        id: "u10",
        name: "Maya Patel",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=maya",
        headline: "Growth Marketer | Performance & Analytics",
        verifiedSkills: ["Google Ads", "Meta Ads", "Analytics", "A/B Testing"],
        bio: "Data-driven marketer who scales startups.",
        location: "Austin, USA"
    },
    {
        id: "u11",
        name: "Carlos Mendez",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=carlos",
        headline: "Backend Engineer | Go & Microservices",
        verifiedSkills: ["Go", "gRPC", "Kafka", "PostgreSQL"],
        bio: "Building high-performance distributed systems.",
        location: "Seattle, USA",
        badges: ["Backend Pro"]
    },
    {
        id: "u12",
        name: "Rachel Brown",
        role: "CANDIDATE",
        avatar: "https://i.pravatar.cc/150?u=rachel",
        headline: "UX Researcher | User Insights",
        verifiedSkills: ["User Interviews", "Surveys", "Usability Testing", "Figma"],
        bio: "Uncovering user needs to drive product decisions.",
        location: "Chicago, USA"
    },
    {
        id: "u13",
        name: "Aisha Mohammed",
        role: "CANDIDATE",
        avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop",
        headline: "Cybersecurity Analyst | InfoSec & PenTesting",
        verifiedSkills: ["Network Security", "Python", "Linux", "Ethical Hacking"],
        bio: "Securing digital assets and preventing breaches. Certified Ethical Hacker.",
        location: "London, UK"
    },
    {
        id: "u14",
        name: "Liam O'Connor",
        role: "CANDIDATE",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        headline: "Mobile Engineer | Swift & SwiftUI",
        verifiedSkills: ["iOS", "Swift", "Combine", "Core Data"],
        bio: "Building fluid and performant iOS experiences. App Store featured developer.",
        location: "Dublin, Ireland"
    },
    {
        id: "u15",
        name: "Wei Chen",
        role: "CANDIDATE",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
        headline: "Game Developer | Unity & C#",
        verifiedSkills: ["Unity", "C#", "3D Math", "Shader Graph"],
        bio: "Creating immersive 3D worlds and interactive gameplay mechanics.",
        location: "Vancouver, Canada"
    },
    {
        id: "u16",
        name: "Zoe Washington",
        role: "CANDIDATE",
        avatar: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=150&h=150&fit=crop",
        headline: "Technical Writer | Docs & APIs",
        verifiedSkills: ["Markdown", "Git", "API Documentation", "Copy Editing"],
        bio: "Translating complex code into clear, developer-friendly documentation.",
        location: "Remote (USA)"
    }
];

// --- MOCK COMPANIES - EXPANDED ---
export const MOCK_COMPANIES: Company[] = [
    {
        id: "c1",
        name: "TechFlow",
        logo: "https://img.logoipsum.com/286.svg",
        industry: "SaaS",
        description: "Automating workflows for enterprise teams.",
        hiresCount: 12
    },
    {
        id: "c2",
        name: "GreenPeak",
        logo: "https://img.logoipsum.com/296.svg",
        industry: "CleanTech",
        description: "Sustainable energy monitoring solutions.",
        hiresCount: 5
    },
    {
        id: "c3",
        name: "Orbit Financial",
        logo: "https://img.logoipsum.com/289.svg",
        industry: "FinTech",
        description: "Next-gen banking infrastructure.",
        hiresCount: 24
    },
    {
        id: "c4",
        name: "Nebula Create",
        logo: "https://img.logoipsum.com/222.svg",
        industry: "Design Agency",
        description: "Branding and digital experiences for startups.",
        hiresCount: 8
    },
    {
        id: "c5",
        name: "Quantum Systems",
        logo: "https://img.logoipsum.com/245.svg",
        industry: "AI/ML",
        description: "Building the future of quantum computing interfaces.",
        hiresCount: 15
    },
    {
        id: "c6",
        name: "HealthBridge",
        logo: "https://img.logoipsum.com/251.svg",
        industry: "HealthTech",
        description: "Connecting patients with personalized care solutions.",
        hiresCount: 9
    },
    {
        id: "c7",
        name: "DataVault",
        logo: "https://img.logoipsum.com/263.svg",
        industry: "Data Infrastructure",
        description: "Enterprise data warehousing and analytics platform.",
        hiresCount: 18
    },
    {
        id: "c8",
        name: "CreativeForce",
        logo: "https://img.logoipsum.com/274.svg",
        industry: "Marketing",
        description: "Full-service digital marketing and creative agency.",
        hiresCount: 11
    }
];

// --- MOCK TASKS - EXPANDED ---
export const MOCK_TASKS: Task[] = [
    {
        id: "t1",
        title: "Implement Dark Mode Toggle",
        companyId: "c1",
        reward: 250,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["React", "CSS Variables", "Local Storage"],
        description: "Create a seamless dark mode toggle that persists preference.",
        status: "OPEN",
        applicants: 14,
        sectorId: "s3"
    },
    {
        id: "t2",
        title: "Optimize Postgres Query Performance",
        companyId: "c3",
        reward: 800,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["PostgreSQL", "Database Indexing", "SQL"],
        description: "Analyze and optimize a slow-running reporting query.",
        status: "OPEN",
        applicants: 6,
        sectorId: "s4"
    },
    {
        id: "t3",
        title: "Redesign User Onboarding Flow",
        companyId: "c2",
        reward: 600,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["Figma", "UX Research", "Prototyping"],
        description: "Propose a new onboarding flow to reduce drop-off by 20%.",
        status: "IN_PROGRESS",
        applicants: 22,
        sectorId: "s7"
    },
    {
        id: "t4",
        title: "Build a Custom Chart Component",
        companyId: "c1",
        reward: 400,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["D3.js", "React", "Data Visualization"],
        description: "Create a reusable line chart component with tooltips.",
        status: "OPEN",
        applicants: 9,
        sectorId: "s3"
    },
    {
        id: "t5",
        title: "Set up CI/CD Pipeline for Node.js App",
        companyId: "c3",
        reward: 500,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["GitHub Actions", "Docker", "Node.js"],
        description: "Automate testing and deployment to AWS.",
        status: "OPEN",
        applicants: 11,
        sectorId: "s8"
    },
    {
        id: "t6",
        title: "Write High-Converting Landing Page Copy",
        companyId: "c4",
        reward: 300,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["Copywriting", "Marketing", "SEO"],
        description: "Draft headlines and body copy for a new product launch.",
        status: "COMPLETED",
        applicants: 35,
        sectorId: "s2"
    },
    {
        id: "t7",
        title: "Fix Mobile Navigation Bug",
        companyId: "c2",
        reward: 150,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["React Native", "Debugging", "Navigation"],
        description: "Fix a crash occurring when navigating back from settings.",
        status: "OPEN",
        applicants: 8,
        sectorId: "s3"
    },
    {
        id: "t8",
        title: "Develop ML Model for Churn Prediction",
        companyId: "c5",
        reward: 1200,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["Python", "Scikit-Learn", "Data Analysis"],
        description: "Build a model to predict user churn based on activity logs.",
        status: "IN_PROGRESS",
        applicants: 18,
        sectorId: "s5"
    },
    {
        id: "t9",
        title: "Design Brand Identity Package",
        companyId: "c4",
        reward: 900,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["Adobe Illustrator", "Brand Design", "Typography"],
        description: "Create logo, color palette, and brand guidelines for a new startup.",
        status: "OPEN",
        applicants: 27,
        sectorId: "s1"
    },
    {
        id: "t10",
        title: "Build Real-time Notification System",
        companyId: "c7",
        reward: 750,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["WebSockets", "Node.js", "Redis"],
        description: "Implement push notifications with real-time delivery.",
        status: "OPEN",
        applicants: 12,
        sectorId: "s4"
    },
    {
        id: "t11",
        title: "Run SEO Audit & Recommendations",
        companyId: "c8",
        reward: 450,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["Technical SEO", "Analytics", "Content Strategy"],
        description: "Comprehensive SEO audit with prioritized action items.",
        status: "OPEN",
        applicants: 16,
        sectorId: "s2"
    },
    {
        id: "t12",
        title: "Create Interactive Data Dashboard",
        companyId: "c7",
        reward: 650,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["React", "Chart.js", "API Integration"],
        description: "Build a responsive dashboard with filterable charts.",
        status: "OPEN",
        applicants: 21,
        sectorId: "s3"
    },
    {
        id: "t13",
        title: "Design Mobile App Wireframes",
        companyId: "c6",
        reward: 500,
        currency: "USD",
        difficulty: "JUNIOR",
        requiredSkills: ["Figma", "Mobile Design", "Wireframing"],
        description: "Create low-fidelity wireframes for a health tracking app.",
        status: "OPEN",
        applicants: 19,
        sectorId: "s7"
    },
    {
        id: "t14",
        title: "Set Up Kubernetes Cluster",
        companyId: "c5",
        reward: 950,
        currency: "USD",
        difficulty: "SENIOR",
        requiredSkills: ["Kubernetes", "AWS EKS", "Helm"],
        description: "Deploy production-ready K8s cluster with monitoring.",
        status: "OPEN",
        applicants: 7,
        sectorId: "s8"
    },
    {
        id: "t15",
        title: "Build A/B Testing Framework",
        companyId: "c1",
        reward: 700,
        currency: "USD",
        difficulty: "MID",
        requiredSkills: ["Python", "Statistics", "Data Analysis"],
        description: "Create a reusable A/B testing framework with statistical significance.",
        status: "OPEN",
        applicants: 13,
        sectorId: "s5"
    }
];

// --- MOCK PORTFOLIOS - EXPANDED ---
export const MOCK_PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: "p1",
        title: "E-Commerce Checkout Flow",
        candidateId: "u1",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        skills: ["React", "Stripe", "Redux"],
        description: "Implemented a secure, multi-step checkout process with real-time validation.",
        verifiedBy: "TechFlow"
    },
    {
        id: "p2",
        title: "Energy Dashboard UI",
        candidateId: "u3",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        skills: ["Figma", "Dashboard Design"],
        description: "Designed a clean, data-rich dashboard for monitoring solar panel efficiency.",
        verifiedBy: "GreenPeak"
    },
    {
        id: "p3",
        title: "API Gateway Service",
        candidateId: "u2",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b005389?auto=format&fit=crop&q=80&w=800",
        skills: ["Go", "Microservices", "gRPC"],
        description: "Built a high-performance API gateway handling 10k req/s.",
        verifiedBy: "Orbit Financial"
    },
    {
        id: "p4",
        title: "Marketing Campaign Assets",
        candidateId: "u8",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        skills: ["Adobe Illustrator", "Branding"],
        description: "Created social media assets and banners for Q4 campaign.",
        verifiedBy: "Nebula Create"
    },
    {
        id: "p5",
        title: "Native iOS Health App",
        candidateId: "u7",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        skills: ["Swift", "HealthKit", "UI/UX"],
        description: "Developed a fitness tracking app using Apple HealthKit integration.",
        verifiedBy: "TechFlow"
    },
    {
        id: "p6",
        title: "Customer Support Chatbot",
        candidateId: "u4",
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
        skills: ["Python", "NLP", "TensorFlow"],
        description: "Trained a natural language processing model to automate support responses.",
        verifiedBy: "Quantum Systems"
    },
    {
        id: "p7",
        title: "Brand Identity System",
        candidateId: "u9",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        skills: ["Adobe Illustrator", "Brand Design", "Typography"],
        description: "Complete visual identity including logo, colors, and brand guidelines.",
        verifiedBy: "CreativeForce"
    },
    {
        id: "p8",
        title: "Performance Marketing Dashboard",
        candidateId: "u10",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        skills: ["Google Analytics", "Data Studio", "SQL"],
        description: "Real-time marketing metrics dashboard tracking ROI across channels.",
        verifiedBy: "DataVault"
    },
    {
        id: "p9",
        title: "Microservices Architecture",
        candidateId: "u11",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b005389?auto=format&fit=crop&q=80&w=800",
        skills: ["Go", "Kafka", "Kubernetes"],
        description: "Designed event-driven microservices handling 1M+ events/day.",
        verifiedBy: "Orbit Financial"
    },
    {
        id: "p10",
        title: "User Research Study",
        candidateId: "u12",
        imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
        skills: ["User Interviews", "Affinity Mapping", "Personas"],
        description: "Comprehensive user research leading to 40% improvement in conversion.",
        verifiedBy: "HealthBridge"
    },
    {
        id: "p11",
        title: "Motion Graphics Reel",
        candidateId: "u9",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        skills: ["After Effects", "Motion Design", "Animation"],
        description: "Collection of animated explainers and social media content.",
        verifiedBy: "Nebula Create"
    },
    {
        id: "p12",
        title: "CI/CD Pipeline",
        candidateId: "u5",
        imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
        skills: ["GitHub Actions", "Docker", "AWS"],
        description: "Fully automated deployment pipeline with blue-green deployments.",
        verifiedBy: "TechFlow"
    }
];

// --- MOCK ANALYSIS DATA ---
export const MOCK_JOB_ANALYSIS: JobAnalysis = {
    id: "analysis_123",
    jobDescriptionSnippet: "We are looking for a Senior React Engineer with experience in Next.js and Tailwind... The ideal candidate loves fast-paced environments...",
    extractedSkills: [
        { name: "React", importance: "HIGH" },
        { name: "Next.js", importance: "HIGH" },
        { name: "Tailwind CSS", importance: "MEDIUM" },
        { name: "TypeScript", importance: "MEDIUM" },
    ],
    detectedLevel: "SENIOR",
    estimatedSalaryRange: "$140k - $180k",
    culturalSignals: ["Fast-paced", "Ownership", "Product-minded"]
};

// --- MOCK MATCHES ---
export const MOCK_MATCHES: MatchResult[] = [
    {
        candidateId: "u1",
        jobAnalysisId: "analysis_123",
        matchScore: 92,
        matchReasons: [
            { type: "SKILL", description: "Mastery of React & Tailwind (Verified)", isPositive: true },
            { type: "VIBE", description: "Strong portfolio focus aligns with product mindset", isPositive: true },
        ]
    },
    {
        candidateId: "u3",
        jobAnalysisId: "analysis_123",
        matchScore: 45,
        matchReasons: [
            { type: "SKILL", description: "Design focus, not Engineering", isPositive: false },
        ]
    },
    {
        candidateId: "u2",
        jobAnalysisId: "analysis_123",
        matchScore: 65,
        matchReasons: [
            { type: "SKILL", description: "Strong Engineering background but specialized in Backend", isPositive: false },
            { type: "EXPERIENCE", description: "Matches Seniority level", isPositive: true }
        ]
    }
];

// --- HELPER FUNCTIONS ---
export const getCompanyById = (id: string) => MOCK_COMPANIES.find(c => c.id === id);
export const getCandidateById = (id: string) => MOCK_CANDIDATES.find(u => u.id === id);
export const getSectorBySlug = (slug: string) => MOCK_SECTORS.find(s => s.slug === slug);
export const getCoursesBySector = (sectorId: string) => MOCK_COURSES.filter(c => c.sectorId === sectorId);
export const getExpertsBySector = (sectorId: string) => MOCK_EXPERTS.filter(e => e.sectorIds.includes(sectorId));
export const getExpertById = (id: string) => MOCK_EXPERTS.find(e => e.id === id);
export const getTasksBySector = (sectorId: string) => MOCK_TASKS.filter(t => t.sectorId === sectorId);
