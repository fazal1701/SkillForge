# SkillForge — Complete Frontend Product & Engineering Spec

**Version 1.1** | Build date: Jan 17, 2026 | Status: MVP-Ready | Focus: Frontend + Mock Data Depth

---

## EXECUTIVE SUMMARY: SkillForge Positioning

### What SkillForge Is (NOT What It Isn't)

| Aspect | What We're NOT | What We ARE |
|--------|----------------|------------|
| **Core Model** | Course library (Coursera, Udemy) | Work-first hiring OS |
| **Proof** | Certificates, badges, completions | Verified capability from real work |
| **User Journey** | Learn → Quiz → Pass → Resume | Work → Score → Badge → Offer |
| **Outcome** | "I finished a course" | "I got hired because of proven skills" |
| **Differentiation** | Passive content consumption | Active, paid, evaluated work |
| **Data Moat** | Course completion metrics | Performance on real tasks → career outcomes |

### Why SkillForge Wins

| Competitor | Their Strength | SkillForge Edge |
|------------|---|---|
| **Alpha School** (AI tutoring) | Personalized AI learning | + **Paid real work** + **Verified outcomes** + **Employer hiring** |
| **myBlueprint** (Career planning) | Career identity + pathways | + **Paid work to get there** + **Proof of capability** + **Direct hiring** |
| **Wizeprep** (Outcome focus) | Guaranteed grade lifts | + **Real job outcomes** + **Verified skills** + **Marketplace scale** |
| **LinkedIn Learning** (Skills graph) | Skills taxonomy | + **Real work evaluation** + **Verified badges** + **Direct hiring pipeline** |

---

## PART 1: CORE DATA MODELS & TYPESCRIPT TYPES

### 1.1 Primitive Types & Enums

```ts
type ISODateString = string; // "2026-01-17T18:33:00.000Z"
type UUID = string;
type PercentageNumber = number; // 0-100

type UserRole = 'CANDIDATE' | 'COMPANY' | 'ADMIN';
type SkillLevel = 'JUNIOR' | 'MID' | 'SENIOR';
type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CLOSED';
type SubmissionStatus = 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'ACCEPTED' | 'REJECTED';

type TaskCategory =
  | 'FRONTEND'
  | 'BACKEND'
  | 'FULLSTACK'
  | 'DESIGN'
  | 'MARKETING'
  | 'PRODUCT'
  | 'DATA'
  | 'DEVOPS'
  | 'OPERATIONS'
  | 'SALES'
  | 'CUSTOMER_SUCCESS';

type CareerTrack =
  | 'SOFTWARE_ENGINEERING'
  | 'PRODUCT_MANAGEMENT'
  | 'DATA_SCIENCE'
  | 'UX_UI_DESIGN'
  | 'MARKETING'
  | 'SALES'
  | 'OPERATIONS';
```

### 1.2 Asset Models (Images & Videos) - DETAILED

```ts
/**
 * ImageAsset - Represents any image in the system
 * 
 * Usage patterns:
 * - Candidate avatars (circular, 400x400px)
 * - Company logos (square, 200x200px, PNG with transparency)
 * - Task hero images (16:9, 1280x720px)
 * - Portfolio showcase images (various, responsive)
 * - Badge icons (square, 64x64px)
 * - Gallery images (multiple aspect ratios)
 * 
 * For responsive images, we'll provide srcset in component layer
 */
interface ImageAsset {
  id: UUID;
  url: string;                    // /assets/images/<category>/<filename>
  alt: string;                    // Required for accessibility
  width?: number;                 // Original width in pixels
  height?: number;                // Original height in pixels
  aspectRatio?: number;           // Calculated: width / height (1, 16/9, etc.)
  uploadedAt?: ISODateString;
  
  // Optional metadata for image optimization
  fileSize?: number;              // bytes
  format?: 'jpg' | 'png' | 'webp' | 'svg';
  blurDataUrl?: string;           // Base64 blur placeholder for loading state
}

/**
 * VideoAsset - Represents video content (demos, walkthroughs, testimonials)
 * 
 * Usage patterns:
 * - Portfolio demo videos
 * - Task walkthrough videos
 * - Candidate testimonial videos
 * - Company culture videos
 */
interface VideoAsset {
  id: UUID;
  url: string;                    // /assets/videos/<category>/<filename>.mp4
  thumbnail: ImageAsset;          // Poster frame for video player
  durationSeconds?: number;       // Video length
  title?: string;
  uploadedAt?: ISODateString;
  
  // Optional video metadata
  format?: 'mp4' | 'webm' | 'mov';
  resolution?: '720p' | '1080p' | '4k';
  aspectRatio?: number;           // For responsive video containers
}

// Asset paths for organized folder structure
const ASSET_PATHS = {
  candidates: '/assets/images/candidates',    // Profile avatars
  companies: '/assets/images/companies',      // Logos and covers
  tasks: '/assets/images/tasks',              // Task hero images
  portfolio: '/assets/images/portfolio',      // Portfolio gallery
  badges: '/assets/images/badges',            // Certification badges
  videos: '/assets/videos',
} as const;

/**
 * DETAILED IMAGE REQUIREMENTS BY TYPE
 * 
 * CANDIDATE AVATARS:
 * - Size: 400x400px (square, cropped for circle)
 * - Format: JPG (optimized for web)
 * - Aspect ratio: 1:1
 * - Used in: profile header, submission reviews, leaderboards
 * 
 * COMPANY LOGOS:
 * - Size: 200x200px (square)
 * - Format: PNG (with transparency for dark/light mode)
 * - Used in: task cards, company profiles, branding
 * 
 * TASK HERO IMAGES:
 * - Size: 1280x720px (16:9 landscape)
 * - Format: JPG (highly optimized)
 * - Used in: task detail hero section, task card preview
 * - Purpose: Eye-catching, context-setting image
 * 
 * PORTFOLIO GALLERY:
 * - Sizes: Various (1200x800, 600x1000, etc.)
 * - Format: JPG or PNG depending on content
 * - Used in: portfolio showcase, candidate profiles
 * 
 * BADGE ICONS:
 * - Size: 64x64px (square, can be displayed at various sizes)
 * - Format: PNG with transparency
 * - Used in: badge displays, credential lists
 */
```

### 1.3 User & Authentication Model - DETAILED

```ts
/**
 * User - Core user account model
 * 
 * Represents both candidates and companies
 * Polymorphic profile based on role
 */
interface User {
  id: UUID;
  email: string;
  name: string;
  role: UserRole;                 // CANDIDATE | COMPANY | ADMIN
  avatar: ImageAsset;             // Company logo or candidate photo
  createdAt: ISODateString;
  lastActiveAt?: ISODateString;   // For "was active X hours ago" UI
  isVerified: boolean;            // Email verified
  
  // Polymorphic profile - one of these will be populated based on role
  profile: CandidateProfile | CompanyProfile | AdminProfile;
  
  // Account status
  isActive?: boolean;             // Deactivated accounts
  isSuspended?: boolean;          // Account under review
  suspensionReason?: string;
}

interface SocialLinks {
  github?: string;                // https://github.com/username
  linkedin?: string;              // https://linkedin.com/in/username
  personalSite?: string;
  twitter?: string;
  dribbble?: string;              // For designers
  behance?: string;               // For designers
}
```

### 1.4 Candidate Profile Model - COMPREHENSIVE

