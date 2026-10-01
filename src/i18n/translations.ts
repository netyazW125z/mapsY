export type Language = 'ar' | 'en';

export interface Translations {
  // Brand & Header
  appTitle: string;
  appTitleShort: string;
  appSubtitle: string;
  companyNameDefault: string;
  territoryDefault: string;
  zenModeExit: string;
  switchLang: string;
  quickGuide: string;
  companySettings: string;

  // KPI Metrics
  kpiActiveFleet: string;
  kpiEmergency: string;
  kpiUnassigned: string;
  kpiTotalDistance: string;
  kpiEstFuel: string;
  unitsMiles: string;
  unitsKm: string;
  unitsGal: string;
  unitsLiters: string;

  // Top Action Buttons
  btnAiDispatch: string;
  btnNewTicket: string;
  btnSimulateFleet: string;
  btnPauseSim: string;
  btnResumeSim: string;
  btnDailyManifest: string;
  btnFullMap: string;
  btnRecalculating: string;

  // Tabs & Views
  tabBoard: string;
  tabUnassigned: string;
  tabTechnicians: string;
  viewMap: string;
  viewBoard: string;

  // Urgency Filters & Badges
  filterAll: string;
  urgencyEmergency: string;
  urgencySameDay: string;
  urgencyRoutine: string;
  urgencyScheduled: string;

  // Technician Statuses
  techStatusAvailable: string;
  techStatusEnRoute: string;
  techStatusOnSite: string;
  techStatusReturningDepot: string;
  techStatusOnDuty: string;
  techStatusOffDuty: string;

  // Ticket Statuses
  ticketStatusUnassigned: string;
  ticketStatusAssigned: string;
  ticketStatusEnRoute: string;
  ticketStatusInProgress: string;
  ticketStatusCompleted: string;

  // Kanban & Board
  kanbanSearchPlaceholder: string;
  kanbanUnassignedTitle: string;
  kanbanUnassignedDesc: string;
  kanbanNoUnassigned: string;
  kanbanDragHint: string;
  kanbanDropHere: string;
  kanbanStopsCount: string;
  kanbanNoStops: string;
  kanbanAssignTo: string;
  kanbanUnassign: string;
  kanbanPrintManifest: string;
  kanbanExperience: string;
  kanbanRating: string;
  kanbanInventory: string;
  kanbanSkills: string;

  // Equipment Types
  equipChiller: string;
  equipRTU: string;
  equipVRF: string;
  equipGasFurnace: string;
  equipBoiler: string;
  equipCRAC: string;
  equipMiniSplit: string;
  equipAHU: string;

  // Modals - New Ticket
  newTicketTitle: string;
  newTicketSubtitle: string;
  newTicketCustomerName: string;
  newTicketPhone: string;
  newTicketEmail: string;
  newTicketAddress: string;
  newTicketAddressPreset: string;
  newTicketCustomAddress: string;
  newTicketEquipmentType: string;
  newTicketEquipmentModel: string;
  newTicketFaultCode: string;
  newTicketIssueDesc: string;
  newTicketAccessNotes: string;
  newTicketEstimatedDuration: string;
  newTicketMinutes: string;
  newTicketCreateBtn: string;
  newTicketCancelBtn: string;

  // Modals - AI Assistant
  aiModalTitle: string;
  aiModalSubtitle: string;
  aiModalAnalyzing: string;
  aiModalAnalyzeBtn: string;
  aiModalApplyAll: string;
  aiModalAppliedAll: string;
  aiModalApplySingle: string;
  aiModalAssignTo: string;
  aiModalRationale: string;
  aiModalFuelSaved: string;
  aiModalTimeSaved: string;
  aiModalFleetHealth: string;
  aiModalStrategicInsights: string;
  aiModalNoTicketsToAssign: string;

