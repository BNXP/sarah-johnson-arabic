// Reliable Unsplash avatar pool for Arab-looking male portraits
const arabAvatars = [
    "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1542596594-649edbc13630?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?w=100&h=100&fit=crop&crop=face"
];

function getAvatar(index) {
    return arabAvatars[index % arabAvatars.length] + "&v=4";
}

// English Reviews - Middle East focused
const enReviews = [
    {
        id: 1,
        reviewerName: "Omar Al-Farsi",
        age: "48",
        location: "Riyadh, Saudi Arabia",
        avatar: getAvatar(0),
        rating: 5,
        content: "For three years I suffered in silence. I was too ashamed to visit a local doctor—everyone knows everyone in my community. When I found Sarah online, I finally had the courage to seek help. She treated me with complete respect and privacy. The delivery was discreet, no one knew what was in the package. Alhamdulillah, my marriage has been transformed. My wife is happy, and I feel like a complete man again.",
        date: "03/15/2025",
        effect: "Complete Recovery",
        usageTime: "3 months",
        featured: true
    },
    {
        id: 2,
        reviewerName: "Mohammed Al-Rashid",
        age: "52",
        location: "Dubai, UAE",
        avatar: getAvatar(1),
        rating: 5,
        content: "My marriage was falling apart. I couldn't fulfill my duties as a husband, and the shame was destroying me. Sarah understood the cultural sensitivity immediately. She explained everything clearly, and the cash-on-delivery option gave me peace of mind. The results were beyond my expectations. My wife and I are closer than we've been in twenty years. May God bless her work.",
        date: "03/22/2025",
        effect: "Major Improvement",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 3,
        reviewerName: "Khalid Al-Sayed",
        age: "45",
        location: "Cairo, Egypt",
        avatar: getAvatar(2),
        rating: 5,
        content: "In our culture, a man's dignity is everything. When I started having problems, I isolated myself from my wife. I thought she would think less of me. Sarah gave me hope without judgment. The treatment arrived in plain packaging, and I only paid when I received it. Now my wife smiles again, and I have regained my confidence as the head of my household.",
        date: "04/08/2025",
        effect: "Complete Recovery",
        usageTime: "4 months",
        featured: true
    },
    {
        id: 4,
        reviewerName: "Ahmed Hassan",
        age: "50",
        location: "Doha, Qatar",
        avatar: getAvatar(3),
        rating: 5,
        content: "I was worried about the cost and about being scammed online. But Sarah's cash-on-delivery service removed all risk. I paid nothing until the product was in my hands. She recommended exactly what I needed—not the most expensive option, but the right one. Two months later, I am a new man. My wife tells her sisters how happy she is. This changed my entire family life.",
        date: "04/17/2025",
        effect: "Significant Improvement",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 5,
        reviewerName: "Yusuf Ibrahim",
        age: "38",
        location: "Kuwait City, Kuwait",
        avatar: getAvatar(4),
        rating: 5,
        content: "I had two problems that no man wants to admit: I couldn't perform, and I couldn't last. I was terrified my wife would ask for a divorce. Sarah handled my case with the utmost discretion. The medicine arrived quickly, payment was only on delivery, and the results were immediate. I went from failure to strength. My wife noticed the difference on the first night. Sarah saved my marriage and my honor.",
        date: "05/03/2025",
        effect: "Complete Recovery",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 6,
        reviewerName: "Abdullah Al-Otaibi",
        age: "42",
        location: "Amman, Jordan",
        avatar: getAvatar(5),
        rating: 5,
        content: "A friend confided in me about his own struggles and recommended Sarah. At first I was skeptical about ordering something so personal online. But the cash-on-delivery option made me feel safe. Sarah asked detailed questions about my health and lifestyle, then created a personalized plan. The follow-up care surprised me most—she actually remembers my concerns. My wife and I are blessed to have found her.",
        date: "05/19/2025",
        effect: "Major Results",
        usageTime: "3 months",
        featured: true
    },
    {
        id: 7,
        reviewerName: "Tariq Al-Nasser",
        age: "60",
        location: "Jeddah, Saudi Arabia",
        avatar: getAvatar(6),
        rating: 5,
        content: "After my first wife passed away, I thought I would never remarry. When I finally met a good woman, I was terrified of disappointing her. I almost ended the engagement. Sarah treated me with dignity, checked my health history carefully, and gave me the confidence I needed. Our wedding night was perfect. We are building a new life together. She gave me a second chance at happiness.",
        date: "06/02/2025",
        effect: "Complete Recovery",
        usageTime: "4 months",
        featured: true
    },
    {
        id: 8,
        reviewerName: "Sami Al-Qahtani",
        age: "55",
        location: "Manama, Bahrain",
        avatar: getAvatar(7),
        rating: 5,
        content: "As a diabetic, I was told this was just something I had to accept. My wife had given up hope. Sarah was different—she reviewed my condition thoroughly, even coordinated with my heart doctor. She sent the medicine COD with no advance payment. Now I have my strength back, and my wife is grateful. Sarah truly understands that a man's health affects the whole family.",
        date: "06/14/2025",
        effect: "Significant Improvement",
        usageTime: "3 months",
        featured: true
    },
    {
        id: 9,
        reviewerName: "Fahd Al-Mutairi",
        age: "47",
        location: "Abu Dhabi, UAE",
        avatar: getAvatar(8),
        rating: 5,
        content: "Twenty years of marriage, and the intimacy had completely disappeared. The pressure of failing my wife was crushing my soul. Sarah didn't try to sell me expensive products. She recommended something affordable and appropriate. Within weeks, my wife and I were like newlyweds again. She even advised me on diet and exercise. She heals the whole man, not just the body.",
        date: "06/28/2025",
        effect: "Complete Recovery",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 10,
        reviewerName: "Nasser Al-Dosari",
        age: "35",
        location: "Khobar, Saudi Arabia",
        avatar: getAvatar(9),
        rating: 5,
        content: "Work stress had ruined everything. By 35, I had no energy left for my wife. I knew she was patient, but I also knew she deserved better. Sarah created a complete wellness plan, not just pills. She follows up to make sure I'm managing stress. The change has been incredible—in my marriage and my work. I recommend her to every brother struggling in silence.",
        date: "07/11/2025",
        effect: "Complete Recovery",
        usageTime: "3 months",
        featured: true
    },
    {
        id: 11,
        reviewerName: "Majed Al-Shammari",
        age: "43",
        location: "Doha, Qatar",
        avatar: getAvatar(0),
        rating: 5,
        content: "This was my first time ever talking to anyone about this problem. I was awkward and embarrassed. Sarah made it comfortable. She explained dosage, timing, and what to expect. The COD delivery meant I had nothing to lose. Two months later, every night is successful. My confidence is back, and I can look my wife in the eyes again with pride.",
        date: "07/24/2025",
        effect: "Major Improvement",
        usageTime: "2 months",
        featured: false
    },
    {
        id: 12,
        reviewerName: "Bandar Al-Harbi",
        age: "49",
        location: "Medina, Saudi Arabia",
        avatar: getAvatar(1),
        rating: 5,
        content: "I had ordered cheap products online before and been scammed. Sarah was completely different—professional, licensed, knowledgeable. She switched me to a better treatment and adjusted the timing. The package arrived discreetly, and I only paid upon receipt. The difference between a real medical professional and random internet sellers is enormous. My wife thanks God every day.",
        date: "08/05/2025",
        effect: "Excellent Results",
        usageTime: "1 month",
        featured: false
    },
    {
        id: 13,
        reviewerName: "Rashid Al-Otaibi",
        age: "40",
        location: "Dubai, UAE",
        avatar: getAvatar(2),
        rating: 5,
        content: "My wife was losing patience. I kept making excuses about being tired, but the truth was I couldn't perform. Sarah reassured me that this was treatable and gave me a specific plan. After starting treatment, everything changed. My wife was shocked—in the best way. Our marriage is stronger than ever. Sarah literally saved our family.",
        date: "08/18/2025",
        effect: "Complete Recovery",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 14,
        reviewerName: "Jassim Al-Malik",
        age: "58",
        location: "Muscat, Oman",
        avatar: getAvatar(3),
        rating: 5,
        content: "I thought my life as a husband was over at my age. My son encouraged me to contact Sarah, worried about my loneliness. She explained that age is not the barrier I believed it was. She was respectful and never made me feel old. Now I have the strength to be the husband I always was. It feels incredible to have this part of my life back.",
        date: "09/01/2025",
        effect: "Significant Improvement",
        usageTime: "4 months",
        featured: true
    },
    {
        id: 15,
        reviewerName: "Hamdan Al-Ketbi",
        age: "46",
        location: "Sharjah, UAE",
        avatar: getAvatar(4),
        rating: 5,
        content: "I drive trucks long distances and have an unpredictable schedule. Sarah immediately understood my lifestyle. She recommended something longer-lasting so I didn't have to plan everything. The COD delivery reached me even on remote routes. She texts me reminders before long trips. That kind of personal care is rare. My wife no longer complains about my absences.",
        date: "09/14/2025",
        effect: "Working Great",
        usageTime: "3 months",
        featured: false
    },
    {
        id: 16,
        reviewerName: "Sultan Al-Qasimi",
        age: "37",
        location: "Riyadh, Saudi Arabia",
        avatar: getAvatar(5),
        rating: 5,
        content: "Newly married and already struggling in the bedroom. The pressure was unbearable—new wife, family expectations, and my own anxiety. Sarah responded quickly and understood the urgency. The first time after starting treatment was like our honeymoon. Six months later, we are still strong. She gave our marriage the foundation it deserved.",
        date: "09/27/2025",
        effect: "Complete Recovery",
        usageTime: "6 months",
        featured: true
    },
    {
        id: 17,
        reviewerName: "Abdulrahman Al-Subaie",
        age: "51",
        location: "Jeddah, Saudi Arabia",
        avatar: getAvatar(6),
        rating: 5,
        content: "High blood pressure and this problem together frightened me. I was afraid for my heart. Sarah reviewed all my medications carefully and consulted with me about safety. She was more thorough than my local doctor. Three months later, my blood pressure is stable and my marriage is happy again. She even coordinated with my cardiologist. This is true professionalism.",
        date: "10/08/2025",
        effect: "Significant Improvement",
        usageTime: "3 months",
        featured: false
    },
    {
        id: 18,
        reviewerName: "Meshal Al-Dosari",
        age: "44",
        location: "Kuwait City, Kuwait",
        avatar: getAvatar(7),
        rating: 5,
        content: "In my second marriage, I was terrified of repeating the mistakes of my first. Sarah did a full consultation and recommended exactly what I needed. My new wife has no idea I ever struggled—she thinks this is simply who I am. Sarah's discretion and effectiveness gave me a fresh start. I am finally the husband I always wanted to be.",
        date: "10/22/2025",
        effect: "Complete Recovery",
        usageTime: "2 months",
        featured: true
    },
    {
        id: 19,
        reviewerName: "Turki Al-Hamid",
        age: "41",
        location: "Cairo, Egypt",
        avatar: getAvatar(8),
        rating: 5,
        content: "I had tried pills, supplements, even questionable remedies from the internet. Nothing worked. I was ready to give up. Sarah was my last hope. She explained why everything else failed and how her approach was different. She was right. For the first time in years, I function as a man should. I tell every brother I know who is suffering—call Sarah. The COD option makes it risk-free.",
        date: "11/04/2025",
        effect: "Complete Recovery",
        usageTime: "4 months",
        featured: true
    },
    {
        id: 20,
        reviewerName: "Faisal Al-Nofal",
        age: "56",
        location: "Dubai, UAE",
        avatar: getAvatar(9),
        rating: 5,
        content: "Prostate surgery left me broken. My urologist said it might improve, but it didn't. I felt like half a man and was ashamed before my wife. Sarah contacted my surgeon to understand my exact situation, then created a careful, gradual plan. She started low and slow. Now, two years after surgery, my wife and I are intimate again. Sarah never gave up on me when I had given up on myself.",
        date: "11/17/2025",
        effect: "Significant Improvement",
        usageTime: "5 months",
        featured: true
    }
];

