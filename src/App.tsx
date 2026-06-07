/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Scale, 
  Calendar, 
  Download, 
  Copy, 
  Check, 
  RefreshCw,
  FileCode,
  Info,
  ExternalLink,
  Eye,
  Shield,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { generateHTML, ORIGINAL_HTML_TEMPLATE } from './template';

const MONTHS_AR = [
  { value: '1', name: 'يناير' },
  { value: '2', name: 'فبراير' },
  { value: '3', name: 'مارس' },
  { value: '4', name: 'أبريل' },
  { value: '5', name: 'مايو' },
  { value: '6', name: 'يونيو' },
  { value: '7', name: 'يوليو' },
  { value: '8', name: 'أغسطس' },
  { value: '9', name: 'سبتمبر' },
  { value: '10', name: 'أكتوبر' },
  { value: '11', name: 'نوفمبر' },
  { value: '12', name: 'ديسمبر' },
];

const YEARS = Array.from({ length: 15 }, (_, i) => String(2025 + i));

export default function App() {
  // Input states
  const [name, setName] = useState('عبدالله السالم');
  const [weight, setWeight] = useState('147');
  const [selectedMonth, setSelectedMonth] = useState('7'); // July by default
  const [selectedYear, setSelectedYear] = useState('2026'); // 2026 by default

  // We construct the startDate dynamically in Arabic
  const startDate = React.useMemo(() => {
    const monthObj = MONTHS_AR.find(m => m.value === selectedMonth);
    const monthName = monthObj ? monthObj.name : 'يوليو';
    return `تبدأ من ${monthName} ${selectedYear}`;
  }, [selectedMonth, selectedYear]);

  // Copy & Download states
  const [copied, setCopied] = useState(false);
  const [downloadCounter, setDownloadCounter] = useState(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  // Preview Iframe Ref
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Generate the active custom HTML
  const customHTML = React.useMemo(() => {
    const displayWeight = weight.trim() ? `${weight.trim()} كغ` : '0 كغ';
    return generateHTML(name, displayWeight, startDate);
  }, [name, weight, startDate]);

  // Copy HTML mechanism
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(customHTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  // Trigger real browser-based file download
  const handleDownloadFile = () => {
    const blob = new Blob([customHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Clean-up name for filename (safe for Arabic characters, strip invalid OS filename characters)
    const sanitizedName = name.replace(/[\/\\:\*\?"<>\|]/g, '').trim();
    link.href = url;
    link.download = `خطة ${sanitizedName || 'العميل'}.html`;
    
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloadCounter(prev => prev + 1);
  };

  const handleReset = () => {
    setName('عبدالله السالم');
    setWeight('147');
    setSelectedMonth('7');
    setSelectedYear('2026');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-cairo">
      {/* Premium Header */}
      <header className="bg-gradient-to-r from-[#2d1b4e] via-[#1a1145] to-[#0f0d3d] text-white shadow-md border-b border-indigo-950 px-4 py-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#e63946] text-white p-2.5 rounded-xl font-black text-xl tracking-wider shadow-sm flex items-center justify-center">
              FACTIVE
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                مُنشئ خطط العملاء الذكي
                <span className="text-xs bg-indigo-500/30 text-indigo-300 font-normal px-2 py-0.5 rounded-full border border-indigo-400/20">
                  إصدار فوري
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-indigo-200/80 mt-0.5 font-medium">
                ولّد وحمّل صفحات الـ HTML لعملائك بنفس التصميم الحصري بلمسة واحدة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-indigo-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/10"
              title="إعادة التعيين للقيم الافتراضية"
              id="reset-form-btn"
            >
              <RefreshCw size={13} />
              <span>إعادة تعيين الافتراضي</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        {/* Banner with info */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shrink-0 mt-0.5">
            <Sparkles size={18} />
          </div>
          <div>
            <h3 className="font-bold text-indigo-950 text-base">توليد احترافي خالي من الأخطاء</h3>
            <p className="text-xs sm:text-sm text-indigo-900/80 leading-relaxed mt-1">
              من هنا، يمكنك تخصيص بيانات عهدتك من الأبطال بمرونة تامة. تقوم المنظومة تلقائياً بالحفاظ التام على كامل الأكواد والـ CSS والصور الخاصة بعروض Factive المعتمدة دون أي تشويه أو تغيير في البناء الفني للملف، وتوفر لك التحميل المباشر بصيغة <strong className="font-bold text-indigo-600">.html</strong> لإرسالها لعميلك مباشرة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Control Panel (lg:col-span-5) */}
          <section className="lg:col-span-5 flex flex-col gap-6" id="editor-controls-section">
            
            {/* Form Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                <h2 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                  <span>تعديل بيانات عميلك</span>
                </h2>
                <span className="text-xs font-semibold text-slate-400">تحديث فوري للمعلومات</span>
              </div>

              {/* Input: Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="client-name-input">
                  <User size={14} className="text-indigo-600" />
                  <span>اسم العميل بالكامل:</span>
                </label>
                <div className="relative">
                  <input
                    id="client-name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-bold focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 pr-10"
                    placeholder="مثال: عبدالله السالم"
                    dir="rtl"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">
                    [اسم العميل]
                  </span>
                </div>
              </div>

              {/* Input: Weight */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-700 flex items-center gap-1.5" htmlFor="client-weight-input">
                  <Scale size={14} className="text-indigo-600" />
                  <span>الوزن الحالي (بـ الكيلوغرام):</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    id="client-weight-input"
                    type="text"
                    inputMode="decimal"
                    value={weight}
                    onChange={(e) => {
                      // Filter input to allow only digits and an optional single decimal separator
                      const val = e.target.value.replace(/[^0-9.]/g, '');
                      const parts = val.split('.');
                      if (parts.length > 2) return; // Prevent multiple dots
                      setWeight(val);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-16 pr-10 py-3 text-slate-900 font-bold focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-left"
                    placeholder="147"
                    dir="ltr"
                  />
                  {/* Visual prefix for the input in Arabic style */}
                  <span className="absolute left-3 bg-indigo-50 text-indigo-700 font-extrabold text-xs px-3 py-1.5 rounded-lg border border-indigo-100">
                    كغ
                  </span>
                  <span className="absolute right-3 text-xs text-slate-400 font-bold pointer-events-none">
                    ⚖️
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5" dir="rtl">
                  * اكتب الرقم فقط، وسيقوم التطبيق بكتابة "كغ" وإدراجها تلقائياً بالملف.
                </p>
              </div>

              {/* Input: Start Date */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                  <Calendar size={14} className="text-indigo-600" />
                  <span>تاريخ بدء خطة التحول:</span>
                </label>
                <div className="grid grid-cols-2 gap-3" dir="rtl">
                  {/* Month Selection */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold" htmlFor="start-month-select">الشهر:</label>
                    <select
                      id="start-month-select"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 font-bold focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm outline-none cursor-pointer"
                    >
                      {MONTHS_AR.map((m) => (
                        <option key={m.value} value={m.value}>
                          {m.name} ({m.value})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Year Selection */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 font-bold" htmlFor="start-year-select">السنة:</label>
                    <select
                      id="start-year-select"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 font-bold focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm outline-none cursor-pointer"
                    >
                      {YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Real-time generated text output preview */}
                <div className="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100/40 text-xs text-indigo-950/70 font-semibold mt-1 flex items-center justify-between">
                  <span>الصيغة النهائية المكتوبة بالملف:</span>
                  <span className="bg-indigo-600 text-white font-black px-2.5 py-1 rounded-lg text-xs tracking-wide">
                    {startDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Generator Action Center */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4">
              <h3 className="font-extrabold text-slate-800 text-sm border-b border-slate-100 pb-2">📂 لوحة التوليد والتصدير الفوري</h3>
              
              {/* Main big Download Button */}
              <button
                onClick={handleDownloadFile}
                className="w-full bg-gradient-to-r from-[#e63946] to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-extrabold text-center py-4 rounded-xl shadow-lg shadow-rose-500/10 hover:shadow-rose-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                id="download-html-btn"
              >
                <Download size={20} />
                <span>تحميل ملف الـ HTML النهائي</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Copy button */}
                <button
                  onClick={handleCopyCode}
                  className={`border py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    copied 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                  id="copy-code-btn"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'تم نسخ الكود بنجاح!' : 'نسخ كود الـ HTML'}</span>
                </button>

                {/* Reset form quick button */}
                <button
                  onClick={handleReset}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  id="reset-form-secondary"
                >
                  <RefreshCw size={14} />
                  <span>إعادة تعبئة القيم الأصلية</span>
                </button>
              </div>

              {downloadCounter > 0 && (
                <div className="bg-emerald-50 text-emerald-800 border-emerald-100 border text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5">
                  <Check size={13} />
                  <span>تم تحميل {downloadCounter} ملف خلال هذه الجلسة.</span>
                </div>
              )}
            </div>

            {/* Guide Info Box */}
            <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col gap-3">
              <h4 className="text-xs font-bold text-amber-500 tracking-wider uppercase flex items-center gap-1">
                <Shield size={14} />
                <span>التحقق من الأمان والسلامة</span>
              </h4>
              <p className="text-xs leading-relaxed">
                إن كود قالب <strong>Factive</strong> يتميز باحتوائه على معلومات وشعارات مدمجة بنسق Base64 لضمان عدم تلف الصور في أي ظرف كان. لا نقوم تحت أي مسمى بالاتصال بخوادم خارجية أو تغيير التنسيقات؛ الكود يبقى متناسقاً تمامًا بنسبة 100% مع الملف الذي أرسلته.
              </p>
              <div className="border-t border-slate-800 pt-3 mt-1 flex justify-between items-center text-[11px] text-slate-400">
                <span>تاريخ التوليد: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>الحالة: سحابي آمن 🟢</span>
              </div>
            </div>

          </section>

          {/* Interactive Live Preview Panel (lg:col-span-7) */}
          <section className="lg:col-span-7 flex flex-col gap-4" id="live-preview-section">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              
              {/* Preview Header Tabs */}
              <div className="bg-slate-100/80 border-b border-slate-200 px-4 py-3 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#2d1b4e] text-white p-1.5 rounded-lg">
                    <Smartphone size={15} />
                  </div>
                  <span className="font-extrabold text-xs text-slate-800">شاشة معاينة الهاتف التفاعلية (المظهر المستهدف للعميل)</span>
                </div>

                <div className="flex items-center bg-slate-200/60 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      activeTab === 'preview' 
                        ? 'bg-white text-indigo-950 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    id="tab-preview-btn"
                  >
                    <Eye size={13} />
                    <span>المعاينة الحية</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      activeTab === 'code' 
                        ? 'bg-white text-indigo-950 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    id="tab-code-btn"
                  >
                    <FileCode size={13} />
                    <span>كود HTML المصدر</span>
                  </button>
                </div>
              </div>

              {/* Tab Display Area */}
              <div className="p-6 bg-slate-100 flex justify-center items-center min-h-[640px]">
                
                {activeTab === 'preview' ? (
                  /* High Fidelity Phone Frame Wrapper */
                  <div className="relative w-full max-w-[390px] bg-slate-900 rounded-[48px] p-3.5 shadow-2xl border-4 border-slate-800 scale-[0.98] transition-all duration-300">
                    
                    {/* Phone Top Notch Component */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-3xl z-30 flex items-center justify-center">
                      <div className="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
                    </div>

                    {/* Phone Screen Case Container */}
                    <div className="bg-[#f2f2f7] rounded-[36px] overflow-hidden w-full h-[580px] relative z-20 shadow-inner flex flex-col">
                      <iframe
                        ref={iframeRef}
                        title="Factive Plan Design Live Preview"
                        srcDoc={customHTML}
                        className="w-full h-full border-none"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      />
                    </div>

                    {/* Home Indicator line */}
                    <div className="absolute bottom-1 w-28 h-1 bg-slate-700 rounded-full left-1/2 -translate-x-1/2 z-20"></div>
                  </div>
                ) : (
                  /* Raw code text editor view */
                  <div className="w-full bg-slate-900 text-slate-200 rounded-2xl p-4 overflow-hidden shadow-lg flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <span>فقط المتغيرات تم تعديلها (اسم العميل، الوزن، تاريخ البدء)</span>
                      <button
                        onClick={handleCopyCode}
                        className="text-indigo-400 hover:text-white flex items-center gap-1 transition-all"
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copied ? 'تم النسخ!' : 'نسخ الكود'}</span>
                      </button>
                    </div>
                    <textarea
                      readOnly
                      value={customHTML}
                      className="w-full h-[520px] bg-slate-950/80 text-emerald-400 font-mono text-[11px] p-3.5 rounded-xl border border-slate-800/80 resize-none overflow-y-auto focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                      dir="ltr"
                    />
                  </div>
                )}

              </div>

              {/* Responsive Footer Info Bar */}
              <div className="bg-slate-50 border-t border-slate-200 p-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                  <Info size={13} />
                  <span>اضغط على خيار "تحميل ملف الـ HTML" للحفظ المباشر على جهازك</span>
                </div>
                <div>
                  أبعاد المعاينة: <span className="font-mono bg-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-bold">390px x 580px</span> (معممة للموبايل)
                </div>
              </div>

            </div>

          </section>

        </div>

      </main>

      {/* Corporate footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 text-center border-t border-slate-900 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Factive Plan Builder. جميع الحقوق محفوظة لجهة التطوير.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">|</span>
            <p className="flex items-center gap-1">
              <span>تم التطوير تلبيةً لرغبة عملائنا الكرام</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
