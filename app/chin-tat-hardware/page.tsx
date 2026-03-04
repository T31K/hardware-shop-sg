const PHOTOS = {
  p1: "https://lh3.googleusercontent.com/place-photos/AL8-SNG2XmmvZx_SwN-hppqqZ8I46ClGUgRkjRQhxRVKkzARGG3U40qk0qTfQHyk4m52Pp8_ZNy8g2PsQq2PT6PH_yWSEZg5vJXGfmZWCwgTPnQqT9tdZdUd9A9d4HFhb-LfN5UHDUgZ_nzM6DXMYQ=s4800-w768",
  p2: "https://lh3.googleusercontent.com/places/ANXAkqGz6HMFdrGcdMi4z7nFX7SZa9U8FLIzMzNMmLbRYAI07AhwJ86-FRi8D4Mdb_nH0iJFS0jlvw-gp7HLWF_TItFKq82QXAPBXgQ=s4800-w1131",
  p3: "https://lh3.googleusercontent.com/places/ANXAkqEmjCIzBBPojOQHyxzZZPFCnCKHH88JJJqrooZx01ve4NoRg9hnllnSQloVbcoTKfXNFTdCV-qnvw0X4BHe1EtiaSA_2EUYOvw=s4800-w1080",
  p4: "https://lh3.googleusercontent.com/places/ANXAkqH1afCTQ2SEnL5LK-eg1mh8twWLDDHixafc7t4alHUVQlCTiVxSpTSujOBZkbk1L8J__jFHWZmM4wNXV1x8TgnT4FZ0_mV5Ej0=s4800-w1080",
  p5: "https://lh3.googleusercontent.com/places/ANXAkqEi4B_X-Qpp0f8dB9_hasYZTPRaOvqeewEDWfpxZHyVXMi-jAEKfz0lQa4K4JNZA681yemTrrEn_NayDwab7JKvNePF2L-IPBk=s4800-w1080",
  p6: "https://lh3.googleusercontent.com/places/ANXAkqH3vJYfqsB8nED_A231V-ZWXc7X63k6qhilJcXTYzIFAGGxIt6tCILG7CCcyGMlSUHVRZcqDDyXuj5FYQV6meWgnml7BPPn_70=s4800-w499",
};

const REVIEWS = [
  {
    name: "Ian Teo",
    text: "One of the best hardware stores you can find in Singapore. Wide range of general hardware and equipment — indoor, outdoor, personal or industrial. Staff are helpful, friendly and approachable. They'll even give suggestions on what you're looking for.",
  },
  {
    name: "mel tan",
    text: "Have been using their products for years. Wide range of selection, good quality and staff provide great service. Very friendly. Thumbs up!",
  },
  {
    name: "samantha sim",
    text: "Great experience! Able to find last-minute stocks upon checking with them. Most household items supplied too. Friendly boss! Will continue to order and purchase from Chin Tat.",
  },
  {
    name: "Jayyyz Ng",
    text: "Items reasonably priced and of good quality. The boss has a great sense of humor and is very approachable. Enjoyed my purchase!",
  },
  {
    name: "Ng Jia Jun",
    text: "Friendly boss and sales staff — knowledgeable and helpful about what to recommend. Prices affordable and products are durable. Will return to buy.",
  },
];

const HOURS = [
  { day: "Monday",    hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Tuesday",   hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Thursday",  hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Friday",    hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Saturday",  hours: "Closed",             open: false },
  { day: "Sunday",    hours: "Closed",             open: false },
];

