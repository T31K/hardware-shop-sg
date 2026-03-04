export default function NamYongIndustradesPage() {
  const photos = [
    "https://lh3.googleusercontent.com/place-photos/AL8-SNHKYgoO3idkwwTIs6aj8DCqixRDACBT3KUlC2fTE5Ch1FG8Pvc6imVgPjt0x7wI44Jaqphz74hcHoSSed5_r_JP70c7U4U3b_1ULN8Z9ANrdrStVP9jYLnm0jm0MI_3Q2f7YEVpHYOUkGCV1w=s4800-w1200",
    "https://lh3.googleusercontent.com/place-photos/AL8-SNHNHmtGkKb9tQTOzmWq_1J1IPNCdFu0UhswFLhBZbrS0yhUz4DVnc88mSkV4Iqwse_UNnrMpFOKkKsTUeLtwIvfKsVwWX7laDGOLkFN41ntkBj4pOPHCELuBdn37vIXseEuvyrGqH6HoHyC7RZLN9f5Yg=s4800-w1200",
    "https://lh3.googleusercontent.com/place-photos/AL8-SNF2MLqHj1zcGcqKkAF_jSdjukzmHJwV9nGn6dUUXfmYe9bM9JMV3Ih7Qs7aAfZIrNqKHvGxK6TcwUC8ruPcfdufoK0qD_u7y57jm_EylgFRoeJPrSb9YrvqXnjWi6VeVdacHJli1rMEcVww-A=s4800-w1200",
    "https://lh3.googleusercontent.com/place-photos/AL8-SNF3JYQR0spIZKmWVaLGuTJsIABzTl_-GnSKiCa_c-k_R29sd4vKjRSFQwFJpORroJESsxbM-EHXeFNvoBJBHBso6W222snB_q-q5xKUL0mFTX7zakW2B7_U78W8PePS1KMjmbdWDw-x3QmCGH4=s4800-w1200",
    "https://lh3.googleusercontent.com/place-photos/AL8-SNHEtnlW9TExA_ED7_wFc398G5KaSsWikeKu1zYseybLeP25IhvizHLDew68ESsvrAKWyLvozjlag4dgnSbsE4st1ga0tGbnHjnLZXKaMNZhYmKJuJR5asCtp-R_aCNGd6SI_CAXFpyoFTIpkg=s4800-w1200",
  ];

  const hours = [
    { day: "Monday", time: "8:00 AM – 5:00 PM", open: true },
    { day: "Tuesday", time: "8:00 AM – 5:00 PM", open: true },
    { day: "Wednesday", time: "8:00 AM – 5:00 PM", open: true },
    { day: "Thursday", time: "8:00 AM – 5:00 PM", open: true },
    { day: "Friday", time: "8:00 AM – 5:00 PM", open: true },
    { day: "Saturday", time: "8:00 AM – 2:00 PM", open: true },
    { day: "Sunday", time: "Closed", open: false },
  ];

  const categories = [
    { label: "Door & Window Hardware", icon: "🚪" },
    { label: "Drawer & Cabinet Rails", icon: "🗄️" },
    { label: "Building Materials", icon: "🏗️" },
    { label: "Fasteners & Screws", icon: "🔩" },
    { label: "Industrial Supplies", icon: "🏭" },
    { label: "Furniture Fittings", icon: "🪑" },
    { label: "Locks & Latches", icon: "🔒" },
    { label: "Wholesale & Retail", icon: "📦" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0f2318",
        minHeight: "100vh",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* Decorative top border */}
      <div
        style={{
          height: "6px",
          background:
            "linear-gradient(90deg, #c9973e, #e8bf6a, #c9973e, #e8bf6a, #c9973e)",
        }}
      />

      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(201,151,62,0.3)",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                border: "2px solid #c9973e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              🔧
            </div>
            <div>
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Est. Kaki Bukit
              </p>
              <p
                style={{
                  color: "#f5ead4",
                  fontSize: "18px",
                  fontWeight: "bold",
                  margin: 0,
                  letterSpacing: "1px",
                }}
              >
                Nam Yong Industrades
              </p>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "32px" }}>
            {["Products", "Services", "Hours", "Find Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                style={{
                  color: "#c9973e",
                  textDecoration: "none",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="tel:+6563825465"
            style={{
              border: "1px solid #c9973e",
              color: "#c9973e",
              padding: "8px 20px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            +65 6382 5465
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left: poster typography */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "#c9973e" }} />
              <span
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                First East Centre · Kaki Bukit
              </span>
              <div style={{ flex: 1, height: "1px", background: "#c9973e" }} />
            </div>

            <h1
              style={{
                color: "#f5ead4",
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                margin: "0 0 8px",
                fontWeight: "bold",
              }}
            >
              Nam Yong
            </h1>
            <h1
              style={{
                color: "#c9973e",
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                margin: "0 0 8px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Industrades
            </h1>
            <h1
              style={{
                color: "#f5ead4",
                fontSize: "clamp(18px, 2.5vw, 28px)",
                lineHeight: 1.05,
                margin: "0 0 32px",
                fontWeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Hardware Specialists
            </h1>

            <p
              style={{
                color: "#a8b8a0",
                fontSize: "16px",
                lineHeight: 1.8,
                margin: "0 0 36px",
                maxWidth: "440px",
              }}
            >
              Your go-to source for door and window hardware, drawer systems,
              building materials and industrial supplies at Kaki Bukit.
              Knowledgeable staff who instantly identify exactly what you need —
              saving you time and hassle.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#find-us"
                style={{
                  background: "#c9973e",
                  color: "#0f2318",
                  padding: "14px 32px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Get Directions
              </a>
              <a
                href="tel:+6563825465"
                style={{
                  border: "1px solid #c9973e",
                  color: "#c9973e",
                  padding: "14px 32px",
                  textDecoration: "none",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right: stacked photos */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                border: "1px solid rgba(201,151,62,0.25)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px",
              }}
            >
              <img
                src={photos[0]}
                alt="Nam Yong Industrades"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <img
                  src={photos[1]}
                  alt="Nam Yong Industrades"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <img
                  src={photos[2]}
                  alt="Nam Yong Industrades"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                zIndex: 2,
                background: "#0f2318",
                border: "2px solid #c9973e",
                padding: "16px 20px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "26px",
                  fontWeight: "bold",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                3.3
              </p>
              <p
                style={{
                  color: "#f5ead4",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  margin: "4px 0 0",
                  textTransform: "uppercase",
                }}
              >
                ★★★ Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div
        style={{
          background: "#c9973e",
          padding: "18px 32px",
          margin: "40px 0 0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {[
            {
              icon: "📍",
              label: "Location",
              value: "10 Kaki Bukit Rd 2, #01-02",
            },
            { icon: "🗓️", label: "Weekdays", value: "8:00 AM – 5:00 PM" },
            { icon: "🗓️", label: "Saturday", value: "8:00 AM – 2:00 PM" },
            { icon: "🏭", label: "Wholesale", value: "Available In-Store" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#0f2318",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "0 0 2px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.icon} {item.label}
              </p>
              <p
                style={{
                  color: "#0f2318",
                  fontWeight: "bold",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products section */}
      <section
        id="products"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 32px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ width: "60px", height: "1px", background: "#c9973e" }}
            />
            <span
              style={{
                color: "#c9973e",
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              What We Carry
            </span>
            <div
              style={{ width: "60px", height: "1px", background: "#c9973e" }}
            />
          </div>
          <h2
            style={{
              color: "#f5ead4",
              fontSize: "38px",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            The Full Catalogue
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              style={{
                background: "rgba(201,151,62,0.06)",
                border: "1px solid rgba(201,151,62,0.15)",
                padding: "36px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "14px" }}>
                {cat.icon}
              </div>
              <p
                style={{
                  color: "#f5ead4",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  margin: 0,
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo gallery strip */}
      <section style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          {photos.slice(2).map((url, i) => (
            <div
              key={i}
              style={{ flex: 1, position: "relative", overflow: "hidden" }}
            >
              <img
                src={url}
                alt={`Nam Yong Industrades ${i + 3}`}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  display: "block",
                  filter: "sepia(20%) brightness(0.85)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services spotlight */}
      <section id="services" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px",
            }}
          >
            <div
              style={{
                background: "rgba(245,234,212,0.04)",
                border: "1px solid rgba(201,151,62,0.2)",
                padding: "56px 48px",
              }}
            >
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Service 01
              </p>
              <h3
                style={{
                  color: "#f5ead4",
                  fontSize: "32px",
                  margin: "0 0 20px",
                  fontWeight: "bold",
                }}
              >
                Hardware & Industrial
              </h3>
              <p
                style={{
                  color: "#a8b8a0",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  margin: "0 0 32px",
                }}
              >
                A comprehensive stock of hardware and industrial supplies — from
                soft-close drawer runners to HDB window handles, building
                materials, and everything in between. Walk in with a sample and
                walk out with the right part.
              </p>
              <ul
                style={{ color: "#c9973e", padding: "0 0 0 16px", margin: 0 }}
              >
                {[
                  "Door & Window Fittings",
                  "Drawer Systems & Rails",
                  "Locks & Latches",
                  "Fasteners & Fixings",
                  "Industrial Hardware",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      marginBottom: "8px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#c9973e", padding: "56px 48px" }}>
              <p
                style={{
                  color: "#0f2318",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                  fontFamily: "system-ui, sans-serif",
                  opacity: 0.7,
                }}
              >
                Service 02
              </p>
              <h3
                style={{
                  color: "#0f2318",
                  fontSize: "32px",
                  margin: "0 0 20px",
                  fontWeight: "bold",
                }}
              >
                Wholesale & Bulk Supply
              </h3>
              <p
                style={{
                  color: "rgba(15,35,24,0.8)",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  margin: "0 0 32px",
                }}
              >
                Serving contractors, renovators and trade buyers with
                competitive wholesale pricing. Also available on Lazada —
                walk-in prices often beat online listings. Fast, knowledgeable
                service for trade and DIY alike.
              </p>
              <ul
                style={{ color: "#0f2318", padding: "0 0 0 16px", margin: 0 }}
              >
                {[
                  "Trade & Contractor Pricing",
                  "Building Materials",
                  "Furniture Fittings",
                  "Also on Lazada",
                  "Walk-In Welcome",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      marginBottom: "8px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div
        style={{
          background: "rgba(201,151,62,0.07)",
          borderTop: "1px solid rgba(201,151,62,0.2)",
          borderBottom: "1px solid rgba(201,151,62,0.2)",
          padding: "56px 32px",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              color: "#c9973e",
              fontSize: "40px",
              marginBottom: "16px",
              letterSpacing: "4px",
            }}
          >
            ❝
          </div>
          <p
            style={{
              color: "#f5ead4",
              fontSize: "22px",
              lineHeight: 1.7,
              margin: "0 0 24px",
              fontStyle: "italic",
            }}
          >
            {`"Staff could instantly tell I needed a 7mm hole instead of 8mm — saved me a lot of hassle. Pricing was fair, service was top-notch. A five-star experience."`}
          </p>
          <p
            style={{
              color: "#c9973e",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            — {`Google Review · ★★★★★`}
          </p>
        </div>
      </div>

      {/* Hours + Map */}
      <section
        id="hours"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 32px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          <div
            style={{ width: "60px", height: "1px", background: "#c9973e" }}
          />
          <span
            style={{
              color: "#c9973e",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            When We&apos;re Open
          </span>
          <div
            style={{ width: "60px", height: "1px", background: "#c9973e" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div>
            {hours.map((h, i) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom:
                    i < hours.length - 1
                      ? "1px solid rgba(201,151,62,0.12)"
                      : "none",
                }}
              >
                <span
                  style={{
                    color: "#a8b8a0",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {h.day}
                </span>
                <span
                  style={{
                    color: h.open ? "#c9973e" : "rgba(168,184,160,0.4)",
                    fontSize: "14px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}

            <div
              style={{
                marginTop: "40px",
                padding: "24px",
                border: "1px solid rgba(201,151,62,0.2)",
                background: "rgba(201,151,62,0.04)",
              }}
            >
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                📍 Address
              </p>
              <p
                style={{
                  color: "#f5ead4",
                  fontSize: "16px",
                  margin: "0 0 16px",
                  lineHeight: 1.6,
                }}
              >
                {`10 Kaki Bukit Rd 2, #01-02`}
                <br />
                {`First East Centre`}
                <br />
                {`Singapore 417868`}
              </p>
              <a
                href="tel:+6563825465"
                style={{
                  color: "#c9973e",
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                📞 {`+65 6382 5465`}
              </a>
            </div>
          </div>

          <div id="find-us" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                border: "1px solid rgba(201,151,62,0.3)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d103.8986!3d1.3386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17e6e6cdb7b5%3A0x4d44269c39e4bd91!2sNam+Yong+Industrades!5e0!3m2!1sen!2ssg!4v1"
              width="100%"
              height="380"
              style={{
                border: 0,
                display: "block",
                filter: "sepia(30%) brightness(0.7) hue-rotate(20deg)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nam Yong Industrades location"
            />
          </div>
        </div>
      </section>

      {/* Second photo grid */}
      <section
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px 80px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4px",
          }}
        >
          {photos.slice(0, 3).map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Nam Yong ${i + 1}`}
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
                filter: "sepia(15%) brightness(0.9)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,151,62,0.25)",
          padding: "40px 32px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(201,151,62,0.3)",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#c9973e",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(201,151,62,0.3)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "32px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Nam Yong Industrades
              </p>
              <p
                style={{
                  color: "#a8b8a0",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Hardware Specialists
                <br />
                10 Kaki Bukit Rd 2, #01-02
                <br />
                First East Centre
                <br />
                Singapore 417868
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Contact
              </p>
              <p
                style={{
                  color: "#a8b8a0",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                <a
                  href="tel:+6563825465"
                  style={{ color: "#a8b8a0", textDecoration: "none" }}
                >
                  +65 6382 5465
                </a>
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#c9973e",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Hours
              </p>
              <p
                style={{
                  color: "#a8b8a0",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Mon – Fri: 8:00 AM – 5:00 PM
                <br />
                Saturday: 8:00 AM – 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "32px 0 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(201,151,62,0.2)",
              }}
            />
            <p
              style={{
                color: "rgba(168,184,160,0.5)",
                fontSize: "11px",
                margin: 0,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              © Nam Yong Industrades · Kaki Bukit, Singapore
            </p>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(201,151,62,0.2)",
              }}
            />
          </div>
        </div>
      </footer>

      {/* Decorative bottom border */}
      <div
        style={{
          height: "6px",
          background:
            "linear-gradient(90deg, #c9973e, #e8bf6a, #c9973e, #e8bf6a, #c9973e)",
        }}
      />
    </div>
  );
}