```ts
/**
 * CandidateProfile - Everything about a candidate on SkillForge
 * 
 * This is the most complex profile type as it tracks:
 * - Current skills and verification status
 * - Career progression
 * - Work history (tasks completed)
 * - Earnings and financial info
 * - Portfolio and proof of work
 * - Preferences and availability
 */
interface CandidateProfile {
  // ========== IDENTITY & CAREER POSITIONING ==========
  
  headline: string;               // "Frontend Engineer | React + TypeScript"
  bio: string;                    // Multi-line bio, 500 chars max
  location: string;               // "Toronto, Canada"
  careerTrack: CareerTrack;       // Which path they're pursuing
  skillsLookingFor: string[];     // ["System Design", "Go", "Backend"]
  
  // ========== VERIFIED SKILLS & CREDENTIALS ==========
  
  /**
   * Skills array - core to candidate positioning
   * Each skill tracks:
   * - What the skill is
   * - Verified level (from completed tasks)
   * - Badge association (if earned)
   * - How many tasks verified this skill
   * 
   * Example flow:
   * 1. Candidate completes React task → React added to skills (unverified)
   * 2. Company reviews & accepts → React marked verified + badge issued
   * 3. Candidate completes 4 more React tasks → proofCount = 5
   * 4. Badge shows "React Certified: Mid-Level - verified in 5 projects"
   */
  skills: VerifiedSkill[];
  
  /**
   * Badges - visible proof of verified skills
   * Shown on profile, marketplace listing, submissions
   */
  badges: Badge[];
  
  /**
   * Certifications - detailed records of passed evaluations
   * Each certification links to task submission + review
   */
  certifications: CertificationResult[];
  
  // ========== ACTIVITY & WORK HISTORY ==========
  
  completedTasksCount: number;
  totalEarnings: number;          // USD
  totalEarningsThisMonth?: number;// For trending indicator
  
  /**
   * Rating system:
   * - Based on reviews from companies (after task submission)
   * - Scale: 1.0 - 5.0
   * - Displayed: "4.8★ (12 reviews)"
   * - Affects: visibility in marketplace, recommendations
   */
  rating: number;                 // 1-5
  ratingCount: number;            // How many reviews
  
  /**
   * Portfolio - public showcase of candidate's best work
   * Can be linked to SkillForge tasks or external projects
   */
  portfolio: PortfolioItem[];
  
  /**
   * Submissions - history of task submissions
   * Referenced for evaluation, hiring decisions
   */
  submissions: TaskSubmission[];
  
  // ========== PREFERENCES & AVAILABILITY ==========
  
  socialLinks?: SocialLinks;
  
  preferredTaskDuration?: 'SHORT' | 'MEDIUM' | 'LONG';
  // SHORT: 1-3 hours
  // MEDIUM: 4-8 hours
  // LONG: 8+ hours (or multi-day)
  
  preferredCategories?: TaskCategory[];
  // What types of work they prefer
  
  availability?: 'FULL_TIME' | 'PART_TIME' | 'FLEXIBLE' | 'NOT_AVAILABLE';
  // How much time they can dedicate
  
  // ========== ADDITIONAL METADATA ==========
  
  timezone?: string;              // "America/Toronto"
  language?: string;              // "en", "fr", "es", etc.
  isOpenToReferrals?: boolean;   // Companies can refer them to jobs
  
  // Preferences for job matching
  desiredCompanySizes?: ('STARTUP' | 'SCALE_UP' | 'ENTERPRISE')[];
  desiredIndustries?: string[];
  minExpectedSalary?: number;     // If considering full-time offers
}

/**
 * VerifiedSkill - represents a skill with verification status
 * 
 * Lifecycle:
 * 1. Candidate completes task in React
 * 2. Skill created: { name: 'React', level: 'JUNIOR', verified: false }
 * 3. Company accepts submission
 * 4. Skill updated: { verified: true, badge: {...}, proofCount: 1 }
 * 5. After 5 accepted tasks: proofCount = 5, can unlock badge tier
 */
interface VerifiedSkill {
  id: UUID;
  name: string;                   // "React", "Figma", "SQL", "Node.js"
  
  /**
   * Level assessed from task performance
   * Not claimed, not assumed - EARNED from work
   */
  level: SkillLevel;              // JUNIOR | MID | SENIOR
  
  verified: boolean;              // true = came through SkillForge eval
  verifiedAt?: ISODateString;     // When it was verified
  
  /**
   * Badge association - if candidate earned a badge for this skill
   * Can be null if skill verified but not yet badge-worthy
   */
  badge?: Badge;
  
  /**
   * Proof count - how many tasks verified this skill
   * Shows "Verified in 5 projects" on profile
   */
  proofCount?: number;
  
  // Optional: track skill trend (improving or declining)
  trend?: 'improving' | 'stable' | 'declining';
  lastAssessedAt?: ISODateString;
}

/**
 * Badge - visible certification of skill mastery
 * 
 * Example badges:
 * - "React Certified: Mid-Level" (5+ mid tasks, 4.5+ avg rating)
 * - "Next.js Expert" (shipped production app)
 * - "Design System Master" (5+ design system projects)
 * - "Top Performer: January 2026" (ranked in top 5%)
 */
interface Badge {
  id: UUID;
  name: string;                   // "React Certified: Mid-Level"
  description: string;            // "Completed 5+ mid-level React tasks with avg 4.5+ rating"
  icon: ImageAsset;               // 64x64px PNG badge icon
  
  level?: SkillLevel;            // What level is this badge
  issuedAt: ISODateString;
  issuedBy: string;               // "SkillForge AI" or company name
  expiresAt?: ISODateString;      // Optional expiration
  
  // Rarity affects display/prestige
  rarity?: 'COMMON' | 'UNCOMMON' | 'RARE' | 'LEGENDARY';
  
  // If badge is tied to a specific task/skill
  linkedSkillId?: UUID;
  linkedTaskId?: UUID;
  
  // Social sharing
  shareableUrl?: string;          // Link to badge on SkillForge
  linkedinShareUrl?: string;      // Pre-filled LinkedIn share intent
}

/**
 * PortfolioItem - showcase of candidate's work
 * 
 * Can be:
 * - Linked to SkillForge task submission (automatic)
 * - Self-created portfolio entry (manual)
 * - External project (GitHub repo, live site, etc.)
 */
interface PortfolioItem {
  id: UUID;
  title: string;                  // "SaaS Landing Page"
  summary: string;                // 1-2 sentence overview
  description?: string;           // Longer form description with details
  skillsUsed: string[];           // ["React", "Next.js", "TypeScript"]
  
  // Visual representation
  coverImage: ImageAsset;         // Main showcase image
  gallery?: ImageAsset[];         // Additional screenshots/images
  demoVideo?: VideoAsset;         // Demo video if available
  
  // Links
  repoUrl?: string;               // GitHub link
  liveUrl?: string;               // Live deployment
  
  // SkillForge integration
  linkedTaskId?: UUID;            // If created from a SkillForge task
  linkedSubmissionId?: UUID;      // If created from submission
  
  createdAt: ISODateString;
  updatedAt?: ISODateString;
}
```

### 1.5 Company Profile Model - COMPREHENSIVE

```ts
/**
 * CompanyProfile - Everything about a company on SkillForge
 * 
 * Tracks:
 * - Company identity and branding
 * - Track record on SkillForge (hires, spend, ratings)
 * - Posted tasks and submissions
 * - Hiring preferences and volume
 */
interface CompanyProfile {
  // ========== COMPANY IDENTITY ==========
  
  companyName: string;
  industry: string;               // "B2B SaaS", "Biotech", "Design Agency"
  location: string;               // "San Francisco, USA"
  
  // Branding
  logo: ImageAsset;               // 200x200px PNG
  coverImage?: ImageAsset;        // 1920x1080px for profile header
  description: string;            // Company about/mission
  website: string;
  
  // Company info
  employeeCount?: number;
  fundingStage?: string;          // "Pre-seed", "Seed", "Series A", etc.
  
  // ========== TRACK RECORD & METRICS ==========
  
  /**
   * Success on SkillForge shows companies are good to work with
   * These metrics affect:
   * - Visibility in "trusted companies" listing
   * - Candidate willingness to apply
   * - Platform standing
   */
  hiresCount: number;             // Total successful hires
  totalTasksPosted: number;       // Total tasks ever posted
  totalSpend: number;             // USD spent on SkillForge
  
  avgReviewTime: number;          // days (1.2 = 1.2 days)
  averageRating?: number;         // How candidates rate working with them (1-5)
  
  // ========== HIRING INFORMATION ==========
  
  postedTasks: Task[];
  submissions?: TaskSubmission[]; // Submissions they've received
  
  // What they're looking for
  preferredSkillsToHire?: string[];
  hiringVolumePerMonth?: number;
  
  // Hiring preferences
  minimumCandidateRating?: number; // Only accept 4.5+ candidates
  preferredSeniority?: SkillLevel;
  
  // ========== TEAM & CONTACT ==========
  
  contactEmail?: string;
  hiringTeamSize?: number;        // How many people review submissions
  
  // Social
  linkedin?: string;
  twitter?: string;
}
```

### 1.6 Task Model - COMPREHENSIVE

```ts
/**
 * Task - The core unit of work in SkillForge
 * 
 * A task is:
 * - Posted by a company
 * - Open for candidates to submit work
 * - Evaluated by company + AI
 * - Results in paid opportunity + verified skill badge
 * 
 * Lifecycle:
 * 1. Company creates task (OPEN status)
 * 2. Candidates browse and apply
 * 3. Candidates submit work
 * 4. Company reviews submissions (UNDER_REVIEW)
 * 5. Company accepts/rejects (ACCEPTED or REJECTED)
 * 6. SkillForge AI issues certification + badge
 * 7. Task moves to COMPLETED when all grading done
 */
interface Task {
  id: UUID;
  
  // ========== BASIC INFORMATION ==========
  
  title: string;                  // "Build a responsive analytics dashboard in React"
  slug: string;                   // URL-safe slug: "react-analytics-dashboard-atlas-labs"
  description: string;            // Full markdown-supported description
  
  category: TaskCategory;
  
  // ========== COMPENSATION & TIMING ==========
  
  reward: number;                 // USD amount (200-2000 typical)
  currency: string;               // "USD", "CAD", "EUR"
  paymentTiming?: 'IMMEDIATE' | 'AFTER_REVIEW' | 'ON_HIRE';
  // IMMEDIATE: paid upon submission
  // AFTER_REVIEW: paid after accepted (typical)
  // ON_HIRE: if leads to job offer
  
  durationLabel: string;          // "5-8 hours", "1 week", "ongoing"
  
  // ========== REQUIREMENTS & DIFFICULTY ==========
  
  requiredSkills: string[];       // ["React", "TypeScript", "CSS"]
  difficulty: SkillLevel;         // JUNIOR | MID | SENIOR
  minRating?: number;             // Minimum candidate rating to apply (e.g., 4.0+)
  
  // ========== STATUS & LIFECYCLE ==========
  
  status: TaskStatus;             // OPEN | IN_PROGRESS | COMPLETED | CLOSED
  companyId: UUID;                // Posted by which company
  
  createdAt: ISODateString;
  postedAt: ISODateString;
  deadline: ISODateString;        // When submissions close
  completedAt?: ISODateString;    // When all grading done
  
  // ========== MARKETPLACE METRICS ==========
  
  submissionCount: number;        // How many submissions received
  maxSubmissions?: number;        // Cap submissions? (default: unlimited)
  
  /**
   * avgSubmissionQuality: 0-100 aggregate score
   * Shows candidates "average submission quality: 78/100"
   * Helps candidates decide if worth their effort
   */
  avgSubmissionQuality?: number;
  
  // ========== CONTENT & MEDIA ==========
  
  heroImage: ImageAsset;          // 16:9, 1280x720px featured image
  gallery?: ImageAsset[];         // Additional context images
  
  // ========== SUBMISSION & EVALUATION ==========
  
  requirements: TaskRequirement[];  // What to submit
  acceptanceCriteria: string[];     // How we judge success
  perks?: string[];               // "Fast feedback", "Featured", etc.
  skillsToGain?: string[];        // What they'll learn
  
  /**
   * Rubric - AI and company use this to evaluate submissions
   * Ensures consistent, fair grading
   */
  rubric?: ScoringRubric;
  
  // ========== COMPANY NOTES ==========
  
  internalNotes?: string;         // Not visible to candidates
}

interface TaskRequirement {
  id: UUID;
  title: string;                  // "Submit GitHub repo link"
  description: string;
  isRequired: boolean;
  type?: 'LINK' | 'FILE' | 'TEXT' | 'VIDEO';
  
  // Validation hints
  validationPattern?: string;     // Regex for validation
  validationMessage?: string;     // Error message if invalid
}

/**
 * ScoringRubric - Framework for evaluating submissions
 * 
 * Example rubric for React Dashboard task:
 * - Code Quality (30%): Organization, patterns, best practices
 * - UX / Polish (30%): Design, animations, attention to detail
 * - Completeness (25%): Did they implement all requirements?
 * - Communication (15%): README, comments, explanation
 * 
 * Each dimension scored 1-5, company reviewer applies weighting
 */
interface ScoringRubric {
  id: UUID;
  dimensions: RubricDimension[];
  overallWeighting: Record<string, number>; // e.g., { "Code Quality": 0.3 }
}

interface RubricDimension {
  id: UUID;
  label: string;                  // "Code Quality"
  description: string;
  scoringGuide: string;           // "1=Messy, 5=Production-ready"
  weight?: number;                // 0.3 = 30% of overall score
}
```

### 1.7 Submission & Evaluation Models - COMPREHENSIVE

