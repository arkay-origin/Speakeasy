/* ---------- COURSE STRUCTURE (public edition) ----------
   Lessons come from OLD (generalized original lessons) and NEW (keyed by id; NEW overrides OLD).
   lv = CEFR level(s). Translations, teacher notes and language tips are merged from TR, TEACH, L1. */
const LIB={};
OLD.forEach(u=>u.lessons.forEach(l=>{LIB[l.id]=l}));
Object.keys(NEW).forEach(id=>{LIB[id]=Object.assign({id},NEW[id])});
if(typeof AUDIO_NOTES!=='undefined')Object.keys(AUDIO_NOTES).forEach(id=>{if(LIB[id])LIB[id].body=AUDIO_NOTES[id]+LIB[id].body});

const UNITS=[
 {num:'00',lv:'A2',title:'Start Here',desc:'How spoken English is different from written English, how this course works, and how to practise.',
  ids:[['s1','A2'],['s4','A2'],['s2','A2']]},
 {num:'01',lv:'A2–B1',title:'Consonant Sounds',desc:'Spelling vs sound, the consonants of English, and the ones learners find hardest.',
  ids:[['x1','A2'],['x2','A2–B1'],['p1','A2'],['p2','A2'],['p5','A2'],['k4','B1'],['p6','A2–B1'],['x5','A2–B1']]},
 {num:'02',lv:'A2–B1',title:'Vowel Sounds',desc:'The 16 vowel sounds of Canadian English, each with a picture keyword.',
  ids:[['x3','A2'],['p3','A2'],['p4','A2'],['x4','B1'],['p7','B1–B2']]},
 {num:'03',lv:'A2–B2',title:'Word Stress',desc:'One strong syllable in every word, the tiny sound /ə/, and short cuts in long words.',
  ids:[['r1','A2–B1'],['x6','B1–B2'],['r3','A2–B1'],['x7','B1']]},
 {num:'04',lv:'A2–B2',title:'Rhythm & Sentence Stress',desc:'Strong words, weak words, the beat of English, and stress that changes meaning.',
  ids:[['r2','A2–B1'],['r4','B1'],['r5','B1–B2']]},
 {num:'05',lv:'A2–B2',title:'Linking & Fast Speech',desc:'Contractions, gonna and wanna, linking, and how to understand fast speech.',
  ids:[['k1','A2'],['k2','B1'],['k3','B1'],['k5','B1–B2'],['x9','B1–B2']]},
 {num:'06',lv:'A2–B1',title:'Voice & Body Language',desc:'Rising and falling voice, sounding polite, tone of voice, and body language in Canada.',
  ids:[['i1','A2–B1'],['i2','A2–B1'],['i3','B1'],['i4','A2–B1'],['x10','B1'],['x11','A2–B1']]},
 {num:'07',lv:'A2–B1',title:'Grammar for Speaking',desc:'Articles, questions, tenses and prepositions — the grammar you use every time you talk.',
  ids:[['g1','A2–B1'],['g3','A2'],['g4','A2'],['g2','B1'],['g5','B1'],['g7','A2']]},
 {num:'08',lv:'A2–B2',title:'Expressions',desc:'Words that go together, make/do/get, phrasal verbs, and common idioms.',
  ids:[['x12','B1'],['x13','A2–B1'],['x14','A2–B1'],['g6','B1–B2'],['x16','B1'],['x15','B1–B2']]},
 {num:'09',lv:'A2–B2',title:'Everyday Canada',desc:'Small talk, work, study, Canadian words, numbers and money, technology and slang.',
  ids:[['v3','A2'],['x17','A2–B1'],['v1','A2–B1'],['v2','A2'],['x18','A2–B1'],['v5','A2'],['v4','B1'],['v6','B1–B2']]},
 {num:'10',lv:'A2–B1',title:'Life in Canada',desc:'Health, emergencies, housing, banking, transit and driving, your children’s school, government services, and writing short messages.',
  ids:[['f1','A2–B1'],['f2','A2'],['f3','B1'],['f4','A2–B1'],['f5','A2–B1'],['f6','A2–B1'],['f7','B1'],['f8','A2–B1']]},
 {num:'11',lv:'A2–B2',title:'Conversation Skills',desc:'Asking for help, keeping a conversation going, disagreeing politely, and real-life situations.',
  ids:[['c1','A2'],['c2','B1'],['c3','B1–B2'],['c4','A2–B1']]}
];

const COURSE=UNITS.map((u,ui)=>{const o=Object.assign({},u);delete o.ids;
  o.tr=(typeof TR_UNITS!=='undefined'&&TR_UNITS[ui])||{};
  o.lessons=u.ids.map(([id,lv])=>{const l=LIB[id];if(!l)throw new Error('Missing lesson: '+id);
    l.lv=lv;delete l.ru;
    l.tr={};if(typeof TR!=='undefined')Object.keys(TR).forEach(c=>{if(TR[c][id])l.tr[c]=TR[c][id]});
    if(typeof TEACH!=='undefined'&&TEACH[id])l.teach=TEACH[id];
    l.l1={};if(typeof L1!=='undefined')Object.keys(L1).forEach(c=>{if(L1[c][id])l.l1[c]=L1[c][id]});
    return l});
  return o});
