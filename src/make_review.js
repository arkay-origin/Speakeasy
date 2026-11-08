// Builds one printable review sheet per language: every translation and language tip, next to its English context.
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'_s0.js'),'utf8');
const {COURSE,LANGUAGES,HOME_TR,LANG_PAGES}=new Function(src+';return {COURSE,LANGUAGES,HOME_TR,LANG_PAGES};')();
const esc=s=>String(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const plain=h=>String(h||'').replace(/\[\[([^\]|]+)(\|[^\]]*)?\]\]/g,'$1').replace(/[«»]/g,'').replace(/⦃([a-z]+)⦄/g,'$1').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const out=path.join(__dirname,'..','review');
LANGUAGES.forEach(L=>{
  const rows=[];let n=0;
  const add=(where,en,tr,dir)=>{n++;rows.push(`<tr><td class="n">${n}</td><td>${esc(where)}</td><td>${esc(en)}</td><td dir="${dir||'auto'}" lang="${L.code}" class="tr">${esc(tr)}</td><td class="chk">☐ OK<br>☐ Fix</td><td class="fix"></td></tr>`)};
  add('Home page','A free course in spoken Canadian English for adults. Choose a lesson to start.',HOME_TR.tr[L.code],L.rtl?'rtl':'ltr');
  COURSE.forEach(u=>add('Unit '+u.num+': '+u.title,u.desc,u.tr[L.code],L.rtl?'rtl':'ltr'));
  COURSE.forEach(u=>u.lessons.forEach(l=>add('Lesson summary — '+plain(l.title),plain(l.lede),l.tr[L.code],L.rtl?'rtl':'ltr')));
  const P=LANG_PAGES[L.code];
  const tips=[];COURSE.forEach(u=>u.lessons.forEach(l=>{if(l.l1&&l.l1[L.code])tips.push([plain(l.title),plain(l.l1[L.code])])}));
  const html=`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Review — ${esc(L.en)} notes — Speak Easy</title><style>
body{font-family:Georgia,"Times New Roman",serif;color:#111;max-width:1100px;margin:24px auto;padding:0 16px;line-height:1.45}
h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:26px 0 8px;border-bottom:2px solid #333;padding-bottom:3px}
.meta{color:#555;font-size:13px;margin-bottom:14px}
.box{border:1px solid #999;background:#f6f6f2;padding:10px 14px;margin:12px 0;font-size:14px}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{border:1px solid #aaa;padding:5px 7px;vertical-align:top;text-align:left}
th{background:#eee}td.n{width:28px;color:#666}td.tr{font-size:15px;width:28%}td.chk{width:62px;white-space:nowrap;font-size:12px}td.fix{width:24%}
tr{page-break-inside:avoid}
@page{size:landscape;margin:12mm}
</style></head><body>
<h1>Speak Easy — ${esc(L.en)} (${L.native}) review sheet</h1>
<div class="meta">Spoken Canadian English for adult learners · ${n} translated lines · ${tips.length} tips for ${esc(L.en)} speakers</div>
<div class="box"><b>Thank you for helping!</b> Speak Easy is a free course for adult newcomers. Learners who choose ${esc(L.en)} see a one-line summary of each lesson in ${esc(L.en)}, plus tips about common difficulties for ${esc(L.en)} speakers.<br><br>
<b>Please check:</b> (1) Is each translation <b>correct and natural</b> for adult learners? Simple words are best. (2) Are the tips in Part 2 and Part 3 <b>accurate</b> for ${esc(L.en)} speakers?<br>
Tick <b>OK</b> or <b>Fix</b>, and write any correction in the last column. The English column is the lesson’s English introduction, for context — the translation is a short summary, not a word-for-word translation.</div>
<h2>Part 1 — Translations</h2>
<table><tr><th>#</th><th>Where</th><th>English (context)</th><th>${esc(L.en)}</th><th>Check</th><th>Correction / comment</th></tr>${rows.join('')}</table>
<h2>Part 2 — Language page (“Tips for ${esc(L.en)} speakers”)</h2>
<table><tr><th>Text</th><th>Check</th><th>Correction / comment</th></tr>
<tr><td dir="auto" lang="${L.code}" style="font-size:15px">${esc(P.intro)}</td><td class="chk">☐ OK<br>☐ Fix</td><td class="fix"></td></tr>
<tr><td>${esc(plain(P.body))}</td><td class="chk">☐ OK<br>☐ Fix</td><td class="fix"></td></tr></table>
<h2>Part 3 — Tips inside lessons (written in simple English)</h2>
<table><tr><th>#</th><th>Lesson</th><th>Tip</th><th>Check</th><th>Correction / comment</th></tr>
${tips.map((t,i)=>`<tr><td class="n">${i+1}</td><td>${esc(t[0])}</td><td>${esc(t[1])}</td><td class="chk">☐ OK<br>☐ Fix</td><td class="fix"></td></tr>`).join('')}</table>
<p class="meta" style="margin-top:20px">Reviewer name (optional): ______________________ &nbsp; Date: ____________</p>
</body></html>`;
  fs.writeFileSync(path.join(out,`review-${L.code}-${L.en.split(' ')[0].toLowerCase()}.html`),html);
  console.log(L.code,n,'lines',tips.length,'tips');
});