```ts
/**
 * TaskSubmission - When a candidate submits work for a task
 * 
 * Lifecycle:
 * 1. DRAFT: Candidate saving locally (never sent to server)
 * 2. SUBMITTED: Candidate clicked "submit" - now in company queue
 * 3. UNDER_REVIEW: Company reviewer opened it
 * 4. ACCEPTED: Company approved, AI issues certification
 * 5. REJECTED: Company rejected, no certification
 */
interface TaskSubmission {
  id: UUID;
  taskId: UUID;
  candidateId: UUID;
  status: SubmissionStatus;
  
  // ========== TIMING ==========
  
  createdAt: ISODateString;       // When they started working
  submittedAt?: ISODateString;    // When they hit submit
  reviewedAt?: ISODateString;     // When company reviewed
  lastUpdatedAt: ISODateString;
  
  // ========== SUBMISSION CONTENT ==========
  
  repoUrl?: string;               // GitHub repo link
  liveUrl?: string;               // Vercel/Netlify deployed site
  notes?: string;                 // Candidate's cover letter / notes
  attachments?: SubmissionAttachment[];
  
  // ========== EVALUATION ==========
  
  review?: SubmissionReview;      // Company review if submitted
  certification?: CertificationResult;  // Badge issued if accepted
}

interface SubmissionAttachment {
  id: UUID;
  label: string;                  // "Demo Video"
  type: 'IMAGE' | 'VIDEO' | 'DOCUMENT' | 'LINK';
  
  // Polymorphic: one of these will be populated
  image?: ImageAsset;
  video?: VideoAsset;
  url?: string;                   // External link or PDF
  
  uploadedAt: ISODateString;
}

/**
 * SubmissionReview - Company's evaluation of a submission
 * 
 * Created when company clicks "Review this submission"
 * Includes scoring and feedback
 */
interface SubmissionReview {
  id: UUID;
  submissionId: UUID;
  reviewerId: UUID;               // Company user who reviewed
  
  // ========== SCORING ==========
  
  /**
   * Overall score: 1-5 scale
   * Translated to percentage: (score/5)*100 = 0-100
   * Display: 4.5★ or 90/100
   */
  scoreOverall: number;           // 1-5 or 0-100 (system converts)
  
  /**
   * Dimension scores: breakdown by rubric category
   * E.g., [Code Quality: 4, UX: 5, Completeness: 4]
   * Weighted average = overall score
   */
  scoreDimensions: SubmissionScoreDimension[];
  
  // ========== FEEDBACK ==========
  
  feedbackSummary: string;        // Human feedback (500-2000 chars)
  aiFeedback?: string;            // AI-generated rationale
  
  // ========== DECISION ==========
  
  verdict?: 'ACCEPTED' | 'REJECTED' | 'NEEDS_REVISION';
  message?: string;               // Why accepted/rejected
  
  // ========== METADATA ==========
  
  createdAt: ISODateString;
  updatedAt?: ISODateString;
  reviewTimeMinutes?: number;     // How long reviewer spent
}

interface SubmissionScoreDimension {
  id: UUID;
  dimensionId: UUID;              // Links to RubricDimension
  label: string;                  // "Code Quality"
  score: number;                  // 1-5 or 0-100
  comment?: string;               // Reviewer comment for this dimension
}

/**
 * CertificationResult - Badge + proof of verified skill
 * 
 * Issued immediately after ACCEPTED submission
 * Links candidate skill to verified, issued badge
 */
interface CertificationResult {
  id: UUID;
  candidateId: UUID;
  taskId: UUID;
  submissionId: UUID;
  
  // ========== WHAT WAS VERIFIED ==========
  
  skill: string;                  // "React", "Next.js", "Figma"
  assessedLevel: SkillLevel;      // Based on task difficulty
  
  // ========== OUTCOME ==========
  
  passed: boolean;
  score: number;                  // 0-100
  rubricBreakdown: RubricCriterion[];
  
  // ========== BADGE ISSUED ==========
  
  issuedBadge?: Badge;
  issuedAt: ISODateString;
  issuer: string;                 // "SkillForge AI"
  
  // ========== SHAREABLE PROOF ==========
  
  certificateUrl?: string;        // Download PDF: skillforge.com/cert/abc123
  linkedinShareUrl?: string;      // Pre-filled: "I just earned React Certified badge"
}

interface RubricCriterion {
  id: UUID;
  label: string;                  // "Problem Understanding"
  maxScore: number;               // e.g., 20 (sum = 100)
  earnedScore: number;
  comment?: string;               // Why this score
}
```

### 1.8 Career Progression Models

```ts
/**
 * CareerTrackDefinition - Blueprint for a career path
 * 
 * Shows candidates:
 * - What jobs are in this track
 * - What skills they need
 * - What tasks to do
 * - How long it typically takes
 */
interface CareerTrackDefinition {
  id: UUID;
  track: CareerTrack;
  label: string;                  // "Frontend Engineering"
  description: string;
  heroImage?: ImageAsset;
  
  // Learning Path
  recommendedSkills: string[];
  recommendedTasks: UUID[];
  milestones: CareerMilestone[];
  
  // Outcomes
  avgTimeToJobReady?: number;     // weeks
  jobTitles?: string[];
  avgSalaryExpectation?: number;
}

interface CareerMilestone {
  id: UUID;
  sequence: number;               // 1, 2, 3...
  label: string;                  // "Ship 3 Real Projects"
  description: string;
  requiredTasksCompleted: number;
  requiredLevel: SkillLevel;
  estimatedWeeks?: number;
}

/**
 * CareerProgressSnapshot - Where candidate is on their path
 * 
 * Shown on dashboard to answer:
 * - "Where am I in my career?"
 * - "What should I do next?"
 * - "How close am I to my goal?"
 */
interface CareerProgressSnapshot {
  candidateId: UUID;
  track: CareerTrack;
  
  // Progress
  progressPercent: number;        // 0-100
  completedMilestones: UUID[];
  upcomingMilestones: CareerMilestone[];
  
  // Guidance
  recommendedNextTasks: Task[];
  skillGaps: string[];            // ["System Design", "Go"]
  
  // Stats
  totalTasksCompleted: number;
  totalEarnings: number;
  estimatedWeeksToTarget?: number;
  
  lastUpdatedAt: ISODateString;
}
```

---

## PART 2: COMPREHENSIVE MOCK DATA

### 2.1 Mock Image Assets - Full Catalog

```ts
/**
 * CANDIDATE AVATARS
 * Used for: profile pages, submissions, leaderboards, comments
 */
const mockCandidateImages = {
  jordanLeeAvatar: {
    id: 'img_avatar_jordan',
    url: '/assets/images/candidates/jordan-lee.jpg',
    alt: 'Jordan Lee profile photo',
    width: 400,
    height: 400,
    aspectRatio: 1,
    uploadedAt: '2026-01-10T12:00:00.000Z',
  },
  alexChenAvatar: {
    id: 'img_avatar_alex',
    url: '/assets/images/candidates/alex-chen.jpg',
    alt: 'Alex Chen headshot',
    width: 400,
    height: 400,
    uploadedAt: '2026-01-12T09:30:00.000Z',
  },
  sarahPatelAvatar: {
    id: 'img_avatar_sarah',
    url: '/assets/images/candidates/sarah-patel.jpg',
    alt: 'Sarah Patel professional photo',
    width: 400,
    height: 400,
    uploadedAt: '2026-01-08T14:15:00.000Z',
  },
};

/**
 * COMPANY LOGOS
 * Used for: task cards, company profiles, branding
 * Format: PNG with transparency for dark/light mode compatibility
 */
const mockCompanyLogos = {
  atlasLabsLogo: {
    id: 'img_logo_atlas',
    url: '/assets/images/companies/atlas-labs.png',
    alt: 'Atlas Labs logo',
    width: 200,
    height: 200,
    uploadedAt: '2026-01-01T00:00:00.000Z',
  },
  nexusAiLogo: {
    id: 'img_logo_nexus',
    url: '/assets/images/companies/nexus-ai.png',
    alt: 'Nexus AI logo',
    width: 200,
    height: 200,
    uploadedAt: '2026-01-01T00:00:00.000Z',
  },
  brightwaveStudiosLogo: {
    id: 'img_logo_brightwave',
    url: '/assets/images/companies/brightwave-studios.png',
    alt: 'Brightwave Studios logo',
    width: 200,
    height: 200,
    uploadedAt: '2026-01-01T00:00:00.000Z',
  },
};

/**
 * TASK HERO IMAGES (16:9 Aspect Ratio)
 * Used for: task detail page hero, task card preview
 * Format: Optimized JPG, 1280x720px
 * Purpose: Eye-catching, context-setting imagery
 */
const mockTaskHeroImages = {
  reactDashboardHero: {
    id: 'img_task_dashboard',
    url: '/assets/images/tasks/react-dashboard-hero.jpg',
    alt: 'Analytics dashboard with teal and gray theme',
    width: 1280,
    height: 720,
    aspectRatio: 16/9,
    uploadedAt: '2026-01-12T14:00:00.000Z',
  },
  nextjsEcommerceHero: {
    id: 'img_task_ecommerce',
    url: '/assets/images/tasks/nextjs-ecommerce-hero.jpg',
    alt: 'Product page showing shoes with zoom and cart',
    width: 1280,
    height: 720,
    uploadedAt: '2026-01-13T10:30:00.000Z',
  },
  figmaDesignSystemHero: {
    id: 'img_task_design_system',
    url: '/assets/images/tasks/figma-design-system-hero.jpg',
    alt: 'Figma workspace with components and color palette',
    width: 1280,
    height: 720,
    uploadedAt: '2026-01-14T11:00:00.000Z',
  },
  pythonApiHero: {
    id: 'img_task_python_api',
    url: '/assets/images/tasks/python-api-hero.jpg',
    alt: 'VS Code showing FastAPI endpoints with docs',
    width: 1280,
    height: 720,
    uploadedAt: '2026-01-15T09:45:00.000Z',
  },
};

/**
 * BADGE ICONS (64x64px Square PNG)
 * Used for: skill badges, certifications, credential display
 * Format: PNG with transparency
 */
const mockBadgeIcons = {
  reactMidBadge: {
    id: 'img_badge_react_mid',
    url: '/assets/images/badges/react-mid-level.png',
    alt: 'React Mid-Level badge',
    width: 64,
    height: 64,
    uploadedAt: '2026-01-15T09:30:00.000Z',
  },
  typescriptJuniorBadge: {
    id: 'img_badge_ts_junior',
    url: '/assets/images/badges/typescript-junior.png',
    alt: 'TypeScript Junior badge',
    width: 64,
    height: 64,
    uploadedAt: '2026-01-15T09:30:00.000Z',
  },
  nextjsSeniorBadge: {
    id: 'img_badge_nextjs_senior',
    url: '/assets/images/badges/nextjs-senior.png',
    alt: 'Next.js Senior badge',
    width: 64,
    height: 64,
    uploadedAt: '2026-01-16T11:00:00.000Z',
  },
};

/**
 * PORTFOLIO IMAGES (Various Sizes)
 * Used for: portfolio gallery, case studies
 * Format: JPG, responsive sizes
 */
const mockPortfolioImages = {
  jordanLandingDesktop: {
    id: 'img_portfolio_landing_desktop',
    url: '/assets/images/portfolio/jordan-landing-desktop.jpg',
    alt: 'SaaS landing page on desktop browser',
    width: 1200,
    height: 800,
    uploadedAt: '2026-01-15T10:00:00.000Z',
  },
  jordanLandingMobile: {
    id: 'img_portfolio_landing_mobile',
    url: '/assets/images/portfolio/jordan-landing-mobile.jpg',
    alt: 'SaaS landing page on mobile phone',
    width: 600,
    height: 1000,
    uploadedAt: '2026-01-15T10:00:00.000Z',
  },
  alexDashboardDark: {
    id: 'img_portfolio_dashboard_dark',
    url: '/assets/images/portfolio/alex-dashboard-dark.jpg',
    alt: 'Admin dashboard with dark theme',
    width: 1200,
    height: 800,
    uploadedAt: '2026-01-14T14:30:00.000Z',
  },
};
```

