import { useTranslation } from 'react-i18next';
import LangToggle from '../../components/LangToggle';

const timeline = [
  { year: '1938', en: 'Born on 31 January', hi: '31 जनवरी को जन्म' },
  { year: '1964', en: 'BA Hindi — Deoghar College', hi: 'देवघर कॉलेज से BA हिंदी' },
  { year: '1965', en: '1st Posting — Madhya Vidyalaya, Bhanra', hi: 'पहली नियुक्ति — माध्यमिक विद्यालय, भानरा' },
  { year: '1970', en: '2nd Posting — Narayanpur', hi: 'दूसरी नियुक्ति — नारायणपुर' },
  { year: '1975', en: '3rd Posting — Khaira', hi: 'तीसरी नियुक्ति — खैरा' },
  { year: '1970–80', en: 'Chairman — Gram Vikas Samiti', hi: 'ग्राम विकास समिति — अध्यक्ष' },
  { year: '1980s', en: 'Director — Hindi Natya Kala Parishad', hi: 'हिंदी नाट्य कला परिषद — निदेशक' },
  { year: '1985', en: 'Donated idol — Maa Parvati Mandir', hi: 'माँ पार्वती मंदिर — प्रतिमा दान' },
  { year: '1990', en: 'Temple builder — Maa Parvati Mandir', hi: 'माँ पार्वती मंदिर निर्माण' },
  { year: '1992', en: 'Co-founder & Secretary — Rajnath Singh Sanskrit Madhya Vidyalaya', hi: 'राजनाथ सिंह संस्कृत मध्य विद्यालय — सह-संस्थापक व सचिव' },
  { year: '1998', en: 'Retired as Headmaster after 33 years of service', hi: '33 वर्षों की सेवा के बाद प्रधानाध्यापक से सेवानिवृत्त' },
  { year: '2020', en: 'Jain Babu Haat founded in his honour by Shailendra Narayan Singh', hi: 'शैलेन्द्र नारायण सिंह द्वारा उनके सम्मान में जैन बाबू हाट की स्थापना' },
];

