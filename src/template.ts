/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ORIGINAL_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>خطة عبدالله السالم — Factive</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Cairo',sans-serif;
  background:#f2f2f7;
  color:#1a1a2e;
  direction:rtl;
  -webkit-font-smoothing:antialiased;
}
.page{max-width:500px;margin:0 auto;background:#f2f2f7}

.hero{
  background:linear-gradient(160deg,#2d1b4e 0%,#1a1145 40%,#0f0d3d 100%);
  color:#fff;padding:40px 20px 32px;text-align:center;
  border-radius:0 0 20px 20px;
}
.hero-top{
  display:flex;justify-content:space-between;align-items:center;
  margin-bottom:24px;direction:rtl;
}
.hero-logo{display:flex;align-items:center;gap:6px;flex-direction:row-reverse}
.hero-logo img{height:32px;border-radius:7px;object-fit:contain}
.logo-text{font-size:17px;font-weight:900;letter-spacing:2px;color:#fff}
.plan-badge-wrap{position:relative;display:flex;align-items:center}
.plan-badge-bg{
  width:120px;height:38px;background:rgba(255,255,255,0.06);
  border-radius:19px;position:absolute;right:-5px;top:50%;transform:translateY(-50%);
}
.plan-badge{
  position:relative;background:#e63946;color:#fff;
  font-size:12px;font-weight:700;padding:6px 18px;border-radius:18px;z-index:1;
}
.client-name{font-size:32px;font-weight:900;margin-bottom:4px;line-height:1.3}
.hero-subtitle{font-size:13px;color:rgba(255,255,255,0.6);font-weight:400;margin-bottom:22px}
.stats-row{display:flex;gap:12px;justify-content:center}
.stat-card{
  background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);
  border-radius:14px;padding:12px 20px;flex:1;max-width:170px;text-align:center;
}
.stat-label{font-size:11px;color:rgba(255,255,255,0.45);font-weight:600;margin-bottom:2px}
.stat-value{font-size:22px;font-weight:900;color:#fff}

.disclaimer{
  background:#fef9e7;margin:14px 14px 0;padding:14px 16px;border-radius:14px;
  font-size:11px;color:#92780c;font-weight:600;text-align:center;line-height:1.9;
  display:flex;align-items:flex-start;gap:10px;border:1px solid #f0e4a8;
}
.disc-icon{
  min-width:26px;height:26px;background:#60a5fa;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-size:13px;font-weight:800;margin-top:4px;
}

.section-card{
  margin:14px 14px 0;background:#fff;border-radius:16px;
  padding:22px 18px;text-align:center;
}
.sec-header{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:4px}
.sec-icon{
  width:30px;height:30px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;
}
.sec-icon-red{background:#e63946}
.sec-icon-blue{background:#3b82f6}
.sec-title{font-size:18px;font-weight:800;color:#1a1a2e}
.sec-subtitle{font-size:12px;color:#999;font-weight:500;text-align:center;margin-bottom:16px}

.progress-area{margin-top:6px;padding:0 2px}
.bar-ends{display:flex;justify-content:space-between;font-size:11px;font-weight:600;color:#ccc;margin-bottom:4px}
.plabels-top{display:flex;margin-bottom:5px}
.plt{flex:1;font-size:10px;font-weight:700;color:#e63946;text-align:center}
.bar-wrap{position:relative;height:20px;background:#f0f0f0;border-radius:10px;overflow:visible}
.bar-trk{position:absolute;top:0;right:0;left:0;bottom:0;border-radius:10px;overflow:hidden;display:flex}
.sf{background:linear-gradient(270deg,#ef4444,#dc2626);height:100%}
.sg{background:#f0f0f0;height:100%}
.sm{background:linear-gradient(270deg,#3b82f6,#2563eb);height:100%}
.ck{
  position:absolute;top:50%;transform:translate(50%,-50%);
  width:26px;height:26px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:9px;font-weight:800;z-index:2;
}
.ck-g{background:#22c55e;border:2.5px solid #fff;color:#fff;box-shadow:0 1px 6px rgba(34,197,94,0.3)}
.ck-b{background:#3b82f6;border:2.5px solid #fff;color:#fff;box-shadow:0 1px 6px rgba(59,130,246,0.3)}
.ck-goal{background:#fff;border:2.5px solid #ef4444;color:#ef4444;box-shadow:0 1px 6px rgba(239,68,68,0.2)}
.plabels-bot{position:relative;height:20px;margin-top:6px}
.plb{position:absolute;transform:translateX(50%);font-size:9px;font-weight:700}
.plb-g{color:#22c55e}
.plb-r{color:#ef4444}
.months{display:flex;justify-content:space-between;margin-top:24px;font-size:11px;color:#ccc;font-weight:600}

.commit-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.cc{background:#fafafa;border:1px solid #f0f0f0;border-radius:14px;padding:16px 10px 12px;text-align:center}
.cc-icon{
  width:44px;height:44px;margin:0 auto 8px;border-radius:12px;
  display:flex;align-items:center;justify-content:center;font-size:20px;background:#fef2f2;
}
.cc-icon.t4{background:#fef9e7}
.cc-t{font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:1px}
.cc-f{font-size:10.5px;color:#bbb;font-weight:600}

.video-cta{
  margin:14px 14px 0;background:linear-gradient(135deg,#ef4444,#dc2626);
  border-radius:16px;padding:18px 18px;
  display:flex;align-items:center;gap:12px;direction:rtl;
}
.v-play{
  width:40px;height:40px;min-width:40px;
  background:rgba(255,255,255,0.2);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
}
.v-play svg{width:18px;height:18px;fill:#fff}
.v-text{flex:1;text-align:right}
.v-text h3{font-size:15px;font-weight:800;color:#fff;margin-bottom:2px}
.v-text p{font-size:10.5px;color:rgba(255,255,255,0.75);font-weight:500}
.v-btn{
  background:#fff;color:#ef4444;padding:7px 16px;border-radius:18px;
  font-size:12px;font-weight:800;text-decoration:none;white-space:nowrap;
}

.exercise{
  margin:14px 14px 0;background:linear-gradient(160deg,#1e1b4b,#0f172a);
  border-radius:16px;padding:22px 18px;text-align:center;color:#fff;
}
.ex-icon{
  width:44px;height:44px;margin:0 auto 10px;
  background:rgba(255,255,255,0.1);border-radius:12px;
  display:flex;align-items:center;justify-content:center;font-size:20px;
}
.ex-title{font-size:17px;font-weight:800;color:#fff;margin-bottom:8px}
.ex-text{font-size:12px;color:rgba(255,255,255,0.65);line-height:2;font-weight:500}
.ex-text strong{color:#e8b84b;font-weight:700}

.guarantees{
  margin:14px 14px 0;padding:22px 18px;background:#fff;border-radius:16px;text-align:center;
}
.g-list{display:flex;flex-direction:column;gap:10px;margin-top:10px}
.gc{
  background:linear-gradient(160deg,#1e1b4b,#1e293b);
  border-radius:14px;padding:16px 16px;
  display:flex;align-items:center;gap:12px;text-align:right;direction:rtl;
}
.gc-icon{
  width:40px;height:40px;min-width:40px;border-radius:10px;
  display:flex;align-items:center;justify-content:center;font-size:18px;
}
.gc-icon-r{background:rgba(239,68,68,0.15)}
.gc-icon-p{background:rgba(139,92,246,0.15)}
.gc-info h4{font-size:12.5px;font-weight:700;color:#fbbf24;margin-bottom:1px}
.gc-info p{font-size:11px;color:rgba(255,255,255,0.55);font-weight:500;line-height:1.6}

.insta{
  margin:14px 14px 14px;
  background:linear-gradient(135deg,#833ab4 0%,#fd1d1d 50%,#fcb045 100%);
  border-radius:16px;padding:20px 18px;
  display:flex;align-items:center;gap:12px;direction:rtl;
}
.insta-icon{
  width:40px;height:40px;min-width:40px;
  background:rgba(255,255,255,0.2);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
}
.insta-icon svg{width:22px;height:22px;fill:#fff}
.insta-text{flex:1;text-align:right}
.insta-text h3{font-size:15px;font-weight:800;color:#fff;margin-bottom:2px}
.insta-text p{font-size:10.5px;color:rgba(255,255,255,0.75);font-weight:500}
.insta-handle{
  background:rgba(255,255,255,0.2);color:#fff;
  padding:6px 14px;border-radius:18px;
  font-size:11px;font-weight:700;white-space:nowrap;text-decoration:none;
}
@media(max-width:600px){.page{max-width:100%}.client-name{font-size:28px}}
</style>
</head>
<body>
<div class="page">

  <section class="hero">
    <div class="hero-top">
      <div class="hero-logo">
        <div class="logo-text">FACTIVE</div>
        <img src="data:image/png;base64,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" alt="Factive" style="height:32px;width:32px;border-radius:7px">
      </div>
      <div class="plan-badge-wrap">
        <div class="plan-badge-bg"></div>
        <span class="plan-badge">خطة 12 شهر</span>
      </div>
    </div>
    <div class="client-name">عبدالله السالم</div>
    <div class="hero-subtitle">خطة التحول الكاملة خلال 12 شهراً — تبدأ من يوليو 2026</div>
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-label">الوزن الحالي</div>
        <div class="stat-value">147 كغ</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">مدة الخطة</div>
        <div class="stat-value">12 شهر</div>
      </div>
    </div>
  </section>

  <div class="disclaimer">
    <div class="disc-icon">ℹ</div>
    <div>هذه خطة عامة إرشادية — المدة والنتائج قد تختلف حسب استجابة الجسم والالتزام والظروف الشخصية. المدرب يعدّل الخطة باستمرار حسب تقدمك</div>
  </div>

  <div class="section-card">
    <div class="sec-header">
      <div class="sec-title">تقدمك في رحلة الـ 12 شهر</div>
      <div class="sec-icon sec-icon-red">📊</div>
    </div>
    <div class="sec-subtitle">هدفك: خسارة دهون والبناء العضلي</div>
    <div class="progress-area">
      <div class="bar-ends"><span>البداية</span><span>اكتمال الخطة</span></div>
      <div class="plabels-top">
        <div class="plt">خسارة دهون</div>
        <div class="plt">خسارة دهون</div>
        <div class="plt">خسارة دهون</div>
        <div class="plt">خسارة دهون</div>
      </div>
      <div class="bar-wrap">
        <div class="bar-trk">
          <div class="sf" style="width:22%"></div>
          <div class="sg" style="width:6%"></div>
          <div class="sf" style="width:19%"></div>
          <div class="sg" style="width:6%"></div>
          <div class="sf" style="width:19%"></div>
          <div class="sg" style="width:6%"></div>
          <div class="sf" style="width:19%"></div>
          <div class="sg" style="width:3%"></div>
        </div>
        <div class="ck ck-g" style="right:25%">✓</div>
        <div class="ck ck-g" style="right:50%">✓</div>
        <div class="ck ck-g" style="right:75%">✓</div>
        <div class="ck ck-goal" style="right:100%">🎯</div>
      </div>
      <div class="plabels-bot">
        <div class="plb plb-g" style="right:25%">دايت بريك</div>
        <div class="plb plb-g" style="right:50%">دايت بريك</div>
        <div class="plb plb-g" style="right:75%">دايت بريك</div>
        <div class="plb plb-r" style="right:100%">🎯 الهدف</div>
      </div>
      <div class="months"><span>0</span><span>3</span><span>6</span><span>9</span><span>12</span></div>
    </div>
  </div>

  <div class="section-card">
    <div class="sec-header">
      <div class="sec-title">الالتزامات الأسبوعية</div>
      <div class="sec-icon sec-icon-blue">✓</div>
    </div>
    <div class="sec-subtitle">متابعة منتظمة تضمن استمرار التقدم وتعديل الخطة عند الحاجة</div>
    <div class="commit-grid">
      <div class="cc">
        <div class="cc-icon">⚖️</div>
        <div class="cc-t">تسجيل الوزن</div>
        <div class="cc-f">يومياً</div>
      </div>
      <div class="cc">
        <div class="cc-icon">📏</div>
        <div class="cc-t">قياس المحيطات</div>
        <div class="cc-f">كل أسبوعين</div>
      </div>
      <div class="cc">
        <div class="cc-icon">📸</div>
        <div class="cc-t">صور المتابعة</div>
        <div class="cc-f">كل أسبوعين</div>
      </div>
      <div class="cc">
        <div class="cc-icon t4">📝</div>
        <div class="cc-t">متابعة المدرب</div>
        <div class="cc-f">كل أسبوعين</div>
      </div>
    </div>
  </div>

  <div class="video-cta">
    <div class="v-play">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="9,6 19,12 9,18" fill="white"/></svg>
    </div>
    <div class="v-text">
      <h3>شاهد فيديو شرح المتابعة</h3>
      <p>تعرّف على طريقة إرسال المتابعة والصور والقياسات</p>
    </div>
    <a href="https://youtu.be/tXjPg8QPBzg?si=sRVD7kySmDwAe20V" class="v-btn" target="_blank">مشاهدة ←</a>
  </div>

  <div class="exercise">
    <div class="ex-icon">🎥</div>
    <div class="ex-title">تصوير التمارين</div>
    <div class="ex-text">صور أداءك للتمارين خلال التدريب — <strong>أرسل الفيديوهات عبر واتساب إلى مدرب التمارين الذي تم مشاركة رقمه معك</strong> للتأكد من الأداء الصحيح وتجنب الإصابات</div>
  </div>

  <div class="guarantees">
    <div class="sec-header">
      <div class="sec-title">ضمانات Factive</div>
      <span style="font-size:18px">🛡️</span>
    </div>
    <div class="g-list">
      <div class="gc">
        <div class="gc-icon gc-icon-r">💯</div>
        <div class="gc-info">
          <h4>للوزن +100 كغ</h4>
          <p>نزول 10 كغ خلال 12 أسبوع أو استرداد 3 أضعاف المبلغ</p>
        </div>
      </div>
      <div class="gc">
        <div class="gc-icon gc-icon-p">📸</div>
        <div class="gc-info">
          <h4>للوزن أقل من 100 كغ</h4>
          <p>تحول واضح في الصور أو استرداد 3 أضعاف المبلغ</p>
        </div>
      </div>
    </div>
  </div>

  <div class="insta">
    <div class="insta-icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
      </svg>
    </div>
    <div class="insta-text">
      <h3>تابعنا على انستقرام</h3>
      <p>للاطلاع على آخر تحديثات التطبيق والمحتوى</p>
    </div>
    <a href="https://www.instagram.com/factiveapp/" class="insta-handle" target="_blank">@factiveapp</a>
  </div>

</div>
</body>
</html>`;

export function generateHTML(name: string, weight: string, startDate: string): string {
  // We want to be very precise and ensure that no other tags are changed in the document.
  // The user says "so the app would only change the data of the client as written by me and not change anything else in the file."

  let output = ORIGINAL_HTML_TEMPLATE;

  // Let's replace the <title>خطة عبدالله السالم — Factive</title>
  output = output.replace(
    "<title>خطة عبدالله السالم — Factive</title>",
    `<title>خطة ${name} — Factive</title>`
  );

  // Let's replace the client-name <div class="client-name">عبدالله السالم</div>
  output = output.replace(
    `<div class="client-name">عبدالله السالم</div>`,
    `<div class="client-name">${name}</div>`
  );

  // Let's replace the hero-subtitle <div class="hero-subtitle">خطة التحول الكاملة خلال 12 شهراً — تبدأ من يوليو 2026</div>
  // Wait, let's keep the user's custom start date but preserve the whole text formatting.
  output = output.replace(
    `<div class="hero-subtitle">خطة التحول الكاملة خلال 12 شهراً — تبدأ من يوليو 2026</div>`,
    `<div class="hero-subtitle">خطة التحول الكاملة خلال 12 شهراً — ${startDate}</div>`
  );

  // Let's replace the current weight <div class="stat-value">147 كغ</div> inside the الوزن الحالي stat-card
  // To make sure we replace the correct stat-value, let's target the exact group of lines:
  // <div class="stat-label">الوزن الحالي</div>
  // <div class="stat-value">147 كغ</div>
  const targetStatBlock = `<div class="stat-label">الوزن الحالي</div>
        <div class="stat-value">147 كغ</div>`;
  const replacementStatBlock = `<div class="stat-label">الوزن الحالي</div>
        <div class="stat-value">${weight}</div>`;

  output = output.replace(targetStatBlock, replacementStatBlock);

  return output;
}