### 2.2 Mock Candidate Users - THREE PERSONAS

```ts
/**
 * PERSONA 1: JORDAN LEE
 * Status: Early-stage active candidate
 * Profile: Bootcamp graduate, learning on SkillForge
 * Completed: 7 tasks | Earnings: $2,350 | Rating: 4.8★ (12 reviews)
 * 
 * Motivation: Building portfolio to land first dev role
 * Task preference: Frontend, 5-8 hours, $300-500 per task
 * Next step: Reach "mid-level ready" status for interviews
 */
const mockCandidateJordan: User = {
  id: 'user_jordan_lee',
  email: 'jordan.lee@example.com',
  name: 'Jordan Lee',
  role: 'CANDIDATE',
  avatar: mockCandidateImages.jordanLeeAvatar,
  createdAt: '2026-01-10T12:00:00.000Z',
  lastActiveAt: '2026-01-17T17:45:00.000Z',
  isVerified: true,
  profile: {
    // Identity
    headline: 'Frontend Engineer | React + TypeScript | Looking for First Role',
    bio: 'Bootcamp graduate from Lighthouse Labs (Dec 2025). Learning by shipping real projects. Passionate about clean code and user-centric design.',
    location: 'Toronto, Canada',
    careerTrack: 'SOFTWARE_ENGINEERING',
    skillsLookingFor: ['System Design', 'Go', 'Advanced React'],
    
    // Skills - Verified through SkillForge tasks
    skills: [
      {
        id: 'skill_jordan_react',
        name: 'React',
        level: 'MID',
        verified: true,
        verifiedAt: '2026-01-15T09:30:00.000Z',
        badge: {
          id: 'badge_jordan_react',
          name: 'React Certified: Mid-Level',
          description: 'Completed 5+ mid-level React tasks with avg 4.5+ rating',
          icon: mockBadgeIcons.reactMidBadge,
          level: 'MID',
          issuedAt: '2026-01-15T09:30:00.000Z',
          issuedBy: 'SkillForge AI',
          rarity: 'UNCOMMON',
        },
        proofCount: 5,
      },
      {
        id: 'skill_jordan_typescript',
        name: 'TypeScript',
        level: 'JUNIOR',
        verified: false,
        trend: 'improving',
      },
      {
        id: 'skill_jordan_tailwind',
        name: 'Tailwind CSS',
        level: 'MID',
        verified: true,
        verifiedAt: '2026-01-10T14:00:00.000Z',
        proofCount: 3,
      },
    ],
    
    badges: [
      {
        id: 'badge_jordan_top_performer',
        name: 'Top Performer: January 2026',
        description: 'Ranked in top 5% of candidates',
        icon: mockBadgeIcons.reactMidBadge,
        issuedAt: '2026-01-17T00:00:00.000Z',
        issuedBy: 'SkillForge',
        rarity: 'RARE',
      },
    ],
    
    // Activity
    completedTasksCount: 7,
    totalEarnings: 2350,
    totalEarningsThisMonth: 650,
    rating: 4.8,
    ratingCount: 12,
    
    portfolio: [
      {
        id: 'portfolio_jordan_landing',
        title: 'SaaS Landing Page',
        summary: 'Full-stack landing page with Stripe integration and email signup',
        description: 'Built a modern landing page for fictional SaaS product. Features include responsive design, Stripe payment integration, email capture with ConvertKit, and analytics integration. Deployed on Vercel with auto-scaling.',
        skillsUsed: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
        coverImage: mockPortfolioImages.jordanLandingDesktop,
        gallery: [mockPortfolioImages.jordanLandingDesktop, mockPortfolioImages.jordanLandingMobile],
        repoUrl: 'https://github.com/jordan-lee/saas-landing',
        liveUrl: 'https://saas-landing.vercel.app',
        linkedTaskId: 'task_frontend_1',
        createdAt: '2026-01-15T10:00:00.000Z',
      },
    ],
    
    submissions: [],
    
    // Preferences
    socialLinks: {
      github: 'https://github.com/jordan-lee',
      linkedin: 'https://linkedin.com/in/jordan-lee',
      personalSite: 'https://jordanlee.dev',
    },
    preferredTaskDuration: 'MEDIUM',
    preferredCategories: ['FRONTEND', 'FULLSTACK'],
    availability: 'FLEXIBLE',
    timezone: 'America/Toronto',
  },
};

/**
 * PERSONA 2: ALEX CHEN
 * Status: High-performer, actively interviewing
 * Profile: CS grad with startup experience, shipping features daily
 * Completed: 12 tasks | Earnings: $4,800 | Rating: 4.9★ (23 reviews)
 * 
 * Motivation: Leverage SkillForge for senior role interviews
 * Task preference: Full-stack, 8-12 hours, $600-800 per task
 * Next step: Negotiate equity at next startup
 */
const mockCandidateAlex: User = {
  id: 'user_alex_chen',
  email: 'alex.chen@example.com',
  name: 'Alex Chen',
  role: 'CANDIDATE',
  avatar: mockCandidateImages.alexChenAvatar,
  createdAt: '2025-11-01T08:00:00.000Z',
  lastActiveAt: '2026-01-17T22:30:00.000Z',
  isVerified: true,
  profile: {
    headline: 'Full-Stack Engineer | React + Node.js + PostgreSQL | Senior Ready',
    bio: 'CS graduate with 2 years at Series A fintech startup. Built features used by 50k+ users. Passionate about scalable systems and mentoring junior devs.',
    location: 'San Francisco, USA',
    careerTrack: 'SOFTWARE_ENGINEERING',
    skillsLookingFor: ['System Design mastery', 'Cloud Architecture'],
    
    skills: [
      {
        id: 'skill_alex_react',
        name: 'React',
        level: 'SENIOR',
        verified: true,
        verifiedAt: '2026-01-10T09:30:00.000Z',
        proofCount: 8,
      },
      {
        id: 'skill_alex_nodejs',
        name: 'Node.js',
        level: 'SENIOR',
        verified: true,
        verifiedAt: '2026-01-09T14:00:00.000Z',
        proofCount: 7,
      },
      {
        id: 'skill_alex_postgres',
        name: 'PostgreSQL',
        level: 'MID',
        verified: true,
        verifiedAt: '2025-12-20T11:30:00.000Z',
        proofCount: 4,
      },
    ],
    
    badges: [
      {
        id: 'badge_alex_elite',
        name: 'Elite Developer',
        description: 'Top 1% of developers on SkillForge',
        icon: mockBadgeIcons.reactMidBadge,
        issuedAt: '2026-01-17T00:00:00.000Z',
        issuedBy: 'SkillForge',
        rarity: 'RARE',
      },
    ],
    
    completedTasksCount: 12,
    totalEarnings: 4800,
    totalEarningsThisMonth: 1200,
    rating: 4.9,
    ratingCount: 23,
    
    portfolio: [],
    submissions: [],
    
    socialLinks: {
      github: 'https://github.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
    },
    
    preferredTaskDuration: 'LONG',
    preferredCategories: ['FULLSTACK', 'BACKEND'],
    availability: 'PART_TIME',
    timezone: 'America/Los_Angeles',
    minExpectedSalary: 200000,
  },
};

/**
 * PERSONA 3: SARAH PATEL
 * Status: Career changer, early learner
 * Profile: Former PM transitioning to product design
 * Completed: 2 tasks | Earnings: $450 | Rating: 4.3★ (2 reviews)
 * 
 * Motivation: Bridge PM + design skills
 * Task preference: Product, Design, 4-6 hours, $200-300 per task
 * Next step: Build design system expertise
 */
const mockCandidateSarah: User = {
  id: 'user_sarah_patel',
  email: 'sarah.patel@example.com',
  name: 'Sarah Patel',
  role: 'CANDIDATE',
  avatar: mockCandidateImages.sarahPatelAvatar,
  createdAt: '2026-01-05T10:00:00.000Z',
  lastActiveAt: '2026-01-16T19:15:00.000Z',
  isVerified: true,
  profile: {
    headline: 'Product Manager → Product Designer | Learning Design Systems',
    bio: 'Former PM at enterprise SaaS (5 years). Transitioning into product design. Passionate about user research and design thinking.',
    location: 'New York, USA',
    careerTrack: 'PRODUCT_MANAGEMENT',
    skillsLookingFor: ['Figma Advanced', 'Design Systems', 'Prototyping'],
    
    skills: [
      {
        id: 'skill_sarah_figma',
        name: 'Figma',
        level: 'MID',
        verified: false,
      },
      {
        id: 'skill_sarah_html',
        name: 'HTML/CSS',
        level: 'JUNIOR',
        verified: true,
        verifiedAt: '2026-01-14T15:45:00.000Z',
        proofCount: 2,
      },
    ],
    
    badges: [],
    completedTasksCount: 2,
    totalEarnings: 450,
    rating: 4.3,
    ratingCount: 2,
    
    portfolio: [],
    submissions: [],
    
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahpatel',
    },
    
    preferredTaskDuration: 'MEDIUM',
    preferredCategories: ['DESIGN', 'PRODUCT'],
    availability: 'FLEXIBLE',
  },
};
```

### 2.3 Mock Company Users

