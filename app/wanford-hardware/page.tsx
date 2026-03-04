export default function WanfordHardwarePage() {
  const photos = [
    "https://lh3.googleusercontent.com/places/ANXAkqEsPXJe79oq9QqAoL8oDmg_m1jAHcYu5jx_1DSSlXVUzUK8FWKqkbwTo6ytaG0zTGeBgDCUzKiYNOut9nq9tUPRrYJ2h5a0apo=s4800-w921",
    "https://lh3.googleusercontent.com/place-photos/AL8-SNGV65ARljvbaTlfkR3eDZ2-rRVaIcuy4qHNC1QqT5C5GxvtubOIkIYr7y3-lLx4QUXhk8MwkYqN-n4tiXrh4wvwtSNE4t3BW2kafWf3bOeG4aGOuSU6ZJijps6H1ofq5bgVntv9xiUXV3h6rg=s4800-w1200",
    "https://lh3.googleusercontent.com/places/ANXAkqHEM5h0ATIBKpQjea4rGkeQNeNNXlvAcyCWNlEJTLpYzn5VgoBWnpyBleUtHk2wR8K0v5x-nnub2cn_NnnReFiQlA5DPGIcCxk=s4800-w1200",
    "https://lh3.googleusercontent.com/places/ANXAkqEZIXI1NzpwoGreIWWU3tJcZ4sfc5jGm_DGLSbBOWqLEPHjNi6iGAO7ybmUWm0JpQoEGJ05D8cFVMot_IZHXdncKy3Mjbv6efQ=s4800-w1200",
    "https://lh3.googleusercontent.com/places/ANXAkqEKPBq_h1bs58LvDpjwqtWXjsHg0SSa_adVrxOdtobXxQlfBGS01HBWHGJ6WL8ZvKW4ejR2H99RuZ2ImS9OHBCK3ZnxrYXOmY8=s4800-w1200",
    "https://lh3.googleusercontent.com/places/ANXAkqFsRPJxc65O4KYnO09d9X9a9w9wpdmI4C9Lt8FDOsKIH5oC4BVySA5BSVvbu9wFdiow0d3JrdqoB0YmLL3gS5Tm0WI5c41yiKg=s4800-w1200",
    "https://lh3.googleusercontent.com/places/ANXAkqGOorkdzGfzny9W0m33QBCeGYwmFRLczcaeYtaJpu5Rm65BRAYO-oDWZYmLS5Id9soyzlCydpYQVLqvvZhP0ssBqJaTz1Mkwls=s4800-w1200",
  ];

  const hours = [
    { day: "Monday", time: "10:00 AM – 7:00 PM", open: true },
    { day: "Tuesday", time: "10:00 AM – 7:00 PM", open: true },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM", open: true },
    { day: "Thursday", time: "10:00 AM – 7:00 PM", open: true },
    { day: "Friday", time: "10:00 AM – 7:00 PM", open: true },
    { day: "Saturday", time: "11:00 AM – 5:00 PM", open: true },
    { day: "Sunday", time: "11:00 AM – 5:00 PM", open: true },
  ];

  const categories = [
    { label: "Hand Tools", icon: "🔨" },
    { label: "Power Tools", icon: "⚡" },
    { label: "Key Cutting", icon: "🗝️" },
    { label: "Locks & Latches", icon: "🔒" },
    { label: "Fasteners", icon: "🔩" },
    { label: "Adhesives", icon: "🧴" },
    { label: "Paint & Finishing", icon: "🖌️" },
    { label: "Electrical", icon: "💡" },
  ];

  return (
    <div style={{ backgroundColor: "#0f2318", minHeight: "100vh", fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* Decorative top border */}
      <div style={{ height: "6px", background: "linear-gradient(90deg, #c9973e, #e8bf6a, #c9973e, #e8bf6a, #c9973e)" }} />

      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(201,151,62,0.3)", padding: "20px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Vintage badge */}
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%",
              border: "2px solid #c9973e",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px"
            }}>
              🔧
            </div>
            <div>
              <p style={{ color: "#c9973e", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", margin: 0 }}>Est. Chai Chee</p>
              <p style={{ color: "#f5ead4", fontSize: "18px", fontWeight: "bold", margin: 0, letterSpacing: "1px" }}>Wanford Hardware</p>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "32px" }}>
            {["Products", "Services", "Hours", "Find Us"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{ color: "#c9973e", textDecoration: "none", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
                {item}
              </a>
            ))}
          </nav>
          <a href="tel:+6596810682" style={{
            border: "1px solid #c9973e", color: "#c9973e",
            padding: "8px 20px", textDecoration: "none",
            fontSize: "13px", letterSpacing: "1px"
          }}>
            +65 9681 0682
          </a>
        </div>
      </header>

      {/* Hero — vintage poster layout */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 32px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

          {/* Left: poster typography */}
          <div>
            {/* Ornamental rule */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ flex: 1, height: "1px", background: "#c9973e" }} />
              <span style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Since Chai Chee</span>
              <div style={{ flex: 1, height: "1px", background: "#c9973e" }} />
            </div>

            <h1 style={{ color: "#f5ead4", fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.05, margin: "0 0 8px", fontWeight: "bold" }}>
              Wanford
            </h1>
            <h1 style={{ color: "#c9973e", fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.05, margin: "0 0 8px", fontWeight: "bold", fontStyle: "italic" }}>
              Hardware
            </h1>
            <h1 style={{ color: "#f5ead4", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, margin: "0 0 32px", fontWeight: "normal", letterSpacing: "6px", textTransform: "uppercase" }}>
              & Trading DIY
            </h1>

            <p style={{ color: "#a8b8a0", fontSize: "16px", lineHeight: 1.8, margin: "0 0 36px", maxWidth: "440px" }}>
              Your neighbourhood hardware partner at Chai Chee. From hand tools to key cutting — our knowledgeable boss helps you get the job done right, whether you're a first-time DIYer or a seasoned tradesman.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#find-us" style={{
                background: "#c9973e", color: "#0f2318",
                padding: "14px 32px", textDecoration: "none",
                fontWeight: "bold", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase"
              }}>
                Get Directions
              </a>
              <a href="tel:+6596810682" style={{
                border: "1px solid #c9973e", color: "#c9973e",
                padding: "14px 32px", textDecoration: "none",
                fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase"
              }}>
                Call Us
              </a>
            </div>
          </div>

          {/* Right: stacked photos */}
          <div style={{ position: "relative" }}>
            {/* Decorative frame */}
            <div style={{
              position: "absolute", inset: "-12px", border: "1px solid rgba(201,151,62,0.25)",
              pointerEvents: "none", zIndex: 1
            }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
              <img src={photos[0]} alt="Wanford Hardware" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <img src={photos[1]} alt="Wanford Hardware" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                <img src={photos[2]} alt="Wanford Hardware" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            {/* Rating badge */}
            <div style={{
              position: "absolute", bottom: "-20px", left: "-20px", zIndex: 2,
              background: "#0f2318", border: "2px solid #c9973e",
              padding: "16px 20px", textAlign: "center"
            }}>
              <p style={{ color: "#c9973e", fontSize: "26px", fontWeight: "bold", margin: 0, lineHeight: 1 }}>3.6</p>
              <p style={{ color: "#f5ead4", fontSize: "11px", letterSpacing: "1px", margin: "4px 0 0", textTransform: "uppercase" }}>★★★ Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div style={{ background: "#c9973e", padding: "18px 32px", margin: "40px 0 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          {[
            { icon: "📍", label: "Location", value: "27A Chai Chee Rd, #01-379" },
            { icon: "🗓️", label: "Weekdays", value: "10:00 AM – 7:00 PM" },
            { icon: "🗓️", label: "Weekends", value: "11:00 AM – 5:00 PM" },
            { icon: "🗝️", label: "Key Cutting", value: "Available In-Store" },
          ].map(item => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p style={{ color: "#0f2318", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 2px", fontFamily: "system-ui, sans-serif" }}>{item.icon} {item.label}</p>
              <p style={{ color: "#0f2318", fontWeight: "bold", fontSize: "15px", margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products section */}
      <section id="products" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 32px" }}>

        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "16px" }}>
            <div style={{ width: "60px", height: "1px", background: "#c9973e" }} />
            <span style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>What We Carry</span>
            <div style={{ width: "60px", height: "1px", background: "#c9973e" }} />
          </div>
          <h2 style={{ color: "#f5ead4", fontSize: "38px", margin: 0, fontWeight: "bold" }}>
            The Full Catalogue
          </h2>
        </div>

        {/* 4x2 category grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
          {categories.map((cat) => (
            <div key={cat.label} style={{
              background: "rgba(201,151,62,0.06)", border: "1px solid rgba(201,151,62,0.15)",
              padding: "36px 24px", textAlign: "center",
              transition: "background 0.2s"
            }}>
              <div style={{ fontSize: "36px", marginBottom: "14px" }}>{cat.icon}</div>
              <p style={{ color: "#f5ead4", fontSize: "14px", letterSpacing: "1px", margin: 0, textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{cat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo gallery strip */}
      <section style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          {photos.slice(3).map((url, i) => (
            <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <img
                src={url}
                alt={`Wanford Hardware ${i + 4}`}
                style={{ width: "100%", height: "240px", objectFit: "cover", display: "block", filter: "sepia(20%) brightness(0.85)" }}
              />
              {/* Gold overlay on hover via pseudo would need CSS — use static tint */}
            </div>
          ))}
        </div>
      </section>

      {/* Key Cutting / Locksmith spotlight */}
      <section id="services" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>

            {/* Hardware card */}
            <div style={{ background: "rgba(245,234,212,0.04)", border: "1px solid rgba(201,151,62,0.2)", padding: "56px 48px" }}>
              <p style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}>Service 01</p>
              <h3 style={{ color: "#f5ead4", fontSize: "32px", margin: "0 0 20px", fontWeight: "bold" }}>Hardware & DIY</h3>
              <p style={{ color: "#a8b8a0", fontSize: "15px", lineHeight: 1.9, margin: "0 0 32px" }}>
                Everything for your home improvement project — hand tools, power tools, fasteners, paints, adhesives, electrical supplies and more. A well-stocked neighbourhood store where the boss knows what he's talking about.
              </p>
              <ul style={{ color: "#c9973e", padding: "0 0 0 16px", margin: 0 }}>
                {["Hand & Power Tools", "Fasteners & Screws", "Paint & Adhesives", "Electrical Supplies", "Household Hardware"].map(item => (
                  <li key={item} style={{ fontSize: "14px", marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Locksmith card */}
            <div style={{ background: "#c9973e", padding: "56px 48px" }}>
              <p style={{ color: "#0f2318", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", margin: "0 0 20px", fontFamily: "system-ui, sans-serif", opacity: 0.7 }}>Service 02</p>
              <h3 style={{ color: "#0f2318", fontSize: "32px", margin: "0 0 20px", fontWeight: "bold" }}>Key Cutting & Locksmith</h3>
              <p style={{ color: "rgba(15,35,24,0.8)", fontSize: "15px", lineHeight: 1.9, margin: "0 0 32px" }}>
                Duplicate your house keys, gate keys, car keys and more right here in store. Fast, accurate key cutting from a dedicated locksmith service you can trust — no appointment needed.
              </p>
              <ul style={{ color: "#0f2318", padding: "0 0 0 16px", margin: 0 }}>
                {["House & Gate Keys", "Padlock Keys", "Key Duplication", "Lock Replacement", "Walk-in, No Booking"].map(item => (
                  <li key={item} style={{ fontSize: "14px", marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial banner */}
      <div style={{ background: "rgba(201,151,62,0.07)", borderTop: "1px solid rgba(201,151,62,0.2)", borderBottom: "1px solid rgba(201,151,62,0.2)", padding: "56px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#c9973e", fontSize: "40px", marginBottom: "16px", letterSpacing: "4px" }}>❝</div>
          <p style={{ color: "#f5ead4", fontSize: "22px", lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>
            "Boss very helpful and knowledgeable. Came in not knowing what I needed — left with exactly the right parts and some great advice."
          </p>
          <p style={{ color: "#c9973e", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontFamily: "system-ui, sans-serif" }}>— Google Review · ★★★★★</p>
        </div>
      </div>

      {/* Hours + Map side by side */}
      <section id="hours" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 32px" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "56px", textAlign: "center" }}>
          <div style={{ width: "60px", height: "1px", background: "#c9973e" }} />
          <span style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>When We're Open</span>
          <div style={{ width: "60px", height: "1px", background: "#c9973e" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* Hours table */}
          <div>
            {hours.map((h, i) => (
              <div key={h.day} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0",
                borderBottom: i < hours.length - 1 ? "1px solid rgba(201,151,62,0.12)" : "none"
              }}>
                <span style={{ color: "#a8b8a0", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>{h.day}</span>
                <span style={{ color: "#c9973e", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>{h.time}</span>
              </div>
            ))}

            {/* Address block */}
            <div style={{ marginTop: "40px", padding: "24px", border: "1px solid rgba(201,151,62,0.2)", background: "rgba(201,151,62,0.04)" }}>
              <p style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px", fontFamily: "system-ui, sans-serif" }}>📍 Address</p>
              <p style={{ color: "#f5ead4", fontSize: "16px", margin: "0 0 16px", lineHeight: 1.6 }}>
                27A Chai Chee Rd, #01-379<br />Singapore 461027
              </p>
              <a href="tel:+6596810682" style={{ color: "#c9973e", fontSize: "15px", textDecoration: "none", display: "block" }}>
                📞 +65 9681 0682
              </a>
            </div>
          </div>

          {/* Map */}
          <div id="find-us" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: "-8px", border: "1px solid rgba(201,151,62,0.3)",
              pointerEvents: "none", zIndex: 1
            }} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7399!2d103.9270!3d1.3230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da177d6e9f38f7%3A0x1!2sWanford+Hardware+%26+Trading+DIY!5e0!3m2!1sen!2ssg!4v1"
              width="100%"
              height="380"
              style={{ border: 0, display: "block", filter: "sepia(30%) brightness(0.7) hue-rotate(20deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wanford Hardware location"
            />
          </div>
        </div>
      </section>

      {/* Second photo grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
          {photos.slice(0, 3).map((url, i) => (
            <img key={i} src={url} alt={`Wanford ${i + 1}`} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", filter: "sepia(15%) brightness(0.9)" }} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(201,151,62,0.25)", padding: "40px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Ornamental border */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(201,151,62,0.3)" }} />
            <div style={{ width: "8px", height: "8px", background: "#c9973e", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, height: "1px", background: "rgba(201,151,62,0.3)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
            <div>
              <p style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px", fontFamily: "system-ui, sans-serif" }}>Wanford Hardware</p>
              <p style={{ color: "#a8b8a0", fontSize: "14px", lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                Hardware & Trading DIY<br />
                27A Chai Chee Rd, #01-379<br />
                Singapore 461027
              </p>
            </div>
            <div>
              <p style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px", fontFamily: "system-ui, sans-serif" }}>Contact</p>
              <p style={{ color: "#a8b8a0", fontSize: "14px", lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                <a href="tel:+6596810682" style={{ color: "#a8b8a0", textDecoration: "none" }}>+65 9681 0682</a>
              </p>
            </div>
            <div>
              <p style={{ color: "#c9973e", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px", fontFamily: "system-ui, sans-serif" }}>Hours</p>
              <p style={{ color: "#a8b8a0", fontSize: "14px", lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                Mon – Fri: 10:00 AM – 7:00 PM<br />
                Sat – Sun: 11:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "32px 0 0" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(201,151,62,0.2)" }} />
            <p style={{ color: "rgba(168,184,160,0.5)", fontSize: "11px", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              © Wanford Hardware & Trading DIY · Chai Chee, Singapore
            </p>
            <div style={{ flex: 1, height: "1px", background: "rgba(201,151,62,0.2)" }} />
          </div>
        </div>
      </footer>

      {/* Decorative bottom border */}
      <div style={{ height: "6px", background: "linear-gradient(90deg, #c9973e, #e8bf6a, #c9973e, #e8bf6a, #c9973e)" }} />

    </div>
  );
}