const hindiContent = [
  {
    heading: 'प्रारंभिक जीवन और शिक्षा',
    body: `श्री जय नारायण सिंह जी का जन्म 31 जनवरी 1938 को बिहार के बांका जिले के हिन्दनगर हिजरार गाँव में हुआ। बचपन से ही उनमें अनुशासन, ईमानदारी और समाज सेवा के प्रति गहरी रुचि थी। उनका पालन-पोषण एक साधारण परंतु संस्कारी परिवार में हुआ, जहाँ शिक्षा और नैतिकता को सर्वोच्च प्राथमिकता दी जाती थी।

उन्होंने अपनी प्रारंभिक शिक्षा स्थानीय विद्यालयों में प्राप्त की और आगे की पढ़ाई के लिए देवघर गए। वर्ष 1964 में उन्होंने देवघर कॉलेज से हिंदी विषय में स्नातक (BA) की उपाधि प्राप्त की। यह उस समय ग्रामीण बिहार के लिए एक उल्लेखनीय उपलब्धि थी। उनकी माँ और पिता ने हमेशा उन्हें पढ़ाई में प्रोत्साहित किया और यही कारण था कि वे शिक्षा के क्षेत्र में अपना जीवन समर्पित करने का निर्णय ले सके।`
  },
  {
    heading: 'शिक्षण जीवन — एक समर्पित अध्यापक',
    body: `स्नातक के तुरंत बाद, वर्ष 1965 में श्री जय नारायण सिंह जी को उनकी पहली नियुक्ति माध्यमिक विद्यालय भानरा में मिली। यहाँ से शुरू हुई उनकी शिक्षण यात्रा 33 वर्षों तक अनवरत चलती रही। उन्होंने नारायणपुर और खैरा में भी अपनी सेवाएं दीं।

एक शिक्षक के रूप में वे अत्यंत लोकप्रिय थे। उनका मानना था कि शिक्षा केवल पुस्तकों तक सीमित नहीं होनी चाहिए — एक अच्छे शिक्षक की जिम्मेदारी है कि वह बच्चों में नैतिकता, अनुशासन और समाज के प्रति संवेदनशीलता का भाव जागृत करे।

छात्र उन्हें "मास्टर जी" के नाम से बुलाते थे और उनके अनुशासन एवं स्नेह का संयोजन हर विद्यालय में चर्चा का विषय रहा। वर्ष 1998 में प्रधानाध्यापक के पद से सेवानिवृत्ति के समय उन्हें सैकड़ों पूर्व छात्रों और सहकर्मियों ने विदाई दी — यह उनकी लोकप्रियता और समर्पण का प्रमाण था।`
  },
  {
    heading: 'व्यक्तित्व और जीवन दर्शन',
    body: `श्री जय नारायण सिंह जी का व्यक्तित्व अत्यंत बहुआयामी है। वे एक ऐसे व्यक्ति हैं जिन्होंने 40 से अधिक वर्षों तक नियमित रूप से योग का अभ्यास किया है। प्रतिदिन प्रातःकाल उनकी योग साधना उनके जीवन का अभिन्न अंग रही है। यह अनुशासन उनके पूरे जीवन में दिखता है — चाहे वह समय पर विद्यालय पहुँचना हो, या समाज के कार्यों में पूरी निष्ठा के साथ भाग लेना।

वे सिद्धांतों के पक्के व्यक्ति हैं। उनके जीवन में एक भी ऐसा उदाहरण नहीं मिलता जब उन्होंने अपने मूल्यों से समझौता किया हो। चाहे बात व्यक्तिगत जीवन की हो या सार्वजनिक — वे हमेशा ईमानदारी और निष्पक्षता का पालन करते हैं।

उनकी पत्नी श्रीमती निर्मला सिंह जी उनकी जीवनसाथी के रूप में हर कदम पर उनके साथ रही हैं। उनके तीन पुत्र हैं — अमरेन्द्र नारायण सिंह, शैलेन्द्र नारायण सिंह और बिरेन्द्र नारायण सिंह — जो उनके आदर्शों को आगे बढ़ा रहे हैं।`
  },
  {
  heading: 'जीवन संगिनी — उनकी छाया, शक्ति और प्रेरणा का आधार',
  body: `श्रीमती निर्मला सिंह जी श्री जय नारायण सिंह जी की जीवन संगिनी होने के साथ-साथ उनके जीवन की वह अटूट शक्ति हैं, जो हर परिस्थिति में उनके साथ छाया की तरह खड़ी रहीं। पिछले 60 से अधिक वर्षों से उन्होंने उनके जीवन के हर उतार-चढ़ाव में उनका साथ निभाया है। उनका यह साथ केवल एक जिम्मेदारी नहीं, बल्कि सच्चे प्रेम, समर्पण और विश्वास का प्रतीक है।

उन्होंने अपने जीवन को परिवार की देखभाल और उसके सुख-समृद्धि के लिए समर्पित कर दिया। हर कठिन परिस्थिति में उन्होंने धैर्य और साहस के साथ परिवार को संभाला और हर खुशी के पल को पूरे दिल से जिया। उनका जीवन त्याग, निष्ठा और समर्पण का एक सजीव उदाहरण है।

उनका स्वभाव अत्यंत मिलनसार, खुला और प्रभावशाली है, जिसके कारण वे समाज में अत्यंत प्रिय हैं। उनकी सादगी, अपनापन और आत्मीयता उन्हें हर व्यक्ति के दिल के करीब लाती है और वे गांव तथा समाज के मूल्यों का सच्चा प्रतिनिधित्व करती हैं।

वे हर दृष्टि से एक आदर्श पत्नी और महिला का उदाहरण प्रस्तुत करती हैं। उनका जीवन यह सिखाता है कि प्रेम, धैर्य और शक्ति के साथ एक परिवार को किस प्रकार सहेजा और संजोया जा सकता है। आज भी वे अपनी सकारात्मकता और स्नेह से पूरे परिवार को एकजुट रखती हैं।`
},
{
  heading: 'परिवार — प्रेम, संस्कार और एकता का आधार',
  body: `श्री जय नारायण सिंह जी का परिवार उनके जीवन मूल्यों, अनुशासन और संस्कारों का सजीव प्रतिबिंब है। उन्होंने अपने जीवन से जो आदर्श स्थापित किए, वही आज उनके परिवार की नींव बने हुए हैं। परिवार का प्रत्येक सदस्य उनके विचारों और शिक्षाओं से गहराई से प्रभावित है और उनसे निरंतर प्रेरणा प्राप्त करता है।

उनके तीनों पुत्र — अमरेन्द्र नारायण सिंह जी, शैलेन्द्र नारायण सिंह जी और बिरेन्द्र नारायण सिंह जी — ने अपने पिता से अनुशासन, जिम्मेदारी और जीवन के मूल्यों को सीखा है। वे न केवल उनके आदर्शों पर चलते हैं, बल्कि अपने जीवन में भी उन्हें आगे बढ़ाने का प्रयास करते हैं। उनके व्यक्तित्व में उनके पिता के संस्कार स्पष्ट रूप से दिखाई देते हैं।

श्रीमती निर्मला सिंह जी ने अपने स्नेह, धैर्य और समर्पण से पूरे परिवार को एकजुट बनाए रखा है। उनके सहयोग और संस्कारों ने परिवार को मजबूत आधार प्रदान किया है, जिससे यह परिवार आज भी प्रेम और एकता के साथ आगे बढ़ रहा है।

परिवार की बहुएं — श्रीमती रूबी सिंह, श्रीमती संजू सिंह और श्रीमती रूपा सिंह — ने भी परिवार के मूल्यों को अपनाते हुए बड़ों का सम्मान और संबंधों को निभाने की परंपरा को आगे बढ़ाया है। उनके व्यवहार में सादगी, अपनापन और सम्मान स्पष्ट रूप से दिखाई देता है।

पोते-पोतियों — ऋषु आनंद, रवि, रितिक, सिमरन (छोटी) और पिहू — का अपने दादा जी से विशेष लगाव है। उन्होंने उनसे अनुशासन, प्रेम और जीवन के महत्वपूर्ण मूल्यों को सीखा है। उनके स्नेह और मार्गदर्शन से वे निरंतर आगे बढ़ रहे हैं।

यह परिवार आज भी उनके मार्गदर्शन, प्रेम और प्रेरणा के साथ एकजुट होकर आगे बढ़ रहा है और उनके आदर्शों को आगे ले जाने का कार्य कर रहा है।`
},
  {
    heading: 'सामुदायिक सेवा और योगदान',
    body: `शिक्षण के साथ-साथ श्री जय नारायण सिंह जी  जी ने समाज सेवा को भी अपने जीवन का महत्वपूर्ण हिस्सा बनाया। वर्ष 1970 से 1980 तक वे ग्राम विकास समिति के अध्यक्ष रहे। इस पद पर रहते हुए उन्होंने गाँव के विकास के लिए अनेक महत्वपूर्ण कार्य किए — सड़क निर्माण, जल व्यवस्था और शिक्षा के प्रसार में उनका अमूल्य योगदान रहा।

हिंदी नाट्य कला परिषद के निदेशक के रूप में उन्होंने ग्रामीण क्षेत्रों में सांस्कृतिक चेतना जागृत करने का प्रयास किया। उनका मानना था कि कला और संस्कृति समाज की रीढ़ है।

माँ पार्वती मंदिर के निर्माण में उनका योगदान अविस्मरणीय है। उन्होंने न केवल मंदिर के लिए प्रतिमा दान की, बल्कि मंदिर निर्माण में भी सक्रिय भूमिका निभाई। राजनाथ सिंह संस्कृत मध्य विद्यालय के सह-संस्थापक और सचिव के रूप में उन्होंने संस्कृत शिक्षा के प्रसार में महत्वपूर्ण भूमिका अदा की।`
  },
  {
    heading: 'जैन बाबू हाट — उनकी विरासत का जीवंत प्रतीक',
    body: `जैन बाबू हाट की स्थापना उनके मंझले पुत्र श्री शैलेन्द्र नारायण सिंह जी ने वर्ष 2020 में की। यह हाट केवल एक व्यापारिक केंद्र नहीं है — यह श्री जय नारायण सिंह जी  के उन सपनों का प्रतिबिंब है जो उन्होंने अपने गाँव और समाज के विकास के लिए देखे थे।

यह हाट हर मंगलवार और शनिवार को लगता है, जहाँ दूर-दूर से विक्रेता अपना सामान लेकर आते हैं। सब्ज़ियाँ, मछली, कपड़े, मसाले, और अनेक प्रकार की दैनिक आवश्यकताओं की वस्तुएं यहाँ उपलब्ध होती हैं। रवि कॉम्प्लेक्स में तीन स्थायी दुकानें — किराना, मोबाइल और मिठाई — रोज़ाना खुलती हैं।

श्री जय नारायण सिंह जी के नाम पर इस बाजार का नामकरण उनके जीवनकाल में किया गया है — यह एक अत्यंत सम्मानजनक और भावपूर्ण निर्णय है। यह न केवल उनके कार्यों की स्वीकृति है, बल्कि यह संदेश भी देता है कि समाज अपने निःस्वार्थ सेवकों को नहीं भूलता।`
  },
];

