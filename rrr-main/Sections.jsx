/* Mr Gleamz — Home page sections. Responsive for mobile. */

const SECTION = { padding: "var(--section-y-md) 5%" };
const CONTAINER = { maxWidth: "var(--container-xxl)", margin: "0 auto" };
const BOOKING_URL = "https://mrgleamzz.setmore.com/";

function Hero({ onBook, onNav }) {
  const { Button } = window.ReviveRefineDesignSystem_38ca5a;
  const isMobile = window.useIsMobile();
  return (
    <section className="scheme-1" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "7rem 5% 4rem" : "7rem 5% 4rem", overflow: "hidden" }}>
      <img src="./assets/images/hero.jpg" alt="Mr Gleamz Automotive Detailing" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.62) 45%, rgba(10,10,10,0.94) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "52rem" }}>
        <p style={{ fontSize: "var(--text-small)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "var(--space-5)" }}>
          Mobile detailing · Sunderland
        </p>
        <h1 style={{ fontSize: isMobile ? "clamp(2.6rem, 9vw, 3.4rem)" : "clamp(3.5rem, 6.5vw, 6rem)", lineHeight: 1.05, marginBottom: "var(--space-5)", fontWeight: 800, color: "#FFFFFF" }}>
          <span style={{ display: "block" }}>Your vehicle deserves</span>
          <span style={{ display: "block" }}>more than a wash.</span>
        </h1>
        <p style={{ fontSize: "var(--text-medium)", color: "rgba(255,255,255,0.82)", marginBottom: "var(--space-8)", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
          Ceramic coatings, machine polishing and full valets — brought to your driveway. Fully insured &amp; verified.
        </p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "var(--space-3)" }}>
          <Button variant="primary" onClick={() => window.open(BOOKING_URL, "_blank")}>Book in online</Button>
          <Button variant="secondary" onClick={() => onNav && onNav("Services")}>Our services</Button>
        </div>
      </div>
    </section>
  );
}

