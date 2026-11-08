/* ================= LIFE IN CANADA (public edition) ================= */

NEW.f1={title:'At the Doctor, Clinic and Pharmacy',
lede:'Book an appointment, describe your symptoms, and understand the pharmacist.',
body:`
<h3>Where to go</h3>
<div class="tw"><table><tr><th>Place</th><th>When</th></tr>
<tr><td>[[family doctor]] (or nurse practitioner)</td><td>Your regular doctor. You book an <b>appointment</b>. Finding one can take time — ask to be put on a waiting list.</td></tr>
<tr><td>[[walk-in clinic]]</td><td>No appointment needed, but you may wait a long time. For problems that aren’t emergencies.</td></tr>
<tr><td>[[pharmacy]] (drugstore)</td><td>Medicine. Pharmacists can give advice, and in many provinces they can treat minor problems.</td></tr>
<tr><td>[[emergency room]] (ER)</td><td>Serious or urgent problems, at a hospital. Not for small problems — the wait can be many hours.</td></tr>
<tr><td>811</td><td>In most provinces, a free phone line where a nurse gives health advice, 24 hours a day.</td></tr></table></div>
<h3>Describing symptoms</h3>
<ul class="lines"><li>[[I have a sore throat.]] / [[I have a headache.]] / [[I have a fever.]]</li>
<li>[[I’ve had a cough for five days.]] — use <b>for</b> + time, with present perfect</li>
<li>[[It hurts here.]] / [[It hurts when I breathe.]]</li>
<li>[[I feel dizzy.]] / [[I feel nauseous.]] (like you might throw up)</li>
<li>[[I’m allergic to penicillin.]]</li>
<li>[[It’s getting worse.]] / [[It’s getting better.]]</li></ul>
<h3>At the pharmacy</h3>
<div class="tw"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>[[prescription]]</td><td>A doctor’s order for medicine</td></tr>
<tr><td>[[refill]]</td><td>More of the same prescription</td></tr>
<tr><td>[[over the counter]]</td><td>Medicine you can buy without a prescription</td></tr>
<tr><td>[[dose]]</td><td>How much to take: “one tablet twice a day”</td></tr>
<tr><td>[[side effects]]</td><td>Unwanted effects of a medicine</td></tr></table></div>
<p>Useful questions: [[How often should I take this?]] [[Should I take it with food?]] [[Are there any side effects?]] [[Can I take this with my other medication?]]</p>
<div class="box tip"><b>Ask for an interpreter</b><p>Many hospitals and clinics can provide a free interpreter by phone. Ask: [[Is there an interpreter available? I speak Arabic.]] It’s your right to understand your health care.</p></div>`,
ex:[
{type:'dialogue',q:'At a walk-in clinic. Listen, then answer the questions below.',who:{A:'Receptionist',B:'Patient'},lines:[
 ['A','Hi there. Have you been here before?'],
 ['B','No, it’s my first time.'],
 ['A','Okay. Can I see your health card, please?'],
 ['B','Here you go.'],
 ['A','Thanks. And what brings you in today?'],
 ['B','I’ve had a sore throat and a fever for three days.'],
 ['A','All right. Please have a seat. The wait is about forty-five minutes.'],
 ['B','Okay, thank you.']]},
{type:'mc',q:'What does the receptionist ask for first?',o:['The patient’s address','The patient’s health card','Money'],a:1},
{type:'mc',q:'How long has the patient been sick?',o:['Three days','Five days','Forty-five minutes'],a:0},
{type:'mc',q:'“What brings you in today?” means…',o:['How did you get here?','Why are you here?','Who came with you?'],a:1},
{type:'fill',q:'Complete: “I’ve had a cough ___ a week.”',a:['for'],show:'for'},
{type:'mc',q:'You need more of your regular medicine. You ask the pharmacist for a…',o:['refill','side effect','walk-in'],a:0},
{type:'say',q:'Practise these.',lines:['I’d like to make an appointment.','I’ve had a headache for two days.','How often should I take this?','Is there an interpreter available?']}
]};