```ts
const mockCompanyAtlas: User = {
  id: 'user_company_atlas',
  email: 'hiring@atlaslabs.com',
  name: 'Atlas Labs Talent Team',
  role: 'COMPANY',
  avatar: mockCompanyLogos.atlasLabsLogo,
  createdAt: '2025-09-01T09:00:00.000Z',
  lastActiveAt: '2026-01-17T18:30:00.000Z',
  isVerified: true,
  profile: {
    companyName: 'Atlas Labs',
    industry: 'B2B SaaS / Analytics',
    location: 'San Francisco, USA',
    logo: mockCompanyLogos.atlasLabsLogo,
    description: 'Atlas Labs builds real-time analytics infrastructure for enterprise data teams. Series B (funded by Sequoia + Kleiner Perkins).',
    website: 'https://atlaslabs.com',
    employeeCount: 50,
    fundingStage: 'Series B',
    
    hiresCount: 7,
    totalTasksPosted: 24,
    totalSpend: 18250,
    avgReviewTime: 1.2,
    averageRating: 4.7,
    
    preferredSkillsToHire: ['React', 'TypeScript', 'System Design', 'GraphQL'],
    hiringVolumePerMonth: 3,
    
    postedTasks: [],
    submissions: [],
  },
};

const mockCompanyNexus: User = {
  id: 'user_company_nexus',
  email: 'talent@nexusai.com',
  name: 'Nexus AI Recruiting',
  role: 'COMPANY',
  avatar: mockCompanyLogos.nexusAiLogo,
  createdAt: '2025-08-15T14:00:00.000Z',
  lastActiveAt: '2026-01-15T16:45:00.000Z',
  isVerified: true,
  profile: {
    companyName: 'Nexus AI',
    industry: 'AI / Machine Learning',
    location: 'Boston, USA',
    logo: mockCompanyLogos.nexusAiLogo,
    description: 'Building next-generation AI infrastructure. Series A funded, growing fast.',
    website: 'https://nexusai.com',
    employeeCount: 20,
    fundingStage: 'Series A',
    
    hiresCount: 3,
    totalTasksPosted: 8,
    totalSpend: 4500,
    avgReviewTime: 2.1,
    averageRating: 4.5,
    
    preferredSkillsToHire: ['Python', 'PyTorch', 'ML', 'SQL'],
    hiringVolumePerMonth: 2,
    
    postedTasks: [],
    submissions: [],
  },
};
```

### 2.4 Mock Tasks - DETAILED

```ts
/**
 * TASK 1: React Analytics Dashboard
 * Difficulty: MID | Reward: $400 | Duration: 5-8 hours
 * Posted by: Atlas Labs
 * Submissions: 12 | Avg Quality: 78/100
 * 
 * This task is designed to test:
 * - Component architecture
 * - State management
 * - Responsive design
 * - Data visualization
 * - TypeScript proficiency
 */
const mockTaskReactDashboard: Task = {
  id: 'task_react_dashboard',
  title: 'Build a responsive analytics dashboard in React',
  slug: 'react-analytics-dashboard-atlas-labs',
  description: `# Build a Responsive Analytics Dashboard

You will build a fully responsive analytics dashboard for Atlas platform. This is a real component we plan to use in production (if quality is high enough).

## Features Required:
- **Metric Cards**: Display KPI values with trend indicators
- **Time Series Chart**: Show metrics over time using charting library
- **Sidebar Navigation**: Quick jump to different dashboard sections
- **Responsive Layout**: Works perfectly on mobile, tablet, desktop
- **Dark/Light Mode Toggle**: Support both themes

## Technical Constraints:
- React 18+ with TypeScript
- Component-based architecture (break into 5+ components)
- State management using Context API or Zustand
- No API calls (use mock data provided in JSON)
- Tailwind CSS for styling (required)
- Mobile-first responsive approach

## Success Metrics:
- Pixel-perfect match to provided Figma design
- Lighthouse score 90+ on desktop, 75+ on mobile
- Zero console errors or warnings
- Performance: Initial load < 2 seconds on 4G
- Code: clean, documented, with proper TypeScript types

Your submission will be reviewed by:
1. Automated performance check (Lighthouse CI)
2. UI pixel-matching tool
3. Senior engineer code review (48 hours max)
4. AI rubric scoring
  `,
  category: 'FRONTEND',
  reward: 400,
  currency: 'USD',
  paymentTiming: 'AFTER_REVIEW',
  durationLabel: '5-8 hours',
  requiredSkills: ['React', 'TypeScript', 'CSS', 'Responsive Design'],
  difficulty: 'MID',
  status: 'OPEN',
  companyId: 'user_company_atlas',
  createdAt: '2026-01-12T14:00:00.000Z',
  deadline: '2026-01-20T23:59:59.000Z',
  postedAt: '2026-01-12T14:00:00.000Z',
  submissionCount: 12,
  avgSubmissionQuality: 78,
  heroImage: mockTaskHeroImages.reactDashboardHero,
  gallery: [mockTaskHeroImages.reactDashboardHero],
  
  requirements: [
    {
      id: 'req_repo',
      title: 'GitHub Repository',
      description: 'Public GitHub repo with your complete code and clear README instructions',
      isRequired: true,
      type: 'LINK',
      validationPattern: '^https:\\/\\/github\\.com\\/',
      validationMessage: 'Must be a valid GitHub URL',
    },
    {
      id: 'req_live',
      title: 'Live Deployment',
      description: 'Deployed on Vercel or Netlify with live URL',
      isRequired: true,
      type: 'LINK',
    },
    {
      id: 'req_design_ref',
      title: 'Design Reference (Optional)',
      description: 'Link to Figma file or screenshot showing design system used',
      isRequired: false,
      type: 'LINK',
    },
  ],
  
  acceptanceCriteria: [
    'Layout works perfectly on iPhone 12, iPad Pro, desktop (1920px)',
    'All dashboard components render without errors',
    'Navigation between sections is smooth and intuitive',
    'Code is organized with proper React best practices',
    'TypeScript types are comprehensive (no `any` types)',
    'Performance: Lighthouse 85+ desktop, 75+ mobile',
    'No console errors/warnings in DevTools',
    'README explains architecture and how to run',
  ],
  
  perks: [
    '⚡ Fast feedback: Reviewed within 24 hours',
    '🌟 Featured submission: Top 3 featured on Atlas blog',
    '📞 Career coaching: 30-min call with VP Engineering if accepted',
    '🤝 Potential interview: May discuss full-time opportunities',
  ],
  
  skillsToGain: [
    'Building scalable React components',
    'Advanced state management patterns',
    'Responsive design implementation',
    'TypeScript best practices',
    'Performance optimization',
    'Testing strategies',
  ],
  
  rubric: {
    id: 'rubric_task_1',
    dimensions: [
      {
        id: 'dim_code_quality',
        label: 'Code Quality',
        description: 'Is the code clean, organized, and maintainable?',
        scoringGuide: '1=Messy/hard to follow | 3=Decent, some improvements | 5=Production-ready, excellent structure',
        weight: 0.3,
      },
      {
        id: 'dim_ux_polish',
        label: 'UX / Polish',
        description: 'Does it feel polished and professional?',
        scoringGuide: '1=Rough edges, missing details | 3=Good, but some polish missing | 5=Pixel-perfect, smooth animations',
        weight: 0.3,
      },
      {
        id: 'dim_completeness',
        label: 'Completeness',
        description: 'Were all requirements fully implemented?',
        scoringGuide: '1=Major features missing | 3=Most features done | 5=All features + nice-to-haves',
        weight: 0.25,
      },
      {
        id: 'dim_communication',
        label: 'Communication',
        description: 'Is your documentation clear?',
        scoringGuide: '1=No docs | 3=Basic docs | 5=Excellent docs, clear decisions explained',
        weight: 0.15,
      },
    ],
    overallWeighting: {
      'Code Quality': 0.3,
      'UX / Polish': 0.3,
      'Completeness': 0.25,
      'Communication': 0.15,
    },
  },
};

/**
 * TASK 2: Next.js E-Commerce Product Page
 * Difficulty: SENIOR | Reward: $750 | Duration: 10-12 hours
 * Posted by: Brightwave Studios
 * Submissions: 5 | Avg Quality: 85/100
 * 
 * This is a harder task, testing senior-level understanding of:
 * - Performance optimization
 * - Image optimization
 * - Server vs Client components
 * - Complex state
 */
const mockTaskNextjsEcommerce: Task = {
  id: 'task_nextjs_ecommerce',
  title: 'Build a high-performance e-commerce product page with Next.js',
  slug: 'nextjs-ecommerce-product-page-brightwave',
  description: `# High-Performance E-Commerce Product Page

Build a production-grade product page for an e-commerce site using Next.js, optimized for speed and UX.

## Requirements:
- Product image gallery with zoom
- Dynamic variant selection
- Add-to-cart functionality
- Related products carousel
- Customer reviews section
- Mobile responsive
- SEO optimized
- Performance optimized

## Technical Specs:
- Next.js 14+ with App Router
- TypeScript required
- Server-side rendering for SEO
- Image optimization using next/image
- Vercel deployment
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  `,
  category: 'FULLSTACK',
  reward: 750,
  currency: 'USD',
  durationLabel: '10-12 hours',
  requiredSkills: ['Next.js', 'TypeScript', 'React', 'Performance Optimization'],
  difficulty: 'SENIOR',
  status: 'OPEN',
  companyId: 'user_company_brightwave',
  createdAt: '2026-01-13T10:30:00.000Z',
  deadline: '2026-01-22T23:59:59.000Z',
  submissionCount: 5,
  avgSubmissionQuality: 85,
  heroImage: mockTaskHeroImages.nextjsEcommerceHero,
  
  requirements: [
    {
      id: 'req_repo_nextjs',
      title: 'GitHub Repository',
      description: 'Next.js project with full source code',
      isRequired: true,
      type: 'LINK',
    },
    {
      id: 'req_vercel_deploy',
      title: 'Vercel Deployment',
      description: 'Live URL on Vercel (required for performance testing)',
      isRequired: true,
      type: 'LINK',
    },
  ],
  
  acceptanceCriteria: [
    'Page loads in < 3 seconds on 4G connection',
    'Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1',
    'Images use next/image for optimization',
    'Variants change without page reload',
    'Fully responsive (tested iPhone + Android)',
    'Accessible (WCAG 2.1 AA minimum)',
    'SEO: proper meta tags and structured data',
  ],
  
  skillsToGain: [
    'Next.js 14 App Router patterns',
    'Image optimization and Core Web Vitals',
    'Server vs Client component decisions',
    'Performance profiling',
    'SEO implementation',
  ],
};

/**
 * TASK 3: Figma Design System
 * Difficulty: MID | Reward: $500 | Duration: 8-10 hours
 * Posted by: Brightwave Studios
 * Submissions: 8 | Avg Quality: 82/100
 */
const mockTaskFigmaDesignSystem: Task = {
  id: 'task_figma_design_system',
  title: 'Create a comprehensive design system in Figma',
  slug: 'figma-design-system-brightwave',
  description: `# Design System in Figma

