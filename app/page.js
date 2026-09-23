import Image from 'next/image';
import BackupSizer from '../components/BackupSizer';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import RevealObserver from '../components/RevealObserver';
import { Arrow, Cells, Phone } from '../components/icons';
import { EMAIL, MAPS_LINK, NAV, PHONE, PHONE_TEL } from '../components/site';

// Photos in /public/img are Unsplash placeholders; swap in real shop and install photos with the same file names.
const paths = [
  { kind: 'home', tag: 'For homes', img: 'home', alt: 'Hands lifting a battery into place', title: 'Inverters, car batteries and rooftop solar storage.', body: 'Doorstep replacement across Jaipur. Most home installs are done within three hours of arrival.', items: ['Home inverters', 'Tubular batteries', 'Car & bike', 'Solar storage'], cta: 'Get a quote for your home' },
  { kind: 'biz', tag: 'For businesses', img: 'biz', alt: 'Technician testing a server rack', title: 'UPS banks, telecom batteries and site solar.', body: 'Site survey, GST billing, commissioning and annual maintenance for hospitals, schools, factories and showrooms.', items: ['Online UPS', 'SMF / VRLA banks', 'Telecom sites', 'AMC contracts'], cta: 'Book a site assessment' },
];

// The first entry is the wide feature tile; the rest are cards.
const products = [
  { img: 'inv', spec: '600 VA – 5 kVA · tubular & flat plate', title: 'Inverters and home backup', body: 'Sized to the load you actually run, not the biggest box on the shelf. Usually installed the same day.', use: 'Flats, villas, shops, clinics' },
  { img: 'ind', cls: 'r-ind', spec: 'SMF · VRLA · AMC', title: 'Industrial batteries', body: 'UPS, telecom and data-centre banks: supply, commissioning and annual maintenance.', use: 'Hospitals, factories, telecom, banks' },
  { img: 'solar', cls: 'r-sm', spec: 'Hybrid & off-grid', title: 'Solar storage', body: 'Keeps rooftop solar useful after sunset, with your panels or a new system.', use: 'Rooftops, farmhouses, schools' },
  { img: 'lithium', cls: 'r-sm', spec: 'LiFePO4', title: 'Lithium-ion', body: 'Lighter and longer-lasting. We’ll tell you plainly when it’s worth the extra cost.', use: 'Premium homes, e-rickshaws' },
  { img: 'auto', cls: 'r-sm', spec: 'Cars · bikes · trucks', title: 'Automotive', body: 'Fitted at the shop or at your door. We take the old battery back.', use: 'Cars, bikes, tempos, fleets' },
];

const brands = ['Exide', 'Amaron', 'Luminous', 'Microtek', 'Livguard', 'Okaya'];

const projects = [
  { cls: 'w1', img: 'p-hosp', alt: 'Technician working on a UPS rack', client: 'Multi-speciality hospital', location: 'Malviya Nagar', title: 'Hospital UPS backup', body: 'ICU and OT floors, commissioned over one weekend without a shutdown.', specs: ['120 kVA online UPS', '2 × 40-cell SMF'] },
  { cls: 'w2', img: 'p-solar', alt: 'Rooftop solar panels on a house', client: 'Independent house', location: 'Vaishali Nagar', title: 'Residential solar storage', body: 'Runs the house through evening cuts. Grid use down by roughly 70%.', specs: ['5 kW solar', '10 kWh lithium'] },
  { cls: 'w3', img: 'p-show', alt: 'Electrician testing a distribution panel', client: 'Garment showroom', location: 'MI Road', title: 'Commercial inverter bank', body: 'Lighting, billing and AC. Installed in six hours on a Monday morning.', specs: ['3 × 5 kVA', '12 tubular'] },
  { cls: 'w4', img: 'p-school', alt: 'Server rack with green status lights', client: 'CBSE school', location: 'Jagatpura', title: 'Computer-lab backup', body: 'Two labs and the admin office, installed during the summer break.', specs: ['20 kVA online UPS'] },
  { cls: 'w5', img: 'p-fleet', alt: 'Mechanic working in a vehicle engine bay', client: 'Logistics company', location: 'VKI Area', title: 'Fleet battery contract', body: 'Annual supply and on-site swaps. Average turnaround under two hours.', specs: ['60 vehicles', '< 2 h per call'] },
  { cls: 'w6', img: 'p-tel', alt: 'Telecom towers against a blue sky', client: 'Telecom operator', location: 'Sikar Road corridor', title: 'Telecom tower batteries', body: 'Replaced the banks at fourteen tower sites in three weeks. Old cells collected and certified for recycling.', specs: ['48 V VRLA', '14 sites', '3 weeks'] },
];