const englishContent = [
  {
    heading: 'Early Life and Education',
    body: `Shri Jay Narayan Singh was born on January 31, 1938, in the village of Hindnagar Hijrar in Banka district, Bihar. From a young age, he exhibited a deep sense of discipline, honesty, and commitment to serving society. He grew up in a simple yet values-driven family where education and ethics were always the highest priority.

He completed his early schooling at local institutions before pursuing higher education in Deoghar. In the year 1964, he earned his Bachelor of Arts degree in Hindi from Deoghar College — a remarkable achievement for a young man from rural Bihar at that time. Encouraged by his parents, he made the decision to dedicate his life to the field of education, a path that would define his legacy for generations.`
  },
  {
    heading: 'A Life Dedicated to Teaching',
    body: `Immediately after completing his graduation, Shri Jay Narayan Singh received his first posting in 1965 at Madhya Vidyalaya, Bhanra. This marked the beginning of a teaching journey that would span 33 remarkable years. He subsequently served at Narayanpur and Khaira before retiring in 1998 as Headmaster.

As a teacher, he was deeply beloved. He believed that education should never be confined to textbooks alone — that a true teacher's responsibility is to cultivate values, discipline, and social sensitivity in young minds. His students affectionately called him "Master Ji," and his unique combination of strict discipline and warm-hearted care was spoken about at every school he served.

When he retired as Headmaster in 1998, hundreds of former students and colleagues gathered to bid him farewell — a profound testament to his popularity and unwavering dedication over three decades of service.`
  },
  {
    heading: 'Personality and Philosophy of Life',
    body: `Shri Jay Narayan Singh possesses a truly multifaceted personality. For over 40 years, he has practiced yoga every single morning without fail. This discipline is visible in every aspect of his life — from arriving at school precisely on time to participating in community affairs with complete sincerity and devotion.

He is a man of absolute principles. There is not a single instance in his life where he compromised on his core values. Whether in personal life or public service, he has always adhered to honesty and impartiality. He is known throughout Banka for his punctuality, selflessness, and his unshakeable commitment to truth.

His wife, Smt. Nirmala Singh Ji, has been his devoted life companion through every step of this journey. Together, they raised three sons — Amrendra Narayan Singh, Shailendra Narayan Singh, and Birendra Narayan Singh — each of whom continues to carry forward his ideals in their own lives.`
  },
  {
  heading: 'A Life Partner — A Silent Strength Behind the Legacy',
  body: `Smt. Nirmala Singh Ji, as the life partner of Shri Jay Narayan Singh Ji, has been an unwavering strength in his life, standing beside him like a shadow in every situation. For more than 60 years, she has supported him through every phase of life. Her companionship is not merely a responsibility, but a true reflection of love, dedication, and trust.

She has devoted her life to the care and well-being of her family, nurturing it with patience and strength. In every challenging situation, she handled responsibilities with courage and embraced moments of happiness wholeheartedly. Her life stands as a living example of sacrifice, commitment, and devotion.

Her nature is warm, extroverted, and impactful, which makes her deeply loved and respected in society. Her simplicity, kindness, and sense of belonging connect her easily with people, and she truly represents the values of village life and social harmony.

She stands as an ideal example of a devoted wife and a strong woman. Her life teaches how love, patience, and inner strength can nurture and sustain a family. Even today, she continues to keep the family united with her positivity, care, and affection.`
},
{
  heading: 'Family — A Legacy of Love, Values, and Togetherness',
  body: `The family of Shri Jay Narayan Singh Ji stands as a true reflection of his values, discipline, and teachings. The ideals he established in his life form the very foundation of the family today. Every member of the family is deeply influenced by his thoughts and continues to draw inspiration from him.

His three sons — Amrendra Narayan Singh Ji, Shailendra Narayan Singh Ji, and Birendra Narayan Singh Ji — have learned discipline, responsibility, and strong moral values from their father. They not only follow his principles but also strive to carry them forward in their own lives. His influence is clearly visible in their personalities.

Smt. Nirmala Singh Ji has kept the entire family united with her love, patience, and dedication. Her nurturing presence has provided a strong foundation, allowing the family to grow together with harmony and mutual respect.

The daughters-in-law — Smt. Ruby Singh, Smt. Sanju Singh, and Smt. Rupa Singh — have embraced the family’s values and traditions. Through their simplicity, respect, and warmth, they contribute to maintaining strong family bonds.

The grandchildren — Rishu Anand, Ravi, Ritik, Simran (Chotti), and Pihu — share a special bond with their grandfather. They have learned discipline, love, and important life values from him, and continue to grow under his guidance.

Even today, the entire family moves forward together, guided by his wisdom, strengthened by his love, and inspired by his legacy.`
},
  {
    heading: 'Community Service and Contributions',
    body: `Alongside his teaching career, Shri Jay Narayan Singh made community service an integral part of his life. From 1970 to 1980, he served as Chairman of the Gram Vikas Samiti, during which period he spearheaded numerous development initiatives for the village — including road construction, water management, and expansion of educational access in the region.

As Director of the Hindi Natya Kala Parishad, he worked tirelessly to awaken cultural consciousness in rural communities, believing firmly that art and culture are the backbone of a thriving society.

His contribution to the construction of Maa Parvati Mandir is unforgettable. He not only donated the idol for the temple but also played an active role in overseeing its construction. As co-founder and secretary of Rajnath Singh Sanskrit Madhya Vidyalaya, he played a pivotal role in preserving and promoting Sanskrit education in the region.`
  },
  {
    heading: 'Jain Babu Haat — A Living Symbol of His Legacy',
    body: `Jain Babu Haat was established in 2020 by his middle son, Shri Shailendra Narayan Singh. This market is not merely a commercial center — it is a living reflection of the dreams that Shri Jay Narayan Singh held for his village and his community throughout his lifetime.

The haat operates every Tuesday and Saturday, where vendors travel from surrounding villages to sell fresh vegetables, fish, meat, clothes, spices, and daily essentials. At Ravi Complex, three permanent shops — a general store, a mobile shop, and a sweets shop — operate daily, year-round.

The naming of this market after Shri Jay Narayan Singh during his own lifetime is an act of profound respect and gratitude. It is not only an acknowledgment of his lifelong contributions but also a message to the world — that society does not forget those who serve without expecting anything in return.

Jain Babu Haat stands today as a testament to his ideals: where service, community, and development walk forward together.`
  },
];