NEW.f2={title:'Emergencies and 911',
lede:'What to say when you call 911 — and when not to call.',
body:`
<div class="box rule"><b>Call 911 for emergencies only</b><p>Call <b>911</b> when someone’s life, health or property is in danger <b>right now</b>: a fire, a serious injury, someone not breathing, a crime happening, a serious car accident. The call is free from any phone, even a phone with no plan.</p></div>
<h3>What the operator will ask</h3>
<ol><li>[[911, what is your emergency?]] or [[Police, fire or ambulance?]]</li>
<li>[[What is the address of your emergency?]] — the most important answer. Know your address!</li>
<li>[[What happened?]]</li>
<li>[[Is the person breathing? Are they awake?]]</li>
<li>[[What’s your phone number?]]</li></ol>
<p>Stay on the line until the operator tells you to hang up. Speak slowly and answer the questions — help is already being sent while you talk.</p>
<h3>Useful phrases</h3>
<ul class="lines"><li>[[I need an ambulance.]]</li><li>[[There’s a fire in my building.]]</li><li>[[My husband fell and he’s not moving.]]</li><li>[[Someone broke into my house.]]</li><li>[[I need an interpreter. I speak Spanish.]]</li></ul>
<div class="box tip"><b>Interpreters</b><p>911 centres in Canada can connect an interpreter for many languages. Say the name of your language clearly in English: “<b>Arabic</b>,” “<b>Punjabi</b>,” “<b>Mandarin</b>.”</p></div>
<h3>Not an emergency?</h3>
<ul><li><b>Health questions:</b> call <b>811</b> in most provinces to speak with a nurse.</li>
<li><b>Police, not urgent</b> (a stolen bike, noise): call your local police <b>non-emergency number</b>.</li>
<li><b>Power outage:</b> call your electricity company.</li></ul>
<p>Write these numbers on your fridge.</p>`,
ex:[
{type:'dialogue',q:'A 911 call. Listen, then answer.',who:{A:'Operator',B:'Caller'},lines:[
 ['A','911, what is your emergency?'],
 ['B','I need an ambulance. My neighbour fell down the stairs.'],
 ['A','What is the address?'],
 ['B','It’s 42 Maple Street, apartment 3.'],
 ['A','Is she awake and breathing?'],
 ['B','Yes, she’s awake, but she can’t move her leg.'],
 ['A','Okay. An ambulance is on the way. Don’t move her. Stay on the line with me.']]},
{type:'mc',q:'What is the most important information to give 911?',o:['Your name','The address of the emergency','Your health card number'],a:1},
{type:'mc',q:'What does the operator tell the caller to do?',o:['Hang up and wait','Drive her to the hospital','Not move her and stay on the line'],a:2},
{type:'mc',q:'Your bike was stolen last night. What should you call?',o:['911','The police non-emergency number','811'],a:1},
{type:'mc',q:'You have a fever and want advice from a nurse. In most provinces, you can call…',o:['811','911','411'],a:0},
{type:'say',q:'Practise saying your own address clearly, then these phrases.',lines:['I need an ambulance.','The address is 42 Maple Street.','I need an interpreter.']}
]};

NEW.f3={title:'Renting a Home',
lede:'Words for apartments, leases and landlords — and how to ask for repairs.',
body:`
<h3>Key words</h3>
<div class="tw"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>[[landlord]] / [[property manager]]</td><td>The person or company you rent from</td></tr>
<tr><td>[[tenant]]</td><td>The person who rents (you)</td></tr>
<tr><td>[[lease]]</td><td>The rental contract</td></tr>
<tr><td>[[rent]]</td><td>The money you pay every month</td></tr>
<tr><td>[[deposit]]</td><td>Money paid at the start. The rules are different in each province.</td></tr>
<tr><td>[[utilities]]</td><td>Electricity (hydro), heat, water. Ask: [[Are utilities included?]]</td></tr>
<tr><td>[[superintendent]] (the super)</td><td>The person who looks after a building and does small repairs</td></tr>
<tr><td>[[maintenance request]]</td><td>A request for a repair</td></tr>
<tr><td>[[give notice]]</td><td>Tell the landlord in writing that you will move out</td></tr>
<tr><td>[[sublet]]</td><td>Rent your place to someone else (usually needs permission)</td></tr></table></div>
<h3>Questions to ask before you rent</h3>
<ul class="lines"><li>[[How much is the rent, and when is it due?]]</li><li>[[Are utilities included?]]</li><li>[[Is parking included?]]</li><li>[[Is there laundry in the building?]]</li><li>[[How long is the lease?]]</li><li>[[Are pets allowed?]]</li></ul>
<h3>Asking for repairs</h3>
<p>Be polite, clear and specific. Say what is wrong, since when, and ask when it can be fixed: [[Hi, this is Ana in unit 4. The heater in the bedroom stopped working yesterday. Could someone come and look at it this week?]]</p>
<div class="box tip"><b>Keep it in writing</b><p>For important things — repairs, notice, rent receipts — send an email or text too, so you have a record.</p></div>
<div class="box ca"><b>Your rights</b><p>Tenant rights, deposits, rent increases and eviction rules are set by each province. Every province has a landlord–tenant office or board that gives free information. A settlement worker or legal clinic can help you if you have a problem.</p></div>`,
ex:[
{type:'dialogue',q:'Calling the landlord. Listen, then answer.',who:{A:'Tenant',B:'Landlord'},lines:[
 ['A','Hi, it’s Ana from unit 4 on Pine Street.'],
 ['B','Oh, hi Ana. What can I do for you?'],
 ['A','The heater in the bedroom stopped working last night. It’s really cold.'],
 ['B','Sorry to hear that. I can send someone tomorrow morning. Is ten o’clock okay?'],
 ['A','Yes, that works. Thank you.'],
 ['B','No problem. I’ll text you when he’s on his way.']]},
{type:'mc',q:'What is the problem?',o:['The heater doesn’t work.','The rent is too high.','There’s no hot water.'],a:0},
{type:'mc',q:'When will someone come?',o:['Tonight','Tomorrow at 10','Next week'],a:1},
{type:'mc',q:'The person you rent your apartment from is your…',o:['tenant','landlord','neighbour'],a:1},
{type:'fill',q:'Electricity, heat and water are called ___.',a:['utilities'],show:'utilities'},
{type:'mc',q:'Most polite way to ask for a repair:',o:['Fix my sink now.','The sink is leaking since yesterday. Could someone come and look at it?','Why is my sink broken?'],a:1}
]};