const reasons = [
  { title: 'Genuine stock, properly billed', body: 'Every battery comes from the authorised distributor with a GST invoice and the warranty card in your name.' },
  { title: 'Warranty handled here', body: 'If a battery fails in warranty, you deal with us, not a call centre. We test it, file the claim and arrange the replacement.' },
  { title: 'Installed properly', body: 'Correct cable sizing, earthing and a load check every time. Most home installs finish within three hours.' },
  { title: 'Service after the sale', body: 'A free health check at six months, a reminder before the warranty ends, and maintenance contracts for business sites.' },
  { title: 'Fast response', body: 'Same-day doorstep service inside Jaipur. Emergency call-outs for hospitals and telecom sites, Sundays included.' },
];

const steps = [
  { title: 'Enquiry', body: 'Call or send the form. Tell us what runs on the power and how long the cuts last.' },
  { title: 'Assessment', body: 'A few questions for homes; a site visit to measure load and space for businesses.' },
  { title: 'Written quote', body: 'Brand, capacity, warranty and running cost on one page.' },
  { title: 'Installation', body: 'Our own technicians, tested under load before we leave.' },
  { title: 'Aftercare', body: 'Health checks, claims and replacements from the same number.' },
];

const stats = [
  ['2009', 'Serving Jaipur from Sikar Road since'],
  ['6', 'Brands we’re authorised to sell and claim warranty on'],
  ['3 h', 'Typical time to finish a home install'],
  ['7 days', 'Emergency call-outs for hospitals and telecom'],
];

// TODO before launch: replace these samples with real Google reviews.
const testimonials = [
  { quote: 'Our ICU can’t lose power for a second. They planned the changeover for a Sunday night and we never noticed it happen.', who: 'Hospital administrator', where: 'Malviya Nagar' },
  { quote: 'Inverter and two batteries fitted the same afternoon I called. Three years on, the six-month check still happens without me asking.', who: 'Homeowner', where: 'Vaishali Nagar' },
  { quote: 'They told me lithium wasn’t worth it for my usage and sold me a cheaper tubular set. That’s why I send everyone to them.', who: 'Showroom owner', where: 'MI Road' },
];

const areasCity = ['Sikar Road', 'Vidhyadhar Nagar', 'Jhotwara', 'Murlipura', 'Vaishali Nagar', 'Mansarovar', 'C-Scheme', 'MI Road', 'Malviya Nagar', 'Jagatpura', 'Tonk Road', 'Pratap Nagar', 'Sanganer', 'VKI Area'];
const areasBeyond = ['Chomu', 'Kalwar', 'Bagru', 'Kotputli', 'Sikar', 'Dausa', 'Ajmer Road to Kishangarh'];

const half = '(max-width: 760px) 100vw, 50vw';
const third = '(max-width: 760px) 100vw, 33vw';

function Photo({ name, alt = '', sizes = half, priority }) {
  return <Image src={`/img/${name}.jpg`} alt={alt} fill sizes={sizes} priority={priority} />;
}

