/* ---------- UNIT 00: START HERE ---------- */
OLD.push({id:'u0',title:'Start Here',desc:'How spoken English is different from written English, and how to use this course.',ru:'Чем устная речь отличается от письменной, и как работать с курсом.',lessons:[

{id:'s1',title:'Two Englishes',
lede:'You already speak English well enough to have a conversation. Now we make it sound natural.',
ru:'В английском как будто два языка: письменный и устный. В школе обычно учат письменный. Этот курс — про устный.',
body:`
<p>Most textbooks teach <b>written English</b>: every word clear, every sentence complete. But people do not talk like a textbook. Listen to how a Canadian really says this question:</p>
<table><tr><th>Written</th><th>Spoken</th></tr>
<tr><td>What are you going to do?</td><td>[[«WHAD»·ya gonna «DO»?|whaddaya gonna do?]]</td></tr>
<tr><td>Do you want to get something to eat?</td><td>[[ya «WAN»na get something to «EAT»?|you wanna get something to eat?]]</td></tr>
<tr><td>I do not know.</td><td>[[I dun«NO».|I dunno.]]</td></tr></table>
<p>Seven written words became about four spoken “beats.” This is not lazy or wrong. It is <b>how English works</b> when people speak. If you only learn the written version, two things happen:</p>
<ul><li>You understand your teacher, but you miss what coworkers and neighbours say in a hurry.</li>
<li>You sound correct, but a bit like a robot or a news reader.</li></ul>
<div class="box rule"><b>The big idea</b><p>In spoken English, the <b>important words</b> are loud and clear. The <b>small words</b> get short, quiet and squeezed together. Almost everything in this course comes back to this one idea.</p></div>
<h3>What this course covers</h3>
<ol><li><b>Sounds</b> — the consonants and vowels of English, and the ones learners find hardest.</li>
<li><b>Word stress</b> — which syllable is strong, and the tiny sound /ə/.</li>
<li><b>Rhythm</b> — strong words, weak words, and speaking in groups.</li>
<li><b>Linking &amp; fast speech</b> — how words shrink and join.</li>
<li><b>Voice &amp; body language</b> — intonation, tone, and Canadian body language.</li>
<li><b>Grammar for speaking</b> — articles, tenses and questions you use every day.</li>
<li><b>Expressions</b> — words that go together, phrasal verbs and idioms.</li>
<li><b>Everyday Canada</b> — work, money, numbers, technology, small talk.</li>
<li><b>Conversation skills</b> — asking for help, keeping a conversation going, being polite.</li></ol>
<div class="box tip"><b>Two goals, not one</b><p>Your first goal is to <b>understand</b> fast, natural speech. Your second goal is to <b>speak</b> clearly. You do not have to copy every reduction. But you must recognize them, because Canadians will use them with you every day.</p></div>`,
ex:[
{type:'mc',q:'Which statement matches the big idea of spoken English?',o:['Every word should be said clearly and equally.','Important words are strong; small words become short and quiet.','Speaking fast is always better.'],a:1,why:'Strong important words + weak small words = the rhythm of English.'},
{type:'mc',q:'A coworker says [[«WHAD»·ya «WAN»na «DO»?|whaddaya wanna do?]] What did they say?',o:['What do you want to do?','Why do you want two?','What did you do?'],a:0,why:'“What do you” → <i>whaddaya</i>, “want to” → <i>wanna</i>.'},
{type:'reveal',q:'Think of one time when you understood the words in a textbook, but not a real person speaking. What made it hard?',a:'Usual answers: they spoke fast, the words were joined together, small words disappeared, or they used slang. This course trains exactly those things.'}
]},

{id:'s2',title:'How to Practise',
lede:'Short practice every day beats long practice once a week.',
ru:'Лучше заниматься понемногу каждый день. Слушайте, повторяйте вслух, записывайте себя.',
body:`
<h3>The listen–repeat method (shadowing)</h3>
<p>Pronunciation is a physical skill, like a sport. Reading about it is not enough — your mouth needs practice. For every example in this course:</p>
<ol><li><b>Listen</b> — tap the phrase. Listen two or three times.</li>
<li><b>Repeat out loud</b> — copy the rhythm first, then the sounds.</li>
<li><b>Shadow</b> — play it again and speak <i>at the same time</i> as the voice.</li>
<li><b>Record yourself</b> — use your phone’s voice recorder. Compare with the course audio. This feels strange at first, but it is the fastest way to improve.</li></ol>
<p>Try it now: [[Nice to meet you.]] &nbsp; [[Where are you from?]] &nbsp; [[I’m from Manila, in the Philippines.]]</p>
<div class="box tip"><b>Slow, then normal</b><p>Use the <b>&#128034; Slow</b> button when a phrase is new. Then turn it off and practise at normal speed. Natural rhythm only appears at normal speed.</p></div>
<h3>A good weekly routine</h3>
<table><tr><th>When</th><th>What</th></tr>
<tr><td>Every day, 15–20 min</td><td>One lesson section, or review. Say every example out loud.</td></tr>
<tr><td>Every day, 5 min</td><td>Practice lab: the sound trainer or numbers.</td></tr>
<tr><td>A few times a week</td><td>Watch a Canadian or American show or YouTube video <b>with English subtitles</b>. Pause and repeat one sentence you like.</td></tr>
<tr><td>Whenever you can</td><td>Talk with real people. Mistakes are normal and fine.</td></tr></table>
<div class="box tip"><b>Typical for adult learners</b><p>Many adults first learned English by reading, grammar and translation. That builds good grammar and vocabulary — you probably have that already. What is usually missing is <b>listening to real speech</b> and <b>speaking out loud a lot</b>. Focus your time there.</p></div>
<h3>Use your notes</h3>
<p>Every lesson has a <b>My notes</b> box at the bottom. Write new words, questions, or sentences you want to practise. Your notes are saved on this device.</p>`,
ex:[
{type:'say',q:'Listen, then repeat each line out loud. Tick each one when you have said it 3 times.',lines:['Nice to meet you.','Where are you from?','I’m from Mexico, but I live in Canada now.','Could you say that again, please?']},
{type:'mc',q:'What is “shadowing”?',o:['Reading a text silently many times.','Speaking at the same time as a recording, copying it.','Writing down everything you hear.'],a:1}
]}
]});

