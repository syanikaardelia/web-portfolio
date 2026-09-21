export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  course: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  tags: string[];
  image?: string;
  methodology?: string;
}

export interface Experience {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  keyMetrics: { value: string; label: string }[];
  bullets: string[];
  tags: string[];
}

export interface LeadershipItem {
  id: string;
  number: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  focus: string[];
  description: string;
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Syanika Ardelia Erwanto",
    shortName: "Syanika",
    headline: "Psychology Graduate · Talent & People Development",
    tagline: "Understanding people. Developing potential.",
    bioShort:
      "Psychology graduate from Universitas Airlangga with practical exposure in human resources, assessment center operations, and organizational coordination.",
    bioExtended:
      "Psychology graduate from Universitas Airlangga with practical experience from the PT PLN (Persero) Assessment Center. Experienced in supporting assessment operations, coordinating assessors and participants, managing candidate documentation, and handling HR administration. Grounded in Industrial and Organizational Psychology, with strong interpersonal, coordination, and problem-solving abilities.",
    email: "syanika.ardelia@gmail.com",
    linkedin: "https://www.linkedin.com/in/syanikaardelia",
    cvUrl: "/assets/Resume_Syanika Ardelia Erwanto.pdf",
    location: "Indonesia",
    portraitMain: "/assets/portrait-main.jpg",
    portraitSecondary: "/assets/portrait-secondary.jpg",
  },

  education: {
    institution: "Universitas Airlangga",
    degree: "Bachelor of Psychology",
    period: "2022 – 2026",
    gpa: "3.66 / 4.00",
    honors: "Cum Laude",
    focusAreas: [
      "Human Resources",
      "Talent Assessment",
      "Organizational Psychology",
      "People Development",
      "Learning & Development",
    ],
    relevantCourses: [
      "Organizational Assessment & Intervention",
      "Training and Career",
      "Work Behavior and Performance",
      "Industrial and Organizational Psychology",
      "Psychology of Entrepreneurship",
      "Leadership and Decision Making",
    ],
  },

  experiences: [
    {
      id: "pln-officer",
      title: "Associate Psychological Officer — Freelance",
      role: "Associate Psychological Officer",
      organization: "PT PLN (Persero) Assessment Center",
      period: "Jan 2026 – Jul 2026",
      type: "Freelance",
      keyMetrics: [
        { value: "30+", label: "Participants Facilitated" },
        { value: "20+", label: "Assessors & Role Players Coordinated" },
      ],
      bullets: [
        "Facilitated Assessment Center sessions for 30+ participants, delivering standardized instructions and ensuring procedural compliance.",
        "Coordinated closely with 20+ assessors and role players to ensure seamless execution of competency-based assessment activities.",
        "Supported assessment administration, participant coordination, and tracking across multiple assessment activities.",
        "Supported observation activities and assessment workflows, acquiring practical exposure to competency-based talent evaluation.",
      ],
      tags: [
        "Assessment Center Facilitation",
        "Competency-Based Assessment",
        "Assessor Coordination",
        "Standardized Procedures",
      ],
    },
    {
      id: "pln-intern",
      title: "Assessment Center Intern",
      role: "Assessment Center Intern",
      organization: "PT PLN (Persero) Assessment Center",
      period: "Aug 2025 – Dec 2025",
      type: "Internship",
      keyMetrics: [
        { value: "500+", label: "Candidates Supported" },
        { value: "50+", label: "Participant Records Managed" },
        { value: "20+", label: "Assessors & Role Players Coordinated" },
      ],
      bullets: [
        "Supported talent assessment operations for 500+ candidates across recruitment and employee development programs.",
        "Managed assessment administration, participant records, and documentation for 50+ participants, ensuring data integrity and confidentiality.",
        "Coordinated schedules, candidate communications, and operational logistics with 20+ assessors and role players.",
        "Assisted in developing competency-based training materials and assessment guidelines to support employee development initiatives.",
        "Supported employee well-being initiatives through Psychological First Aid (PFA) programs and mental health campaigns.",
      ],
      tags: [
        "Talent Assessment",
        "Assessment Administration",
        "Training Guidelines",
        "Psychological First Aid",
      ],
    },
  ] as Experience[],

  featuredCaseStudy: {
    title: "Inside the Assessment Center",
    subtitle: "Supporting Talent Assessment at PT PLN (Persero)",
    overview:
      "A structured overview of practical exposure within a corporate Assessment Center, assisting standardized competency evaluations, assessor workflows, and talent development initiatives.",
    stats: [
      {
        value: "500+",
        label: "Candidates Supported",
        detail: "Across recruitment & employee development cycles",
      },
      {
        value: "20+",
        label: "Assessors & Role Players Coordinated",
        detail: "Synchronizing schedules, briefings & simulation logistics",
      },
      {
        value: "50+",
        label: "Participant Records Managed",
        detail: "Maintained accurate dossiers & assessment documentation",
      },
      {
        value: "30+",
        label: "Assessment Center Participants Facilitated",
        detail: "Delivering standardized instructions & session support",
      },
    ],
    pillars: [
      {
        number: "01",
        title: "Assessment Operations",
        description:
          "Facilitated structured assessment center sessions, providing clear procedural briefings to participants and maintaining rigorous standardization across evaluation exercises.",
      },
      {
        number: "02",
        title: "Participant & Assessor Coordination",
        description:
          "Served as a communication link between 20+ assessors, role players, and candidates, coordinating session timelines, room logistics, and simulation schedules.",
      },
      {
        number: "03",
        title: "Assessment Administration",
        description:
          "Managed candidate records, scoring documentation, and administrative dossiers for 50+ participants with strict adherence to confidentiality and organization.",
      },
      {
        number: "04",
        title: "Talent Development Support",
        description:
          "Assisted in formulating competency-based training materials and assessment guidelines while contributing to employee well-being through Psychological First Aid (PFA) initiatives.",
      },
    ],
  },

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Organizational Analysis",
      category: "Organizational Analysis",
      course: "Organizational Assessment & Intervention",
      year: "2025",
      shortDescription:
        "Organizational diagnosis applying Galbraith's STAR Model to evaluate strategy, structure, processes, rewards, and people development.",
      fullDescription:
        "Conducted an in-depth organizational diagnosis using Galbraith's STAR Model framework. Examined the alignment between organizational strategy, formal structures, operational processes, reward systems, and human capital practices to identify system bottlenecks and strengthen organizational effectiveness.",
      methodology: "Galbraith's STAR Model (Strategy, Structure, Processes, Rewards, People)",
      keyHighlights: [
        "Analyzed how organizational subsystems support employee competency development and cross-functional synergy.",
        "Evaluated reward mechanisms and workflow bottlenecks affecting organizational health.",
        "Delivered actionable recommendations for talent development and structural alignment.",
      ],
      tags: ["Organizational Analysis", "STAR Model", "People Development"],

    },
    {
      id: "project-02",
      number: "02",
      title: "Team Building & Organizational Intervention",
      category: "Training Design",
      course: "Organizational Assessment & Intervention",
      year: "2025",
      shortDescription:
        "One-day experiential training intervention designed to improve team communication, empathy, and collaboration with a 4-level Kirkpatrick evaluation plan.",
      fullDescription:
        "Designed and formulated a comprehensive one-day experiential team development program. Built structured modules incorporating experiential workshops, interactive simulations, structured roleplays, and debriefing discussions to nurture psychological safety, active listening, and collective problem-solving.",
      methodology: "Experiential Learning Theory & Kirkpatrick Four-Level Evaluation Model",
      keyHighlights: [
        "Constructed experiential simulation exercises addressing communication barriers and team empathy.",
        "Formulated a full Kirkpatrick Four-Level evaluation matrix (Reaction, Learning, Behavior, Results).",
        "Developed facilitator handbooks and participant reflection workbooks.",
      ],
      tags: ["Training Design", "Team Development", "Kirkpatrick Model"],
    },
    {
      id: "project-03",
      number: "03",
      title: "Communication Training for Leaders",
      category: "Leadership Development",
      course: "Leadership & Decision Making",
      year: "2025",
      shortDescription:
        "Two-day leadership communication training module targeted at middle managers in Human Capital Management.",
      fullDescription:
        "Designed a specialized two-day leadership development curriculum tailored for middle managers within Human Capital functions. Focused on high-stakes communication, active empathy, assertive feedback, and conflict de-escalation in matrixed workplace environments.",
      methodology: "Leaderless Group Discussion (LGD), Case Studies & Behavioral Roleplays",
      keyHighlights: [
        "Designed structured Leaderless Group Discussion (LGD) prompts and conflict management scenarios.",
        "Constructed objective pre-test and post-test measurement rubrics to evaluate knowledge retention.",
        "Authored interactive roleplay scripts simulating difficult managerial conversations.",
      ],
      tags: ["Leadership Development", "Training Design", "Learning Evaluation"],
    },
    {
      id: "project-04",
      number: "04",
      title: "Business Development & HR Project",
      category: "Talent Acquisition",
      course: "Psychology of Entrepreneurship",
      year: "2025",
      shortDescription:
        "End-to-end organizational structure, competency framework, and selection protocol for a health food venture.",
      fullDescription:
        "Formulated the foundational human resource architecture and business plan for an emerging health food venture. Established role profiles, behavioral competency frameworks, and a structured multi-phase talent assessment funnel.",
      methodology: "Behavioral Event Interview (BEI), LGD, FGD, PESTEL & SWOT Analyses",
      keyHighlights: [
        "Built job descriptions and core competency frameworks across multiple business functions.",
        "Created structured selection matrices utilizing Behavioral Event Interview (BEI) questions.",
        "Conducted external PESTEL and internal SWOT analyses to align talent strategy with business viability.",
      ],
      tags: ["Talent Acquisition", "Competency Framework", "Business Strategy"],

    },
    {
      id: "project-05",
      number: "05",
      title: "Training Program Review",
      category: "Learning & Development",
      course: "Training & Career",
      year: "2026",
      shortDescription:
        "Systematic review of corporate training programs across the ADDIE stages with targeted recommendations for TNA and post-training evaluation.",
      fullDescription:
        "Conducted a systematic audit of corporate training programs through the ADDIE lifecycle (Analyze, Design, Develop, Deliver, Evaluate). Assessed how effectively learning objectives addressed diagnosed organizational needs.",
      methodology: "ADDIE Framework & Training Needs Analysis (TNA)",
      keyHighlights: [
        "Assessed instructional methods including case studies, simulations, and group discussions.",
        "Proposed enhancements to Training Needs Analysis (TNA) and post-training impact tracking.",
        "Recommended interactive digital learning tools to boost participant engagement and knowledge retention.",
      ],
      tags: ["Learning & Development", "Training Needs Analysis", "Program Evaluation"],

    },
    {
      id: "project-06",
      number: "06",
      title: "Personal Career Development",
      category: "Career Development",
      course: "Training & Career",
      year: "2026",
      shortDescription:
        "Individual career assessment utilizing Belbin Team Roles, Spectral Management Theory, and structured diagnostic interviews.",
      fullDescription:
        "Conducted comprehensive diagnostic career assessments to identify individual strengths, interpersonal working styles, and developmental trajectories. Synthesized multi-source assessment data into an actionable Individual Development Plan (IDP).",
      methodology: "Belbin Team Roles, Spectral Management Theory & Diagnostic Interviews",
      keyHighlights: [
        "Administered and analyzed Belbin Team Role profiles and structured career diagnostic interviews.",
        "Formulated an individualized Career Development Plan with clear milestones and competency benchmarks.",
        "Provided grounded recommendations matching strengths to organizational job roles.",
      ],
      tags: ["Career Development", "Assessment", "Individual Development"],

    },
  ] as Project[],

  skills: {
    categories: [
      {
        name: "Talent & Assessment",
        description: "Core competency-based evaluation and assessment center operations",
        skills: [
          "Assessment Center Operations",
          "Talent Assessment",
          "Psychological Assessment & Testing",
          "Competency-Based Assessment",
          "Behavioral Event Interview (BEI)",
          "Assessment Administration",
        ],
      },
      {
        name: "People Development",
        description: "Designing, evaluating, and supporting employee learning journeys",
        skills: [
          "Employee Development Support",
          "Training Development",
          "Career Development",
          "Training Needs Analysis",
          "Learning Evaluation",
        ],
      },
      {
        name: "Collaboration & Execution",
        description: "Cross-functional teamwork, communication, and project coordination",
        skills: [
          "Stakeholder Coordination",
          "Communication",
          "Project Management",
          "Teamwork",
          "Active Listening",
          "Problem Solving",
          "Interpersonal Skills",
          "Attention to Detail",
        ],
      },
      {
        name: "Tools & Software",
        description: "Data analysis, productivity, and content design tools",
        skills: [
          "Microsoft Excel",
          "Microsoft Word",
          "Microsoft PowerPoint",
          "Google Workspace",
          "SPSS",
          "Jamovi",
          "Canva",
          "CapCut",
        ],
      },
      {
        name: "Psychological Assessment Exposure",
        description:
          "Academic coursework and assessment administration familiarity (non-independent licensing)",
        skills: [
          "EPPS",
          "Kraepelin",
          "IST",
          "Wartegg",
          "HTP",
          "DAP",
          "TIKI",
          "RIASEC",
          "Belbin Team Roles",
          "RMIB",
        ],
      },
    ],
    languages: [
      { name: "Bahasa Indonesia", level: "Native" },
      { name: "English", level: "Intermediate (Professional Working)" },
    ],
  },

  leadership: [
    {
      id: "pkkmb",
      number: "01",
      role: "Event Coordinator",
      organization: "PKKMB-LKMMTD Fakultas Psikologi Universitas Airlangga",
      period: "Jun 2024 – Sep 2024",
      highlights: ["15-member event division led", "300+ freshmen participants"],
      focus: [
        "Event Planning & Concepts",
        "Cross-functional Collaboration",
        "Schedule & Logistics Management",
        "Operational Execution",
      ],
      description:
        "Led a 15-member event division in orchestrating faculty student orientation and basic leadership training for 300+ incoming freshmen. Managed end-to-end event schedules, cross-division coordination, and on-the-ground operational execution.",
      image: "/assets/leadership-1.jpg",
    },
    {
      id: "bina-desa",
      number: "02",
      role: "Person in Charge (PIC)",
      organization: "Psikologi Bina Desa",
      period: "May 2024 – Jul 2024",
      highlights: [
        "30+ cross-divisional members managed",
        "2 local youth organizations partnered",
      ],
      focus: [
        "Rural Community Development",
        "Psychological Intervention Design",
        "Team Task Allocation",
        "Community Stakeholder Engagement",
      ],
      description:
        "Directed the planning and field execution of a psychological intervention and community development program in Pagerluyung Village, Mojokerto. Coordinated a 30+ person cross-divisional team and established partnerships with local youth groups.",
      image: "/assets/leadership-2.jpg",
    },
    {
      id: "bem",
      number: "03",
      role: "Community Service Department Staff",
      organization: "BEM Fakultas Psikologi Universitas Airlangga",
      period: "Feb 2024 – Dec 2024",
      highlights: [
        "Inter-university collaboration with UI & UB",
        "Social welfare & donation drives",
      ],
      focus: [
        "Mental Health Promotion",
        "Inclusive Education Advocacy",
        "Social Welfare Programs",
        "Volunteer Coordination",
      ],
      description:
        "Planned and executed community service initiatives focused on mental health advocacy and social welfare. Partnered with student bodies from Universitas Indonesia and Universitas Brawijaya on joint mental health campaigns and community outreach.",
      image: "/assets/leadership-3.jpg",
    },
  ] as LeadershipItem[],

  certifications: [
    {
      id: "talentiv",
      title: "Human Resources Fast Track Bootcamp",
      issuer: "Talentiv",
      year: "2026",
      image: "/assets/certificate-1.jpg",
      skills: ["HR Operations", "Talent Management", "Recruitment & Development"],
    },
    {
      id: "yureka",
      title: "Intermediate English Online Course for Work",
      issuer: "Yureka Education Center",
      year: "2026",
      image: "/assets/certificate-2.jpg",
      skills: ["Workplace English", "Professional Communication", "Business Writing"],
    },
  ] as Certification[],
};