NEW.f4={title:'Banking and Bills',
lede:'Bank accounts, cards, paying bills — and how to recognize common scams.',
body:`
<h3>At the bank</h3>
<div class="tw"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>[[chequing account]]</td><td>For everyday spending and bills</td></tr>
<tr><td>[[savings account]]</td><td>For saving money; usually earns interest</td></tr>
<tr><td>[[debit card]]</td><td>Takes money directly from your account</td></tr>
<tr><td>[[credit card]]</td><td>You borrow money and pay it back later — pay the full balance every month to avoid interest</td></tr>
<tr><td>[[PIN]]</td><td>Your secret 4-digit number. Never share it.</td></tr>
<tr><td>[[e-Transfer]]</td><td>Sending money by email or phone number (Interac e-Transfer)</td></tr>
<tr><td>[[statement]]</td><td>The list of your transactions each month</td></tr>
<tr><td>[[pre-authorized payment]]</td><td>A bill paid automatically from your account</td></tr>
<tr><td>[[due date]]</td><td>The last day to pay a bill</td></tr>
<tr><td>[[credit history]] / [[credit score]]</td><td>A record of how you pay back money. Important for renting, loans and phone plans.</td></tr></table></div>
<h3>Useful phrases</h3>
<ul class="lines"><li>[[I’d like to open a bank account.]]</li><li>[[What are the monthly fees?]]</li><li>[[Is there a newcomer account?]]</li><li>[[I don’t recognize this charge.]]</li><li>[[My card was declined.]]</li><li>[[I think my card was stolen. Can you block it?]]</li></ul>
<div class="box rule"><b>Common scams — hang up!</b><p>Real government offices and banks will <b>never</b>: threaten to arrest or deport you on the phone, ask you to pay with <b>gift cards</b>, prepaid cards or cryptocurrency, or ask for your PIN or password. If someone calls saying they are from the CRA, the police or immigration and demands money now, it is a scam. Hang up and call the official number yourself.</p></div>`,
ex:[
{type:'dialogue',q:'At the bank. Listen, then answer.',who:{A:'Bank employee',B:'Customer'},lines:[
 ['A','Good morning. How can I help you?'],
 ['B','Hi. I’d like to open a bank account. I just moved to Canada.'],
 ['A','Welcome! We have a newcomer package with no monthly fees for the first year. Do you have your passport and your PR card or permit?'],
 ['B','Yes, I have both.'],
 ['A','Great. Would you like a chequing account, a savings account, or both?'],
 ['B','Both, please. And can I get a credit card too?'],
 ['A','Yes, we have a starter card to help you build your credit history.']]},
{type:'mc',q:'Why does the customer want an account?',o:['She just moved to Canada.','She lost her card.','She wants a loan.'],a:0},
{type:'mc',q:'What is special about the newcomer package?',o:['No monthly fees for the first year','Free cash','A higher PIN'],a:0},
{type:'mc',q:'Someone calls: “This is the CRA. Pay $2,000 in gift cards today or you will be arrested.” This is…',o:['a normal tax call','a scam — hang up','a bank offer'],a:1},
{type:'mc',q:'To send money to a friend from your phone, you use…',o:['an e-Transfer','a statement','a PIN'],a:0},
{type:'fill',q:'The last day to pay a bill is the ___ date.',a:['due'],show:'due'}
]};