/* ---------- UNIT 01: STRESS & RHYTHM ---------- */
OLD.push({id:'u1',title:'Stress & Rhythm',desc:'The beat of English: strong syllables, weak syllables, and the schwa.',ru:'Ритм английского: ударные и безударные слоги, звук «шва».',lessons:[

{id:'r1',title:'Word Stress',
lede:'Every English word with two or more syllables has one strong syllable.',
ru:'В каждом слове из двух и более слогов есть один ударный слог. Неправильное ударение мешает пониманию сильнее, чем неправильный звук.',
body:`
<p>A <b>syllable</b> is a beat of a word: <i>com · pu · ter</i> has three. One syllable is <b>stressed</b>. A stressed syllable is:</p>
<ul><li><b>longer</b></li><li><b>louder</b></li><li><b>higher</b> in pitch</li><li>clear — the vowel keeps its full sound</li></ul>
<p>Listen: [[com·«PU»·ter|computer]] &nbsp; [[«TEA»·cher|teacher]] &nbsp; [[ba·«NA»·na|banana]] &nbsp; [[«CA»·na·da|Canada]] &nbsp; [[to·«MOR»·row|tomorrow]]</p>
<div class="box rule"><b>Why it matters</b><p>English listeners recognize words by their <b>stress pattern</b> first. If you say a sound a little wrong, people usually still understand. If you put the stress in the wrong place, they often do not. Example: say “com-pu-<b>TER</b>” and many people will not recognize the word.</p></div>
<div class="box tip"><b>Stress in other languages</b><p>Every language handles stress differently. In French, the stress is almost always at the end of a word group. In Spanish and Punjabi it follows fairly regular rules. Mandarin uses tones instead. In English, stress can fall on <b>any</b> syllable, so you must learn it with each word.</p></div>
<h3>Helpful patterns</h3>
<p>English stress is not random. These patterns work most of the time:</p>
<h4>1. Two-syllable nouns and adjectives: usually the first syllable</h4>
<p>[[«TA»·ble|table]] &nbsp; [[«PEN»·cil|pencil]] &nbsp; [[«STU»·dent|student]] &nbsp; [[«HAP»·py|happy]] &nbsp; [[«WIN»·ter|winter]]</p>
<h4>2. Two-syllable verbs: usually the second syllable</h4>
<p>[[be·«GIN»|begin]] &nbsp; [[re·«LAX»|relax]] &nbsp; [[for·«GET»|forget]] &nbsp; [[de·«CIDE»|decide]] &nbsp; [[ex·«PLAIN»|explain]]</p>
<h4>3. Same spelling, different stress</h4>
<p>Some words are a noun <i>and</i> a verb. The stress tells you which:</p>
<div class="tw"><table><tr><th>Noun (1st)</th><th>Verb (2nd)</th></tr>
<tr><td>[[a «RE»·cord|a record]]</td><td>[[to re·«CORD»|to record]]</td></tr>
<tr><td>[[a «PRE»·sent (gift)|a present]]</td><td>[[to pre·«SENT»|to present]]</td></tr>
<tr><td>[[a «PRO»·ject|a project]]</td><td>[[to pro·«JECT»|to project]]</td></tr>
<tr><td>[[an «OB»·ject|an object]]</td><td>[[to ob·«JECT»|to object]]</td></tr>
<tr><td>[[an «IN»·crease|an increase]]</td><td>[[to in·«CREASE»|to increase]]</td></tr></table></div>
<h4>4. Endings that move the stress</h4>
<p>With <b>-tion, -sion, -ic, -ical, -ity</b>, the stress falls on the syllable <b>just before</b> the ending:</p>
<p>[[in·for·«MA»·tion|information]] &nbsp; [[de·«CI»·sion|decision]] &nbsp; [[e·co·«NO»·mic|economic]] &nbsp; [[e·lec·«TRI»·ci·ty|electricity]] &nbsp; [[u·ni·«VER»·si·ty|university]]</p>
<p>Notice how the stress moves inside a word family: [[«PHO»·to·graph|photograph]] → [[pho·«TO»·gra·pher|photographer]] → [[pho·to·«GRA»·phic|photographic]].</p>
<h4>5. Compound nouns: stress the first part</h4>
<p>[[«LAP»·top|laptop]] &nbsp; [[«KEY»·board|keyboard]] &nbsp; [[«PASS»·word|password]] &nbsp; [[«CLASS»·room|classroom]] &nbsp; [[«BUS» stop|bus stop]]</p>
<p>Compare: a [[«GREEN»·house|greenhouse]] (a glass building for plants) and a [[green «HOUSE»|green house]] (a house painted green).</p>
<div class="box tip"><b>How to check stress</b><p>Online dictionaries (Cambridge, Oxford, Merriam-Webster) mark stress with a small line <code>ˈ</code> before the stressed syllable: <code>/kəmˈpjuːtər/</code>. When you learn a new word, learn its stress too.</p></div>`,
ex:[
{type:'stress',items:[['ho','tel',1],['win','dow',0],['re','peat',1],['pro','fes','sor',1],['af','ter','noon',2],['ba','na','na',1],['Ca','na','da',0],['im','por','tant',1]]},
{type:'stress',q:'Endings: stress goes just before <b>-tion / -ic / -ity</b>.',items:[['e','du','ca','tion',2],['sci','en','tif','ic',2],['ac','tiv','i','ty',1],['con','ver','sa','tion',2]]},
{type:'mc',q:'“I want to <u>record</u> a video.” Where is the stress in <i>record</i> here?',o:['[[«RE»·cord|record, noun]]','[[re·«CORD»|to record]]'],a:1,why:'It is a verb (to record), so the stress is on the second syllable.'},
{type:'mc',q:'Which is a compound noun with stress on the FIRST part?',o:['a black «BOARD» (a board that is black)','a «BLACK»·board (in a classroom)'],a:1,why:'Compound nouns stress the first part: «BLACK»board, «LAP»top, «PASS»word.'}
]},

{id:'r2',title:'Sentence Stress: Content vs Function Words',
lede:'In a sentence, the important words are strong and the small grammar words are weak.',
ru:'Во фразе ударение падает на смысловые слова (существительные, глаголы, прилагательные). Служебные слова (артикли, предлоги, местоимения) произносятся слабо и быстро.',
body:`
<p>Words in a sentence are not equal. There are two groups:</p>
<div class="tw"><table><tr><th>Content words — STRONG</th><th>Function words — weak</th></tr>
<tr><td>Nouns: <i>work, Maria, phone</i><br>Main verbs: <i>go, eat, study</i><br>Adjectives: <i>cold, big, new</i><br>Adverbs: <i>quickly, never, often</i><br>Question words: <i>what, where, why</i><br>Negatives: <i>not, can’t, don’t, no</i><br>Numbers: <i>three, ten</i></td>
<td>Articles: <i>a, an, the</i><br>Prepositions: <i>to, at, for, of, in</i><br>Pronouns: <i>I, you, he, it, them</i><br>Helping verbs: <i>do, can, will, have, is, are</i><br>Conjunctions: <i>and, but, or</i></td></tr></table></div>
<p>Content words carry the <b>meaning</b>. If you only heard the strong words, you would still understand:</p>
<p>[[I «WANT» to «GO» to the «STORE».]] → <b>WANT · GO · STORE</b></p>
<p>[[«WHERE» did you «PUT» my «PHONE»?]] → <b>WHERE · PUT · PHONE</b></p>
<p>[[She «DOESN’T» «LIKE» «HOCK»ey.]] → <b>DOESN’T · LIKE · HOCKEY</b></p>
<div class="box rule"><b>Rule</b><p>Stress the content words. Make the function words <b>short, quiet and fast</b> — squeeze them between the strong words.</p></div>
<h3>Small words have weak forms</h3>
<p>Because function words are not stressed, their vowels change to a short “uh” sound (the schwa — next lesson). So <i>to</i> sounds like “tə,” <i>for</i> like “fər,” <i>and</i> like “ən.” Listen: [[«BREAD» and «BUT»ter|bread and butter]] → “bread-n-butter.”</p>
<div class="box tip"><b>Exception: the end of a sentence</b><p>A function word at the very end of a sentence often keeps its full form: [[«WHERE» are you «FROM»?|where are you from?]] — <i>from</i> is clear here. And “Yes, I <b>can</b>.” uses the full, strong <i>can</i>.</p></div>
<div class="box tip"><b>A common habit</b><p>Many learners give every word the same weight: “I — WANT — TO — GO — TO — THE — STORE.” It sounds very careful and slow, like a robot. Practise making the small words almost disappear.</p></div>`,
ex:[
{type:'mc',q:'Which words are stressed? “The bus leaves at six.”',o:['The · at','BUS · LEAVES · SIX','The · bus · at · six'],a:1,why:'Noun (bus), main verb (leaves), number (six) are content words.'},
{type:'mc',q:'Which words are stressed? “Can you help me with my homework?”',o:['CAN · YOU · ME','HELP · HOMEWORK','YOU · WITH · MY'],a:1,why:'“Can, you, me, with, my” are function words. Only HELP and HOMEWORK carry meaning.'},
{type:'mc',q:'Why is “not” stressed in “I’m «NOT» ready”?',o:['Negatives are content words — they change the meaning.','Because it is a short word.','It should not be stressed.'],a:0},
{type:'say',q:'Say these. Tap your hand on the table on each stressed word only.',lines:['I «WANT» to «GO» «HOME».','«WHAT» do you «WANT» for «LUNCH»?','The «TEST» is on «FRI»day.','I «DON’T» «KNOW» the «AN»swer.']}
]},

{id:'r3',title:'The Schwa /ə/',
lede:'The most common sound in English is a short, relaxed “uh.”',
ru:'Самый частый звук английского — короткий нейтральный «ə». Безударные гласные часто превращаются в него — как в русском «молоко» [мəлако].',
body:`
<p>Say “uh” — short, quiet, with your mouth and tongue completely relaxed. That is the <b>schwa</b>, written <span class="sch">ə</span>. It appears in almost every English sentence, many times.</p>
<p>The schwa can be spelled with <b>any vowel letter</b>. It does not matter how the word is written — if the syllable is unstressed, the vowel often becomes <span class="sch">ə</span>:</p>
<div class="tw"><table><tr><th>Word</th><th>Sounds like</th></tr>
<tr><td>[[ba«NA»na|banana]]</td><td>b<span class="sch">ə</span>-NA-n<span class="sch">ə</span></td></tr>
<tr><td>[[«CA»nada|Canada]]</td><td>KA-n<span class="sch">ə</span>-d<span class="sch">ə</span></td></tr>
<tr><td>[[to«DAY»|today]]</td><td>t<span class="sch">ə</span>-DAY</td></tr>
<tr><td>[[«PROB»lem|problem]]</td><td>PROB-l<span class="sch">ə</span>m</td></tr>
<tr><td>[[«LEM»on|lemon]]</td><td>LEM-<span class="sch">ə</span>n</td></tr>
<tr><td>[[sup«PORT»|support]]</td><td>s<span class="sch">ə</span>-PORT</td></tr>
<tr><td>[[pho«TO»grapher|photographer]]</td><td>f<span class="sch">ə</span>-TOG-r<span class="sch">ə</span>-f<span class="sch">ə</span>r</td></tr></table></div>
<div class="box tip"><b>Not every vowel is clear</b><p>In Spanish, Tagalog, Arabic and many other languages, every vowel is pronounced clearly, the way it is written. English is different: unstressed vowels shrink to /ə/. Don’t pronounce every vowel the way it’s spelled — that is one of the biggest reasons learners sound “foreign.”</p></div>
<h3>Weak forms of small words</h3>
<p>Function words usually use the schwa. This is the main reason fast English is hard to hear:</p>
<div class="tw"><table><tr><th>Word</th><th>Strong (rare)</th><th>Weak (normal)</th><th>Example</th></tr>
<tr><td>a</td><td>“ay”</td><td><span class="sch">ə</span></td><td>[[a «CUP» of «TEA»]]</td></tr>
<tr><td>the</td><td>“thee”</td><td>th<span class="sch">ə</span></td><td>[[«OPEN» the «DOOR».]]</td></tr>
<tr><td>to</td><td>“too”</td><td>t<span class="sch">ə</span></td><td>[[«GO» to «BED».]]</td></tr>
<tr><td>for</td><td>“for”</td><td>f<span class="sch">ə</span>r</td><td>[[«THANKS» for «COM»ing.]]</td></tr>
<tr><td>of</td><td>“ov”</td><td><span class="sch">ə</span>v / <span class="sch">ə</span></td><td>[[a «LOT» of «PEO»ple]]</td></tr>
<tr><td>and</td><td>“and”</td><td><span class="sch">ə</span>n</td><td>[[«SALT» and «PEP»per]]</td></tr>
<tr><td>can</td><td>“kan”</td><td>k<span class="sch">ə</span>n</td><td>[[I can «SWIM».]]</td></tr>
<tr><td>was</td><td>“woz”</td><td>w<span class="sch">ə</span>z</td><td>[[It was «GREAT».]]</td></tr>
<tr><td>them</td><td>“them”</td><td>th<span class="sch">ə</span>m / <span class="sch">ə</span>m</td><td>[[«TELL» them.]]</td></tr></table></div>
<div class="box ca"><b>can vs can’t — a Canadian trap</b><p>“I can go” and “I can’t go” sound very similar, because the final <i>t</i> is often silent. The difference is mostly <b>stress and the vowel</b>:</p>
<p>[[I can «GO».]] → <i>can</i> is weak (k<span class="sch">ə</span>n), <b>GO</b> is strong.<br>[[I «CAN’T» «GO».]] → <i>can’t</i> is strong, with a full “a” sound (like in <i>cat</i>).</p></div>`,
ex:[
{type:'mc',q:'In “«CA»nada”, which syllables have a schwa?',o:['The first one','The second and third','All three'],a:1,why:'Only the stressed syllable keeps its full vowel: KA-nə-də.'},
{type:'mc',q:'Listen: [[I can «SEE» it.]] Did the speaker say <i>can</i> or <i>can’t</i>?',o:['can','can’t'],a:0,why:'Weak, quick <i>kən</i> and stress on SEE = can.'},
{type:'mc',q:'Listen: [[I «CAN’T» «SEE» it.]] Did the speaker say <i>can</i> or <i>can’t</i>?',o:['can','can’t'],a:1,why:'<i>Can’t</i> is stressed and has a full vowel.'},
{type:'say',q:'Say these with schwas. Do not pronounce every vowel!',lines:['a «LOT» of «PEO»ple','«FISH» and «CHIPS»','I «HAVE» to «GO» to «SCHOOL».','It was a «GOOD» «DAY».']}
]},

{id:'r4',title:'Rhythm: English Keeps the Beat',
lede:'English has a beat, like music. The strong words land on the beat.',
ru:'В английском ударные слова звучат примерно через равные промежутки времени. Безударные слова «сжимаются» между ними.',
body:`
<p>English is called a <b>stress-timed</b> language. This means: the <b>stressed syllables</b> come at roughly regular intervals, like a drum beat. The unstressed syllables between them must <b>speed up and squeeze</b> to fit.</p>
<p>Try this. Clap a steady beat and say each line — one clap on each strong word:</p>
<div class="tw"><table><tr><th>Line</th><th>Beats</th></tr>
<tr><td>[[«CATS» «EAT» «FISH».]]</td><td>3</td></tr>
<tr><td>[[The «CATS» will «EAT» the «FISH».]]</td><td>3</td></tr>
<tr><td>[[The «CATS» will have «EAT»en the «FISH».]]</td><td>3</td></tr>
<tr><td>[[The «CATS» could have been «EAT»ing the «FISH».]]</td><td>3</td></tr></table></div>
<p>All four lines have <b>three beats</b>, so they take <b>about the same time</b> — even though the last one has many more words. The small words get fast and weak.</p>
<div class="box rule"><b>Rule</b><p>Do not slow down for small words. Keep the beat on the strong words; let the weak words rush in between.</p></div>
<h3>Thought groups</h3>
<p>Long sentences are cut into <b>thought groups</b> — short chunks with a tiny pause between them. Each group usually has one main stress:</p>
<p>[[When I «GET» home, | I’m gonna «EAT», | and then I’ll do my «HOME»work.|When I get home, I'm gonna eat, and then I'll do my homework.]]</p>
<p>Pausing in the right places makes you easier to understand, even if your accent is strong. Pause at commas, between clauses, and before <i>and, but, because, so</i>.</p>
<div class="box tip"><b>Syllable-timed languages</b><p>In many languages — Spanish, French, Tagalog, Punjabi, Mandarin and others — every syllable takes about the same amount of time. English works differently: strong syllables are long, weak ones are very short. If you give every syllable the same time, your English can sound choppy (“staccato”). Practise with a beat: clap, tap your foot, or use music.</p></div>
<h3>Chants</h3>
<p>Chants are a fun way to train rhythm. Clap on the capital syllables:</p>
<ul class="lines"><li>[[«ONE», «TWO», «THREE», «FOUR».]]</li>
<li>[[«ONE» and a «TWO» and a «THREE» and a «FOUR».]]</li>
<li>[[«ONE» and then a «TWO» and then a «THREE» and then a «FOUR».]]</li></ul>
<p>Keep the same speed of clapping for all three lines!</p>`,
ex:[
{type:'mc',q:'How many beats (stressed words)? “I’m going to the store for some milk.”',o:['2','3','8'],a:1,why:'GO·ing, STORE, MILK → 3 beats. (Going can also sound like “gonna”.)'},
{type:'mc',q:'In a stress-timed language, what happens to the small words between stresses?',o:['They get longer and clearer.','They get faster and weaker so the beat stays regular.','They are always deleted.'],a:1},
{type:'say',q:'Clap a steady beat. Say all three lines with the SAME clap speed.',lines:['«DOGS» «CHASE» «CATS».','The «DOGS» will «CHASE» the «CATS».','The «DOGS» have been «CHAS»ing the «CATS».']},
{type:'reveal',q:'Where would you pause? “After school I usually go to the gym but today I have a test so I need to study.”',a:'After school | I usually go to the gym, | but today I have a test, | so I need to study.'}
]},

{id:'r5',title:'Focus Stress: Changing the Meaning',
lede:'Put extra stress on one word to show what is new, important, or different.',
ru:'Выделяя голосом одно слово, говорящий меняет смысл фразы: показывает, что важно, ново или противопоставлено.',
body:`
<p>Normally the last content word in a thought group gets the biggest stress. But you can move the <b>main stress</b> to any word to show what you mean. This is called <b>focus</b> or <b>contrastive</b> stress.</p>
<p>Same words, different meanings:</p>
<div class="tw"><table><tr><th>Sentence</th><th>Hidden meaning</th></tr>
<tr><td>[[«I» didn’t take your phone.]]</td><td>Someone else did.</td></tr>
<tr><td>[[I «DIDN’T» take your phone.]]</td><td>I did not do it — stop saying I did!</td></tr>
<tr><td>[[I didn’t «TAKE» your phone.]]</td><td>I only borrowed / moved it.</td></tr>
<tr><td>[[I didn’t take «YOUR» phone.]]</td><td>I took someone else’s.</td></tr>
<tr><td>[[I didn’t take your «PHONE».]]</td><td>I took something else.</td></tr></table></div>
<h3>When to use it</h3>
<h4>Correcting someone</h4>
<p>“You live in Ottawa?” — [[No, I live in «DEEP» River.]]</p>
<h4>Contrasting two things</h4>
<p>[[I like «TEA», but my «SIS»ter likes «COF»fee.]]</p>
<h4>Answering a question — stress the new information</h4>
<p>“What time does it start?” — [[It starts at «SEV»en.]]</p>
<p>“Does it start at six?” — [[No, at «SEV»en.]]</p>
<h4>Returning a question</h4>
<p>“How are you?” — “Good, how are [[«YOU»?|you?]]” (stress moves to <i>you</i>).</p>
<div class="box tip"><b>Focus in other languages</b><p>Many languages show focus by changing the word order or adding a small word. English mostly keeps the word order and uses <b>voice stress</b> instead. If you do not use focus stress, people may miss your point — or think you are not interested.</p></div>`,
ex:[
{type:'mc',q:'[[I didn’t say «HE» stole it.]] What does the speaker mean?',o:['I said someone else stole it.','I never said anything.','He borrowed it, not stole it.'],a:0},
{type:'mc',q:'“Is your brother 15?” — “No, my «SIS»ter is 15.” Why is SISTER stressed?',o:['It is the first word.','It corrects wrong information.','Family words are always stressed.'],a:1},
{type:'mc',q:'Friend: “How was your weekend?” You: “Great! How was ___?” Which word should be stressed?',o:['how','was','yours'],a:2,why:'Returning a question: stress moves to the new person — «YOURS».'},
{type:'say',q:'Read with the stress shown, and think about the meaning.',lines:['«I» didn’t take your phone.','I didn’t take «YOUR» phone.','No, I live in «DEEP» River.','Good, how are «YOU»?']}
]}
]});