export default function Home() {
  const [feature, ...cards] = products;
  return (
    <>
      <Header />
      <RevealObserver />

      <main>
        {/* Hero */}
        <section className="wrap hero" id="top">
          <div>
            <span className="eyebrow rise"><Cells on={4} />Battery &amp; inverter store · Jaipur</span>
            <h1 className="rise d1">Backup power, sized right and <em>looked after</em> for years.</h1>
            <p className="lede rise d2">Batteries, inverters and solar storage for Jaipur homes and businesses. We supply, install and service it, and you keep calling the same team.</p>
            <div className="ctas rise d3">
              <a className="btn btn-dark" href="#contact">Get a free quote<span className="isle"><Arrow /></span></a>
              <a className="btn btn-light" href={PHONE_TEL}><Phone />Call {PHONE}</a>
            </div>
            <div className="facts rise d4">
              <div><b>Since 2009</b><span>on Sikar Road</span></div>
              <div><b>Same day</b><span>installs in Jaipur</span></div>
              <div><b>GST billed</b><span>warranty in your name</span></div>
            </div>
          </div>
          <div className="hero-media rise d2">
            <div className="bezel"><div className="core">
              <Photo name="hero" alt="Rows of industrial battery cells with red and blue terminals" sizes="(max-width: 900px) 100vw, 42vw" priority />
              <div className="float">
                <span className="dot" aria-hidden="true" />
                <div><p><b>Technician available today</b></p><p className="mono">Mon–Sat 9:30–8:00 · Sun 10–2</p></div>
              </div>
            </div></div>
          </div>
        </section>
        <div id="hero-end" aria-hidden="true" />

        <div className="wrap">
          <div className="brands" data-rv>
            <span className="mono">Authorised dealer for</span>
            <ul>{brands.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>

        {/* Homes / businesses */}
        <section className="wrap pt-s">
          <div className="hd hd-stack" data-rv-group>
            <h2 data-rv>Two kinds of customer. The same standard of work.</h2>
            <p className="lede" data-rv>A flat that loses power for two hours and a hospital that can’t lose it for two seconds need different answers. We give each the right one.</p>
          </div>
          <div className="paths" data-rv-group>
            {paths.map((p) => (
              <a key={p.kind} className="path lift zoom-img" href="#contact" data-kind={p.kind} data-rv>
                <div className="ph"><Photo name={p.img} alt={p.alt} /></div>
                <div className="tx">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.body}</p>
                  <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <span className="go">{p.cta}<span className="isle" aria-hidden="true">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="wrap pt-s" id="range">
          <div className="hd hd-split" data-rv-group>
            <h2 data-rv>Five kinds of power, one shop to get them right.</h2>
            <p className="lede" data-rv>We supply, install and service all of it, and we’ll tell you if a battery isn’t the right fix.</p>
          </div>
          <div className="range" data-rv-group>
            <article className="feature r-inv zoom-img" data-rv>
              <div className="ph"><Photo name={feature.img} sizes="(max-width: 760px) 100vw, 58vw" /></div>
              <div className="tx">
                <span className="spec">{feature.spec}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <p className="use"><b>Typical use</b> · {feature.use}</p>
              </div>
            </article>
            {cards.map((c) => (
              <article key={c.title} className={`pcard ${c.cls} lift zoom-img`} data-rv>
                <div className="ph"><Photo name={c.img} sizes={c.cls === 'r-ind' ? '(max-width: 760px) 100vw, 42vw' : third} /></div>
                <div className="tx">
                  <span className="spec">{c.spec}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <p className="use"><b>Typical use</b> · {c.use}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Backup sizer */}
        <section className="band pt-l pb-l" id="sizer" style={{ marginTop: 'var(--gap-l)' }}>
          <div className="wrap">
            <div className="hd hd-center" data-rv-group>
              <span className="eyebrow" data-rv><Cells on={5} />Backup sizer</span>
              <h2 data-rv>What will your home actually need?</h2>
              <p className="lede" data-rv>Add what you want running during a cut. You’ll get a rough inverter and battery size to start the conversation.</p>
            </div>
            <BackupSizer />
          </div>
        </section>

        {/* Our work */}
        <section className="wrap pt-l" id="work">
          <div className="hd hd-row" data-rv-group>
            <h2 data-rv>From one flat to fourteen telecom sites.</h2>
            <span className="count" data-rv>{projects.length} recent projects · Jaipur</span>
          </div>
          <div className="work" data-rv-group>
            {projects.map((p) => (
              <article key={p.img} className={p.cls} data-rv>
                <div className="card lift zoom-img">
                  <div className="ph"><Photo name={p.img} alt={p.alt} sizes={p.cls === 'w6' ? '(max-width: 760px) 100vw, 58vw' : half} /></div>
                  <div className="tx">
                    <div className="meta"><span>{p.client}</span><span>{p.location}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <div className="specs">{p.specs.map((s) => <span key={s}>{s}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why us + process */}
        <section className="wrap pt-l" id="why">
          <div className="why">
            <div className="why-side" data-rv-group>
              <h2 data-rv>Buying the battery takes ten minutes. We’re here for the five years after.</h2>
              <div className="bezel zoom-img" data-rv><div className="core"><Photo name="team" alt="Installer wiring an electrical panel" sizes="(max-width: 900px) 100vw, 40vw" /></div></div>
            </div>
            <div data-rv-group>
              {reasons.map((r) => (
                <div key={r.title} className="reason" data-rv><h3>{r.title}</h3><p>{r.body}</p></div>
              ))}
            </div>
          </div>
          <div className="steps-hd" data-rv><h3>How it works</h3><span className="count">From first call to the years after</span></div>
          <div className="steps" data-rv-group>
            {steps.map((s) => (
              <div key={s.title} className="stepcard" data-rv><h3>{s.title}</h3><p>{s.body}</p></div>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section className="band pt-s pb-s" style={{ marginTop: 'var(--gap-s)' }}>
          <div className="wrap">
            <div className="stats" data-rv-group>
              {stats.map(([n, label]) => <div key={n} data-rv><b>{n}</b><span>{label}</span></div>)}
            </div>
            <div className="hd hd-row" data-rv-group style={{ marginBottom: 32 }}>
              <h2 data-rv style={{ fontSize: 'clamp(28px,2.6vw,36px)' }}>What customers say</h2>
              <span className="count" data-rv>Google reviews</span>
            </div>
            <div className="quotes" data-rv-group>
              {testimonials.map((t) => (
                <figure key={t.who} className="quote" data-rv>
                  <div className="stars" aria-label="5 stars">★★★★★</div>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption><b>{t.who}</b> · {t.where}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="wrap pt-s">
          <div className="area">
            <div data-rv-group>
              <div className="hd hd-stack" style={{ marginBottom: 32 }}>
                <h2 data-rv>Jaipur the same day. Nearby towns by appointment.</h2>
              </div>
              <div className="zones">
                <div data-rv><p className="lbl">Jaipur city <span>same day</span></p><ul className="chips">{areasCity.map((a) => <li key={a}>{a}</li>)}</ul></div>
                <div data-rv><p className="lbl">Beyond the city <span>by appointment</span></p><ul className="chips">{areasBeyond.map((a) => <li key={a}>{a}</li>)}</ul></div>
              </div>
            </div>
            <div className="bezel zoom-img" data-rv><div className="core"><Photo name="jaipur" alt="Hawa Mahal facade, Jaipur" sizes="(max-width: 900px) 100vw, 42vw" /></div></div>
          </div>
        </section>

        {/* Contact */}
        <section className="wrap pt-l pb-l" id="contact">
          <div className="contact">
            <div data-rv-group>
              <div className="hd hd-stack">
                <span className="eyebrow" data-rv><Cells on={5} />Get a quote</span>
                <h2 data-rv>Tell us what needs power. We’ll call back the same day.</h2>
              </div>
              <div className="ways">
                <a className="way call" data-rv href={PHONE_TEL}>
                  <span className="ic"><Phone strokeWidth={1.6} /></span>
                  <span><small>Call or WhatsApp</small><b>{PHONE}</b></span>
                </a>
                <a className="way" data-rv href={MAPS_LINK} target="_blank" rel="noopener">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span>
                  <span><small>Visit the shop · open in Maps</small><b>Shop 23, Dher Ka Balaji, Sikar Road</b></span>
                </a>
                <div className="way" data-rv>
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg></span>
                  <span><small>Hours</small><b>Mon–Sat 9:30 am – 8 pm · Sun 10 am – 2 pm</b></span>
                </div>
                <a className="way" data-rv href={`mailto:${EMAIL}`}>
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></svg></span>
                  <span><small>Email</small><b style={{ wordBreak: 'break-all' }}>{EMAIL}</b></span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <Image src="/logo-dark.png" alt="Energy Solutions" width={512} height={277} />
              <p style={{ maxWidth: '30ch' }}>Battery and inverter store on Sikar Road, Jaipur. Automotive, inverter, solar, lithium and industrial.</p>
            </div>
            <nav aria-label="Footer">
              {[...NAV, ['#contact', 'Get a quote']].map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            </nav>
            <div className="col">
              <a href={PHONE_TEL}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>Shop 23, Dher Ka Balaji, Sikar Road, Jaipur</span>
            </div>
          </div>
          <div className="legal"><span>GSTIN 08CYVPK1773M2ZH</span><span>© 2026 Energy Solutions, Jaipur</span></div>
        </div>
      </footer>

      <div className="bar-m">
        <a className="c" href={PHONE_TEL}><Phone strokeWidth={1.6} />Call</a>
        <a className="q" href="#contact">Get a free quote</a>
      </div>
    </>
  );
}
