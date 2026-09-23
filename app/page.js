import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import Counters from '../components/Counters';
import Header from '../components/Header';
import RevealObserver from '../components/RevealObserver';
import { EMAIL, NAV, PHONE, PHONE_TEL, WA_LINK } from '../components/site';

// Add real photos by dropping them in /public and setting `src` (e.g. src: '/work-hosp.jpg').
const categories = [
  { id: 'auto', num: '01', title: 'Automotive batteries', desc: 'Batteries for cars, two-wheelers and commercial vehicles. Fitted at the shop or at your doorstep; we take the old battery back.', uses: 'Cars, bikes, tempos, trucks, fleets', photo: 'Photo: technician fitting a car battery under a bonnet' },
  { id: 'inv', num: '02', title: 'Inverters and home backup', desc: 'Inverters and tubular batteries sized to the load you actually run, not the biggest box on the shelf. Installed the same day in most cases.', uses: 'Flats, villas, shops, clinics', photo: 'Photo: inverter and battery on a trolley in a home utility corner' },
  { id: 'solar', num: '03', title: 'Solar batteries and storage', desc: 'Storage that keeps rooftop solar useful after sunset. Works with panels you already have or a new system we install.', uses: 'Rooftops, farmhouses, schools', photo: 'Photo: rooftop solar panels with storage cabinet, Jaipur skyline' },
  { id: 'li', num: '04', title: 'Lithium-ion solutions', desc: 'Lighter, longer-lasting packs for homes and equipment that need them. We will tell you plainly when lithium is worth the extra cost and when it is not.', uses: 'Premium homes, e-rickshaws, portable power', photo: 'Photo: wall-mounted lithium battery unit, close crop' },
  { id: 'ind', num: '05', title: 'Industrial batteries', desc: 'SMF and VRLA banks for UPS, telecom towers, data centres and heavy equipment. Supply, commissioning and annual maintenance contracts.', uses: 'Hospitals, factories, telecom sites, banks', photo: 'Photo: racked UPS battery bank in a server room' },
];

const brands = ['Exide', 'Amaron', 'Luminous', 'Microtek', 'Livguard', 'Okaya'];

const projects = [
  { id: 'hosp', client: 'Multi-speciality hospital', location: 'Malviya Nagar', title: 'Hospital UPS backup', installed: '120 kVA online UPS with two 40-cell SMF battery banks for ICU and OT floors. Commissioned over one weekend without a shutdown.', photo: 'Photo: hospital UPS room with racked battery banks' },
  { id: 'solar', client: 'Independent house', location: 'Vaishali Nagar', title: 'Residential solar storage', installed: '5 kW rooftop solar with 10 kWh lithium storage. Runs the house through evening cuts; grid use down by roughly 70%.', photo: 'Photo: rooftop panels on a Jaipur bungalow' },
  { id: 'show', client: 'Garment showroom', location: 'MI Road', title: 'Commercial inverter bank', installed: 'Three 5 kVA inverters with twelve tubular batteries for lighting, billing and air-conditioning. Installed in six hours on a Monday morning.', photo: 'Photo: inverter bank in a showroom back room' },
  { id: 'tel', client: 'Telecom operator', location: 'Sikar Road corridor', title: 'Telecom tower batteries', installed: 'Replaced 48 V VRLA banks at fourteen tower sites in three weeks, with old cells collected and certified for recycling.', photo: 'Photo: telecom tower base cabinet, open, new batteries' },
  { id: 'school', client: 'CBSE school', location: 'Jagatpura', title: 'School computer-lab backup', installed: '20 kVA online UPS for two computer labs and the admin office. Installed during the summer break.', photo: 'Photo: school computer lab with UPS cabinet' },
  { id: 'fleet', client: 'Logistics company', location: 'VKI Area', title: 'Fleet battery contract', installed: 'Annual supply and on-site swap for a sixty-vehicle fleet. Average turnaround under two hours per call.', photo: 'Photo: technician replacing a truck battery in a depot' },
];

