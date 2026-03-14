"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations: Record<Language, any> = {
  en: {
    nav: {
      logo: "Imran",
      about: "About",
      work: "Work",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
      layoutDir: "Layout Direction",
      arabic: "Arabic (RTL)",
      english: "English (LTR)",
      theme: "Theme"
    },
    hero: {
      name: "Mohammed Imran",
      title: "Full Stack & Platform Engineer",
      taglines: [
        "Architecting enterprise low-code/no-code platforms ⚙️",
        "Building scalable workflow orchestration systems 🧩",
        "Developing AI & LLM-powered backends 🤖",
        "Streamlining full-stack application delivery 🚀",
        // "Open to relocation: UAE, Qatar & KSA ✈️",
      ],
      downloadResume: "Download Resume",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      scrollDown: "Scroll Down",
      valueStatement: "Full-Stack Engineer specializing in building scalable enterprise systems, automated workflows, and low-code/no-code orchestration tools using React, Node.js, and Java."
    },
    about: {
      heading: "About Me",
      summary: "I'm a Full-Stack Software Engineer with 3+ years of experience building enterprise platforms, workflow automation systems, and low-code/no-code solutions. I work across the full stack — from crafting clean, performant React and Angular frontends to designing scalable backend APIs with Node.js and Java-based frameworks. Recently, I've been integrating AI-powered features like Retrieval-Augmented Generation (RAG) and semantic search into real-world applications. I enjoy solving complex engineering problems, collaborating across teams, and building software that is both technically sound and genuinely useful. I've had the opportunity to work with major banking clients including HDFC Bank and GXS Bank.",
      highlight1: "3+ Years at Pennant Technologies",
      highlight2: "Full-Stack & Platform Engineer",
      highlight3: "Open to Relocation — UAE, Qatar, KSA"
    },
    work: {
      title: "Work Experience",
      subtitle: "Building scalable solutions and driving innovation in full-stack development"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing innovative solutions built with modern technologies",
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      viewSourceCode: "View Source Code",
      liveDemo: "Live Demo",
      visualsComingSoon: "Case Study Visuals Coming Soon",
      mockupInfo: "Application Interface Mockup",
      moreProjectsTitle: "More Projects",
      moreProjectsDesc: "Explore more of my work, experiments, and contributions on GitHub.",
      viewOnGithub: "View on GitHub"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies I work with to build exceptional applications"
    },
    education: {
      title: "Education",
      subtitle: "Academic journey in computer science and engineering"
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Have a project in mind or just want to chat? Feel free to reach out through any of these channels.",
      followMe: "Follow Me"
    },
    footer: {
      name: "Mohammed Imran",
      bio: "Full Stack Developer passionate about building scalable applications and exploring AI-powered systems.",
      quickLinks: "Quick Links",
      connect: "Connect",
      builtWith: "Built with",
      madeWith: "Made with"
    },
    workItems: {
      pennant_se: {
        role: "Associate Software Engineer",
        company: "Pennant Technologies",
        duration: "Aug 2023 – Present",
        location: "Visakhapatnam, India",
        details: [
          "Reduced configuration setup time from 10 days to under 1 hour by developing automated Excel-to-JSON pipelines.",
          "Built a workflow orchestration system using React Flow, reducing enterprise setup complexity by 40–70%.",
          "Migrated legacy backend modules from Spring Boot to Node.js (NestJS), streamlining authentication and boosting maintainability.",
          "Engineered an enterprise low-code/no-code (LCNC) platform enabling rapid delivery of custom CRM and LOS applications.",
          "Delivered enterprise PoCs for major clients (HDFC Bank, GXS Bank Singapore), driving platform adoption and sales.",
          "Developed configurable event-action frameworks using React and Redux to map complex UI events to backend operations.",
        ]
      },
      pennant_intern: {
        role: "Associate Software Engineer Intern",
        company: "Pennant Technologies",
        duration: "Feb 2023 – Jul 2023",
        location: "Visakhapatnam, India",
        details: [
          "Completed structured training in HTML, CSS, JavaScript, PostgreSQL, and Spring Boot, gaining strong foundations in full-stack development.",
          "Led a 5-member team in developing a Bus Ticket Reservation System, managing task allocation, sprint planning, and integration.",
          "Implemented features including real-time seat booking, payment simulation, passenger email notifications, and admin dashboards for route & fleet management.",
          "Introduced version control and Git workflows to the team, improving collaboration and reducing integration conflicts.",
          "Optimized SQL queries for booking and scheduling workflows, reducing response times for core modules.",
        ]
      }
    },
    educationItems: {
      btech: {
        degree: "Bachelor of Technology (B.Tech), Computer Science",
        school: "Maharaja Vijayaram Gajapathi Raj College of Engineering",
        year: "2020 – 2023",
        location: "Visakhapatnam, India",
      },
      diploma: {
        degree: "Diploma, Computer Engineering",
        school: "Sankethika Polytechnic College",
        year: "2017 – 2020",
        location: "India",
      }
    },
    projectItems: {
      profitStreak: {
        title: "Profit Streak",
        tagline: "AI-Powered Stock Market Intelligence Platform",
        description: "An intelligent stock analysis platform that leverages RAG technology to transform real-time financial news into actionable insights. Features automated web scraping pipelines and vector-based semantic search to help investors make smarter decisions.",
        features: [
          "RAG system for context-aware financial insights",
          "Automated web scraping & ingestion with Celery",
          "Vector embeddings for semantic search"
        ]
      },
      crm: {
        title: "Enterprise CRM Automator",
        tagline: "Low-Code Customer Relationship Management System",
        description: "Architected a highly customizable CRM platform designed for banking institutions. Replaced 10 days of manual developer configuration with a drag-and-drop React Flow interface, empowering business analysts to deploy workflows in under an hour.",
        features: [
          "Visual drag-and-drop workflow orchestration",
          "Automated Excel-to-JSON configuration pipeline",
          "Dynamic form generation based on schemas"
        ]
      },
      supplyChain: {
        title: "Global Supply Chain Dashboard",
        tagline: "Real-time Metrics & Logistics Tracking",
        description: "Developed a comprehensive enterprise dashboard providing real-time visibility into global supply chain metrics. Integrated multiple legacy APIs to unify data pipelines, improving logistical response times and drastically reducing operational bottlenecks.",
        features: [
          "Real-time websocket data integration",
          "Interactive geospatial mapping of assets",
          "Role-based enterprise access control (RBAC)"
        ]
      },
      airStreak: {
        title: "AirStreak",
        tagline: "Secure Multi-Tenant SaaS for Aviation Academies",
        description: "A production-grade monorepo platform with deep tenant isolation and aviation-grade auditing. Built with a 'Top Gun' aesthetic, it features complex scheduling workflows powered by BullMQ and a cached performance layer using Redis.",
        features: [
          "Multi-Tenant Isolation (Prisma/PostgreSQL)",
          "BullMQ-Powered Background Escalations",
          "Redis-Cached Read-Heavy Endpoints",
          "Encrypted Audit Trails & RBAC Flow"
        ]
      }
    },
    skillCategories: {
      languages: "Programming Languages",
      frontend: "Frontend Development",
      backend: "Backend Development",
      ai: "AI & Intelligent Systems",
      db: "Databases",
      tools: "Tools & Platforms"
    },
    contactItems: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      visakhapatnam: "Visakhapatnam, India"
    },
    stats: {
      yearsExp: "Years Experience",
      enterpriseProjects: "Enterprise Projects",
      banksServed: "Banks Served",
      setupReduction: "Setup Time Reduction",
      setupVs10Days: "vs 10-Day Setup"
    }
  },
  ar: {
    nav: {
      logo: "عمران",
      about: "نبذة عني",
      work: "الخبرات",
      projects: "المشاريع",
      skills: "المهارات",
      education: "التعليم",
      contact: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية",
      layoutDir: "اتجاه التخطيط",
      arabic: "العربية (RTL)",
      english: "الإنجليزية (LTR)",
      theme: "المظهر"
    },
    hero: {
      name: "محمد عمران",
      title: "مهندس برمجيات شامل ومنصات",
      taglines: [
        "هندسة منصات مؤسسية منخفضة/عديمة الكود ⚙️",
        "بناء أنظمة تنسيق سير العمل القابلة للتوسع 🧩",
        "تطوير واجهات خلفية مدعومة بالذكاء الاصطناعي 🤖",
        "تبسيط وتسريع تسليم التطبيقات الشاملة 🚀",
        // "Open to relocation: UAE, Qatar & KSA ✈️",
      ],
      downloadResume: "تحميل السيرة الذاتية",
      whatsapp: "واتس آب",
      linkedin: "لينكد إن",
      github: "جيت هب",
      scrollDown: "تمرير لأسفل",
      valueStatement: "مهندس برمجيات شامل متخصص في بناء أنظمة مؤسسية قابلة للتوسع، وسير عمل مؤتمت، وأدوات البرمجة المنخفضة/عديمة الكود باستخدام React و Node.js و Java."
    },
    about: {
      heading: "نبذة عني",
      summary: "أنا مهندس برمجيات شامل بخبرة تزيد على 3 سنوات في بناء منصات مؤسسية وأنظمة أتمتة سير العمل وحلول البرمجة المنخفضة وعديمة الكود. أعمل عبر المكدس الكامل — من بناء واجهات React وAngular نظيفة وعالية الأداء، إلى تصميم واجهات برمجية خلفية قابلة للتوسع باستخدام Node.js وإطارات Java-based. مؤخراً، أدمجت ميزات مدعومة بالذكاء الاصطناعي مثل نظام RAG والبحث الدلالي في تطبيقات حقيقية. أستمتع بحل مشكلات هندسية معقدة، والتعاون مع الفرق، وبناء برمجيات سليمة تقنياً ومفيدة فعلياً. حظيت بفرصة العمل مع عملاء مصرفيين كبار من بينهم HDFC Bank وGXS Bank.",
      highlight1: "+3 سنوات في Pennant Technologies",
      highlight2: "مهندس برمجيات شامل ومنصات",
      highlight3: "مستعد للانتقال — الإمارات، قطر، السعودية"
    },
    work: {
      title: "الخبرات العملية",
      subtitle: "بناء حلول قابلة للتوسع ودفع عجلة الابتكار في تطوير البرمجيات"
    },
    projects: {
      title: "أبرز المشاريع",
      subtitle: "عرض حلول مبتكرة تم بناؤها باستخدام تقنيات حديثة",
      techStack: "التقنيات المستخدمة",
      keyFeatures: "الميزات الأساسية",
      viewSourceCode: "عرض الكود المصدري",
      liveDemo: "عرض تجريبي",
      visualsComingSoon: "الصور ستتوفر قريباً",
      mockupInfo: "نموذج واجهة التطبيق",
      moreProjectsTitle: "مشاريع إضافية",
      moreProjectsDesc: "استكشف المزيد من أعمالي وتجاربي ومساهماتي على جيت هب.",
      viewOnGithub: "عرض على GitHub"
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "التقنيات التي أعمل بها لبناء تطبيقات استثنائية"
    },
    education: {
      title: "التعليم",
      subtitle: "رحلتي الأكاديمية في علوم هندسة الحاسوب"
    },
    contact: {
      title: "لنتواصل معاً",
      subtitle: "هل لديك مشروع في ذهنك أو ترغب فقط في التحدث؟ لا تتردد في التواصل عبر أي من هذه القنوات.",
      followMe: "تابعني على"
    },
    footer: {
      name: "محمد عمران",
      bio: "مطور واجهات كاملة شغوف ببناء تطبيقات قابلة للتوسع واستكشاف الأنظمة المدعومة بالذكاء الاصطناعي.",
      quickLinks: "روابط سريعة",
      connect: "تواصل معي",
      builtWith: "تم البناء بواسطة",
      madeWith: "صُنع بواسطة"
    },
    workItems: {
      pennant_se: {
        role: "مهندس برمجيات مساعد",
        company: "Pennant Technologies",
        duration: "أغسطس 2023 - الحاضر",
        location: "فيساخاباتنام، الهند",
        details: [
          "تقليص وقت إعداد التكوين من 10 أيام إلى أقل من ساعة واحدة عبر تطوير مسارات مؤتمتة من Excel إلى JSON.",
          "بناء نظام تنسيق سير العمل باستخدام React Flow، مما قلل تعقيد الإعداد بنسبة 40-70%.",
          "ترحيل وحدات النهاية الخلفية القديمة من Spring Boot إلى Node.js (NestJS)، لتبسيط المصادقة وزيادة الاستدامة.",
          "هندسة منصة مؤسسية منخفضة الكود/بدون كود (LCNC) تتيح تقديماً سريعاً لتطبيقات CRM و LOS.",
          "تسليم نماذج إثبات المفهوم لعملاء رئيسيين (HDFC Bank، GXS Bank)، مما دفع باعتماد المنصة وزيادة المبيعات.",
          "تطوير إطارات عمل للإجراءات والأحداث قابلة للتكوين في React و Redux لربط واجهة المستخدم بقاعدة البيانات.",
        ]
      },
      pennant_intern: {
        role: "متدرب هندسة برمجيات مساعد",
        company: "Pennant Technologies",
        duration: "فبراير 2023 - يوليو 2023",
        location: "فيساخاباتنام، الهند",
        details: [
          "إكمال تدريب منظم في HTML و CSS و JavaScript و PostgreSQL و Spring Boot.",
          "قيادة فريق مكون من 5 أعضاء في تطوير نظام حجز تذاكر الحافلات.",
          "تنفيذ ميزات شملت حجز المقاعد في الوقت الفعلي ومحاكاة الدفع ولوحات تحكم المسؤول.",
          "إدخال التحكم في الإصدار وسير عمل Git للفريق، مما أدى إلى تحسين التعاون.",
          "تحسين استعلامات SQL لمسارات الحجز والجدولة، مما قلل من أوقات الاستجابة."
        ]
      }
    },
    educationItems: {
      btech: {
        degree: "بكالوريوس التكنولوجيا، علوم الحاسوب",
        school: "كلية مهراجا فيجايارام جاجاباثي راج للهندسة",
        year: "2020 – 2023",
        location: "فيساخاباتنام، الهند",
      },
      diploma: {
        degree: "دبلوم، هندسة الحاسوب",
        school: "كلية سانكيثيكا للفنون التطبيقية",
        year: "2017 – 2020",
        location: "الهند",
      }
    },
    projectItems: {
      profitStreak: {
        title: "بروفيت ستريك (Profit Streak)",
        tagline: "منصة ذكاء سوق الأسهم المدعومة بالذكاء الاصطناعي",
        description: "منصة ذكية لتحليل الأسهم تستفيد من تقنية الاسترجاع المعزز (RAG) لتحويل الأخبار المالية الحية إلى رؤى قابلة للتنفيذ. تتميز بمسارات سحب الويب الآلية والبحث الدلالي المستند إلى المتجهات.",
        features: [
          "نظام RAG للرؤى المالية المدركة للسياق",
          "سحب واستيعاب البيانات تلقائياً باستخدام Celery",
          "تضمين المتجهات للبحث الدلالي"
        ]
      },
      crm: {
        title: "النظام المؤسسي لإدارة العملاء",
        tagline: "نظام إدارة علاقات العملاء ببرمجة منخفضة (LCNC)",
        description: "تصميم منصة CRM قابلة للتخصيص للغاية مصممة للمؤسسات المصرفية. استبدلت 10 أيام من التكوين اليدوي بواجهة سحب وإفلات لتمكين محللي الأعمال من نشر مسارات العمل في أقل من ساعة.",
        features: [
          "تنسيق سير عمل السحب والإفلات المرئي",
          "مسار تكوين تلقائي من Excel إلى JSON",
          "إنشاء نماذج ديناميكية بناءً على المخططات"
        ]
      },
      supplyChain: {
        title: "لوحة معلومات سلسلة التوريد",
        tagline: "مقاييس تتبع الخدمات اللوجستية في الوقت الفعلي",
        description: "تطوير لوحة تحكم مؤسسية شاملة توفر رؤية في الوقت الفعلي لمقاييس سلسلة التوريد. دمج واجهات برمجة تطبيقات متعددة لتوحيد خطوط البيانات، وتقليل الاختناقات التشغيلية.",
        features: [
          "دمج البيانات الحية عبر websocket",
          "رسم الخرائط الجغرافية التفاعلية للأصول",
          "التحكم في الوصول إلى المؤسسة بناءً على الأدوار (RBAC)"
        ]
      },
      airStreak: {
        title: "اير ستريك (AirStreak)",
        tagline: "نظام SaaS آمن لمدارس الطيران",
        description: "منصة monorepo من الدرجة الإنتاجية مع عزل عميق للمستأجرين وتدقيق من فئة الطيران. تتميز بجمالية 'Top Gun'، وسير عمل جدولة معقد مدعوم بـ BullMQ وطبقة أداء مخزنة مؤقتاً باستخدام Redis.",
        features: [
          "عزل المستأجرين (Prisma/PostgreSQL)",
          "تصعيدات خلفية مدعومة بـ BullMQ",
          "نقاط نهاية مخزنة مؤقتاً بـ Redis",
          "مسارات تدقيق مشفرة وتدفق RBAC"
        ]
      }
    },
    skillCategories: {
      languages: "لغات البرمجة",
      frontend: "تطوير الواجهات الأمامية",
      backend: "تطوير الواجهات الخلفية",
      ai: "الذكاء الاصطناعي والأنظمة الذكية",
      db: "قواعد البيانات",
      tools: "الأدوات والمنصات"
    },
    contactItems: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      visakhapatnam: "فيساخاباتنام، الهند"
    },
    stats: {
      yearsExp: "سنوات خبرة",
      enterpriseProjects: "مشاريع مؤسسية",
      banksServed: "بنوك خدمناها",
      setupReduction: "تقليص وقت الإعداد",
      setupVs10Days: "مقابل إعداد 10 أيام"
    }
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("preferred-language") as Language;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguage(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    localStorage.setItem("preferred-language", newLang);
  };

  const t = (path: string) => {
    // If not mounted, default to English to avoid hydration mismatch, or just return the english value
    const lang = mounted ? language : "en";
    return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, translations[lang]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