Build a complete, production-ready design system including:
- Colors (primary, secondary, semantic)
- Typography system
- Spacing & grid
- Component library
- Icons set (24+ icons)
- Documentation & usage guide
  `,
  category: 'DESIGN',
  reward: 500,
  currency: 'USD',
  durationLabel: '8-10 hours',
  requiredSkills: ['Figma', 'Design Systems', 'UI Design'],
  difficulty: 'MID',
  status: 'OPEN',
  companyId: 'user_company_brightwave',
  createdAt: '2026-01-14T11:00:00.000Z',
  deadline: '2026-01-23T23:59:59.000Z',
  submissionCount: 8,
  avgSubmissionQuality: 82,
  heroImage: mockTaskHeroImages.figmaDesignSystemHero,
  
  requirements: [
    {
      id: 'req_figma_link',
      title: 'Figma File (View Access)',
      description: 'Shared Figma link to design system file',
      isRequired: true,
      type: 'LINK',
    },
  ],
  
  acceptanceCriteria: [
    'Design system well-organized with clear naming',
    'All components are reusable Figma components',
    'Color palette complete with semantic colors',
    'Typography covers all text styles',
    'Component variants show all states',
    'Icons are consistent and organized',
  ],
  
  skillsToGain: [
    'Design system thinking',
    'Figma component mastery',
    'Documentation patterns',
  ],
};
```

### 2.5 Mock Submissions

```ts
/**
 * SUBMISSION 1: Jordan submits React Dashboard
 * Status: UNDER_REVIEW
 * Expected outcome: ACCEPTED with Mid-Level React badge
 */
const mockSubmissionJordanDashboard: TaskSubmission = {
  id: 'sub_jordan_dashboard',
  taskId: 'task_react_dashboard',
  candidateId: 'user_jordan_lee',
  status: 'UNDER_REVIEW',
  createdAt: '2026-01-18T10:15:00.000Z',
  submittedAt: '2026-01-18T10:15:00.000Z',
  lastUpdatedAt: '2026-01-18T10:15:00.000Z',
  
  repoUrl: 'https://github.com/jordan-lee/atlas-dashboard',
  liveUrl: 'https://atlas-dashboard.vercel.app',
  
  notes: `Hi Atlas Labs team!

Really enjoyed working on this project. Here's what I built:

## Implementation Highlights:
✓ Fully responsive design (mobile-first)
✓ Metric cards with animated hover states
✓ Interactive time-series chart (Recharts)
✓ Dark/light mode with persistent preference
✓ Date range filters (7d, 30d, 90d, custom)
✓ Performance: Lighthouse 94 desktop, 87 mobile

## Architecture:
- React 18 + TypeScript (100% typed)
- Context API for dark mode state
- Zustand for dashboard data state
- Tailwind CSS for styling
- Vitest for unit tests
- Vercel for deployment

## Key Points:
- All components are functional with hooks
- Proper separation of concerns
- Accessible: tested with keyboard navigation
- Mock data: JSON file in public/data
- Setup: npm install && npm run dev

Would love your feedback! Excited about the potential interview.

— Jordan`,
  
  attachments: [
    {
      id: 'att_lighthouse',
      label: 'Lighthouse Report',
      type: 'IMAGE',
      url: 'https://example.com/lighthouse-report.png',
      uploadedAt: '2026-01-18T10:15:00.000Z',
    },
  ],
};

/**
 * SUBMISSION 2: Alex submits Next.js E-Commerce
 * Status: ACCEPTED
 * Result: Next.js Senior badge + $750 + interview call
 */
const mockSubmissionAlexEcommerce: TaskSubmission = {
  id: 'sub_alex_ecommerce',
  taskId: 'task_nextjs_ecommerce',
  candidateId: 'user_alex_chen',
  status: 'ACCEPTED',
  createdAt: '2026-01-15T14:30:00.000Z',
  submittedAt: '2026-01-15T14:30:00.000Z',
  reviewedAt: '2026-01-16T09:00:00.000Z',
  lastUpdatedAt: '2026-01-16T09:00:00.000Z',
  
  repoUrl: 'https://github.com/alexchen/ecommerce-nextjs-pro',
  liveUrl: 'https://ecommerce-demo.vercel.app',
  
  notes: 'Implemented all requirements with advanced features like image optimization, dynamic pricing, and inventory sync.',
  
  review: {
    id: 'rev_alex_ecommerce',
    submissionId: 'sub_alex_ecommerce',
    reviewerId: 'user_company_brightwave',
    scoreOverall: 5,
    
    scoreDimensions: [
      {
        id: 'sd_alex_code',
        dimensionId: 'dim_code_quality',
        label: 'Code Quality',
        score: 5,
        comment: 'Exceptional. Perfect component structure, hooks, custom hooks for data fetching. This is how it should be done.',
      },
      {
        id: 'sd_alex_perf',
        dimensionId: 'dim_ux_polish',
        label: 'Performance / Polish',
        score: 5,
        comment: 'Lighthouse: 98 desktop, 92 mobile. Images load instantly. Interactions are buttery smooth.',
      },
      {
        id: 'sd_alex_complete',
        dimensionId: 'dim_completeness',
        label: 'Completeness',
        score: 5,
        comment: 'All requirements met + bonus features (inventory sync, dynamic pricing, wishlist).',
      },
      {
        id: 'sd_alex_comm',
        dimensionId: 'dim_communication',
        label: 'Communication',
        score: 5,
        comment: 'Excellent README with architecture diagram. Code is self-documenting.',
      },
    ],
    
    feedbackSummary: `This is production-ready code. Honestly impressed. The performance optimizations show deep Next.js knowledge. We'd like to schedule an interview to discuss senior engineer opportunities. Can you meet next week?`,
    
    aiFeedback: `Exceptional technical execution. Demonstrates senior-level mastery of Next.js, performance optimization, and best practices. Code quality is 99th percentile. Recommended for fast-track to offer.`,
    
    verdict: 'ACCEPTED',
    message: 'Congratulations! Your work exceeded our expectations. You've earned the Next.js Senior certification and $750 reward.',
    createdAt: '2026-01-16T09:00:00.000Z',
  },
  
  certification: {
    id: 'cert_alex_nextjs',
    candidateId: 'user_alex_chen',
    taskId: 'task_nextjs_ecommerce',
    submissionId: 'sub_alex_ecommerce',
    skill: 'Next.js',
    assessedLevel: 'SENIOR',
    passed: true,
    score: 98,
    rubricBreakdown: [
      {
        id: 'rc_arch',
        label: 'Architecture & Code Organization',
        maxScore: 25,
        earnedScore: 25,
      },
      {
        id: 'rc_perf',
        label: 'Performance & Optimization',
        maxScore: 25,
        earnedScore: 25,
      },
      {
        id: 'rc_features',
        label: 'Feature Completeness',
        maxScore: 25,
        earnedScore: 24,
      },
      {
        id: 'rc_docs',
        label: 'Documentation & Communication',
        maxScore: 25,
        earnedScore: 24,
      },
    ],
    issuedBadge: {
      id: 'badge_alex_nextjs_senior',
      name: 'Next.js Certified: Senior-Level',
      description: 'Built production-grade e-commerce with 98/100 score',
      icon: mockBadgeIcons.nextjsSeniorBadge,
      level: 'SENIOR',
      issuedAt: '2026-01-16T09:00:00.000Z',
      issuedBy: 'SkillForge AI',
      rarity: 'RARE',
    },
    issuedAt: '2026-01-16T09:00:00.000Z',
    issuer: 'SkillForge AI',
    certificateUrl: 'https://skillforge.com/certificates/alex-chen-nextjs-2026',
  },
};
```

---

## PART 3: DETAILED SCREEN SPECIFICATIONS

### 3.1 CANDIDATE DASHBOARD (Home / Hub)

**Path**: `/candidate/dashboard`  
**Authenticated as**: Candidate  
**Purpose**: Answer "Where am I? What should I do next?"

#### Visual Layout
```
┌─ HEADER (Dark background with accent color)
│  ├─ Logo + Brand
│  ├─ Search bar (optional)
│  └─ Profile + Notifications + Settings
├─────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                │
│ ┌─ "Hey Jordan, you're 60% toward mid-level frontend role" │
│ │  [========● ____] 60%                                    │
│ │  15 weeks estimated to goal                              │
│ │  [Browse Tasks] [Career Path] [View Goals]               │
│ └─────────────────────────────────────────────────────────┘
├─────────────────────────────────────────────────────────────┐
│ MAIN CONTENT (3-column grid on desktop, 1 on mobile)       │
│                                                              │
│ ┌─ LEFT COLUMN (60%) ─────────────────────────────────────┐│
│ │                                                          ││
│ │ CAREER PROGRESS WIDGET (Prominent)                     ││
│ │ ┌─ Vertical Timeline ─────────────────────────────────┐││
│ │ │ ✓ Milestone 1: Ship 3 Projects              │ ││
│ │ │   Completed Jan 15, 2026                        │ ││
│ │ │                                                    │ ││
│ │ │ ● Milestone 2: Reach Mid-Level (Current)  │ ││
│ │ │   4/5 tasks completed (80%)                      │ ││
│ │ │   [████████░ 80%]                              │ ││
│ │ │                                                    │ ││
│ │ │   Recommended task:                             │ ││
│ │ │   ┌─────────────────────────────────────────┐ │ ││
│ │ │   │ React Dashboard • $400 • [Apply] →      │ │ ││
│ │ │   └─────────────────────────────────────────┘ │ ││
│ │ │                                                    │ ││
│ │ │ ◯ Milestone 3: Land First Role               │ ││
│ │ │   0/5 tasks completed                          │ ││
│ │ │   Locked (complete M2 first)                    │ ││
│ │ └─────────────────────────────────────────────────┘ ││
│ │                                                      ││
│ │ VERIFIED SKILLS (Grid, 3 columns)                    ││
│ │ ┌──────────┐ ┌──────────┐ ┌──────────┐            ││
│ │ │ [Badge] │ │ [Badge]  │ │ [Badge]  │            ││
│ │ │  React   │ │ Tailwind │ │ Next.js  │            ││
│ │ │  MID ✓   │ │  MID ✓   │ │ JUNIOR   │            ││
│ │ │ 5 tasks  │ │ 3 tasks  │ │ 2 tasks  │            ││
│ │ └──────────┘ └──────────┘ └──────────┘            ││
│ │ [View All Skills]                                   ││
│ │                                                      ││
│ │ RECOMMENDED NEXT TASKS (Carousel or Grid)           ││
│ │ ┌─ Task Card 1 ──────────────────────────────────┐ ││
│ │ │ [16:9 Image]                                   │ ││
│ │ │ Build a Figma design system                   │ ││
│ │ │ Brightwave Studios • $500 • 8-10h • [MID]    │ ││
│ │ │ React, TypeScript, Figma                      │ ││
│ │ │ 8 submissions · 4.2★                          │ ││
│ │ │ [View Details →]                              │ ││
│ │ └─────────────────────────────────────────────────┘ ││
│ │ [Show More Tasks]                                   ││
│ │                                                      ││
│ │ RECENT SUBMISSIONS (Compact)                        ││
│ │ ┌─ Dashboard Task (Jan 18)                        │ ││
│ │ │ Status: UNDER_REVIEW ⏳                         │ ││
│ │ │ Company: Atlas Labs | Reward: $400              │ ││
│ │ │ [View Details]                                  │ ││
│ │ ├─ E-Commerce Page (Jan 15) ✓ ACCEPTED           │ ││
│ │ │ Company: Brightwave | Reward: $750              │ ││
│ │ │ Earned badge: Next.js Certified: Mid-Level     │ ││
│ │ │ [View Certificate] [Share on LinkedIn]         │ ││
│ │ └─────────────────────────────────────────────────┘ ││
│ │ [View All Submissions]                              ││
│ │                                                      ││
│ └──────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ RIGHT SIDEBAR (40%) ───────────────────────────────┐ │
│ │                                                      │ │
│ │ STATS CARDS (Stacked)                              │ │
│ │ ┌──────────────────────────────────┐              │ │
│ │ │ Total Earnings                   │              │ │
│ │ │ $2,350 USD                       │              │ │
│ │ │ +$650 this month (+39%)          │              │ │
│ │ │ [View History →]                │              │ │
│ │ └──────────────────────────────────┘              │ │
│ │                                                      │ │
│ │ ┌──────────────────────────────────┐              │ │
│ │ │ Completed Tasks                  │              │ │
│ │ │ 7 total                          │              │ │
│ │ │ Last: Jan 18                     │              │ │
│ │ └──────────────────────────────────┘              │ │
│ │                                                      │ │
│ │ ┌──────────────────────────────────┐              │ │
│ │ │ Your Rating                      │              │ │
│ │ │ 4.8★ (12 reviews)                │              │ │
│ │ │ Top 15% of candidates            │              │ │
│ │ └──────────────────────────────────┘              │ │
│ │                                                      │ │
│ │ ┌──────────────────────────────────┐              │ │
│ │ │ Portfolio Items                  │              │ │
│ │ │ 3 projects                       │              │ │
│ │ │ [Manage Portfolio →]             │              │ │
│ │ └──────────────────────────────────┘              │ │
│ │                                                      │ │
│ │ QUICK ACTIONS                                      │ │
│ │ [Browse Tasks] [My Submissions] [Profile]         │ │
│ │                                                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### State Requirements
```ts
// Data needed for this page
interface CandidateDashboardState {
  currentUser: User; // with CandidateProfile
  careerProgress: CareerProgressSnapshot;
  verifiedSkills: VerifiedSkill[];
  badges: Badge[];
  recommendedTasks: Task[];
  recentSubmissions: TaskSubmission[];
  stats: {
    totalEarnings: number;
    thisMonthEarnings: number;
    completedTasks: number;
    rating: number;
    ratingCount: number;
    portfolioItems: number;
  };
}
```