const reasons = [
  { num: '01', title: 'Genuine stock, properly billed', body: 'Every battery comes from the authorised distributor with a GST invoice and the manufacturer’s warranty card in your name.' },
  { num: '02', title: 'Warranty handled here', body: 'If a battery fails in warranty, you deal with us, not a call centre. We test it, file the claim and arrange the replacement.' },
  { num: '03', title: 'Installed properly', body: 'Correct cable sizing, earthing and a load check every time. Most home installations finish within three hours of arrival.' },
  { num: '04', title: 'Service after the sale', body: 'A free health check at six months, a reminder before the warranty ends, and maintenance contracts for business sites.' },
  { num: '05', title: 'Fast response', body: 'Same-day doorstep service inside Jaipur. Emergency call-outs for hospitals and telecom sites, including Sundays.' },
];

const steps = [
  { num: '01', title: 'Enquiry', body: 'Call or message. Tell us what runs on the power and how long the cuts last.' },
  { num: '02', title: 'Site assessment', body: 'For homes, a few questions on the phone. For business sites, a visit to measure load and space.' },
  { num: '03', title: 'Recommendation', body: 'One clear written quote. Brand, capacity, warranty and what it will cost to run.' },
  { num: '04', title: 'Installation', body: 'Fitted by our own technicians, tested under load before we leave.' },
  { num: '05', title: 'Ongoing service', body: 'Health checks, warranty claims and replacements, from the same phone number.' },
];

const testimonials = [
  { quote: 'Our ICU cannot lose power for a second. They planned the changeover for a Sunday night and we never noticed it happen.', name: 'Dr. Meenakshi Sharma', type: 'Hospital administrator', city: 'Jaipur' },
  { quote: 'Inverter and two batteries fitted the same afternoon I called. Three years on, the six-month check still happens without me reminding them.', name: 'Rajesh Choudhary', type: 'Homeowner', city: 'Vaishali Nagar, Jaipur' },
  { quote: 'They told me lithium was not worth it for my usage and sold me a cheaper tubular set instead. That is why I send everyone to them.', name: 'Farhan Qureshi', type: 'Showroom owner', city: 'MI Road, Jaipur' },
];

const areasCity = 'Sikar Road, Vidhyadhar Nagar, Jhotwara, Murlipura, Vaishali Nagar, Mansarovar, C-Scheme, MI Road, Malviya Nagar, Jagatpura, Tonk Road, Pratap Nagar, Sanganer, VKI Area';
const areasBeyond = 'Chomu, Kalwar, Bagru, Kotputli, Sikar, Dausa and Ajmer Road up to Kishangarh';

const h2 = 'display text-[clamp(32px,3.6vw,54px)] leading-[.98] text-pretty';
const section = 'py-[clamp(72px,9vw,128px)]';