NEW.f5={title:'Getting Around: Transit and Driving',
lede:'Buses and trains, driver’s licences, and what to do if police stop your car.',
body:`
<h3>Public transit</h3>
<div class="tw"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>[[fare]]</td><td>The price of one trip</td></tr>
<tr><td>[[transit pass]] / [[transit card]]</td><td>A card or pass for many trips (each city has its own system)</td></tr>
<tr><td>[[transfer]]</td><td>Changing from one bus or train to another, often free within a time limit</td></tr>
<tr><td>[[stop request]]</td><td>Pull the cord or press the button to ask the bus to stop</td></tr>
<tr><td>[[route]] / [[schedule]]</td><td>The path of a bus / the times it comes</td></tr></table></div>
<ul class="lines"><li>[[Does this bus go to the hospital?]]</li><li>[[How much is the fare?]]</li><li>[[Could you tell me when we get to Main Street?]]</li><li>[[Where do I transfer to the subway?]]</li></ul>
<div class="box tip"><b>Bus manners</b><p>Canadians often say <b>“Thank you!”</b> to the driver when they get off. Give your seat to older people, pregnant women and people with disabilities.</p></div>
<h3>Driving</h3>
<p>Most provinces have <b>graduated licensing</b>: you start with a learner’s licence, then a probationary one, then a full licence (in Ontario: G1, G2, G). Some newcomers can exchange a licence from their home country — check with your province. You also need <b>car insurance</b> by law.</p>
<h3>If police stop your car</h3>
<ol><li>Signal and pull over safely to the right.</li>
<li>Stay in the car. Keep your hands where the officer can see them, for example on the steering wheel.</li>
<li>Wait for the officer to speak first. Be calm and polite.</li>
<li>When asked, give your <b>driver’s licence</b>, <b>registration</b> and <b>proof of insurance</b>.</li></ol>
<p>Useful phrases: [[Here’s my licence and registration.]] [[My insurance is in the glove box. Is it okay if I get it?]] [[Sorry, my English is limited. Could you speak slowly?]]</p>`,
ex:[
{type:'dialogue',q:'On the bus. Listen, then answer.',who:{A:'Passenger',B:'Driver'},lines:[
 ['A','Hi, does this bus go to the General Hospital?'],
 ['B','Yeah, but it’s about twenty minutes. Do you have a transit card?'],
 ['A','No, I have cash. How much is the fare?'],
 ['B','Three seventy-five. Exact change, please.'],
 ['A','Okay. Could you tell me when we get there?'],
 ['B','Sure, no problem. Have a seat.']]},
{type:'mc',q:'How much is the fare?',o:['$3.75','$7.35','$37.50'],a:0},
{type:'mc',q:'“Exact change” means…',o:['The driver gives you change.','Pay the exact amount — the driver has no change.','Pay with a card.'],a:1},
{type:'mc',q:'A police officer stops your car. What should you do first?',o:['Get out and walk to the police car','Stay in the car with your hands visible','Drive to the next street'],a:1},
{type:'fill',q:'Changing from one bus to another is a ___.',a:['transfer'],show:'transfer'},
{type:'say',q:'Practise these.',lines:['Does this bus go downtown?','Could you tell me when we get to Main Street?','Here’s my licence and registration.']}
]};

NEW.f6={title:'Your Children’s School',
lede:'Talking to teachers, reporting absences, and understanding school messages.',
body:`
<h3>School words</h3>
<div class="tw"><table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>[[kindergarten]] (JK, SK)</td><td>The first years of school, ages 4–5 in many provinces</td></tr>
<tr><td>[[elementary school]] / [[high school]]</td><td>Primary school / secondary school</td></tr>
<tr><td>[[report card]]</td><td>A report about your child’s progress, a few times a year</td></tr>
<tr><td>[[parent-teacher interview]]</td><td>A short meeting with your child’s teacher</td></tr>
<tr><td>[[attendance line]]</td><td>The phone number to call when your child is absent</td></tr>
<tr><td>[[permission slip]]</td><td>A form you sign so your child can go on a <b>field trip</b></td></tr>
<tr><td>[[PD day]]</td><td>Professional development day — teachers work, but there is no school for students</td></tr>
<tr><td>[[snow day]] / [[bus cancellation]]</td><td>School closed, or buses not running, because of weather</td></tr>
<tr><td>[[ESL]] / [[ELL]] support</td><td>English language help for students</td></tr></table></div>
<h3>Reporting an absence</h3>
<p>Call or message the school before classes start: [[Hi, this is Maria Lopez, Daniel’s mother. He’s in Grade 3, Mr. Chen’s class. He’s sick today and won’t be at school.]]</p>
<h3>At a parent-teacher interview</h3>
<ul class="lines"><li>[[How is my son doing in class?]]</li><li>[[Is she getting along with the other kids?]]</li><li>[[What can we do at home to help?]]</li><li>[[Is there extra help with English?]]</li><li>[[Can we use an interpreter for the meeting?]]</li></ul>
<div class="box ca"><b>School culture in Canada</b><p>Teachers expect parents to be involved: reading notes, signing forms, coming to interviews and asking questions. Asking a teacher a question is seen as caring — not as criticism.</p></div>`,
ex:[
{type:'dialogue',q:'A parent-teacher interview. Listen, then answer.',who:{A:'Teacher',B:'Parent'},lines:[
 ['A','Thanks for coming in. Amir is doing really well in math.'],
 ['B','Oh, that’s great to hear. How is his English?'],
 ['A','It’s improving fast. He’s a bit quiet in group work, though.'],
 ['B','What can we do at home to help?'],
 ['A','Reading together for fifteen minutes every night would really help. In any language!'],
 ['B','Okay, we can do that. Thank you so much.']]},
{type:'mc',q:'What is Amir good at?',o:['Math','Reading','Group work'],a:0},
{type:'mc',q:'What does the teacher suggest?',o:['Extra homework','Reading together every night','A tutor'],a:1},
{type:'mc',q:'Your child is sick and won’t go to school. You call the…',o:['attendance line','report card','permission slip'],a:0},
{type:'mc',q:'Tomorrow is a PD day. That means…',o:['There’s a party at school.','Students don’t have school.','Parents must visit the school.'],a:1},
{type:'fill',q:'To go on a field trip, your child needs a signed ___ slip.',a:['permission'],show:'permission'}
]};

