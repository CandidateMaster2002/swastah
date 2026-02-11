

const App = () => {
  // WhatsApp order link – CTA everywhere lands here
  const whatsappLink =
    "https://wa.me/919850319154?text=Hello%20Swastah%2C%20I%20want%20to%20order%20Swastah%20Curcumin%20sachets.%20Please%20guide%20me.";

  return (
    <div className="bg-white font-sans antialiased">
      {/* main container – strict content, mobile first, clean tailwind */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-4 md:py-6">

        {/* ---------- HERO SECTION (above the fold) ---------- */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between py-8 md:py-12 border-b border-gray-100">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-800">
              <span className="font-medium text-[#2c6e49]">Swastah</span>
              <br />स्वास्थ्य
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-3 max-w-xl">
              <span className="bg-[#f0f7e9] px-2 py-1">curcumin 95%</span> — natural form, 1gm sachet with pepper
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {/* Primary CTA — benefits led / order on whatsapp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c6e49] hover:bg-[#1f4f33] text-white text-lg font-medium px-8 py-4 rounded-full shadow-md transition flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                🌿 Get My Golden Glow Today
                <span className="text-xl">→</span>
              </a>
              {/* secondary CTA — global reach, same whatsapp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6b705c] hover:bg-[#555a48] text-white text-lg font-medium px-8 py-4 rounded-full shadow-sm transition flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                📦 Shop Global Collection
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-[#b68b5c] rounded-full"></span>
              Order on WhatsApp — send address, pay via GPay / bank transfer, we ship courier
            </p>
          </div>
          {/* subtle earthy tone hint – no images required */}
          <div className="hidden md:block md:w-2/5 text-right">
            <div className="bg-[#f3efe8] p-6 rounded-2xl inline-block border border-[#d9c5ad]">
              <span className="text-7xl">🌱</span>
              <p className="text-xs uppercase tracking-wider text-[#6b4f3a] mt-2">90 sachets · 1000mg</p>
            </div>
          </div>
        </section>

        {/* ---------- ABOUT CURCUMIN (natural, no uniformity) ---------- */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49] mb-2">About Curcumin</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We provide curcumin in its natural form and no additives or colors added.
                Do not expect uniformity — at times the final product is more towards yellow and
                at times orangish yellow, sometimes it may get slight sweet taste — it all really
                depends on the rhizome type, soil and weather conditions.
              </p>
              <div className="mt-6 bg-[#f8f9fa] p-5 rounded-xl border-l-4 border-[#b68b5c]">
                <p className="font-semibold text-[#4a5c46]">BioEnhanced Curcumin · Improvised Drug Delivery system</p>
              </div>
            </div>
            <div className="bg-[#edf2e6] p-6 rounded-2xl">
              <h3 className="font-semibold text-[#3b5e3f] text-xl">How curcumin works ?</h3>
              <p className="text-gray-700 mt-2">
                Works specifically on certain signaling path systems in your body correcting the signals
                that malfunction due to various reasons that boil down to dietary habits and lifestyle issues.
                This malfunctioning is root cause for many chronic ailments. Curcumin molecule is hydrophobic
                — does not dissolve in water. Curcumin is fat and alcohol soluble hence since ages we have
                always consumed turmeric in milk and not water.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- NUTRACEUTICALS ---------- */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49] mb-3">Nutraceuticals</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg"><span className="font-bold text-[#4a7043]">What are Nutraceuticals ?</span> A nutraceutical product may be defined as a substance, which has physiological benefit or provides protection against chronic disease. Nutraceuticals may be used to improve health, delay the aging process, prevent and manage chronic diseases, increase life expectancy, or support the structure or function of the body.</p>
            <p className="text-lg"><span className="font-bold text-[#4a7043]">Why Nutraceuticals ??</span> Nutraceuticals induce targeted molecular therapy without causing side effects. When natural molecules are used your body absorbs and has mechanism to flush out excess against synthetically generated drugs — hence excess does not accumulate. Nutraceuticals when taken in recommended safe quantity for prolong period give good result without side effects. Nutrients brought together with efficacy of modern technology. Recent studies have shown promising results in various complications: allergy, alzheimer, cardiovascular, cancer, diabetes, eye, immune, inflammatory, Parkinson's, obesity.</p>
          </div>
        </section>

        {/* ---------- PRODUCT: 90 SACHETS + USAGE ---------- */}
        <section className="py-12 border-b border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f8f3ec] p-6 rounded-3xl border border-[#d4c2a9]">
              <h2 className="text-3xl font-semibold text-[#4b6043]">90 Sachets</h2>
              <div className="mt-3 space-y-2">
                <p className="flex items-start gap-2"><span className="text-[#2c6e49] text-xl">•</span> <span className="text-gray-800 text-lg">Contains curcumin 95% in its natural form. Our sachets have 1 gm curcumin (1000mg) with pepper powder.</span></p>
                <p className="flex items-start gap-2"><span className="text-[#2c6e49] text-xl">•</span> <span className="text-gray-800 text-lg">No additives… No preservatives… No binding agents… etc… etc.. added</span></p>
                <p className="flex items-start gap-2"><span className="text-[#2c6e49] text-xl">•</span> <span className="text-gray-800 text-lg">Easy to use ON THE GO sachets. Travelling ? or eating out in restaurant — Simply top your food with it.</span></p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-xl">
                <p className="font-medium text-[#6b4f3a]">Kindly follow the instruction leaflet received with the product.</p>
              </div>
            </div>
            <div className="bg-[#e6f0e6] p-6 rounded-3xl">
              <h3 className="text-2xl font-medium text-[#2c6e49]">Usage Instructions</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Highly concentrated form, consume only one sachet at a time. Up to 4 sachets can be consumed in a day at regular intervals.</li>
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Do not consume empty stomach.</li>
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Highly pigmented natural molecule that gets flush out in form of body fluids like sweat urine etc — hence do not panic in case of yellow sweat or urine during initial days of consumption.</li>
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Expect results on prolong usage of 7-8 months only.</li>
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Do not heat or boil, can mix with warm food, not to put when food is cooking on gas.</li>
                <li className="flex gap-2"><span className="text-[#b68b5c] font-bold">→</span> Best way (for maximum effect) to consume is by making paste in cow ghee and adding to food.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- INSTRUCTIONS & PRECAUTIONS (detailed) ---------- */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-3xl font-light text-[#2c6e49] mb-4">Instructions and Precautions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="text-xl font-semibold text-[#5f4c3b]">⚠️ Instructions</h3>
              <p className="mt-2 text-gray-700">Highly concentrated form, consume only one sachet at a time. Up to 4 sachets can be consumed in a day at regular intervals. Do not consume empty stomach. Highly pigmented natural molecule that gets flush out in form of body fluids like sweat urine etc hence do not panic in case of yellow sweat or urine during initial days of consumption. Expect results on prolong usage of 7 -8 months only. Do not heat or boil, can mix with warm food, not to put when food is cooking on gas. Best way (for maximum effect) to consume is by making paste in cow ghee and adding to food.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-300">
              <h3 className="text-xl font-semibold text-[#5f4c3b]">🛡️ Precautions</h3>
              <p className="mt-2 text-gray-700">Strictly follow the instructions listed. It barely has any serious side effects as the excess will be flushed out. In case of few boils or yellow sweat no need to worry — in worst case can cause diarrhea. In case of any reaction stop consumption and wait for reaction to subside. Reactions are likely only in case of excessive consumption. Those having thrombosis related issues or risk internal bleeding please be known that it is blood thinner. On similar lines those planning for surgery stop usage before and after surgery until recovery. Those undergoing chemotherapy can consume curcumin.</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#6b705c] hover:bg-[#555a48] text-white px-8 py-4 rounded-full text-lg font-medium transition w-full sm:w-auto justify-center">
              📲 Dosage & precautions — chat on WhatsApp
            </a>
          </div>
        </section>

        {/* ---------- OUR VALUES (swastah meaning, social health) ---------- */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49]">Our Values</h2>
          <div className="mt-4 max-w-4xl text-gray-700 text-lg space-y-4">
            <p><span className="font-bold text-[#4e7037]">Swastah</span> स्वास्थ्य means स्व (self) अस्त (being). Meaning being in one's own self in one's own way is being healthy. That is why we refer to स्वास्थ्य as health.</p>
            <p>Swastah aims at Introducing improvised result oriented products for Social Health by “diverting” social capital towards healthy society. Health of an individual is most sensitive issue today. Over past few decades lot have been done in terms of providing career to educated ones and providing work opportunities and employment. Technology reforms have also reached rurals to some extend which has created competitive environment overall. With more options available society demands the best today. When we look at health Industry, reformation is seen there too in terms of using technology for diagnostics and surgery purposes. But from an individual point of view, who sees fast growth in various sector, is perplexed when it comes to his own health.</p>
            <p>We also believe that a lot needs to be done for social Health Care, specially so at this time when people are looking up for alternative medicines seriously and slowly sort of losing faith on allopathy. Cancer, diabetes did not exist when Ayurveda was written — hence we believe that there is a lot of scope to take help of the known properties of natural molecules and use technology of today’s to devise and arrive at a formulation that is more beneficial and result oriented and also economic. In our economy driven society Natural Molecules are not much explored and no thought has been given to improvise their drug delivery system etc which is worked out in case of Allopathic medicines.</p>
          </div>
        </section>

        {/* ---------- CURCUMIN – HOW IT WORKS (detailed) ---------- */}
        <section className="py-12 border-b border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49] mb-3">Curcumin – How it works</h2>
          <div className="bg-[#f1f6ee] p-6 md:p-8 rounded-3xl">
            <p className="text-lg text-gray-800">Curcumin works at cellular level to target the signalling pathways to perform corrective measures — which is why it has potential to address autoimmune diseases without major side effects. Modern drugs are highly specific in their action, targeting specific receptors or metabolic pathways. Curcumin, a polyphenol, has been shown to target multiple signaling molecules while also demonstrating activity at the cellular level. Curcumins contain numerous medicinal values including anti-oxidation and anti-inflammation, antiviral, anti-pulmonary fibrosis, chronic obstructive pulmonary disease effects. It may also help in management of body fatigue/gym exercise-induced inflammation and muscle soreness, sports injury, ligament wear and tear, tissue remodelling and rebuilding. A relatively low dose can provide health benefits for people that do not have diagnosed health conditions.</p>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Blood thinner", "Blood Purifier", "Anti Inflammatory", "Anti Cancer", "Helps ligament restoration", "Restores bone density"].map((item) => (
                <span key={item} className="bg-white/70 text-gray-800 px-3 py-2 rounded-full text-sm text-center border border-[#c0cfb2]">🌿 {item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FUNCTIONAL FOOD SECTIONS (7 ailments) ---------- */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49] mb-6">Curcumin as Functional Food</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* herpes */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Herpes</h3>
              <p className="text-gray-600 mt-1 text-sm">Antiviral Effects: Viral Inhibition, reduces infectivity HSV-1/2, blocks adsorption, thymidine kinase targeting. Anti-inflammatory benefits, reduces cytokines IL-6, TNF-α. Topical research in animal models.</p>
            </div>
            {/* weightloss */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Weightloss</h3>
              <p className="text-gray-600 mt-1 text-sm">Reduces inflammation, improves insulin sensitivity, activates AMPK, reduces fat cell formation, supports gut health, stabilizes cravings. Not a fat burner but metabolic corrector. Benefits PCOS, insulin resistance, belly fat.</p>
            </div>
            {/* asthma */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Asthma</h3>
              <p className="text-gray-600 mt-1 text-sm">Reduces airway inflammation (NF-κB, IL-4, IL-5, IL-13), prevents hyper-responsiveness, decreases mucus overproduction (MUC5AC), antioxidant, supports steroid response. Ayurveda: Kapha+Vata balance.</p>
            </div>
            {/* arthritis */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Arthritis</h3>
              <p className="text-gray-600 mt-1 text-sm">Inhibits NF-κB, COX-2, TNF-α, IL-1β. Osteoarthritis: reduced pain, stiffness. Rheumatoid arthritis: joint swelling, morning stiffness. Compared to mild NSAIDs without gastric damage.</p>
            </div>
            {/* cancer */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Cancer</h3>
              <p className="text-gray-600 mt-1 text-sm">Switches OFF NF-κB, STAT3. Arrests cell cycle, induces apoptosis (p53), anti-angiogenesis (VEGF), prevents metastasis (MMP-2/9), targets cancer stem cells, chemo-sensitizer. Integrative oncology support.</p>
            </div>
            {/* diabetes */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#5a7159]">Diabetes</h3>
              <p className="text-gray-600 mt-1 text-sm">Improves insulin sensitivity (AMPK), reduces inflammation, protects β-cells, reduces post-meal spikes, improves lipids, protects against neuropathy, nephropathy, retinopathy. Reduces HbA1c, HOMA-IR.</p>
            </div>
            {/* gut health */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-[#5a7159]">Gut Health</h3>
              <p className="text-gray-600 mt-1 text-sm">Calms gut inflammation (NF-κB, TNF-α), strengthens tight junctions, modulates microbiome (↑ Lactobacillus), supports bile flow, helps H. pylori induced gastritis (adjunct). Repairs leaky gut.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#2c6e49] text-white px-8 py-4 rounded-full text-lg font-medium shadow transition hover:bg-[#1f4f33]">
              ⚕️ Consult for your condition — WhatsApp
            </a>
          </div>
        </section>

        {/* ---------- PACKAGING & ECO INFORMATION (earthy, jute, alu) ---------- */}
        <section className="py-12 border-y border-[#d4c2a9] bg-[#faf6f0] mt-4 rounded-3xl">
          <h2 className="text-3xl font-light text-[#4b6043] px-4">Packaging & Eco Information</h2>
          <div className="mt-4 px-4 text-gray-700 space-y-3 text-lg">
            <p>🌍 Packing is eco friendly, plastic free — tho transparent sticker is no lamination used; rest is alu sachets and jute bag with paper poster stitched on it, not laminated again. We might come with cream bottles, will be pet jars — no other eco friendly option found yet, tho many claiming to get done paper pulp bamboo pulp etc but not practically available.</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-[#b68b5c] text-white px-4 py-2 rounded-full text-sm">Jute bag · paper stitch</span>
              <span className="bg-[#8f7a5c] text-white px-4 py-2 rounded-full text-sm">Alu sachets · no lamination</span>
              <span className="bg-[#6b4f3a] text-white px-4 py-2 rounded-full text-sm">Transparent sticker · eco</span>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT SECTION ---------- */}
        <section className="py-12 border-b border-gray-100" id="contact">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c6e49] mb-6">Contact</h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 max-w-2xl">
            <p className="text-xl font-medium text-[#4a5c46]">No: +919850319154</p>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2c6e49] focus:outline-none" />
              <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2c6e49] focus:outline-none" />
              <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2c6e49] focus:outline-none" />
              <textarea placeholder="message" rows={4} className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2c6e49] focus:outline-none"></textarea>
              <div className="text-sm text-gray-500">Orders only on WhatsApp — click any green button</div>
            </form>
          </div>
        </section>

        {/* ---------- FOOTER / COPYRIGHT ---------- */}
        <footer className="py-8 text-gray-600 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2021 Swastah LLP. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#2c6e49] font-medium hover:underline">Order on WhatsApp</a>
            <span className="text-gray-400">|</span>
            <span className="text-sm">GPay / bank transfer · courier</span>
          </div>
        </footer>

        {/* ---------- STICKY CTA BOTTOM (mobile friendly, always visible) ---------- */}
        <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#2c6e49] text-white text-center font-bold py-4 px-6 rounded-full shadow-lg border-2 border-white">
            👉 Order on WhatsApp · send address, pay via GPay
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;