---

### 3.2 BROWSE TASKS MARKETPLACE

**Path**: `/tasks` or `/candidate/browse`  
**Purpose**: Candidate discovers and applies to tasks

#### Layout with Filters
```
┌─ TOP BAR (Sticky)
│  ├─ [← Back] "Browse Tasks"
│  ├─ Search: "Search by title, skill, company..." [____]
│  └─ View toggle: [Grid ◆ ◇ List]
├────────────────────────────────────────────────────────────┐
│                                                             │
│ ┌─ LEFT SIDEBAR (20%) ──────┐  ┌─ CENTER (60%) ────────┐ │
│ │ FILTERS                   │  │ TASK GRID              │ │
│ │                           │  │                        │ │
│ │ Category                  │  │ ┌────────────┐         │ │
│ │ ☐ Frontend                │  │ │ [Hero Img] │         │ │
│ │ ☑ Fullstack               │  │ │            │         │ │
│ │ ☐ Backend                 │  │ │ React      │         │ │
│ │ ☐ Design                  │  │ │ Dashboard  │         │ │
│ │ ☐ Product                 │  │ │            │         │ │
│ │                           │  │ │ Atlas Labs │         │ │
│ │ Difficulty                │  │ │ $400 · 5-8h        │ │
│ │ ☑ Junior                  │  │ │ [JUNIOR]  │         │ │
│ │ ☑ Mid                     │  │ │            │         │ │
│ │ ☐ Senior                  │  │ │ React TypeScript    │ │
│ │                           │  │ │            │         │ │
│ │ Reward                    │  │ │ 12 subs   │         │ │
│ │ $200  [─────●─────] $2000 │  │ │ 4.7★      │         │ │
│ │                           │  │ │            │         │ │
│ │ Duration                  │  │ │ [Details]  │         │ │
│ │ ☑ 1-3h                    │  │ └────────────┘         │ │
│ │ ☑ 4-8h                    │  │ [More cards...]        │ │
│ │ ☐ 8h+                     │  │                        │ │
│ │                           │  │ Infinite scroll        │ │
│ │ Skills                    │  │ or pagination          │ │
│ │ [React      ] [x]         │  │                        │ │
│ │ [TypeScript] [x]          │  │ Empty state:           │ │
│ │ [+ Add Skill]             │  │ "No tasks match        │ │
│ │                           │  │  your filters.         │ │
│ │ Sort: [Newest ▼]          │  │  Try adjusting..."     │ │
│ │                           │  └────────────────────────┘ │
│ │ [Clear All Filters]       │                             │
│ │                           │  ┌─ RIGHT SIDEBAR (20%) ──┐ │
│ └───────────────────────────┘  │ SAVED TASKS            │ │
│                                │ (if applicable)        │ │
│                                │ [Task 1]               │ │
│                                │ [Task 2]               │ │
│                                │ [View All →]           │ │
│                                └───────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 3.3 TASK DETAIL PAGE

**Path**: `/tasks/[slug]`  
**Purpose**: Full task description, submission flow

#### Hero Section + Details
```
┌─ FULL-WIDTH HERO (40vh height, parallax scroll)
│ ┌──────────────────────────────────────────────────────────┐
│ │ [Task Hero Image - Full Width]                          │
│ │ [Dark gradient overlay]                                 │
│ │                                                          │
│ │ ┌─ OVERLAY CONTENT (Absolute positioned) ─────────────┐│
│ │ │ [Logo] Atlas Labs                                  ││
│ │ │                                                     ││
│ │ │ Build a responsive analytics dashboard in React  ││
│ │ │ (h1, 48px, white)                                 ││
│ │ │                                                     ││
│ │ │ $400 USD · 5-8 hours · [JUNIOR]                ││
│ │ │ 12 submissions · 4.7★ avg rating                ││
│ │ │                                                     ││
│ │ │ [Green Button] Apply Now →                       ││
│ │ │ (Sticky on scroll)                              ││
│ │ └─────────────────────────────────────────────────────┘│
│ │                                                          │
│ └──────────────────────────────────────────────────────────┘
│
├─ CONTENT SECTION (Scroll down)
│ ├─ Left Column (65%)
│ │ ├─ Task Description (Markdown)
│ │ │  "You will build a fully responsive analytics..."
│ │ │
│ │ ├─ Details Card
│ │ │  • Reward: $400
│ │ │  • Duration: 5-8 hours
│ │ │  • Difficulty: Mid
│ │ │  • Deadline: Jan 20, 2026
│ │ │  • Payment: After Review
│ │ │
│ │ ├─ What to Submit
│ │ │  ☑ GitHub repo link (required)
│ │ │  ○ Live deployment URL (optional)
│ │ │  ○ Design reference (optional)
│ │ │
│ │ ├─ Acceptance Criteria
│ │ │  □ Responsive on mobile, tablet, desktop
│ │ │  □ No console errors
│ │ │  □ Code organized and readable
│ │ │
│ │ ├─ Skills to Gain
│ │ │  [Responsive Design] [React Patterns] [TypeScript]
│ │ │
│ │ ├─ Company Profile (Card)
│ │ │  [Logo] Atlas Labs
│ │ │  "Real-time analytics for enterprise..."
│ │ │  7 hires from SkillForge
│ │ │  4.7★ from candidates
│ │ │  [View Company →]
│ │ │
│ │ ├─ Submission Gallery
│ │ │  "See what others have built"
│ │ │  [Thumb 1] [Thumb 2] [Thumb 3] [Thumb 4]
│ │ │  (Best submissions showcased)
│ │ │
│ │ └─ Bottom CTA (Sticky if scrolled)
│ │    [Green] Apply Now · [Gray] Bookmark · [Share]
│ │
│ ├─ Right Sidebar (35%)
│ │ ├─ Company Stats Box
│ │ │  Company: Atlas Labs
│ │ │  📍 San Francisco
│ │ │  💰 Series B funded
│ │ │  👥 50 employees
│ │ │  ⭐ 4.7★ from candidates
│ │ │
│ │ ├─ Additional Info
│ │ │  Payment timing: After Review
│ │ │  Review time: ~24 hours
│ │ │  Active submissions: 12
│ │ │
│ │ └─ Similar Tasks
│ │    [Task 1]
│ │    [Task 2]
│ │    [Task 3]
│ │
│ └─ Call to Action Button (Full width, top)
│    [Apply Now] - Opens submission form
│
└─────────────────────────────────────────────────────────────
```

---

### 3.4 SUBMISSION FORM (Modal or Page)

**Path**: `/tasks/[slug]/submit` or Modal  
**Purpose**: Candidate submits their work

#### Form Layout
```
┌─ MODAL HEADER
│  "Submit Your Work"
│  [Step 1 of 2]
│  [X] Close
├─────────────────────────────────────────────────┐
│                                                  │
│ FORM SECTION                                    │
│ ┌─ Auto-save indicator ──────────────────────┐ │
│ │ Last saved: 2 minutes ago ✓               │ │
│ └──────────────────────────────────────────── │ │
│                                                  │
│ ├─ GitHub Repository (Required)               │
│ │  Label: "GitHub Repository Link"           │
│ │  Placeholder: "https://github.com/..."    │
│ │  Input: [________________________]         │
│ │  ✓ Valid GitHub link detected!            │
│ │  Preview: jordan-lee/atlas-dashboard      │
│ │                                             │
│ ├─ Live Deployment (Optional)                │
│ │  Label: "Vercel or Netlify URL"           │
│ │  Input: [________________________]         │
│ │  Preview: https://atlas-dashboard.vercel.│
│ │                                             │
│ ├─ Attachments (Optional)                    │
│ │  Label: "Add Demo Video, Screenshots, etc"│
│ │  ┌─ Drag-drop zone ──────────────────────┐│
│ │  │ Drop files here or click to browse    ││
│ │  │ [Supported: mp4, jpg, png, pdf]      ││
│ │  └────────────────────────────────────────┤│
│ │  [File 1: demo-video.mp4] [Remove]      │
│ │                                             │
│ ├─ Notes / Cover Letter (Optional)           │
│ │  Label: "Tell us about your submission"   │
│ │  ┌─────────────────────────────────────┐ │
│ │  │ Hi Atlas Labs team,                 │ │
│ │  │                                     │ │
│ │  │ I enjoyed building this dashboard...│ │
│ │  │                                     │ │
│ │  │ [Character count: 245/2000]         │ │
│ │  └─────────────────────────────────────┘ │
│ │                                             │
│ ├─ PREVIEW SECTION                           │
│ │  "Here's what we'll review:"              │
│ │  ┌──────────────────────────────────────┐ │
│ │  │ GitHub: jordan-lee/atlas-dashboard  │ │
│ │  │ (Verifying repo...)                 │ │
│ │  │                                      │ │
│ │  │ Live: https://atlas-dashboard...   │ │
│ │  │ ✓ Accessible                        │ │
│ │  └──────────────────────────────────────┘ │
│ │                                             │
│ ├─ CONFIRMATION INFO BOX                     │
│ │  📋 Submission Details                     │
│ │  • Task: React Analytics Dashboard         │
│ │  • Company: Atlas Labs                     │
│ │  • Reward: $400 (paid after review)        │
│ │  • Review time: ~24 hours                  │
│ │  • Deadline: Jan 20, 2026                  │
│ │                                             │
│ ├─ ACTION BUTTONS                            │
│ │  [Gray] Save as Draft · [Green] Submit     │
│ │  (Keep in localStorage until submitted)   │
│ │                                             │
│ └─────────────────────────────────────────────│
│                                                │
│ SUBMISSION CONFIRMATION (After click Submit)│
│ ┌──────────────────────────────────────────┐ │
│ │ "Ready to submit?"                       │ │
│ │                                          │ │
│ │ Task: React Analytics Dashboard         │ │
│ │ Reward: $400 (paid after review)        │ │
│ │ Company: Atlas Labs                     │ │
│ │                                          │ │
│ │ "Your submission will be reviewed within│ │
│ │  24-48 hours. You'll earn the reward    │ │
│ │  upon acceptance and completion."        │ │
│ │                                          │ │
│ │ [Cancel] [Yes, Submit]                  │ │
│ └──────────────────────────────────────────┘ │
│                                                │
└─────────────────────────────────────────────────┘
```

---

### 3.5 COMPANY DASHBOARD

**Path**: `/company/dashboard`

#### Layout
```
┌─ HERO
│  "Welcome back, Atlas Labs"
│  Quick stats: 3 open tasks · 7 pending reviews · 2 hires this week
│
├─ KPI CARDS (4-column grid)
│  ┌───────────────┐ ┌────────────┐ ┌─────────┐ ┌─────────┐
│  │ Total Hires   │ │ Open Tasks │ │ Pending │ │ Avg Rating
│  │ 7             │ │ 3          │ │ 7       │ │ 4.7★
│  │ +3 this month │ │ +1 week    │ │ Reviews │ │ from candidates
│  └───────────────┘ └────────────┘ └─────────┘ └─────────┘
│
├─ RECENT TASKS TABLE
│  Task | Status | Submissions | Posted | Actions
│  React... │ OPEN │ 12 pending │ 3d ago │ [Edit] [View] [Close]
│  Next.js... │ OPEN │ 5 pending │ 4d ago │ [Edit] [View] [Close]
│  Figma... │ IN_PROGRESS │ 8 under review │ 3d ago │ [Edit] [View]
│
│  [View All] [Post New Task]
│
├─ CHART: Submissions trend (30 days)
│  Line chart showing submission volume
│
└─ ACTION BUTTON: [Post New Task] (Prominent)
```

---

### 3.6 SUBMISSION REVIEW PANEL

**Path**: `/company/submissions/[taskId]/[submissionId]`

#### 2-Column Layout
```
┌────────────────────────────┬──────────────────────────────┐
│ LEFT (60%)                 │ RIGHT (40%)                  │
├────────────────────────────┼──────────────────────────────┤
│                            │                              │
│ Candidate Info             │ Review Form                  │
│ [Avatar] Jordan Lee        │ Overall Score               │
│ 4.8★ (12 reviews)          │ ⭐⭐⭐⭐ ☆                   │
│ Links: GitHub, LinkedIn    │                              │
│ [View Profile]             │ Dimension Breakdown:        │
│                            │ Code Quality [1-5 ★]        │
│ [Repository] [Live] [Files]│ UX / Polish [1-5 ★]        │
│ (Tabs for different views) │ Completeness [1-5 ★]       │
│                            │ Communication [1-5 ★]      │
│ Repository Preview:        │                              │
│ GitHub link w/ preview     │ Your Feedback:              │
│ Code snippets visible      │ ┌──────────────────────────┐│
│ [View Full on GitHub]      │ │ Exceptional work...     ││
│                            │ │                         ││
│ Live Demo:                 │ │ Highlights:             ││
│ [Open in iframe]           │ │ • Clean architecture    ││
│ [Open in new tab]          │ │ • Great performance     ││
│                            │ │                         ││
│ Previous Reviews (if any): │ │ Areas to improve:       ││
│ [Review 1 summary]         │ │ • Could add tests       ││
│ [Review 2 summary]         │ │                         ││
│                            │ [Use AI Feedback]         │
│                            │ (Toggles AI suggestions)  │
│                            │                            │
│                            │ Action Buttons:            │
│                            │ [Gray] Save Draft          │
│                            │ [Green] Accept & Issue     │
│                            │ [Red] Reject              │
│                            │ [Nav] Prev / Next (X / Y)  │
│                            │                            │
│                            │ Time spent: 12 min        │
│                            │                            │
└────────────────────────────┴──────────────────────────────┘
```

---

## PART 4: KEY DATA FLOWS & INTERACTIONS

### Task Submission Flow
```
1. Candidate browses tasks
2. Clicks [Apply Now]
3. Opens submission form (modal or page)
4. Fills in:
   - GitHub repo (required)
   - Live deployment (optional)
   - Notes (optional)
   - Attachments (optional)