export default function ChinTatHardware() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-red-700 text-white text-center py-2 px-4">
        <p className="text-xs tracking-widest uppercase font-semibold">
          Mon – Fri &nbsp;·&nbsp; 9:00 AM – 6:00 PM &nbsp;·&nbsp;
          <a href="tel:+6567827654" className="underline underline-offset-2 hover:text-red-200 transition-colors">
            +65 6782 7654
          </a>
        </p>
      </div>

      {/* NAV */}
      <nav className="bg-stone-50 border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Masthead */}
          <div className="py-6 text-center border-b border-stone-200">
            <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-1">Est. Tampines, Singapore</p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">
              CHIN TAT HARDWARE
            </h1>
            <p className="text-xs tracking-[0.3em] uppercase text-red-700 mt-1 font-semibold">Pte Ltd</p>
          </div>
          {/* Nav links */}
          <div className="flex justify-center gap-8 py-3 text-xs font-bold uppercase tracking-widest text-stone-500">
            <a href="#about"    className="hover:text-red-700 transition-colors">About</a>
            <a href="#products" className="hover:text-red-700 transition-colors">Products</a>
            <a href="#gallery"  className="hover:text-red-700 transition-colors">Gallery</a>
            <a href="#reviews"  className="hover:text-red-700 transition-colors">Reviews</a>
            <a href="#hours"    className="hover:text-red-700 transition-colors">Hours</a>
            <a href="#contact"  className="hover:text-red-700 transition-colors">Find Us</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-0">
        {/* Rating badge — centrepiece */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-3 border-2 border-red-700 px-10 py-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-5xl font-black text-stone-900">5.0</p>
            <p className="text-xs tracking-widest uppercase text-stone-500 font-semibold">14 Reviews on Google</p>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-2xl sm:text-3xl font-light text-stone-700 leading-snug italic">
            &ldquo;One of the best hardware stores you can find in Singapore.&rdquo;
          </p>
          <cite className="block mt-4 text-xs tracking-widest uppercase text-stone-400 not-italic">— Ian Teo, Google Review</cite>
        </blockquote>

        {/* Hero photo — full width */}
        <div className="relative">
          <img
            src={PHOTOS.p3}
            alt="Chin Tat Hardware store"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-stone-200" />
        <span className="text-red-700 text-lg">✦</span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-[2fr_3fr] gap-16 items-start">
          {/* Left: photo + caption */}
          <div>
            <img
              src={PHOTOS.p2}
              alt="Inside Chin Tat Hardware"
              className="w-full object-cover mb-4"
              style={{ aspectRatio: "3/4" }}
            />
            <p className="text-xs text-stone-400 uppercase tracking-widest text-center">Inside the store · Tampines St 93</p>
          </div>

          {/* Right: text */}
          <div className="pt-4">
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.4em] mb-4">About the Shop</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6 text-stone-900">
              Your Go-To Hardware Expert in East Singapore
            </h2>
            <div className="w-16 h-0.5 bg-red-700 mb-8" />
            <p className="text-stone-600 leading-relaxed text-lg mb-5">
              Chin Tat Hardware has built a reputation for stocking a remarkably
              wide range of hardware — covering indoor and outdoor home needs,
              personal projects, and industrial requirements alike.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg mb-5">
              Walk in with a vague idea and walk out with exactly the right thing.
              The boss and staff are known for their product knowledge, genuine
              helpfulness, and a warm personality that keeps customers coming back.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg mb-10">
              Reasonably priced. Quality products. The kind of shop that
              the East side of Singapore quietly depends on.
            </p>
            <a
              href="tel:+6567827654"
              className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors rounded-none"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              Call Us · 6782 7654
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-400 text-xs font-bold uppercase tracking-[0.4em] mb-3">What We Stock</p>
            <h2 className="text-4xl font-black">Hardware for Every Need</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-700">
            {[
              { cat: "Indoor", items: ["Fixtures & fittings", "Paint & coatings", "Sealants", "Adhesives", "Fasteners"] },
              { cat: "Outdoor", items: ["Garden tools", "Outdoor fittings", "Weather proofing", "Drainage", "Anchors"] },
              { cat: "Personal", items: ["Hand tools", "Power tools", "Safety gear", "Storage", "Lighting"] },
              { cat: "Industrial", items: ["Bulk fasteners", "Heavy tools", "Structural fittings", "Pipes", "Cable management"] },
            ].map((col) => (
              <div key={col.cat} className="bg-stone-900 p-8 hover:bg-stone-800 transition-colors">
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">{col.cat}</p>
                <ul className="space-y-2.5">
                  {col.items.map(item => (
                    <li key={item} className="text-stone-300 text-sm flex items-start gap-2">
                      <span className="text-red-600 mt-1 text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-6 mb-10">
          <div>
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.4em] mb-1">Photo Gallery</p>
            <h2 className="text-4xl font-black">Inside the Store</h2>
          </div>
          <div className="flex-1 h-px bg-stone-200" />
        </div>
        <div className="grid grid-cols-12 gap-3">
          <img src={PHOTOS.p4} alt="Store view" className="col-span-7 row-span-2 w-full h-80 object-cover" />
          <img src={PHOTOS.p1} alt="Products" className="col-span-5 w-full h-[154px] object-cover" />
          <img src={PHOTOS.p6} alt="Hardware" className="col-span-5 w-full h-[154px] object-cover" />
          <img src={PHOTOS.p5} alt="Shop front" className="col-span-6 w-full h-52 object-cover" />
          <img src={PHOTOS.p2} alt="Interior" className="col-span-6 w-full h-52 object-cover" />
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-red-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-300 text-xs font-bold uppercase tracking-[0.4em] mb-3">5 Stars Across The Board</p>
            <h2 className="text-4xl font-black">What Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature review */}
            <div className="md:col-span-3 bg-white text-stone-900 p-10">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-red-700 text-xl">★</span>)}
              </div>
              <p className="text-2xl font-light leading-relaxed italic text-stone-700 mb-6">
                &ldquo;{REVIEWS[0].text}&rdquo;
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-stone-400">— {REVIEWS[0].name}</p>
            </div>
            {/* Other reviews */}
            {REVIEWS.slice(1).map((r) => (
              <div key={r.name} className="bg-red-800 p-7">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-red-300 text-sm">★</span>)}
                </div>
                <p className="text-red-100 text-sm leading-relaxed italic mb-5">&ldquo;{r.text}&rdquo;</p>
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest">— {r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/d9aJnGR9XQpuCnT78"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors"
            >
              Read all reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.4em] mb-3">Opening Hours</p>
            <h2 className="text-4xl font-black mb-8">When We&apos;re Open</h2>
            <div className="border border-stone-200">
              {HOURS.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex justify-between items-center px-6 py-4 ${i < HOURS.length - 1 ? "border-b border-stone-100" : ""} ${!row.open ? "bg-stone-50" : ""}`}
                >
                  <span className={`font-semibold ${!row.open ? "text-stone-400" : "text-stone-800"}`}>{row.day}</span>
                  <span className={`text-sm font-bold ${row.open ? "text-red-700" : "text-stone-400"}`}>{row.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-400 text-xs mt-4">Closed on weekends</p>
          </div>

          {/* Contact info beside hours */}
          <div id="contact">
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.4em] mb-3">Get In Touch</p>
            <h2 className="text-4xl font-black mb-8">Find Us</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-700 pl-5">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                <p className="text-lg font-bold text-stone-900">9003 Tampines Street 93</p>
                <p className="text-stone-600">#02-158, Singapore 528837</p>
              </div>
              <div className="border-l-4 border-stone-200 pl-5">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+6567827654" className="text-xl font-black text-red-700 hover:text-red-800 transition-colors">
                  +65 6782 7654
                </a>
              </div>
              <div className="border-l-4 border-stone-200 pl-5">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Note</p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Shop is on the <strong>2nd floor</strong> (#02-158) of Block 9003 Tampines Street 93. Near Tampines MRT.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/d9aJnGR9XQpuCnT78"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-700 text-white font-bold uppercase tracking-widest text-sm px-7 py-4 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-72 w-full">
        <iframe
          title="Chin Tat Hardware Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6!2d103.9413186!3d1.3399611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d3932c2f2f5%3A0xd93c8102fce9bb11!2sChin%20Tat%20Hardware%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1741100000000!5m2!1sen!2ssg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-black text-lg tracking-tight uppercase">Chin Tat Hardware Pte Ltd</p>
            <p className="text-stone-400 text-sm mt-1">9003 Tampines Street 93 · #02-158 · Singapore 528837</p>
          </div>
          <div className="text-right">
            <a href="tel:+6567827654" className="text-red-400 hover:text-red-300 font-bold text-lg transition-colors block">
              +65 6782 7654
            </a>
            <p className="text-stone-500 text-xs mt-1">&copy; {new Date().getFullYear()} Chin Tat Hardware Pte Ltd</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