  // Modals - Daily Manifest
  manifestTitle: string;
  manifestSubtitle: string;
  manifestPrintBtn: string;
  manifestCopyLink: string;
  manifestLinkCopied: string;
  manifestCloseBtn: string;
  manifestTechnicianInfo: string;
  manifestVan: string;
  manifestPhone: string;
  manifestRouteMetrics: string;
  manifestTotalDistance: string;
  manifestDriveTime: string;
  manifestFuelAlloc: string;
  manifestScheduledStops: string;
  manifestOrigin: string;
  manifestDepotReturn: string;
  manifestShiftComplete: string;
  manifestCustomerSig: string;
  manifestOdometerStart: string;
  manifestOdometerEnd: string;
  manifestOdometerTotal: string;
  manifestCloseout: string;
  manifestNoTickets: string;

  // Fleet Simulation Bar
  simTitle: string;
  simStatusRunning: string;
  simStatusPaused: string;
  simStatusReady: string;
  simSpeed: string;
  simProgress: string;
  simCompleted: string;
  simInProgress: string;
  simEnRoute: string;
  simActiveMsg: string;
  simReset: string;
  simLog: string;
  simCloseLog: string;

  // Territory Map
  mapTitle: string;
  mapUrgencyFilter: string;
  mapToggleTraffic: string;
  mapResetView: string;
  mapFallbackNotice: string;
  mapTechDetails: string;
  mapTicketDetails: string;
  mapClose: string;
  mapAssignAction: string;

  // Quick Guide Modal
  guideTitle: string;
  guideSubtitle: string;
  guideClose: string;
  guidePillarsTitle: string;
  guideStep1Title: string;
  guideStep1Desc: string;
  guideStep2Title: string;
  guideStep2Desc: string;
  guideStep3Title: string;
  guideStep3Desc: string;
  guideStep4Title: string;
  guideStep4Desc: string;
  guideStep5Title: string;
  guideStep5Desc: string;
  guideStep6Title: string;
  guideStep6Desc: string;

  // Company Settings Modal
  settingsTitle: string;
  settingsSubtitle: string;
  settingsCompanyName: string;
  settingsRegion: string;
  settingsDistanceUnit: string;
  settingsSave: string;

  // Header & Footer helper aliases
  emergencies: string;
  inQueue: string;
  routeMiles: string;
  showBoard: string;
  hideBoard: string;
  fullMap: string;
  btnAiAssistant: string;
  footerFleetHealth: string;
  footerOptimal: string;
  footerFleetLoad: string;
  footerActiveVans: string;
  footerApiStatus: string;
}

