import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShieldCheck, HardHat, ClipboardCheck, Users, ArrowRight, CheckCircle2, Phone, Mail, MessageCircle, Target, Activity, FileCheck2, Mountain, ChevronRight } from 'lucide-react'
import './style.css'

const phoneDisplay = '+260 000 000 000'
const whatsappNumber = '260000000000'
const email = 'info@aegisrise.co.za'

function App() {
  const services = [
    { icon: <ClipboardCheck />, title: 'Contractor Safety Readiness Reviews', text: 'Structured reviews that help verify whether contractors are prepared to execute high-risk work with the right controls, supervision, equipment, and compliance discipline.' },
    { icon: <HardHat />, title: 'Working at Height Compliance Support', text: 'Practical support for fall prevention, fall protection, harness controls, access systems, permits, inspections, and safe work execution.' },
    { icon: <Users />, title: 'Behaviour Based Safety Awareness', text: 'Focused awareness and coaching to help teams understand how decisions, habits, supervision, and culture influence safe performance.' }
  ]

  const reasons = [
    { icon: <Target />, title: 'Prevention-Focused', text: 'We focus on identifying safety gaps before they become serious events.' },
    { icon: <Activity />, title: 'Field Practical', text: 'Our approach is designed for real operational environments, not paperwork only.' },
    { icon: <FileCheck2 />, title: 'Compliance-Minded', text: 'We support readiness, documentation, and visible control effectiveness.' },
    { icon: <Mountain />, title: 'High-Risk Work Focus', text: 'Our positioning is built around work-at-height and critical-risk activities.' }
  ]

  return (
    <main>
      <nav className="nav">
        <a href="#" className="brand">
          <div className="logoMark"><ShieldCheck size={26} /></div>
          <div>
            <div className="brandName">AegisRise</div>
            <div className="brandSub">Safety Technologies</div>
          </div>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#why">Why AegisRise</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navBtn" href="#contact">Request Safety Review</a>
      </nav>

      <section className="hero">
        <div className="heroGrid">
          <div className="heroText">
            <div className="eyebrow"><CheckCircle2 size={16}/> Practical high-risk work safety support</div>
            <h1>Practical Safety Solutions for High-Risk Work Environments.</h1>
            <p>
              AegisRise Safety Technologies helps organizations strengthen contractor readiness,
              improve work-at-height controls, and build safer operational behaviour through practical,
              field-focused safety support.
            </p>
            <div className="heroActions">
              <a className="primaryBtn" href="#contact">Request Safety Review <ArrowRight size={18}/></a>
              <a className="secondaryBtn" href={`https://wa.me/${whatsappNumber}`}>WhatsApp Enquiry <MessageCircle size={18}/></a>
            </div>
          </div>

          <div className="heroPanel">
            <div className="panelInner">
              <div className="panelLabel">High-Risk Work Control</div>
              <h2>Helping teams operate safer, smarter, and more responsibly.</h2>
              <p>
                We help identify critical safety gaps before they become incidents — especially where teams
                are exposed to fall hazards, unsafe equipment, weak contractor controls, or ineffective supervision.
              </p>
              <div className="checks">
                <span><CheckCircle2/> Working at height risk control</span>
                <span><CheckCircle2/> Contractor safety readiness</span>
                <span><CheckCircle2/> Behaviour based safety awareness</span>
                <span><CheckCircle2/> Compliance gap identification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trustBand">
        <div>
          <strong>Core focus:</strong>
          <span>Working at Height</span>
          <span>Contractor Readiness</span>
          <span>BBS Awareness</span>
          <span>Compliance Support</span>
        </div>
      </section>

      <section id="services" className="section light">
        <div className="sectionHead">
          <span>Services</span>
          <h2>Field-focused safety support designed for real operational environments.</h2>
          <p>Clear, practical, and prevention-driven support for organizations managing high-risk activities, contractors, and operational safety expectations.</p>
        </div>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" className="cardLink">Discuss this service <ChevronRight size={17}/></a>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="section dark">
        <div className="splitHead">
          <div>
            <span className="sectionTag">Why AegisRise</span>
            <h2>Built around prevention, behaviour, and operational readiness.</h2>
          </div>
          <p>Safety performance improves when people understand risk, leaders verify controls, and contractors arrive ready to execute work responsibly.</p>
        </div>
        <div className="reasonGrid">
          {reasons.map((reason) => (
            <article key={reason.title} className="reasonCard">
              <div className="reasonIcon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutPanel">
          <span className="sectionTag">About AegisRise</span>
          <h2>Strengthening safety culture through practical risk control.</h2>
          <p>AegisRise Safety Technologies exists to help organizations identify safety gaps, strengthen contractor readiness, and improve controls for high-risk work.</p>
          <p>Our positioning is intentionally clear: practical high-risk work safety solutions focused on prevention, behaviour, and operational readiness.</p>
        </div>
        <div className="metricPanel">
          <div><strong>01</strong><span>Identify critical safety gaps</span></div>
          <div><strong>02</strong><span>Strengthen contractor readiness</span></div>
          <div><strong>03</strong><span>Improve field-level control visibility</span></div>
          <div><strong>04</strong><span>Build safer operational behaviour</span></div>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Need a practical safety review?</h2>
          <p>Start with a focused review of high-risk work, contractor readiness, and working-at-height controls.</p>
        </div>
        <a href="#contact">Request Safety Review</a>
      </section>

      <section id="contact" className="section dark contact">
        <div>
          <span className="sectionTag">Contact</span>
          <h2>Let’s strengthen your safety controls.</h2>
          <p>Connect with AegisRise Safety Technologies for contractor readiness reviews, working-at-height support, behaviour based safety awareness, and practical compliance guidance.</p>
          <div className="contactItems">
            <a href={`mailto:${email}`}><Mail/> {email}</a>
            <a href="tel:+260000000000"><Phone/> {phoneDisplay}</a>
            <a href={`https://wa.me/${whatsappNumber}`}><MessageCircle/> WhatsApp Enquiry</a>
          </div>
        </div>
        <form className="form" action={`mailto:${email}`} method="post" encType="text/plain">
          <input name="name" placeholder="Full name" />
          <input name="email" placeholder="Email address" />
          <input name="company" placeholder="Company / organization" />
          <textarea name="message" placeholder="Tell us what support you need"></textarea>
          <button type="submit">Submit Enquiry</button>
          <small>This basic form opens the visitor’s email app. It can later be upgraded to a direct online form.</small>
        </form>
      </section>

      <footer>
        <div className="brand footerBrand">
          <div className="logoMark"><ShieldCheck size={22} /></div>
          <div>
            <div className="brandName">AegisRise</div>
            <div className="brandSub">Safety Technologies</div>
          </div>
        </div>
        <div className="footerLinks">
          <a href="#services">Services</a>
          <a href="#why">Why AegisRise</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} AegisRise Safety Technologies. All rights reserved.</p>
      </footer>

      <a className="whatsappFloat" href={`https://wa.me/${whatsappNumber}`} aria-label="Chat on WhatsApp">
        <MessageCircle/>
      </a>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