// Arabic Reviews - Culturally appropriate for Arab countries
const arReviews = [
    {
        id: 1,
        reviewerName: "عمر الفارسي",
        age: "48",
        location: "الرياض، السعودية",
        avatar: getAvatar(0),
        rating: 5,
        content: "عانيت لمدة ثلاث سنوات في صمت. كنت أشعر بالخجل الشديد من زيارة طبيب محلي - في مجتمعنا الجميع يعرف الجميع. عندما وجدت سارة عبر الإنترنت، أخيراً وجدت الشجاعة لطلب المساعدة. عاملتني بكل احترام وسرية. التوصيل كان بعبوة عادية، لا أحد يعرف ما بداخلها. الحمد لله، تحول زواجي رأساً على عقب. زوجتي سعيدة وأشعر أنني رجل كامل مرة أخرى.",
        date: "15/03/2025",
        effect: "شفاء تام",
        usageTime: "3 أشهر",
        featured: true
    },
    {
        id: 2,
        reviewerName: "محمد الراشد",
        age: "52",
        location: "دبي، الإمارات",
        avatar: getAvatar(1),
        rating: 5,
        content: "زواجي كان على وشك الانهيار. لم أستطع أداء واجبي كزوج، والخجل كان يدمرني. سارة فهمت الحساسية الثقافية على الفور. شرحت لي كل شيء بوضوح، وخيار الدفع عند الاستلام منحني راحة البال. النتائج كانت فوق توقعاتي. أنا وزوجتي أصبحنا أقرب مما كنا عليه منذ عشرين عاماً. الله يبارك في عملها.",
        date: "22/03/2025",
        effect: "تحسن كبير",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 3,
        reviewerName: "خالد السيد",
        age: "45",
        location: "القاهرة، مصر",
        avatar: getAvatar(2),
        rating: 5,
        content: "في ثقافتنا، كرامة الرجل هي كل شيء. عندما بدأت أواجه مشاكل، انعزلت عن زوجتي. ظننت أنها ستقلل من شأني. سارة منحتني الأمل بدون أحكام. العلاج وصل بعبوة عادية، ودفعت فقط عند استلامه. الآن زوجتي تبتسم مرة أخرى، واستعدت ثقتي كرب الأسرة.",
        date: "08/04/2025",
        effect: "شفاء تام",
        usageTime: "4 أشهر",
        featured: true
    },
    {
        id: 4,
        reviewerName: "أحمد حسن",
        age: "50",
        location: "الدوحة، قطر",
        avatar: getAvatar(3),
        rating: 5,
        content: "كنت قلقاً من التكلفة ومن الوقوع في عملية احتيال عبر الإنترنت. لكن خدمة الدفع عند الاستلام من سارة أزلت كل المخاطر. لم أدفع شيئاً حتى كان المنتج بين يدي. أوصتني بالعلاج المناسب لي - ليس الأغلى، بل الأنسب. بعد شهرين، أصبحت رجلاً جديداً. زوجتي تخبر أخواتها بسعادتها. هذا غير حياتي العائلية بالكامل.",
        date: "17/04/2025",
        effect: "تحسن ملحوظ",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 5,
        reviewerName: "يوسف إبراهيم",
        age: "38",
        location: "الكويت",
        avatar: getAvatar(4),
        rating: 5,
        content: "كان لدي مشكلتان لا يجرؤ أي رجل على الاعتراف بهما: لم أستطع الأداء ولم أستطع التحمل. كنت مرعوباً أن تطلب زوجتي الطلاق. تعاملت سارة مع حالتي بأقصى درجات السرية. الدواء وصل بسرعة، الدفع كان عند الاستلام، والنتائج كانت فورية. انتقلت من الفشل إلى القوة. زوجتي لاحظت الفرق من الليلة الأولى. سارة أنقذت زواجي وكرامتي.",
        date: "03/05/2025",
        effect: "شفاء تام",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 6,
        reviewerName: "عبدالله العتيبي",
        age: "42",
        location: "عمان، الأردن",
        avatar: getAvatar(5),
        rating: 5,
        content: "أوصاني صديق بسارة بعد أن confided فيي عن معاناته. في البداية كنت متشككاً في طلب شيء شخصي عبر الإنترنت. لكن خيار الدفع عند الاستلام جعلني أشعر بالأمان. طرحت سارة عليّ أسئلة مفصلة عن صحتي ونمط حياتي، ثم وضعت خطة مخصصة. ما فاجأني أكثر هو المتابعة اللاحقة - إنها تتذكر اهتماماتي حقاً. أنا وزوجتي محظوظان لأننا وجدناها.",
        date: "19/05/2025",
        effect: "نتائج كبيرة",
        usageTime: "3 أشهر",
        featured: true
    },
    {
        id: 7,
        reviewerName: "طارق الناصر",
        age: "60",
        location: "جدة، السعودية",
        avatar: getAvatar(6),
        rating: 5,
        content: "بعد وفاة زوجتي الأولى، ظننت أنني لن أتزوج مرة أخرى. عندما قابلت امرأة صالحة أخيراً، كنت مرعوباً من خيبة أملها. كدتُ ألغي الخطوبة. عاملتني سارة بكرامة، راجعت تاريخي الصحي بعناية، وأعطتني الثقة التي احتجتها. ليلة زفافنا كانت مثالية. نبني حياة جديدة معاً. منحتني فرصة ثانية في السعادة.",
        date: "02/06/2025",
        effect: "شفاء تام",
        usageTime: "4 أشهر",
        featured: true
    },
    {
        id: 8,
        reviewerName: "سامي القحطاني",
        age: "55",
        location: "المنامة، البحرين",
        avatar: getAvatar(7),
        rating: 5,
        content: "باعتباري مصاباً بالسكري، قيل لي إن هذا شيء يجب أن أتقبله. زوجتي كانت قد فقدت الأمل. سارة كانت مختلفة - راجعت حالتي بشمولية، وحتى نسقت مع طبيب قلبي. أرسلت الدواء بدفع عند الاستلام دون أي دفع مسبق. الآن استعدت قوتي، وزوجتي شاكرة. سارة تفهم حقاً أن صحة الرجل تؤثر على الأسرة بأكملها.",
        date: "14/06/2025",
        effect: "تحسن ملحوظ",
        usageTime: "3 أشهر",
        featured: true
    },
    {
        id: 9,
        reviewerName: "فهد المطيري",
        age: "47",
        location: "أبوظبي، الإمارات",
        avatar: getAvatar(8),
        rating: 5,
        content: "عشرون عاماً من الزواج، واختفت الحميمية تماماً. ضغط الفشل أمام زوجتي كان يسحق روحي. سارة لم تحاول بيعني منتجات باهظة. أوصت بشيء ميسور ومناسب. خلال أسابيع، أصبحنا كالعرسان مرة أخرى. حتى أنها نصحتني بالنظام الغذائي والتمارين. إنها تعالج الرجل ككل، ليس فقط الجسد.",
        date: "28/06/2025",
        effect: "شفاء تام",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 10,
        reviewerName: "ناصر الدوسري",
        age: "35",
        location: "الخبر، السعودية",
        avatar: getAvatar(9),
        rating: 5,
        content: "التوتر الوظيفي دمر كل شيء. في 35، لم يتبقَ لدي أي طاقة لزوجتي. كنت أعرف أنها صبورة، لكنني أيضاً أعرف أنها تستحق الأفضل. وضعت سارة خطة عافية شاملة، وليست مجرد حبوب. تتابعني للتأكد من أنني أدير التوتر. التغيير كان لا يصدق - في زواجي وعملي. أوصي بها لكل أخ يعاني في صمت.",
        date: "11/07/2025",
        effect: "شفاء تام",
        usageTime: "3 أشهر",
        featured: true
    },
    {
        id: 11,
        reviewerName: "ماجد الشمري",
        age: "43",
        location: "الدوحة، قطر",
        avatar: getAvatar(0),
        rating: 5,
        content: "كانت هذه المرة الأولى التي أتحدث فيها مع أي شخص عن هذه المشكلة. كنت أشعر بالحرج والتعثر. جعلتني سارة أشعر بالراحة. شرحت لي الجرعة والتوقيت وما يجب توقعه. التوصيل بالدفع عند الاستلام يعني أنني لم أخسر شيئاً. بعد شهرين، كل ليلة ناجحة. عادت ثقتي بنفسي، وأستطيع أن أنظر لزوجتي في عينيها مجدداً بفخر.",
        date: "24/07/2025",
        effect: "تحسن كبير",
        usageTime: "شهران",
        featured: false
    },
    {
        id: 12,
        reviewerName: "بندر الحربي",
        age: "49",
        location: "المدينة المنورة",
        avatar: getAvatar(1),
        rating: 5,
        content: "كنت قد طلبت منتجات رخيصة عبر الإنترنت من قبل ووقعت في عمليات احتيال. سارة كانت مختلفة تماماً - محترفة، مرخصة، على دراية. حولتني لعلاج أفضل وعدلت التوقيت. وصلت العبوة بسرية تامة، ودفعت فقط عند الاستلام. الفرق بين أخصائي طبي حقيقي وبائعي الإنترنت العشوائيين هائل. زوجتي تشكر الله كل يوم.",
        date: "05/08/2025",
        effect: "نتائج ممتازة",
        usageTime: "شهر",
        featured: false
    },
    {
        id: 13,
        reviewerName: "راشد العتيبي",
        age: "40",
        location: "دبي، الإمارات",
        avatar: getAvatar(2),
        rating: 5,
        content: "كانت زوجتي تفقد صبرها. كنت أختلق أعذاراً بالتعب، لكن الحقيقة كانت أنني لا أستطيع الأداء. طمأنتني سارة بأن هذا قابل للعلاج وأعطتني خطة محددة. بعد بدء العلاج، تغير كل شيء. كانت زوجتي مصدومة - بشكل إيجابي. زواجنا أقوى من أي وقت مضى. سارة أنقذت أسرتنا حرفياً.",
        date: "18/08/2025",
        effect: "شفاء تام",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 14,
        reviewerName: "جاسم المالك",
        age: "58",
        location: "مسقط، عمان",
        avatar: getAvatar(3),
        rating: 5,
        content: "ظننت أن حياتي كزوج انتهت في هذا العمر. شجعني ابني على التواصل مع سارة، كان قلقاً من أن أعيش وحيداً. شرحت لي أن العمر ليس الحاجز الذي ظننته. كانت محترمة ولم تجعلني أشعر بالعجز. الآن لدي القوة لأكون الزوج الذي كنتُه دائماً. يشعرني بالروعة استعادة هذا الجزء من حياتي.",
        date: "01/09/2025",
        effect: "تحسن ملحوظ",
        usageTime: "4 أشهر",
        featured: true
    },
    {
        id: 15,
        reviewerName: "حمدان الكتبي",
        age: "46",
        location: "الشارقة، الإمارات",
        avatar: getAvatar(4),
        rating: 5,
        content: "أنا سائق شاحنة وأقطع مسافات طويلة وجدولي غير منتظم. فهمت سارة نمط حياتي على الفور. أوصت بعلاج يدوم لفترة أطول حتى لا أضطر لتخطيط كل شيء. وصلني التوصيل بالدفع عند الاستلام حتى في الطرق النائية. ترسل لي رسائل تذكير قبل الرحلات الطويلة. هذا النوع من الاهتمام الشخصي نادر. زوجتي لم تعد تشكو من غياباتي.",
        date: "14/09/2025",
        effect: "يعمل بشكل رائع",
        usageTime: "3 أشهر",
        featured: false
    },
    {
        id: 16,
        reviewerName: "سلطان القاسمي",
        age: "37",
        location: "الرياض، السعودية",
        avatar: getAvatar(5),
        rating: 5,
        content: "متزوج حديثاً وواجهت بالفعل مشاكل في غرفة النوم. الضغط كان لا يُحتمل - زوجة جديدة، توقعات العائلة، وقلقي الشخصي. استجابت سارة بسرعة وفهمت مدى إلحاحية وضعي. المرة الأولى بعد بدء العلاج كانت كالشهر العسل. بعد ستة أشهر، ما زلنا مستمرين بقوة. منحت زواجنا الأساس الذي يستحقه.",
        date: "27/09/2025",
        effect: "شفاء تام",
        usageTime: "6 أشهر",
        featured: true
    },
    {
        id: 17,
        reviewerName: "عبدالرحمن السبيعي",
        age: "51",
        location: "جدة، السعودية",
        avatar: getAvatar(6),
        rating: 5,
        content: "ارتفاع ضغط الدم مع هذه المشكلة أ frightenedني. كنت خائفاً على قلبي. أخذت سارة الوقت لمراجعة جميع أدويتي بعناية والتشاور معي حول السلامة. كانت أكثر شمولاً من طبيبي المحلي. بعد ثلاثة أشهر، ضغط دمي مستقر وزواجي سعيد مرة أخرى. حتى أنها نسقت مع طبيب القلب لديّ. هذا هو الاحتراف الحقيقي.",
        date: "08/10/2025",
        effect: "تحسن ملحوظ",
        usageTime: "3 أشهر",
        featured: false
    },
    {
        id: 18,
        reviewerName: "مشعل الدوسري",
        age: "44",
        location: "الكويت",
        avatar: getAvatar(7),
        rating: 5,
        content: "في زواجي الثاني، كنت مرعوباً من تكرار أخطاء زواجي الأول. أجرت سارة استشارة كاملة و或صت بالضبط بما أحتاجه. زوجتي الجديدة لا تعلم أنني كنت أعاني - تظن أن هذا هو طبيعتي. سرية سارة وفعاليتها منحتني بداية جديدة. أخيراً أصبحت الزوج الذي طالما أردت أن أكونه.",
        date: "22/10/2025",
        effect: "شفاء تام",
        usageTime: "شهران",
        featured: true
    },
    {
        id: 19,
        reviewerName: "تركي الحميد",
        age: "41",
        location: "القاهرة، مصر",
        avatar: getAvatar(8),
        rating: 5,
        content: "جربت حبوباً ومكملات وحتى علاجات مشبوهة من الإنترنت. لم يعمل شيء. كنت على استعداد للاستسلام. سارة كانت أملي الأخير. شرحت لي لماذا فشل كل شيء آخر وكيف يختلف نهجها. كانت على حق. لأول مرة منذ سنوات، أعمل كما يجب أن يعمل الرجل. أقول لكل أخ أعرفه يعاني - اتصل بسارة. خيار الدفع عند الاستلام يجربها بلا مخاطر.",
        date: "04/11/2025",
        effect: "شفاء تام",
        usageTime: "4 أشهر",
        featured: true
    },
    {
        id: 20,
        reviewerName: "فيصل النوفل",
        age: "56",
        location: "دبي، الإمارات",
        avatar: getAvatar(9),
        rating: 5,
        content: "تركتني جراحة البروستاتا محطماً. قال لي أخصائي المسالك إنه قد يتحسن، لكنه لم يتحسن. شعرت أنني نصف رجل وكنت أشعر بالخجل أمام زوجتي. تواصلت سارة مع جراحي لفهم وضعي بالضبط، ثم وضعت خطة حذرة وتدريجية. بدأنا بجرعة منخفضة وبطيئة. الآن، بعد عامين من الجراحة، أنا وزوجتي حميمان مرة أخرى. سارة لم تستسلم لي حين كنت مستعداً للاستسلام لنفسي.",
        date: "17/11/2025",
        effect: "تحسن ملحوظ",
        usageTime: "5 أشهر",
        featured: true
    }
];

// Stats
const enStats = { totalReviews: '10000+', verifiedClients: '10000+', successRate: 99 };
const arStats = { totalReviews: '+10000', verifiedClients: '+10000', successRate: 99 };

// Data Manager
const DataManager = {
    getReviews(lang = 'en') {
        return lang === 'ar' ? arReviews : enReviews;
    },

    getFeaturedReviews(limit = 40, lang = 'en') {
        const reviews = lang === 'ar' ? arReviews : enReviews;
        return reviews.filter(r => r.featured).slice(0, limit);
    },

    getStats(lang = 'en') {
        return lang === 'ar' ? arStats : enStats;
    },

    initData() {
        console.log('Data initialized');
    }
};