NEW.f7={title:'Government Services and Forms',
lede:'Service Canada, taxes, benefits — and the words you’ll see on every form.',
body:`
<h3>Who does what</h3>
<div class="tw"><table><tr><th>Office</th><th>For</th></tr>
<tr><td>[[Service Canada]]</td><td>Social Insurance Number (SIN), Employment Insurance (EI), pensions, passports</td></tr>
<tr><td>[[CRA]] — Canada Revenue Agency</td><td>Taxes and many benefits</td></tr>
<tr><td>[[IRCC]] — Immigration, Refugees and Citizenship Canada</td><td>Permits, permanent residence, citizenship</td></tr>
<tr><td>Your province’s service office</td><td>Health card, driver’s licence, birth certificates</td></tr></table></div>
<div class="box rule"><b>File your taxes every year</b><p>Even if you earned little or no money, file a tax return every spring — the deadline for most people is <b>April 30</b>. Many benefits, like the <b>Canada Child Benefit</b> and the GST/HST credit, are only paid if you file. Free tax clinics help newcomers with simple returns.</p></div>
<h3>Form words</h3>
<div class="tw"><table><tr><th>On the form</th><th>Meaning</th></tr>
<tr><td>[[surname]] / [[last name]] / [[family name]]</td><td>Your family name</td></tr>
<tr><td>[[given name(s)]] / [[first name]]</td><td>Your personal name(s)</td></tr>
<tr><td>[[date of birth]] (DOB)</td><td>Often written YYYY-MM-DD in Canada: 1988-04-07</td></tr>
<tr><td>[[marital status]]</td><td>Single, married, common-law, separated, divorced, widowed</td></tr>
<tr><td>[[common-law]]</td><td>Living together as a couple for at least one year, without marriage</td></tr>
<tr><td>[[proof of address]]</td><td>A document with your name and address, like a bill or bank statement</td></tr>
<tr><td>[[signature]] / [[sign here]]</td><td>Write your name in your own handwriting</td></tr>
<tr><td>[[N/A]]</td><td>Not applicable — write this if a question doesn’t apply to you</td></tr>
<tr><td>[[BLOCK LETTERS]]</td><td>Write in CAPITAL LETTERS</td></tr></table></div>
<h3>Useful phrases</h3>
<ul class="lines"><li>[[I’m here to apply for a SIN.]]</li><li>[[What documents do I need to bring?]]</li><li>[[Can I do this online?]]</li><li>[[I don’t understand this question on the form. Could you help me?]]</li><li>[[How long will it take?]]</li></ul>`,
ex:[
{type:'dialogue',q:'At Service Canada. Listen, then answer.',who:{A:'Officer',B:'Client'},lines:[
 ['A','Next, please! Hi, what can I help you with today?'],
 ['B','Hi. I’d like to apply for a Social Insurance Number.'],
 ['A','Sure. Can I see your passport and your permanent resident confirmation?'],
 ['B','Here they are.'],
 ['A','Thanks. Is your address the same as on this document?'],
 ['B','No, we moved last week. Here’s my new address.'],
 ['A','Okay, I’ll update that. Your number will be ready in a few minutes.']]},
{type:'mc',q:'What does the client want?',o:['A passport','A Social Insurance Number','A driver’s licence'],a:1},
{type:'mc',q:'What changed?',o:['Her name','Her address','Her phone number'],a:1},
{type:'mc',q:'On a form, “surname” means…',o:['your first name','your family name','your nickname'],a:1},
{type:'mc',q:'A question on a form doesn’t apply to you. You write…',o:['N/A','OK','No'],a:0},
{type:'mc',q:'Why should you file a tax return even if you earned very little?',o:['It’s fun.','Many benefits are only paid if you file.','To get a passport.'],a:1}
]};