const familyData = [
  {
    name: 'Amrendra Narayan Singh', hi: 'अमरेन्द्र नारायण सिंह',
    role: 'Elder Son · बड़े पुत्र', wife: 'Ruby Singh', wifeHi: 'रूबी सिंह',
    children: [{ name: 'Rishu Anand', hi: 'ऋषु आनंद' }]
  },
  {
    name: 'Shailendra Narayan Singh', hi: 'शैलेन्द्र नारायण सिंह',
    role: 'Middle Son · मंझले पुत्र', wife: 'Sanju Singh', wifeHi: 'संजू सिंह',
    highlight: true,
    children: [
      { name: 'Ansh Anand (Ravi)', hi: 'अंश आनंद (रवि)' },
      { name: 'Manya (Simran)', hi: 'मान्या (सिमरन)' }
    ]
  },
  {
    name: 'Birendra Narayan Singh', hi: 'बिरेन्द्र नारायण सिंह',
    role: 'Younger Son · छोटे पुत्र', wife: 'Rupa Singh', wifeHi: 'रूपा सिंह',
    children: [
      { name: 'Tanishq Aryan (Ritik)', hi: 'तनिष्क आर्यन (रितिक)' },
      { name: 'Sparsh (Pihu)', hi: 'स्पर्श (पिहु)' }
    ]
  },
];

