export default function LandingPage() {
return (
<div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white" dir="rtl">
{/* Navbar */}
<nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
<div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
OptiAgent
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2.5 rounded-xl font-medium text-sm shadow-lg shadow-indigo-600/20">
دخول لوحة التحكم
</button>
</nav>

{/* Hero Section */}
<header className="max-w-5xl mx-auto text-center px-6 pt-24 pb-16">
<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
حسن ترتيب موقعك في جوجل <br />بواسطة وكلاء الذكاء الاصطناعي
</h1>
<p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
منصة مؤتمتة بالكامل لفحص المواقع، تحليل المنافسين، وتوليد استراتيجيات السيو الذكية جلبًا لملايين الزوار أوتوماتيكيًا.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-indigo-600/30 w-full sm:w-auto">
ابدأ الفحص المجاني الآن
</button>
<button className="border border-slate-700 hover:bg-slate-900 transition text-slate-300 px-8 py-4 rounded-xl font-semibold w-full sm:w-auto">
مشاهدة آلية العمل
</button>
</div>
</header>

{/* Pricing Section */}
<section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold mb-4">خطط أسعار مشفرة ومرنة</h2>
<p className="text-slate-400">اختر الباقة المناسبة لك، جميع المدفوعات مؤمنة ومساقة عبر Stripe للبنك مباشرة.</p>
</div>

<div className="grid md:grid-cols-3 gap-8 text-right">
{/* Plan 1 */}
<div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold text-slate-200 mb-2">الباقة الأساسية</h3>
<p className="text-3xl font-extrabold mb-6 text-left" dir="ltr">$29 <span className="text-sm font-normal text-slate-400">/ mo</span></p>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li>✓ فحص حتى 5 مواقع شهريًا</li>
<li>✓ تقارير سيو أساسية</li>
<li>✓ وكيل ذكاء اصطناعي واحد</li>
</ul>
</div>
<button className="w-full bg-slate-800 hover:bg-slate-750 transition py-3 rounded-xl font-medium text-sm">
اشترك الآن بأمان
</button>
</div>

{/* Plan 2 (Popular) */}
<div className="bg-slate-900/80 border-2 border-indigo-500 p-8 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-indigo-950/20">
<span className="absolute -top-3.5 left-6 bg-indigo-500 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">الأكثر طلبًا</span>
<div>
<h3 className="text-xl font-bold text-slate-200 mb-2">باقة المحترفين</h3>
<p className="text-3xl font-extrabold mb-6 text-left" dir="ltr">$79 <span className="text-sm font-normal text-slate-400">/ mo</span></p>
<ul className="space-y-3 text-sm text-slate-300 mb-8">
<li>✓ فحص مواقع غير محدود</li>
<li>✓ توليد خطط كلمات مفتاحية كاملة</li>
<li>✓ 3 وكلاء ذكاء اصطناعي متقدمين</li>
<li>✓ دعم فني ذكي متواصل</li>
</ul>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/20">
اشترك الآن بأمان
</button>
</div>

{/* Plan 3 */}
<div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold text-slate-200 mb-2">باقة الشركات</h3>
<p className="text-3xl font-extrabold mb-6 text-left" dir="ltr">$199 <span className="text-sm font-normal text-slate-400">/ mo</span></p>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li>✓ كل ميزات باقة المحترفين</li>
<li>✓ ربط برميجي مخصص API</li>
<li>✓ تقارير مخصصة بشعار شركتك</li>
</ul>
</div>
<button className="w-full bg-slate-800 hover:bg-slate-750 transition py-3 rounded-xl font-medium text-sm">
تواصل معنا
</button>
</div>
</div>
</section>

{/* Footer */}
<footer className="border-t border-slate-900 max-w-6xl mx-auto px-6 py-8 text-center text-xs text-slate-600">
© 2026 OptiAgent. جميع الحقوق محفوظة. جميع المعاملات المالية مشفرة بمعايير PCI-DSS.
</footer>
</div>
);
}