NEW.f8={title:'Texts and Short Emails',
lede:'The writing you really need: short, polite messages to a boss, a landlord or a teacher.',
body:`
<p>In Canada, many everyday tasks happen by text or email: telling your boss you’re late, asking your landlord for a repair, writing to your child’s teacher. A good message is <b>short, clear and polite</b>.</p>
<h3>The shape of a short message</h3>
<ol><li><b>Greeting:</b> “Hi Sarah,” (most situations) · “Hello Mr. Chen,” (more formal)</li>
<li><b>Why you’re writing</b> — in the first sentence.</li>
<li><b>Details:</b> what, when, where.</li>
<li><b>Request or next step:</b> “Could you…?” “Please let me know…”</li>
<li><b>Thanks and closing:</b> “Thanks,” / “Thank you,” + your name.</li></ol>
<h3>Examples</h3>
<div class="box tip"><b>Text to your supervisor</b><p>Hi Mike, it’s Ana. The bus is delayed, so I’ll be about 15 minutes late. Sorry about that — see you soon.</p></div>
<div class="box tip"><b>Calling in sick (text or email)</b><p>Hi Mike, I’m sick with a fever today, so I won’t be able to come in for my shift. I’ll let you know how I’m feeling tomorrow. Thanks, Ana</p></div>
<div class="box tip"><b>Email to a landlord</b><p>Subject: Repair needed – Unit 4<br>Hello Mr. Patel,<br>The kitchen sink in unit 4 has been leaking since Monday. Could someone come to fix it this week? I’m home after 5 p.m. every day.<br>Thank you,<br>Ana Silva</p></div>
<div class="box tip"><b>Email to a teacher</b><p>Subject: Daniel – absence on Friday<br>Hello Mr. Chen,<br>Daniel will be absent on Friday because he has a medical appointment. Could you please let me know what homework he will miss?<br>Thank you,<br>Maria Lopez</p></div>
<h3>Tone tips</h3>
<ul><li>Use <b>please</b>, <b>could you</b> and <b>thanks</b>. “Fix the sink.” sounds angry in writing.</li>
<li>Don’t write in ALL CAPITALS — it looks like shouting.</li>
<li>Add a clear <b>subject line</b> to emails.</li>
<li>With friends, short forms are fine: <i>thx</i>, <i>np</i> (no problem), <i>BRB</i> (be right back). At work, write full words. <i>ASAP</i> (as soon as possible), <i>FYI</i> (for your information) and <i>ETA</i> (expected time of arrival) are common at work too.</li></ul>`,
ex:[
{type:'mc',q:'Which text to a supervisor is best?',o:['I am late.','Hi Mike, the bus is delayed so I’ll be about 15 minutes late. Sorry!','WHERE ARE YOU? THE BUS IS LATE'],a:1},
{type:'mc',q:'Which email opening is best for your child’s teacher?',o:['Hey teacher!!','Hello Ms. Wong,','To whom it may concern'],a:1},
{type:'mc',q:'Which request sounds polite in writing?',o:['Fix the heater.','You need to fix the heater today.','Could someone come to fix the heater this week?'],a:2},
{type:'mc',q:'“FYI” means…',o:['For your information','Find your ID','For you in'],a:0},
{type:'reveal',q:'Rewrite this message so it is clear and polite: <code>heater broken. come today.</code>',a:'Example: “Hi Mr. Patel, this is Ana in unit 4. The bedroom heater stopped working last night. Could someone come to look at it today or tomorrow? Thank you, Ana”'},
{type:'reveal',q:'Write a text to your supervisor: you are sick and can’t come to work today.',a:'Example: “Hi Mike, I’m sick today and won’t be able to come in for my shift. I’ll update you tomorrow. Thanks, Ana”'}
]};