function Eyebrow({ className, children }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-semibold tracking-[.18em] uppercase ${className}`}>
      <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true">
        <path d="M6 0 0 8h4l-1 6 7-8H6z" className="fill-yellow" />
      </svg>
      {children}
    </p>
  );
}

function Rule({ className = '' }) {
  return <span className={`block h-[3px] w-14 bg-yellow ${className}`} />;
}

// Shows the photo when `src` is set, otherwise the caption describing the shot to take.
function ImageSlot({ src, label, className = 'text-muted' }) {
  if (src) return <Image src={src} alt={label} fill sizes="(max-width: 820px) 100vw, 50vw" className="object-cover" />;
  return (
    <div className={`absolute inset-0 grid place-items-center p-6 text-center text-[13px] ${className}`}>{label}</div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <RevealObserver />

      {/* Hero */}
      <section id="top" className="grid min-h-[min(86vh,800px)] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        <div className="relative flex flex-col justify-center overflow-hidden bg-band px-[clamp(24px,5vw,80px)] pt-[clamp(64px,9vh,120px)] pb-[clamp(56px,8vh,96px)] text-on-band">
          <Eyebrow className="mb-[22px] animate-rise text-on-band">Battery and Inverter Store · Jaipur</Eyebrow>
          <h1 className="display max-w-[14ch] animate-rise text-[clamp(44px,5.6vw,80px)] leading-[.98] text-pretty [animation-delay:.12s]">
            Power you can count on, at home and at work.
          </h1>
          <span className="my-7 block h-[3px] w-16 origin-left animate-wipe bg-yellow" />
          <p className="max-w-[46ch] animate-rise text-[clamp(16px,1.3vw,19px)] text-pretty text-band-muted [animation-delay:.28s]">
            Batteries, inverters and solar storage for Jaipur homes and businesses. Supplied, installed and serviced by one team since 2009.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:.42s]">
            <a
              href={PHONE_TEL}
              className="fill-wipe inline-flex h-[52px] items-center bg-on-band px-[26px] text-sm font-semibold tracking-[.02em] text-band [--wipe:var(--color-yellow)] hover:text-[#161514]"
            >
              Call {PHONE}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="fill-wipe inline-flex h-[52px] items-center border border-band-line px-[26px] text-sm font-medium tracking-[.02em] text-on-band [--wipe:rgb(255_255_255/.14)] hover:border-on-band hover:text-on-band"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
        <div className="relative min-h-[min(60vw,520px)] animate-fade-in bg-[#2a2724]">
          <ImageSlot label="Hero photo: technician fitting an inverter battery bank in a Jaipur home" className="text-[#a4a19b]" />
        </div>
      </section>

      {/* Homes / businesses split */}
      <section className="border-t border-band-line bg-band text-on-band">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {[
            { eyebrow: 'For Homes', title: 'Car batteries, home inverters and rooftop solar storage.', body: 'Doorstep replacement across Jaipur. Most home installations finish within three hours of our arrival.', cta: 'Enquire for your home →' },
            { eyebrow: 'For Businesses', title: 'UPS banks, telecom and data-centre batteries, solar for sites.', body: 'Site assessment, GST billing, commissioning and annual maintenance for hospitals, schools, factories and showrooms.', cta: 'Talk to us about your site →' },
          ].map((s, i) => (
            <a
              key={s.eyebrow}
              href="#contact"
              data-reveal
              data-delay={i * 120}
              className={`block px-[clamp(20px,4vw,48px)] py-[clamp(40px,5vw,72px)] text-on-band transition-colors duration-350 hover:bg-black/12 hover:text-on-band ${i === 0 ? 'border-r border-band-line' : ''}`}
            >
              <Eyebrow className="mb-[18px]">{s.eyebrow}</Eyebrow>
              <h2 className="display mb-3.5 text-[clamp(26px,2.6vw,38px)] leading-[1.12] text-pretty">{s.title}</h2>
              <p className="mb-6 max-w-[46ch] text-base text-band-muted">{s.body}</p>
              <span className="border-b-2 border-yellow pb-[3px] text-sm font-semibold">{s.cta}</span>
            </a>
          ))}
        </div>
      </section>

      {/* What we deal in */}
      <section id="deal" className="pt-[clamp(72px,9vw,128px)] pb-[clamp(48px,6vw,80px)]">
        <div className="shell">
          <div data-reveal className="mb-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-end gap-x-16 gap-y-6">
            <div>
              <Eyebrow className="mb-4 text-accent">What we deal in</Eyebrow>
              <h2 className={h2}>Five kinds of power. One place to get them right.</h2>
              <Rule className="mt-[22px]" />
            </div>
            <p className="max-w-[44ch] text-base text-muted">
              We supply, install and service everything below. If a battery is not the right fix, we will tell you.
            </p>
          </div>
          <div className="flex flex-col">
            {categories.map((c) => (
              <div
                key={c.id}
                data-reveal
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-x-14 gap-y-7 border-t border-line py-[clamp(32px,4vw,48px)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-surface">
                  <ImageSlot src={c.src} label={c.photo} />
                </div>
                <div>
                  <div className="mb-3 flex items-baseline gap-4">
                    <span className="display text-sm text-accent">{c.num}</span>
                    <h3 className="display text-[clamp(24px,2.4vw,34px)] leading-[1.15]">{c.title}</h3>
                  </div>
                  <p className="mb-5 max-w-[52ch] text-base text-pretty opacity-85">{c.desc}</p>
                  <p className="text-[13px] text-muted">
                    <span className="mr-2.5 text-[11px] font-semibold tracking-[.08em] text-accent uppercase">Typical use</span>
                    {c.uses}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="overflow-hidden border-y border-line bg-surface py-[30px]">
        <div className="shell mb-[18px]">
          <Eyebrow className="text-accent">Authorised for</Eyebrow>
        </div>
        <div className="flex w-max animate-marquee">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              aria-hidden={i >= brands.length || undefined}
              className="display flex items-center gap-10 pr-10 text-[clamp(24px,2.4vw,34px)] tracking-[.02em] whitespace-nowrap text-muted"
            >
              {b}
              <span className="inline-block size-1.5 rotate-45 bg-yellow" />
            </span>
          ))}
        </div>
      </section>

      {/* Our work */}
      <section id="work" className={section}>
        <div className="shell">
          <div data-reveal className="mb-[clamp(40px,5vw,72px)] max-w-[720px]">
            <Eyebrow className="mb-4 text-accent">Our work</Eyebrow>
            <h2 className={`${h2} mb-5`}>Installations across Jaipur, from one flat to fourteen telecom sites.</h2>
            <Rule className="mb-[22px]" />
            <p className="max-w-[52ch] text-base text-muted">A selection of recent projects. Client names are withheld; details are as installed.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-8 gap-y-[clamp(28px,3vw,40px)]">
            {projects.map((p, i) => (
              <article key={p.id} data-reveal data-delay={(i % 3) * 110} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <ImageSlot src={p.src} label={p.photo} />
                </div>
                <div className="mt-[18px] mb-2 flex justify-between gap-3 text-xs font-semibold tracking-[.12em] text-accent uppercase">
                  <span>{p.client}</span>
                  <span className="text-muted">{p.location}</span>
                </div>
                <h3 className="display mb-2 text-[clamp(22px,1.6vw,26px)] leading-[1.2]">{p.title}</h3>
                <p className="text-[15px] text-pretty opacity-80">{p.installed}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className={`bg-band text-on-band ${section}`}>
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-20 gap-y-12">
          <div data-reveal>
            <Eyebrow className="mb-4">Why Energy Solutions</Eyebrow>
            <h2 className={`${h2} mb-[22px]`}>A battery is a ten-minute purchase. The five years after are what we are for.</h2>
            <Rule className="mb-[22px]" />
            <p className="max-w-[44ch] text-base text-band-muted">One shop, one phone number, the same people who sold it to you.</p>
          </div>
          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <div key={r.num} data-reveal data-delay={i * 90} className="grid grid-cols-[48px_1fr] gap-4 border-t border-band-line py-7">
                <span className="display pt-1.5 text-[15px] text-yellow">{r.num}</span>
                <div>
                  <h3 className="display mb-2 text-[clamp(22px,2vw,30px)] leading-[1.15]">{r.title}</h3>
                  <p className="max-w-[56ch] text-base text-pretty text-band-muted">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={section}>
        <div className="shell">
          <div data-reveal className="mb-[clamp(40px,5vw,64px)] max-w-[720px]">
            <Eyebrow className="mb-4 text-accent">How it works</Eyebrow>
            <h2 className={h2}>From your first call to the years after.</h2>
            <Rule className="mt-[22px]" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
            {steps.map((s, i) => (
              <div key={s.num} data-reveal data-delay={i * 100} className="border-t-2 border-ink pt-5">
                <span className="display mb-7 block text-[15px] text-accent">{s.num}</span>
                <h3 className="display mb-2.5 text-[clamp(22px,1.6vw,26px)] leading-[1.2]">{s.title}</h3>
                <p className="text-[15px] text-pretty text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Counters />

      {/* Testimonials */}
      <section className={section}>
        <div className="shell">
          <div data-reveal>
            <Eyebrow className="mb-[clamp(32px,4vw,56px)] text-accent">What customers say</Eyebrow>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-16 gap-y-12">
            {testimonials.map((t, i) => (
              <figure key={t.name} data-reveal data-delay={i * 120} className="border-t-2 border-yellow pt-6">
                <blockquote className="display mb-6 text-[clamp(20px,1.7vw,26px)] leading-[1.4] text-pretty">“{t.quote}”</blockquote>
                <figcaption className="text-sm text-muted">
                  <span className="font-semibold text-ink">{t.name}</span> · {t.type}, {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-t border-line bg-surface py-[clamp(56px,7vw,96px)]">
        <div data-reveal className="shell grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-20 gap-y-8">
          <div>
            <Eyebrow className="mb-4 text-accent">Service area</Eyebrow>
            <h2 className="display text-[clamp(28px,3vw,42px)] leading-[1.12] text-pretty">Jaipur city, same day. Nearby towns, by appointment.</h2>
          </div>
          <div>
            <p className="mb-3.5 text-[13px] font-semibold tracking-[.1em] text-accent uppercase">Jaipur</p>
            <p className="mb-7 text-base leading-[1.8] opacity-85">{areasCity}</p>
            <p className="mb-3.5 text-[13px] font-semibold tracking-[.1em] text-accent uppercase">Beyond the city</p>
            <p className="text-base leading-[1.8] opacity-85">{areasBeyond}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={section}>
        <div className="shell">
          <div data-reveal className="mb-[clamp(40px,5vw,64px)] max-w-[720px]">
            <Eyebrow className="mb-4 text-accent">Contact</Eyebrow>
            <h2 className={h2}>Call, message, or walk in. We reply the same day.</h2>
            <Rule className="mt-[22px]" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-x-16 gap-y-12">
            <div data-reveal className="flex flex-col gap-7">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-6">
                {[
                  ['Phone / WhatsApp', <a key="p" href={PHONE_TEL} className="text-lg font-medium">{PHONE}</a>],
                  ['Email', <a key="e" href={`mailto:${EMAIL}`} className="text-base font-normal break-all">{EMAIL}</a>],
                  ['Address', <p key="a" className="text-base">Shop No. 23, Dher Ka Balaji,<br />Sikar Road, Jaipur, Rajasthan</p>],
                  ['Hours', <p key="h" className="text-base">Mon–Sat, 9:30 am – 8:00 pm<br />Sunday, 10:00 am – 2:00 pm</p>],
                ].map(([title, value]) => (
                  <div key={title}>
                    <p className="mb-1.5 text-[11px] font-semibold tracking-[.14em] text-accent uppercase">{title}</p>
                    {value}
                  </div>
                ))}
              </div>
              <div className="aspect-[16/10] bg-surface contrast-[.95] grayscale">
                <iframe
                  title="Map to Energy Solutions, Sikar Road, Jaipur"
                  src="https://maps.google.com/maps?q=Dher%20Ka%20Balaji%2C%20Sikar%20Road%2C%20Jaipur&z=15&output=embed"
                  loading="lazy"
                  className="block size-full border-0"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-band pt-14 pb-8 text-on-band">
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-12 gap-y-8 text-sm text-band-muted">
          <div>
            <Image src="/logo-light.png" alt="Energy Solutions" width={512} height={277} className="mb-4 block h-14 w-auto" />
            <p className="max-w-[30ch]">Battery and Inverter Store, Sikar Road, Jaipur. Automotive, inverter, solar, lithium and industrial.</p>
          </div>
          <div className="flex flex-col gap-2">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className="text-on-band hover:text-yellow">{label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a href={PHONE_TEL} className="text-on-band hover:text-yellow">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="text-on-band hover:text-yellow">{EMAIL}</a>
            <span>Shop No. 23, Dher Ka Balaji, Sikar Road, Jaipur</span>
          </div>
        </div>
        <div className="shell mt-10">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-band-line pt-5 text-xs text-band-muted">
            <span>GSTIN 08CYVPK1773M2ZH</span>
            <span>© 2026 Energy Solutions, Jaipur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