5. Form auto-saves to localStorage every 5 seconds
6. Candidate clicks [Submit]
7. Confirmation modal appears
8. Clicks [Yes, Submit]
9. Submission created (status: SUBMITTED)
10. Redirect to submission detail page
11. Show success message + "Your submission is pending review"
12. Candidate can view submission status on dashboard
```

### Company Review Flow
```
1. Company views dashboard
2. Sees "7 pending reviews"
3. Clicks on specific task
4. Opens submission queue (list of submissions)
5. Company reviewer clicks [View Submission]
6. Opens review panel (2-column layout)
7. Reviewer can:
   - See candidate profile
   - View GitHub repo preview
   - View live deployment
   - Rate on 5-point scale per dimension
   - Add custom feedback
   - View AI suggestions
8. Reviewer clicks [Accept] or [Reject]
9. Confirmation modal appears
10. Clicks [Confirm]
11. Submission status changes to ACCEPTED/REJECTED
12. Certification badge issued (if accepted)
13. Reward paid to candidate
14. Email notifications sent to both parties
```

---

## PART 5: TYPESCRIPT TYPES FOR FRONTEND COMPONENTS

```ts
/**
 * COMPONENT PROP TYPES
 * One for each major component
 */

// Task Card (used in marketplace grid)
interface TaskCardProps {
  task: Task;
  company?: CompanyProfile;
  isBookmarked?: boolean;
  onApply?: () => void;
  onViewDetails?: () => void;
  onToggleBookmark?: () => void;
}

// Career Progress Widget
interface CareerProgressWidgetProps {
  progress: CareerProgressSnapshot;
  onClickMilestone?: (milestone: CareerMilestone) => void;
  size?: 'compact' | 'full';
  isEditable?: boolean;
}

// Verified Skill Badge
interface VerifiedSkillBadgeProps {
  skill: VerifiedSkill;
  size?: 'sm' | 'md' | 'lg';
  showProofCount?: boolean;
  onClick?: () => void;
}

// Submission Review Panel
interface SubmissionReviewPanelProps {
  submission: TaskSubmission;
  task: Task;
  company: CompanyProfile;
  currentIndex: number;
  totalSubmissions: number;
  
  onScore?: (overall: number, dimensions: SubmissionScoreDimension[]) => void;
  onAccept?: (message?: string) => void;
  onReject?: (reason: string) => void;
  onNavigatePrevious?: () => void;
  onNavigateNext?: () => void;
}

// Submission Form
interface SubmissionFormProps {
  task: Task;
  candidate: CandidateProfile;
  onSubmit?: (submission: TaskSubmission) => void;
  onSaveDraft?: (draft: Partial<TaskSubmission>) => void;
  initialDraft?: Partial<TaskSubmission>;
}

// Task Filter Sidebar
interface TaskFilterSidebarProps {
  categories: TaskCategory[];
  onFilterChange: (filters: TaskFilters) => void;
  activeFilters: TaskFilters;
  isLoading?: boolean;
}

interface TaskFilters {
  categories?: TaskCategory[];
  difficultyLevels?: SkillLevel[];
  rewardRange?: [number, number];
  duration?: ('SHORT' | 'MEDIUM' | 'LONG')[];
  skills?: string[];
  sortBy?: 'newest' | 'reward' | 'deadline' | 'submissions';
  searchQuery?: string;
}

// Candidate Dashboard
interface CandidateDashboardProps {
  candidate: User & { profile: CandidateProfile };
  careerProgress: CareerProgressSnapshot;
  recommendedTasks: Task[];
  recentSubmissions: TaskSubmission[];
  onBrowseTasks?: () => void;
  onViewSubmission?: (submissionId: UUID) => void;
}

// Company Dashboard
interface CompanyDashboardProps {
  company: User & { profile: CompanyProfile };
  openTasks: Task[];
  pendingSubmissions: TaskSubmission[];
  hiringMetrics: {
    totalHires: number;
    openTasks: number;
    pendingReviews: number;
    avgReviewTime: number;
  };
  onPostTask?: () => void;
  onViewSubmission?: (submissionId: UUID) => void;
}
```

---

## SUMMARY: What This Spec Covers

✅ **Complete Data Models** (TypeScript interfaces)  
✅ **Comprehensive Mock Data** (3 candidate personas, 3 company personas, 3+ tasks, 2+ submissions)  
✅ **Detailed Screen Specifications** (6+ pages with visual layouts)  
✅ **Component Prop Types** (Ready for React component implementation)  
✅ **Data Flows** (Task submission flow, company review flow)  
✅ **Image Asset Catalog** (Every image type documented)  
✅ **Frontend-Ready** (No backend implementation details, just surfaces)

This spec gives you EVERYTHING needed to build out the frontend without needing to guess at:
- What data looks like
- How pages should layout
- What components need
- What flows look like
- What images are needed

Now just implement the React components and wire them together. 🚀