/* ---------- translations ---------- */
TR_UNITS.splice(10,0,{ar:'الصحة والطوارئ والسكن والبنوك والمواصلات والمدرسة والخدمات الحكومية.',zh:'看病、紧急情况、租房、银行、交通、孩子上学和政府服务。',fr:'Santé, urgences, logement, banque, transports, école des enfants et services gouvernementaux.',es:'Salud, emergencias, vivienda, banco, transporte, la escuela de los hijos y servicios del gobierno.',pa:'ਸਿਹਤ, ਐਮਰਜੈਂਸੀ, ਘਰ ਕਿਰਾਏ ’ਤੇ ਲੈਣਾ, ਬੈਂਕ, ਆਵਾਜਾਈ, ਬੱਚਿਆਂ ਦਾ ਸਕੂਲ ਅਤੇ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ।',tl:'Kalusugan, emergency, pag-upa ng bahay, bangko, transportasyon, paaralan ng anak, at serbisyo ng gobyerno.',ru:'Здоровье, экстренные ситуации, аренда жилья, банк, транспорт, школа детей и госуслуги.'});
Object.assign(TR.ar,{f1:'حجز موعد، ووصف الأعراض، وفهم الصيدلي.',f2:'ماذا تقول عند الاتصال بالرقم 911 — ومتى لا تتصل.',f3:'كلمات الشقق وعقود الإيجار والمالكين، وكيف تطلب الإصلاحات.',f4:'الحسابات المصرفية، والبطاقات، ودفع الفواتير، وكيف تتعرّف على الاحتيال.',f5:'الحافلات والقطارات، ورخصة القيادة، وماذا تفعل إذا أوقفتك الشرطة.',f6:'التحدث مع المعلمين، والإبلاغ عن الغياب، وفهم رسائل المدرسة.',f7:'Service Canada، والضرائب، والإعانات، وكلمات الاستمارات.',f8:'رسائل قصيرة ومهذبة إلى المدير أو المالك أو المعلم.'});
Object.assign(TR.zh,{f1:'预约看病、描述症状、听懂药剂师的话。',f2:'拨打 911 时怎么说——以及什么时候不该打。',f3:'租房相关词汇：公寓、租约、房东，以及如何要求维修。',f4:'银行账户、银行卡、缴费，以及如何识别常见骗局。',f5:'公交和火车、驾照，以及被警察拦车时该怎么做。',f6:'和老师沟通、请假、看懂学校的通知。',f7:'Service Canada、报税、福利，以及表格上的常用词。',f8:'写给老板、房东或老师的简短礼貌信息。'});
Object.assign(TR.fr,{f1:'Prendre rendez-vous, décrire vos symptômes et comprendre le pharmacien.',f2:'Quoi dire quand vous appelez le 911 — et quand ne pas appeler.',f3:'Le vocabulaire du logement, du bail et du propriétaire, et comment demander une réparation.',f4:'Comptes bancaires, cartes, factures — et comment reconnaître les arnaques.',f5:'Autobus et trains, permis de conduire, et que faire si la police vous arrête.',f6:'Parler aux enseignants, signaler une absence, comprendre les messages de l’école.',f7:'Service Canada, impôts, prestations — et les mots des formulaires.',f8:'Des messages courts et polis à un patron, un propriétaire ou un enseignant.'});
Object.assign(TR.es,{f1:'Pedir una cita, describir tus síntomas y entender al farmacéutico.',f2:'Qué decir cuando llamas al 911 — y cuándo no llamar.',f3:'Palabras sobre apartamentos, contratos y caseros, y cómo pedir reparaciones.',f4:'Cuentas bancarias, tarjetas, facturas — y cómo reconocer estafas.',f5:'Autobuses y trenes, licencia de conducir y qué hacer si la policía te detiene.',f6:'Hablar con los maestros, avisar ausencias y entender los mensajes de la escuela.',f7:'Service Canada, impuestos, beneficios — y las palabras de los formularios.',f8:'Mensajes cortos y amables para tu jefe, tu casero o un maestro.'});
Object.assign(TR.pa,{f1:'ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰਨਾ, ਲੱਛਣ ਦੱਸਣੇ ਅਤੇ ਫਾਰਮਾਸਿਸਟ ਦੀ ਗੱਲ ਸਮਝਣੀ।',f2:'911 ’ਤੇ ਫ਼ੋਨ ਕਰਕੇ ਕੀ ਕਹਿਣਾ ਹੈ — ਅਤੇ ਕਦੋਂ ਨਹੀਂ ਕਰਨਾ।',f3:'ਕਿਰਾਏ, ਲੀਜ਼ ਅਤੇ ਮਕਾਨ-ਮਾਲਕ ਨਾਲ ਜੁੜੇ ਸ਼ਬਦ, ਅਤੇ ਮੁਰੰਮਤ ਕਿਵੇਂ ਮੰਗਣੀ ਹੈ।',f4:'ਬੈਂਕ ਖਾਤੇ, ਕਾਰਡ, ਬਿੱਲ — ਅਤੇ ਧੋਖਾਧੜੀ ਕਿਵੇਂ ਪਛਾਣਨੀ ਹੈ।',f5:'ਬੱਸਾਂ ਅਤੇ ਰੇਲਾਂ, ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ, ਅਤੇ ਪੁਲਿਸ ਰੋਕੇ ਤਾਂ ਕੀ ਕਰਨਾ ਹੈ।',f6:'ਅਧਿਆਪਕਾਂ ਨਾਲ ਗੱਲ ਕਰਨਾ, ਗੈਰਹਾਜ਼ਰੀ ਦੱਸਣੀ ਅਤੇ ਸਕੂਲ ਦੇ ਸੁਨੇਹੇ ਸਮਝਣੇ।',f7:'Service Canada, ਟੈਕਸ, ਲਾਭ — ਅਤੇ ਫ਼ਾਰਮਾਂ ਦੇ ਸ਼ਬਦ।',f8:'ਬੌਸ, ਮਕਾਨ-ਮਾਲਕ ਜਾਂ ਅਧਿਆਪਕ ਨੂੰ ਛੋਟੇ, ਨਿਮਰ ਸੁਨੇਹੇ।'});
Object.assign(TR.tl,{f1:'Mag-book ng appointment, ilarawan ang sintomas, at intindihin ang pharmacist.',f2:'Ano ang sasabihin kapag tumawag sa 911 — at kailan hindi dapat tumawag.',f3:'Mga salita tungkol sa apartment, lease at landlord, at paano humingi ng repair.',f4:'Bank account, card, pagbabayad ng bills — at paano makilala ang scam.',f5:'Bus at tren, driver’s licence, at ano ang gagawin kapag pinara ka ng pulis.',f6:'Pakikipag-usap sa guro, pag-report ng absent, at pag-intindi sa mensahe ng paaralan.',f7:'Service Canada, buwis, benepisyo — at mga salita sa mga form.',f8:'Maiikli at magagalang na mensahe sa boss, landlord, o guro.'});
Object.assign(TR.ru,{f1:'Записаться к врачу, описать симптомы и понять фармацевта.',f2:'Что говорить, позвонив в 911, — и когда звонить не нужно.',f3:'Слова про квартиры, договор аренды и арендодателя; как попросить о ремонте.',f4:'Банковские счета, карты, оплата счетов — и как распознать мошенников.',f5:'Автобусы и поезда, водительские права и что делать, если вас остановила полиция.',f6:'Разговор с учителем, сообщение о пропуске и школьные уведомления.',f7:'Service Canada, налоги, пособия — и слова из анкет.',f8:'Короткие вежливые сообщения начальнику, арендодателю или учителю.'});