function FeatureIntro() {
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  const steps = [
    { icon: "calendar_month", num: "01", title: "Book online", body: "Pick your service and a time that suits you." },
    { icon: "directions_car", num: "02", title: "We come to you", body: "Fully mobile — we arrive equipped, nothing to prepare." },
    { icon: "auto_awesome", num: "03", title: "We work", body: "Every surface treated with the right products and time." },
    { icon: "star", num: "04", title: "Showroom finish", body: "You get back a vehicle restored to its best." },
  ];
  return (
    <section className="scheme-3" style={{ ...SECTION, borderTop: "1px solid var(--scheme-border)", borderBottom: "1px solid var(--scheme-border)" }}>
      <div style={CONTAINER}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <p style={{ fontWeight: 600, color: "var(--accent)", marginBottom: "var(--space-3)" }}>How it works</p>
          <h2>Simple from start to finish</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? "var(--space-6)" : "var(--space-8)", position: "relative" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-tiny)", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em" }}>{s.num}</span>
                {!isMobile && i < steps.length - 1 && <div style={{ flex: 1, height: 1, background: "var(--scheme-border)" }} />}
              </div>
              <div style={{ display: "inline-flex", width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-checkbox)", background: "var(--color-mongoose-lighter)", color: "var(--accent)" }}>
                <Icon name={s.icon} size={22} />
              </div>
              <div>
                <h5 style={{ marginBottom: "var(--space-2)" }}>{s.title}</h5>
                <p style={{ color: "var(--scheme-muted)", fontSize: "var(--text-small)" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: "wash", title: "Basic Wash & Maintenance", body: "A thorough exterior wash to keep it looking sharp.", price: "from £30" },
  { icon: "airline_seat_recline_extra", title: "Interior Detail", body: "Cabin deep cleaned, conditioned and refreshed.", price: "from £30" },
  { icon: "auto_fix", title: "Full Valet / Detail", body: "Inside and out, top to bottom, in one visit.", price: "from £60" },
  { icon: "lens_blur", title: "Machine Polish", body: "Swirls and scratches corrected for real gloss.", price: "from £100" },
  { icon: "shield", title: "Ceramic Coating", body: "Long-term paint protection that keeps its shine.", price: "from £150" },
];

function ServicesList() {
  const { Card, CardBody } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="scheme-3" style={SECTION}>
      <div style={CONTAINER}>
        <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", textAlign: "center", marginBottom: "var(--space-12)" }}>
          <p style={{ marginBottom: "var(--space-3)", fontWeight: 600, color: "var(--accent)" }}>Services</p>
          <h2>Everything your car needs</h2>
          <p style={{ color: "var(--scheme-muted)", marginTop: "var(--space-3)" }}>Priced by vehicle size. Full list and live availability on the booking page.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "var(--space-8)", alignItems: "stretch" }}>
          {!isMobile && (
            <img src="./assets/images/services-feature.jpg" alt="What we offer" style={{ width: "100%", height: "100%", borderRadius: "var(--radius-image)", objectFit: "cover", aspectRatio: "4 / 5" }} />
          )}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "var(--space-4)" }}>
            {isMobile && (
              <img src="./assets/images/services-feature.jpg" alt="What we offer" style={{ width: "100%", borderRadius: "var(--radius-image)", objectFit: "contain", marginBottom: "var(--space-4)" }} />
            )}
            {SERVICES.map((s, i) => (
              <Card key={s.title} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => window.open(BOOKING_URL, "_blank")} style={{ borderColor: "var(--color-neutral-lightest)", boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)", transform: hovered === i ? "translateY(-4px)" : "translateY(0)", transition: "transform 0.18s ease, box-shadow 0.18s ease", cursor: "pointer" }}>
                <CardBody style={{ padding: "var(--space-5) var(--space-6)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                      <span style={{ display: "inline-flex", width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-checkbox)", background: "var(--color-mongoose-lighter)", color: "var(--accent)", flex: "none" }}>
                        <Icon name={s.icon} size={22} />
                      </span>
                      <h5 style={{ fontSize: "var(--text-h6)" }}>{s.title}</h5>
                    </div>
                    <Icon name="chevron_right" size={20} style={{ color: "var(--scheme-muted)", flex: "none" }} />
                  </div>
                  <p style={{ color: "var(--scheme-muted)", fontSize: "var(--text-small)", marginTop: "var(--space-3)" }}>{s.body}</p>
                  <p style={{ color: "var(--accent)", fontSize: "var(--text-small)", fontWeight: 600, marginTop: "var(--space-2)" }}>{s.price}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  { icon: "verified", title: "Fully insured & verified", body: "Your vehicle is covered from the moment we arrive until we're done." },
  { icon: "search_check", title: "Showroom-quality finish", body: "We enhance gloss, protect paintwork and restore vehicles properly — not a quick wash." },
  { icon: "directions_car", title: "Fully mobile", body: "We come to you across Sunderland. Your driveway, your schedule." },
];

function Benefits({ onNav }) {
  const { Button } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  return (
    <section className="scheme-3" style={{ ...SECTION, paddingTop: 0 }}>
      <div style={CONTAINER}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "var(--space-8)" : "var(--space-16)", alignItems: "center" }}>
          <div>
            <h2 style={{ marginBottom: isMobile ? "var(--space-6)" : "var(--space-12)" }}>Why choose us</h2>
            {isMobile && (
              <img src="./assets/images/benefits.jpg" alt="Detailing in progress" style={{ width: "100%", borderRadius: "var(--radius-image)", objectFit: "cover", aspectRatio: "16 / 7", marginBottom: "var(--space-8)" }} />
            )}
            <div style={{ display: "grid", gap: "var(--space-8)" }}>
              {BENEFITS.map((b) => (
                <div key={b.title} style={{ display: "flex", gap: "var(--space-6)" }}>
                  <Icon name={b.icon} size={44} style={{ flex: "none", color: "var(--accent)" }} />
                  <div>
                    <h5 style={{ marginBottom: "var(--space-2)" }}>{b.title}</h5>
                    <p style={{ color: "var(--scheme-muted)" }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "var(--space-8)" }}>
              <Button variant="primary" onClick={() => window.open(BOOKING_URL, "_blank")}>
                Book in online <Icon name="arrow_forward" size={18} />
              </Button>
            </div>
          </div>
          {!isMobile && (
            <img src="./assets/images/benefits.jpg" alt="Detailing in progress" style={{ width: "100%", borderRadius: "var(--radius-image)", objectFit: "cover", aspectRatio: "4 / 5" }} />
          )}
        </div>
      </div>
    </section>
  );
}

function Gallery({ onNav }) {
  const isMobile = window.useIsMobile();
  const [hovered, setHovered] = React.useState(null);
  const [btnHovered, setBtnHovered] = React.useState(false);
  const images = [
    { src: "gallery-full-valet.jpg", label: "Full Valet", sub: "Inside and out, top to bottom", pos: "center center" },
    { src: "gallery-0.jpg", label: "Machine Polish", sub: "Swirl & scratch correction", pos: "center center" },
    { src: "gallery-ceramic.jpg", label: "Ceramic Coating", sub: "Long-term paint protection", pos: "center center" },
    { src: "gallery-interior.jpg", label: "Interior Detail", sub: "Deep clean & conditioning", pos: "center center" },
  ];
  const visibleImages = isMobile ? images.slice(0, 2) : images;
  return (
    <section className="scheme-1" style={SECTION}>
      <div style={CONTAINER}>
        <div style={{ textAlign: "center", margin: "0 auto var(--space-12)", maxWidth: "var(--container-lg)" }}>
          <p style={{ marginBottom: "var(--space-4)", fontWeight: 600, color: "var(--accent)" }}>Our work</p>
          <h2>Results that speak for themselves</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "var(--space-6)" }}>
          {visibleImages.map((img, i) => (
            <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ border: "1px solid var(--color-neutral-lightest)", borderRadius: "var(--radius-image)", boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)", overflow: "hidden", background: "var(--scheme-bg)", transform: hovered === i ? "translateY(-4px)" : "translateY(0)", transition: "transform 0.18s ease, box-shadow 0.18s ease", cursor: "pointer" }}>
              <img src={`./assets/images/${img.src}`} alt={img.label} style={{ width: "100%", height: isMobile ? "14rem" : "22rem", objectFit: "cover", objectPosition: img.pos, display: "block" }} />
              <div style={{ padding: "var(--space-4) var(--space-5)" }}>
                <p style={{ fontWeight: 600, color: "var(--scheme-text)", margin: 0 }}>{img.label}</p>
                <p style={{ fontSize: "var(--text-small)", color: "var(--scheme-muted)", margin: "var(--space-1) 0 0", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }}></span>
                  {img.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <a href="https://www.instagram.com/mr.gleamz/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontWeight: 600, fontSize: "var(--text-small)", display: "inline-flex", alignItems: "center", gap: "var(--space-2)", padding: 0, textDecoration: "none", opacity: btnHovered ? 0.7 : 1, transform: btnHovered ? "translateX(3px)" : "translateX(0)", transition: "opacity 0.15s ease, transform 0.15s ease" }}>
            See more on Instagram <span style={{ fontSize: "1em" }}>›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  { stars: 5, quote: "This looks so much better!", name: "Instagram customer", meta: "Full valet · Sunderland" },
  { stars: 5, quote: "[PLACEHOLDER — replace with a real customer review]", name: "[Customer name]", meta: "[Car] · Sunderland" },
  { stars: 5, quote: "[PLACEHOLDER — replace with a real customer review]", name: "[Customer name]", meta: "[Car] · Sunderland" },
];

function Testimonials({ onBook }) {
  const { Card, CardBody } = window.ReviveRefineDesignSystem_38ca5a;
  const Stars = window.RRStars;
  const isMobile = window.useIsMobile();
  const [linkHovered, setLinkHovered] = React.useState(false);
  const [start, setStart] = React.useState(0);
  const PER_PAGE = isMobile ? 1 : 3;
  const total = QUOTES.length;
  const visible = Array.from({ length: PER_PAGE }, (_, i) => QUOTES[(start + i) % total]);
  const ArrowBtn = ({ onClick, icon }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <button onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--scheme-border)", background: hovered ? "rgba(0,0,0,0.12)" : "transparent", cursor: "pointer", color: "var(--scheme-text)", transition: "background 0.15s" }}>
        <span className="material-symbols-rounded" style={{ fontSize: 20 }}>{icon}</span>
      </button>
    );
  };
  return (
    <section className="scheme-3" style={SECTION}>
      <div style={CONTAINER}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <p style={{ marginBottom: "var(--space-2)", fontWeight: 600, color: "var(--accent)" }}>Reviews</p>
          <h2 style={{ margin: 0 }}>What clients say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "var(--space-6)" }}>
          {visible.map((q, i) => (
            <Card key={i}>
              <CardBody style={{ padding: "var(--space-6)" }}>
                <Stars count={q.stars} />
                <p style={{ margin: "var(--space-3) 0 var(--space-4)", fontSize: "var(--text-medium)", color: "var(--scheme-text)" }}>"{q.quote}"</p>
                <div style={{ fontSize: "var(--text-small)", color: "var(--scheme-muted)" }}>
                  <strong style={{ color: "var(--scheme-text)" }}>{q.name}</strong> · {q.meta}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-4)", marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>
          <ArrowBtn icon="arrow_back" onClick={() => setStart((s) => (s - PER_PAGE + total) % total)} />
          <ArrowBtn icon="arrow_forward" onClick={() => setStart((s) => (s + PER_PAGE) % total)} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-4)" }}>
          <a href="https://www.instagram.com/mr.gleamz/" target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setLinkHovered(true)} onMouseLeave={() => setLinkHovered(false)}
            style={{ color: "var(--accent)", fontWeight: 600, fontSize: "var(--text-small)", textDecoration: "none", opacity: linkHovered ? 0.7 : 1, transition: "opacity 0.15s ease" }}>
            See more on Instagram ›
          </a>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const { Button } = window.ReviveRefineDesignSystem_38ca5a;
  const isMobile = window.useIsMobile();
  return (
    <section className="scheme-1" style={SECTION}>
      <div style={{ ...CONTAINER, maxWidth: "var(--container-md)", textAlign: "center" }}>
        <h2 style={{ marginBottom: "var(--space-5)" }}>Ready when you are</h2>
        <p style={{ fontSize: "var(--text-medium)", color: "var(--scheme-muted)" }}>Pick your service, choose a slot, and we'll come to you. Booking takes a minute.</p>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "center", gap: "var(--space-3)", margin: "var(--space-8) auto 0" }}>
          <Button variant="primary" onClick={() => window.open(BOOKING_URL, "_blank")}>Book in online</Button>
          <Button variant="secondary" onClick={() => window.open("tel:+447462885070")}>Call 07462 885070</Button>
        </div>
        <p style={{ fontSize: "var(--text-tiny)", color: "var(--scheme-muted)", marginTop: "var(--space-4)" }}>
          Fully insured &amp; verified · Mobile service across Sunderland
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { RRHero: Hero, RRFeatureIntro: FeatureIntro, RRServicesList: ServicesList, RRBenefits: Benefits, RRGallery: Gallery, RRTestimonials: Testimonials, RRNewsletter: Newsletter });