export const translations: Record<Language, Translations> = {
  ar: {
    // Brand & Header
    appTitle: 'نظام إدارة وتوجيه أسطول التكييف الميداني',
    appTitleShort: 'توجيه أسطول التكييف',
    appSubtitle: '15 شاحنة وفني • حساب المسارات اللحظي وتوجيه بالذكاء الاصطناعي',
    companyNameDefault: 'شركة خدمات التكييف المتقدمة',
    territoryDefault: 'منطقة الرياض والوسطى',
    zenModeExit: 'إنهاء وضع ملء الشاشة',
    switchLang: 'English',
    quickGuide: 'دليل النظام',
    companySettings: 'إعدادات المنشأة',

    // KPI Metrics
    kpiActiveFleet: 'الأسطول الميداني',
    kpiEmergency: 'بلاغات طارئة',
    kpiUnassigned: 'بلاغات غير معينة',
    kpiTotalDistance: 'إجمالي المسافة',
    kpiEstFuel: 'تقدير الوقود',
    unitsMiles: 'ميل',
    unitsKm: 'كم',
    unitsGal: 'جالون',
    unitsLiters: 'لتر',

    // Top Action Buttons
    btnAiDispatch: 'مساعد التوجيه الذكي',
    btnNewTicket: 'إضافة بلاغ صيانة',
    btnSimulateFleet: 'محاكاة الأسطول',
    btnPauseSim: 'إيقاف مؤقت',
    btnResumeSim: 'استئناف',
    btnDailyManifest: 'بيان المسار اليومي',
    btnFullMap: 'الخريطة الكاملة',
    btnRecalculating: 'جاري تحديث المسارات...',

    // Tabs & Views
    tabBoard: 'لوحة التوجيه والأسطول',
    tabUnassigned: 'البلاغات غير المعينة',
    tabTechnicians: 'فنيو الصيانة',
    viewMap: 'الخريطة الميدانية',
    viewBoard: 'لوحة المهام',

    // Urgency Filters & Badges
    filterAll: 'الكل',
    urgencyEmergency: 'حالة طارئة',
    urgencySameDay: 'نفس اليوم',
    urgencyRoutine: 'صيانة روتينية',
    urgencyScheduled: 'مجدولة',

    // Technician Statuses
    techStatusAvailable: 'متاح للخدمة',
    techStatusEnRoute: 'في الطريق للبلاغ',
    techStatusOnSite: 'قيد الصيانة بالموقع',
    techStatusReturningDepot: 'عائد للمستودع',
    techStatusOnDuty: 'على رأس العمل',
    techStatusOffDuty: 'خارج أوقات العمل',

    // Ticket Statuses
    ticketStatusUnassigned: 'غير معين',
    ticketStatusAssigned: 'تم الإسناد',
    ticketStatusEnRoute: 'الفني في الطريق',
    ticketStatusInProgress: 'جاري الفحص والإصلاح',
    ticketStatusCompleted: 'تم الإنجاز بنجاح',

    // Kanban & Board
    kanbanSearchPlaceholder: 'بحث برقم البلاغ، العميل، نوع المكيف، العنوان...',
    kanbanUnassignedTitle: 'بلاغات في انتظار الإسناد',
    kanbanUnassignedDesc: 'اسحب البلاغ وأفلته إلى الفني المناسب أو استخدم التوجيه الذكي',
    kanbanNoUnassigned: 'ممتاز! تم إسناد جميع بلاغات الصيانة بنجاح.',
    kanbanDragHint: 'اسحب بطاقة البلاغ إلى سيارة الفني بالأسفل',
    kanbanDropHere: 'أفلت البلاغ هنا للإسناد',
    kanbanStopsCount: 'محطات توقف',
    kanbanNoStops: 'لا توجد بلاغات مسندة لهذه الشاحنة حالياً',
    kanbanAssignTo: 'إسناد إلى الفني',
    kanbanUnassign: 'إلغاء الإسناد',
    kanbanPrintManifest: 'طباعة مسار اليوم',
    kanbanExperience: 'سنوات خبرة',
    kanbanRating: 'التقييم',
    kanbanInventory: 'قطع الغيار المتاحة',
    kanbanSkills: 'التخصصات والشهادات',

    // Equipment Types
    equipChiller: 'مبرد تكييف تجاري (Chiller)',
    equipRTU: 'وحدة تكييف أسطح مدمجة (RTU)',
    equipVRF: 'نظام تدفق تبريد متغير (VRF)',
    equipGasFurnace: 'فرن تدفئة غازي عالي الكفاءة',
    equipBoiler: 'غلاية ماء تجارية (Boiler)',
    equipCRAC: 'تبريد دقيق لمراكز البيانات (CRAC)',
    equipMiniSplit: 'مكيف سبليت انفرتر جداري',
    equipAHU: 'وحدة مناولة الهواء (AHU) وصناديق VAV',

    // Modals - New Ticket
    newTicketTitle: 'تسجيل بلاغ صيانة تكييف جديد',
    newTicketSubtitle: 'أدخل تفاصيل العميل، موقع المنشأة، نوع الجهاز، ووصف العطل الفني',
    newTicketCustomerName: 'اسم العميل / المنشأة',
    newTicketPhone: 'رقم هاتف الاتصال',
    newTicketEmail: 'البريد الإلكتروني',
    newTicketAddress: 'العنوان وموقع العطل',
    newTicketAddressPreset: 'اختر موقعاً سريعاً أو اكتب العنوان',
    newTicketCustomAddress: 'عنوان مخصص أو تفاصيل إضافية',
    newTicketEquipmentType: 'نوع معدة التكييف / التبريد',
    newTicketEquipmentModel: 'طراز وموديل الجهاز',
    newTicketFaultCode: 'رمز الخطأ (كود العطل مثل E1 / HP-Trip)',
    newTicketIssueDesc: 'وصف المشكلة والأعراض الفنية',
    newTicketAccessNotes: 'ملاحظات الدخول (بوابة الأمن / تصريح السطح)',
    newTicketEstimatedDuration: 'المدة المقدرة للإصلاح (بالدقائق)',
    newTicketMinutes: 'دقيقة',
    newTicketCreateBtn: 'حفظ وتثبيت البلاغ في اللوحة',
    newTicketCancelBtn: 'إلغاء',

    // Modals - AI Assistant
    aiModalTitle: 'مساعد التوجيه الذكي (AI Dispatch Engine)',
    aiModalSubtitle: 'تحليل جغرافي وفني لمطابقة البلاغات المفتوحة مع الفنيين الأقرب والأكثر ملاءمة لخفض استهلاك الوقود',
    aiModalAnalyzing: 'جاري فحص مواقع الفنيين ومخزون القطع وحساب أقصر المسارات...',
    aiModalAnalyzeBtn: 'إعادة تحليل التوجيه الذكي',
    aiModalApplyAll: 'تطبيق جميع التوصيات دفعة واحدة',
    aiModalAppliedAll: 'تم تطبيق وتوزيع جميع البلاغات بنجاح!',
    aiModalApplySingle: 'إسناد هذا البلاغ',
    aiModalAssignTo: 'الفني المقترح',
    aiModalRationale: 'مبررات الذكاء الاصطناعي',
    aiModalFuelSaved: 'وفر الوقود المقدر',
    aiModalTimeSaved: 'وفر وقت القيادة',
    aiModalFleetHealth: 'حالة الأسطول',
    aiModalStrategicInsights: 'توصيات استراتيجية تشغيلية',
    aiModalNoTicketsToAssign: 'لا توجد بلاغات غير مسندة في الوقت الحالي.',

    // Modals - Daily Manifest
    manifestTitle: 'بيان المسار وجدول العمل اليومي',
    manifestSubtitle: 'جدول التحركات المعتمد، تسلسل المحطات، قسائم الاستلام، وتوقيع الفني والعميل',
    manifestPrintBtn: 'طباعة البيان (Print / PDF)',
    manifestCopyLink: 'نسخ رابط المسار',
    manifestLinkCopied: 'تم نسخ الرابط!',
    manifestCloseBtn: 'إغلاق',
    manifestTechnicianInfo: 'بيانات الفني والمركبة',
    manifestVan: 'رقم الشاحنة',
    manifestPhone: 'هاتف التواصل',
    manifestRouteMetrics: 'إحصائيات المسار الميداني',
    manifestTotalDistance: 'إجمالي المسافة المقطوعة',
    manifestDriveTime: 'وقت القيادة المقدر',
    manifestFuelAlloc: 'مخصص الوقود',
    manifestScheduledStops: 'المحطات المجدولة',
    manifestOrigin: 'نقطة الانطلاق (المستودع الرئيسي)',
    manifestDepotReturn: 'العودة للمستودع وإغلاق الوردية',
    manifestShiftComplete: 'انتهاء الوردية',
    manifestCustomerSig: 'توقيع العميل المستلم: _______________________',
    manifestOdometerStart: 'عداد البداية: _____________',
    manifestOdometerEnd: 'عداد النهاية: _____________',
    manifestOdometerTotal: 'إجمالي الكيلومترات: _________',
    manifestCloseout: 'محضر إغلاق الوردية وتسجيل قراءة العداد',
    manifestNoTickets: 'لا توجد مهام أو بلاغات نشطة مسندة لهذه المركبة حالياً.',

    // Fleet Simulation Bar
    simTitle: 'محاكي تحرك الأسطول الحي',
    simStatusRunning: 'المحاكاة نشطة: الشاحنات تتحرك بالميدان',
    simStatusPaused: 'المحاكاة متوقفة مؤقتاً',
    simStatusReady: 'المحاكاة جاهزة للتشغيل',
    simSpeed: 'سرعة المحاكاة',
    simProgress: 'نسبة الإنجاز',
    simCompleted: 'مكتمل',
    simInProgress: 'قيد الصيانة',
    simEnRoute: 'في الطريق',
    simActiveMsg: 'آخر تحديث ميداني',
    simReset: 'إعادة ضبط المحاكاة',
    simLog: 'سجل الأحداث',
    simCloseLog: 'إغلاق السجل',

    // Territory Map
    mapTitle: 'خريطة التغطية الجغرافية وتتبع الشاحنات',
    mapUrgencyFilter: 'تصفية حسب درجة الاستعجال',
    mapToggleTraffic: 'حالة المرور',
    mapResetView: 'إعادة التمركز',
    mapFallbackNotice: 'خريطة متجهة تفاعلية نشطة مع مسارات الطرق الحية',
    mapTechDetails: 'تفاصيل الفني والمركبة',
    mapTicketDetails: 'تفاصيل بلاغ الصيانة',
    mapClose: 'إغلاق',
    mapAssignAction: 'إسناد لهذا الفني',

    // Quick Guide Modal
    guideTitle: 'دليل استخدام نظام إدارة وتوجيه أسطول التكييف',
    guideSubtitle: 'كل ما تحتاج لمعرفته لتشغيل وإدارة عمليات الصيانة الميدانية بكفاءة قصوى',
    guideClose: 'فهمت، البدء الآن',
    guidePillarsTitle: 'المزايا والوظائف الرئيسية للنظام:',
    guideStep1Title: '1. لوحة التوجيه ومتابعة الفنيين (Kanban Board)',
    guideStep1Desc: 'تتيح لك إدارة 15 شاحنة وفني صيانة. يمكنك سحب وإفلات البلاغات بكل سهولة بين الفنيين، وتعديل ترتيب محطات التوقف اليومية لكل فني.',
    guideStep2Title: '2. خريطة الأسطول الحية وتتبع المسارات (Live Territory Map)',
    guideStep2Desc: 'عرض فوري لمواقع الفنيين، المستودعات، وبلاغات الصيانة مع ترميز لوني لدرجة الاستعجال (أحمر للطوارئ، أصفر لنفس اليوم، أزرق للصيانة الدورية).',
    guideStep3Title: '3. التوجيه الذكي بالذكاء الاصطناعي (AI Dispatch)',
    guideStep3Desc: 'يقوم الذكاء الاصطناعي بتحليل المسافات الجغرافية، مهارات الفني، حمولة العمل، وقطع الغيار المتاحة في الشاحنة لاختيار الفني الأمثل وتوفير الوقود والوقت.',
    guideStep4Title: '4. محاكاة حركة الشاحنات في الميدان (Fleet Simulation)',
    guideStep4Desc: 'شاهد تحرك الشاحنات في الزمن الفعلي وسرّع الوقت حتى 10 أضعاف لمراقبة كيفية إنجاز البلاغات والانتقال من محطة لأخرى.',
    guideStep5Title: '5. بيان المسار اليومي القابل للطباعة والتصدير (Daily Route Manifest)',
    guideStep5Desc: 'توليد كشف عمل يومي متكامل لكل فني يشمل تسلسل المحطات، أرقام هواتف العملاء، رموز الأعطال، نموذج التوقيع، وسجل عداد الكيلومترات.',
    guideStep6Title: '6. تسجيل وتصنيف بلاغات الصيانة الجديدة (Service Ticket Intake)',
    guideStep6Desc: 'إضافة سريعة للبلاغات مع تحديد نوع المعدة (شيلر، مكيّف أسطح RTU، نظام VRF، مكيفات سبليت) وحساب مهلة اتفاقية مستوى الخدمة (SLA).',

    // Company Settings Modal
    settingsTitle: 'تخصيص بيانات المنشأة ونطاق التغطية',
    settingsSubtitle: 'يمكنك تعديل اسم شركتك والمنطقة الجغرافية ووحدة قياس المسافات لتلائم أعمالك',
    settingsCompanyName: 'اسم شركة الصيانة أو المؤسسة',
    settingsRegion: 'منطقة التغطية الجغرافية',
    settingsDistanceUnit: 'وحدة قياس المسافات',
    settingsSave: 'حفظ التعديلات',

    // Helper aliases
    emergencies: 'حالات طارئة',
    inQueue: 'في قائمة الانتظار',
    routeMiles: 'مسار الأسطول',
    showBoard: 'عرض لوحة التوزيع',
    hideBoard: 'إخفاء لوحة التوزيع',
    fullMap: 'ملء الشاشة',
    btnAiAssistant: 'المساعد الذكي',
    footerFleetHealth: 'حالة الأسطول',
    footerOptimal: 'ممتازة ومستقرة',
    footerFleetLoad: 'حمولة الأسطول',
    footerActiveVans: 'شاحنة نشطة',
    footerApiStatus: 'حالة الربط',
  },
  en: {
    // Brand & Header
    appTitle: 'HVAC Field Service Dispatch Board',
    appTitleShort: 'HVAC Dispatch',
    appSubtitle: '15 Fleet Vans • Live Routes API & AI Dispatch',
    companyNameDefault: 'Metroplex HVAC Field Services',
    territoryDefault: 'DFW Metroplex & Surrounding Areas',
    zenModeExit: 'Exit Full Map',
    switchLang: 'العربية',
    quickGuide: 'System Guide',
    companySettings: 'Company Settings',

    // KPI Metrics
    kpiActiveFleet: 'Active Fleet',
    kpiEmergency: 'Emergency Calls',
    kpiUnassigned: 'Unassigned Calls',
    kpiTotalDistance: 'Total Distance',
    kpiEstFuel: 'Est. Fuel',
    unitsMiles: 'Miles',
    unitsKm: 'Km',
    unitsGal: 'Gal',
    unitsLiters: 'L',

    // Top Action Buttons
    btnAiDispatch: 'AI Dispatch Assistant',
    btnNewTicket: 'New Service Ticket',
    btnSimulateFleet: 'Simulate Fleet',
    btnPauseSim: 'Pause Simulation',
    btnResumeSim: 'Resume Simulation',
    btnDailyManifest: 'Daily Manifest',
    btnFullMap: 'Full Map Mode',
    btnRecalculating: 'Recalculating Routes...',

    // Tabs & Views
    tabBoard: 'Dispatch Board',
    tabUnassigned: 'Unassigned Tickets',
    tabTechnicians: 'Technicians',
    viewMap: 'Field Map',
    viewBoard: 'Dispatch Board',

    // Urgency Filters & Badges
    filterAll: 'All',
    urgencyEmergency: 'Emergency',
    urgencySameDay: 'Same Day',
    urgencyRoutine: 'Routine',
    urgencyScheduled: 'Scheduled',

    // Technician Statuses
    techStatusAvailable: 'Available',
    techStatusEnRoute: 'En Route',
    techStatusOnSite: 'On Site',
    techStatusReturningDepot: 'Returning to Depot',
    techStatusOnDuty: 'On Duty',
    techStatusOffDuty: 'Off Duty',

    // Ticket Statuses
    ticketStatusUnassigned: 'Unassigned',
    ticketStatusAssigned: 'Assigned',
    ticketStatusEnRoute: 'En Route',
    ticketStatusInProgress: 'In Progress',
    ticketStatusCompleted: 'Completed',

    // Kanban & Board
    kanbanSearchPlaceholder: 'Search tickets, clients, equipment, address...',
    kanbanUnassignedTitle: 'Pending Dispatch Queue',
    kanbanUnassignedDesc: 'Drag ticket onto a technician or run AI Dispatch for optimal route assignment',
    kanbanNoUnassigned: 'All clear! Every service ticket is assigned to a fleet vehicle.',
    kanbanDragHint: 'Drag card to vehicle column below',
    kanbanDropHere: 'Drop ticket here to assign',
    kanbanStopsCount: 'Stops',
    kanbanNoStops: 'No active tickets assigned to this vehicle',
    kanbanAssignTo: 'Assign to Technician',
    kanbanUnassign: 'Unassign Ticket',
    kanbanPrintManifest: 'Print Manifest',
    kanbanExperience: 'yrs exp',
    kanbanRating: 'Rating',
    kanbanInventory: 'Stocked Parts',
    kanbanSkills: 'Skills & Certifications',

    // Equipment Types
    equipChiller: 'Commercial Chiller',
    equipRTU: 'Rooftop Package Unit (RTU)',
    equipVRF: 'VRF Multi-Split Heat Pump',
    equipGasFurnace: 'High-Efficiency Gas Furnace',
    equipBoiler: 'Hydronic Commercial Boiler',
    equipCRAC: 'Data Center CRAC / Precision Cooling',
    equipMiniSplit: 'Ductless Inverter Mini-Split',
    equipAHU: 'Air Handling Unit (AHU) & VAV',

    // Modals - New Ticket
    newTicketTitle: 'Create New HVAC Service Ticket',
    newTicketSubtitle: 'Enter customer, facility location, equipment specifications, and diagnostic symptoms',
    newTicketCustomerName: 'Customer / Facility Name',
    newTicketPhone: 'Contact Phone Number',
    newTicketEmail: 'Contact Email',
    newTicketAddress: 'Facility Address',
    newTicketAddressPreset: 'Choose Preset Location or Custom',
    newTicketCustomAddress: 'Custom Address Details',
    newTicketEquipmentType: 'HVAC Equipment Type',
    newTicketEquipmentModel: 'Equipment Model',
    newTicketFaultCode: 'Fault Code (e.g. E1 / HP-Trip)',
    newTicketIssueDesc: 'Issue Description & Symptoms',
    newTicketAccessNotes: 'Access Notes (Security gate, roof hatch, etc.)',
    newTicketEstimatedDuration: 'Estimated Service Duration (minutes)',
    newTicketMinutes: 'mins',
    newTicketCreateBtn: 'Dispatch & Create Ticket',
    newTicketCancelBtn: 'Cancel',

    // Modals - AI Assistant
    aiModalTitle: 'AI Dispatch Assistant (Gemini Flash)',
    aiModalSubtitle: 'Multi-variable optimization analyzing technician locations, parts inventory, and traffic corridors',
    aiModalAnalyzing: 'Analyzing technician GPS coordinates, part inventories, and computing route matrix...',
    aiModalAnalyzeBtn: 'Re-Analyze Fleet Optimization',
    aiModalApplyAll: 'Batch Apply All Recommendations',
    aiModalAppliedAll: 'All recommendations applied successfully!',
    aiModalApplySingle: 'Assign Recommendation',
    aiModalAssignTo: 'Recommended Tech',
    aiModalRationale: 'Optimization Rationale',
    aiModalFuelSaved: 'Est. Fuel Saved',
    aiModalTimeSaved: 'Est. Drive Time Saved',
    aiModalFleetHealth: 'Fleet Health',
    aiModalStrategicInsights: 'Strategic Fleet Insights',
    aiModalNoTicketsToAssign: 'No unassigned tickets available for AI recommendations.',

    // Modals - Daily Manifest
    manifestTitle: 'Daily Route Manifest & Service Schedule',
    manifestSubtitle: 'Authorized route sequence, turn-by-turn waypoint coordinates, diagnostic work order sign-offs',
    manifestPrintBtn: 'Print Manifest (Ctrl+P / PDF)',
    manifestCopyLink: 'Copy Route Link',
    manifestLinkCopied: 'Link Copied!',
    manifestCloseBtn: 'Close',
    manifestTechnicianInfo: 'Technician & Van Profile',
    manifestVan: 'Van Number',
    manifestPhone: 'Direct Phone',
    manifestRouteMetrics: 'Route Optimization Metrics',
    manifestTotalDistance: 'Total Distance',
    manifestDriveTime: 'Est. Drive Time',
    manifestFuelAlloc: 'Fuel Allocation',
    manifestScheduledStops: 'Scheduled Stops',
    manifestOrigin: 'Origin / Hub Rollout',
    manifestDepotReturn: 'Return to Regional Hub',
    manifestShiftComplete: 'Shift Complete',
    manifestCustomerSig: 'Customer Signature: _______________________',
    manifestOdometerStart: 'Start Odometer: _____________',
    manifestOdometerEnd: 'End Odometer: _____________',
    manifestOdometerTotal: 'Total Miles: _______________',
    manifestCloseout: 'Technician Route Closeout & Odometer Record',
    manifestNoTickets: 'No active service tickets currently assigned to this vehicle.',

    // Fleet Simulation Bar
    simTitle: 'Live Fleet Simulation Engine',
    simStatusRunning: 'Simulation Running: Fleet Vans En Route',
    simStatusPaused: 'Simulation Paused',
    simStatusReady: 'Simulation Ready',
    simSpeed: 'Simulation Speed',
    simProgress: 'Progress',
    simCompleted: 'Completed',
    simInProgress: 'In Progress',
    simEnRoute: 'En Route',
    simActiveMsg: 'Fleet Dispatch Feed',
    simReset: 'Reset Simulation',
    simLog: 'Event Log',
    simCloseLog: 'Close Log',

    // Territory Map
    mapTitle: 'Field Territory Map & Vehicle Tracking',
    mapUrgencyFilter: 'Filter by Urgency Level',
    mapToggleTraffic: 'Traffic Layer',
    mapResetView: 'Reset View',
    mapFallbackNotice: 'Interactive vector map active with multi-stop routes',
    mapTechDetails: 'Technician & Van Details',
    mapTicketDetails: 'Service Ticket Details',
    mapClose: 'Close',
    mapAssignAction: 'Assign to this Tech',

    // Quick Guide Modal
    guideTitle: 'HVAC Dispatch Board System Guide',
    guideSubtitle: 'Complete walkthrough of core capabilities for regional field service fleet operations',
    guideClose: 'Got it, Let\'s Start',
    guidePillarsTitle: 'Key Architecture & Operational Features:',
    guideStep1Title: '1. Drag-and-Drop Dispatch Kanban Board',
    guideStep1Desc: 'Manage 15 HVAC vans with drag-and-drop ticket allocation, stop reordering, and instant capacity monitoring.',
    guideStep2Title: '2. Live Interactive Territory Map',
    guideStep2Desc: 'Geographic visualization with color-coded urgency pins (Red Emergency, Amber Same-Day, Blue Routine) and depot hubs.',
    guideStep3Title: '3. AI Dispatch Optimization (Gemini)',
    guideStep3Desc: 'Smart algorithmic and AI matching pairing technicians with tickets based on GPS proximity, required certifications, and parts inventory.',
    guideStep4Title: '4. Real-time Multi-Vehicle Fleet Simulation',
    guideStep4Desc: 'Simulate vehicle progression across routes with up to 10x acceleration, live status transitions, and stop-by-stop progress.',
    guideStep5Title: '5. Exportable & Printable Daily Route Manifest',
    guideStep5Desc: 'Professional multi-stop driver manifests formatted for thermal or standard printing and PDF export with odometer & signature fields.',
    guideStep6Title: '6. Rapid Service Ticket Intake',
    guideStep6Desc: 'Instant creation of tickets with HVAC equipment classification (Chillers, RTUs, VRFs, Mini-splits) and SLA deadline tracking.',

    // Company Settings Modal
    settingsTitle: 'Company Branding & Region Settings',
    settingsSubtitle: 'Customize company name, territory region, and units for your operations',
    settingsCompanyName: 'Company / Organization Name',
    settingsRegion: 'Operating Territory / Region',
    settingsDistanceUnit: 'Distance Unit',
    settingsSave: 'Save Changes',

    // Helper aliases
    emergencies: 'Emergencies',
    inQueue: 'In Queue',
    routeMiles: 'route',
    showBoard: 'Show Board',
    hideBoard: 'Hide Board',
    fullMap: 'Full Map',
    btnAiAssistant: 'AI Dispatch',
    footerFleetHealth: 'Fleet Health',
    footerOptimal: 'Optimal',
    footerFleetLoad: 'Fleet Load',
    footerActiveVans: 'Active',
    footerApiStatus: 'API Status',
  },
};