/* ---------- teacher notes ---------- */
Object.assign(TEACH,{
 f1:T('Learners can book appointments, describe symptoms with present perfect + for, and ask a pharmacist questions.','Ask: “Where do you go in Canada when you feel sick?” List answers (family doctor, walk-in, ER, pharmacy, 811).','Role-play: receptionist and patient at a walk-in clinic, then pharmacist and customer. Swap roles.','Be sensitive: some learners have had difficult experiences with health care. Keep examples general.'),
 f2:T('Learners can make a clear 911 call, giving the address first, and know non-emergency alternatives.','Ask learners to say their full address out loud. Practise until it is fluent.','Simulated 911 calls with prompt cards (fire, fall, break-in). The “operator” asks the standard questions.','Stress that interpreters are available. Never practise by actually dialling 911.'),
 f3:T('Learners understand rental vocabulary and can make a polite repair request by phone and in writing.','Ask: “What questions would you ask before renting an apartment?”','Pairs: tenant calls landlord about a problem (heater, leak, pests); then writes the follow-up text.','Rental law varies by province; direct legal questions to the provincial landlord–tenant office or a legal clinic.'),
 f4:T('Learners know basic banking vocabulary and can recognize common phone scams.','Ask: “What is the difference between a debit card and a credit card?”','Scam or real? Read short call/text scripts aloud; learners decide and explain why.','Many newcomers are targeted by CRA and immigration scams. Spend time on the warning box.'),
 f5:T('Learners can use transit phrases and know what to do and say in a traffic stop.','Ask how learners get to class. Elicit fare, pass, transfer.','Role-play bus questions; then walk through the four traffic-stop steps with one learner as officer.','Explain local transit card names and your province’s licensing system.'),
 f6:T('Learners can report an absence and take part in a parent-teacher interview.','Ask parents in the class what school messages they find confusing.','Role-play: attendance-line message, then a parent-teacher interview using the question list.','Encourage learners to ask for an interpreter — schools often provide one.'),
 f7:T('Learners know which government office does what, understand common form vocabulary and the importance of filing taxes.','Show a sample form (blank). Learners find surname, DOB and signature fields.','Learners fill in a practice form with fictional information, then role-play a Service Canada visit.','Use fictional data only — learners should never write real SINs or ID numbers in class materials.'),
 f8:T('Learners write short, polite texts and emails with a clear purpose.','Show a rude one-line message (“Fix the sink.”). Ask how the reader will feel.','Learners write three messages (late for work, repair request, absence note), swap with a partner and give feedback on tone.','This is the only writing lesson in the course — focus on purpose, politeness and brevity, not grammar perfection.')
});