export default function About() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* Header */}
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="gold-bar" />
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#fff' }}>About &amp; Legacy</h1>
            <p style={{ fontSize: 12, color: '#e8b85c', marginTop: 3 }}>परिचय और विरासत</p>
          </div>
          <LangToggle dark />
        </div>
      </div>

      {/* Photo strip */}
      <div style={{ display: 'flex', gap: 8, padding: '12px 12px 0', overflowX: 'auto' }}>
        {[
          { src: '/images/jay-blue.png', label: 'Jay Narayan Singh Ji' },
          { src: '/images/jay-couch.png', label: 'Jay Narayan Ji' },
          { src: '/images/jay-wife.png', label: 'With Nirmala Singh Ji' },
        ].map((p, i) => (
          <div key={i} style={{ flexShrink: 0 }}>
            <img src={p.src} alt={p.label} style={{ width: 100, height: 125, objectFit: 'cover', objectPosition: 'center top', borderRadius: 10, border: '2px solid rgba(201,151,58,0.3)', display: 'block' }} />
            <p style={{ fontSize: 9, color: 'var(--text-light)', marginTop: 4, textAlign: 'center', maxWidth: 100 }}>{p.label}</p>
          </div>
        ))}
      </div>

      {/* Intro card */}
      <div className="sec-card">
        <div style={{ padding: '16px 18px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: '#0f2a4a', marginBottom: 8 }}>Jay Narayan Singh Ji · जय नारायण सिंह जी</h2>
          <p style={{ fontSize: 11, color: '#6a6a6a', marginBottom: 10 }}>Born · जन्म: 31 January 1938 · BA Hindi, Deoghar College 1964</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {['अनुशासित · Disciplined','समयपालक · Punctual','40+ वर्ष योग · Yoga','सिद्धांतों के पक्के','निःस्वार्थ सेवा · Selfless'].map(t => (
              <span key={t} className="tag tag-navy">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hindi content */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">हिंदी · जीवन परिचय</div>
            <div className="sec-head-sub">Life story in Hindi</div>
          </div>
        </div>
        <div style={{ padding: '16px 18px' }}>
          {hindiContent.map((section, i) => (
            <div key={i} style={{ marginBottom: i < hindiContent.length - 1 ? 22 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 3, height: 18, background: '#c9973a', borderRadius: 2, flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 700, color: '#0f2a4a' }}>{section.heading}</h3>
              </div>
              {section.body.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: 12, color: '#3a3a3a', lineHeight: 2, marginBottom: 10 }}>{para}</p>
              ))}
              {i < hindiContent.length - 1 && <div style={{ height: '0.5px', background: 'rgba(201,151,58,0.2)', margin: '16px 0 0' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* English content */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">English · Life Story</div>
            <div className="sec-head-sub">जीवनी अंग्रेज़ी में</div>
          </div>
        </div>
        <div style={{ padding: '16px 18px' }}>
          {englishContent.map((section, i) => (
            <div key={i} style={{ marginBottom: i < englishContent.length - 1 ? 22 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 3, height: 18, background: '#c9973a', borderRadius: 2, flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 700, color: '#0f2a4a', fontStyle: 'italic' }}>{section.heading}</h3>
              </div>
              {section.body.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: 12, color: '#3a3a3a', lineHeight: 2, marginBottom: 10, fontFamily: 'Georgia, serif' }}>{para}</p>
              ))}
              {i < englishContent.length - 1 && <div style={{ height: '0.5px', background: 'rgba(201,151,58,0.2)', margin: '16px 0 0' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">जीवन यात्रा · Life Timeline</div>
            <div className="sec-head-sub">Key milestones · प्रमुख पड़ाव</div>
          </div>
        </div>
        <div style={{ padding: '16px 18px' }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < timeline.length - 1 ? 10 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#c9973a', flexShrink: 0 }} />
                {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(201,151,58,0.25)', minHeight: 20, marginTop: 4 }} />}
              </div>
              <div style={{ background: 'var(--cream)', borderRadius: 10, padding: '8px 12px', flex: 1, marginBottom: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#c9973a', marginBottom: 2 }}>{item.year}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#0f2a4a' }}>{item.en}</div>
                <div style={{ fontSize: 11, color: '#6a6a6a', marginTop: 2 }}>{item.hi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community roles */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">सामुदायिक भूमिकाएँ · Community Roles</div>
          </div>
        </div>
        <div style={{ padding: '16px 18px' }}>
          {[
            { en: 'Chairman — Gram Vikas Samiti', hi: 'ग्राम विकास समिति — अध्यक्ष', period: '1970–1980' },
            { en: 'Director — Hindi Natya Kala Parishad', hi: 'हिंदी नाट्य कला परिषद — निदेशक', period: '' },
            { en: 'Idol Donor — Maa Parvati Mandir', hi: 'माँ पार्वती मंदिर — प्रतिमा दाता', period: '' },
            { en: 'Temple Builder — Maa Parvati Mandir', hi: 'माँ पार्वती मंदिर — निर्माता', period: '' },
            { en: 'Co-founder & Secretary — Rajnath Singh Sanskrit Madhya Vidyalaya', hi: 'राजनाथ सिंह संस्कृत मध्य विद्यालय — सह-संस्थापक', period: '' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', paddingBottom: 12, marginBottom: 12, borderBottom: i < 4 ? '0.5px solid var(--border)' : 'none' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9973a', marginTop: 4, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#0f2a4a' }}>{r.en} {r.period && <span style={{ color: '#c9973a', fontSize: 10 }}>({r.period})</span>}</div>
                <div style={{ fontSize: 11, color: '#6a6a6a', marginTop: 2 }}>{r.hi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Family Tree */}
      <div className="sec-card">
        <div className="sec-head">
          <div className="sec-stripe" />
          <div>
            <div className="sec-head-label">पारिवारिक वृक्ष · Family Tree</div>
          </div>
        </div>
        <div style={{ padding: '16px 18px' }}>

          {/* Patriarch */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <div style={{ background: '#0f2a4a', borderRadius: 12, padding: '12px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: '#e8b85c' }}>Jay Narayan Singh</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>जय नारायण सिंह</div>
              <div style={{ fontSize: 9, color: '#c9973a', marginTop: 4 }}>× Nirmala Singh · निर्मला सिंह</div>
            </div>
          </div>

          {/* Connector */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
            <div style={{ width: 1, height: 20, background: 'rgba(201,151,58,0.4)' }} />
          </div>
          <div style={{ height: 1, background: 'rgba(201,151,58,0.3)', margin: '0 8px 0' }} />

          {/* Sons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 0 }}>
            {familyData.map((son, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 1, height: 16, background: 'rgba(201,151,58,0.4)' }} />
                <div style={{ background: 'rgba(15,42,74,0.06)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 6px', textAlign: 'center', width: '100%' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: son.highlight ? '#0f2a4a' : '#0f2a4a', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    {son.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div style={{ fontSize: 8, color: son.highlight ? 'rgba(15,42,74,0.7)' : '#6a6a6a', marginTop: 2 }}>× {son.wife}</div>
                  <div style={{ fontSize: 8, color: son.highlight ? 'rgba(15,42,74,0.6)' : '#9a9a9a', marginTop: 1 }}>{son.role.split('·')[0].trim()}</div>
                </div>
                <div style={{ width: 1, height: 12, background: 'rgba(201,151,58,0.3)', marginTop: 4 }} />
                {son.children.map((child, j) => (
                  <div key={j} style={{ background: 'rgba(15,42,74,0.04)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '5px 6px', textAlign: 'center', width: '100%', marginTop: j > 0 ? 4 : 0 }}>
                    <div style={{ fontSize: 9, color: '#0f2a4a', fontWeight: 500, lineHeight: 1.3 }}>{child.name.split('(')[0].trim()}</div>
                    <div style={{ fontSize: 8, color: '#9a9a9a' }}>{child.hi.split('(')[0].trim()}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}
