/* ══════ STATE ══════ */
/* ══════ SHARED API KEY — يستخدم المتغير البيئي appi ══════ */
const SHARED_GROQ_KEY = context.env.appi;

/* ══════════════════════════════════════════
   XSS PROTECTION — دالة موحدة لجميع الملفات
══════════════════════════════════════════ */
function _escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\\"/g, '&quot;')
    .replace(/\\'/g, '&#39;');
}

let S = {
  currentDay:1, completedDays:[], calories:0, streak:0, lang:'',
  theme:'default', mode:'mobile',
  startDate: new Date().toISOString().split('T')[0],
  customImages:{}, fabThemePos:{top:100,right:16},
  bodyMeasurements:{}, ropeJumps:0, ropeMeters:0, ropeMins:0, ropeSessions:0,
  weeklyData:{}, completedExercises:{}, unlockedBadges:[],
  soundOn:true, tickOn:true, volume:80, ttsOn:true,
  tabata:{work:20,rest:10,rounds:8},
  customSchedule:{},
  nutritionLog:{}, // يوميات التغذية: { 'YYYY-MM-DD': { entries:[...] } }
  onboardingDone: false,
  user: { name:'', weight:0, height:0, age:0, gender:'', goal:'burn', trainTime:'18:00', programDays:30, program:'standard', startDate: new Date().toISOString().split('T')[0] },
  trainingLog: {},
  coachHistory: [],
  _manualExCal: {},
  weeklyCalGoal: 0,
  xp: 0,             // نقاط XP الكلية
  superSetPairs: [], // أزواج Super Set [[ex1, ex2], ...]
  xpLevel: 1,        // مستوى XP (مستقل عن مستوى الأيام)
  weeklyCalGoal: 0,  // هدف السعرات الأسبوعي (0 = تلقائي)
  streakFreezes: 1,      // عدد تجميدات السلسلة المتبقية
  identityTitle: '',     // لقب المستخدم المكتسب 'رياضي'/'بطل'/'أسطورة'
  commitmentDays: [],    // أيام وعد المستخدم بالتمرين فيها
  variableRewardNext: 0, // اليوم التالي الذي ستظهر فيه مكافأة مفاجئة
  coachMemory: {
    // ذاكرة طويلة المدى للمدرب
    weakDays: [],          // أيام يتخطاها المستخدم باستمرار
    skippedExercises: {},  // تمارين يتخطاها كثيراً {id: count}
    personality: '',       // 'needs_push' | 'self_motivated' | 'detail_oriented'
    lastAdvice: '',        // آخر نصيحة قدّمها المدرب
  }
};

// Export the state object
export default {
  S: S,
  _escHtml: _escHtml,
  SHARED_GROQ_KEY: SHARED_GROQ_KEY
};
