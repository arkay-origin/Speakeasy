/* ---------- VOWEL CHART (original to this course) ----------
   Each vowel sound of Canadian English has a picture keyword. Colours are visual labels only.
   c: id · word: keyword · ipa: dictionary symbol · ex: two examples · words: drill words (vowel of the STRESSED syllable) */
const VOWELS=[
 {c:'sheep',word:'sheep',emoji:'🐑',hex:'#3FB68B',ipa:'iː',ex:['see','eat'],   words:['tree','seat','piece','people','key','three','teacher','receipt','me','week']},
 {c:'ship', word:'ship', emoji:'🚢',hex:'#7BD3A8',ipa:'ɪ', ex:['sit','give'],  words:['bit','women','busy','build','gym','pretty','sister','English','with','been']},
 {c:'cake', word:'cake', emoji:'🎂',hex:'#E6A23C',ipa:'eɪ',ex:['day','wait'],  words:['rain','eight','great','they','name','paint','break','table','station','April']},
 {c:'bed',  word:'bed',  emoji:'🛏️',hex:'#F0C66B',ipa:'ɛ', ex:['ten','said'],  words:['friend','many','head','guess','bread','any','ready','weather','left','says']},
 {c:'cat',  word:'cat',  emoji:'🐱',hex:'#E8645A',ipa:'æ', ex:['bag','hand'],  words:['bad','hat','laugh','class','man','apple','happy','plaid','Saturday','family']},
 {c:'cup',  word:'cup',  emoji:'☕',hex:'#C77DBB',ipa:'ʌ', ex:['bus','love'],  words:['cut','mother','money','one','does','cousin','blood','young','Sunday','nothing']},
 {c:'clock',word:'clock',emoji:'🕰️',hex:'#5B8DEF',ipa:'ɑ', ex:['hot','saw'],   words:['not','coffee','father','law','caught','walk','talk','dog','job','watch']},
 {c:'boat', word:'boat', emoji:'⛵',hex:'#4FA3D9',ipa:'oʊ',ex:['go','home'],   words:['toe','know','though','snow','phone','open','road','close','slow','only']},
 {c:'book', word:'book', emoji:'📖',hex:'#8E7CC3',ipa:'ʊ', ex:['good','put'],  words:['could','woman','sugar','cook','foot','should','look','push','full','took']},
 {c:'moon', word:'moon', emoji:'🌙',hex:'#6FC3E8',ipa:'uː',ex:['food','blue'], words:['shoe','juice','new','two','who','school','fruit','music','room','true']},
 {c:'pie',  word:'pie',  emoji:'🥧',hex:'#D98A4E',ipa:'aɪ',ex:['my','time'],   words:['night','eye','buy','sky','guide','five','Friday','type','write','child']},
 {c:'cow',  word:'cow',  emoji:'🐄',hex:'#B5895A',ipa:'aʊ',ex:['now','town'],  words:['house','mouth','how','out','flower','hour','down','loud','around','allow']},
 {c:'coin', word:'coin', emoji:'🪙',hex:'#C9B458',ipa:'ɔɪ',ex:['boy','oil'],   words:['toy','noise','choice','enjoy','point','voice','join','annoy','royal','avoid']},
 {c:'bird', word:'bird', emoji:'🐦',hex:'#D9534F',ipa:'ɝ', ex:['her','work'],  words:['girl','word','nurse','first','early','Thursday','learn','shirt','were','turn']},
 {c:'star', word:'star', emoji:'⭐',hex:'#E07A3F',ipa:'ɑr',ex:['car','park'],  words:['heart','farm','hard','are','start','garden','March','smart','part','large']},
 {c:'horse',word:'horse',emoji:'🐴',hex:'#A0522D',ipa:'ɔr',ex:['more','floor'],words:['door','four','store','war','short','morning','sorry','north','sport','board']}
];
const VOWEL_SETS={
  short:['ship','bed','cat','cup','book'],
  long:['sheep','moon','clock'],
  glide:['cake','boat','pie','cow','coin'],
  r:['bird','star','horse'],
  hard:['sheep','ship','bed','cat','cup','clock','book','moon','bird']
};
const EPA_IPA=undefined;

/* ---------- LANGUAGES ---------- */
const LANGUAGES=[
  {code:'ar',en:'Arabic',native:'العربية',rtl:true},
  {code:'zh',en:'Mandarin Chinese',native:'中文'},
  {code:'fr',en:'French',native:'Français'},
  {code:'es',en:'Spanish',native:'Español'},
  {code:'pa',en:'Punjabi',native:'ਪੰਜਾਬੀ'},
  {code:'tl',en:'Tagalog / Filipino',native:'Tagalog'},
  {code:'ru',en:'Russian',native:'Русский'}
];
