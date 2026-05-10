import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShieldCheck, HardHat, ClipboardCheck, Users, ArrowRight, CheckCircle2, Phone, Mail, MessageCircle } from 'lucide-react'
import './style.css'

function App() {
  const services = [
    {
      icon: <ClipboardCheck />,
      title: 'Contractor Safety Readiness Reviews',
      text: 'Focused reviews to confirm whether contractors are ready to perform high-risk work safely and responsibly.'
    },
    {
      icon: <HardHat />,
      title: 'Working at Height Compliance Support',
      text: 'Support with fall prevention, fall protection, harness controls, ladder use, access systems, permits, and field observations.'
    },
    {
      icon: <Users />,
      title: 'Behaviour Based Safety Awareness',
      text: 'Helping teams understand how choices, habits, supervision, and workplace culture influence safe performance.'
    }
  ]

  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="logoMark"><ShieldCheck size={26} /></div>
          <div>
            <div className="brandName">AegisRise</div>
            <div className="brandSub">Safety Technologies</div>
          </div>
        </div>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navBtn" href="#contact">Request Review</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow"><CheckCircle2 size={16}/> Practical safety compliance support</div>
          <h1>Rising safety. Elevating high-risk work control.</h1>
          <p>
            AegisRise Safety Technologies supports businesses with contractor safety readiness,
            working-at-height compliance, site observations, and behaviour based safety awareness.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">Book a Safety Review <ArrowRight size={18}/></a>
            <a className="secondaryBtn" href="#services">View Services</a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelInner">
            <div className="panelLabel">Core Focus</div>
            <h2>High-risk work deserves stronger control.</h2>
            <p>
              We help identify safety gaps before they become incidents, especially where people are exposed to falls,
              unsafe equipment, weak supervision, or poor contractor controls.
            </p>
            <div className="checks">
              <span><CheckCircle2/> Working at height risk control</span>
              <span><CheckCircle2/> Contractor safety readiness</span>
              <span><CheckCircle2/> Behaviour based safety awareness</span>
              <span><CheckCircle2/> Compliance gap identification</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section light">
        <div className="sectionHead">
          <span>Services</span>
          <h2>Safety support built for practical field conditions.</h2>
          <p>Clear and usable safety support for teams that need compliance without unnecessary complexity.</p>
        </div>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section dark twoCol">
        <div>
          <span className="sectionTag">About AegisRise</span>
          <h2>A practical safety partner for growing businesses.</h2>
          <p>
            AegisRise Safety Technologies exists to help organizations identify safety gaps,
            strengthen contractor readiness, and improve work-at-height risk controls.
          </p>
          <p>
            The approach is practical, field-based, and focused on prevention before serious events occur.
          </p>
        </div>
        <div className="gridList">
          <div>Working at height risk control</div>
          <div>Fall prevention and protection checks</div>
          <div>Contractor safety readiness</div>
          <div>BBS coaching and awareness</div>
          <div>Site safety observations</div>
          <div>Compliance gap identification</div>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Need a safety readiness review?</h2>
          <p>Start with a focused review of high-risk work, contractor readiness, and working-at-height controls.</p>
        </div>
        <a href="#contact">Contact AegisRise</a>
      </section>

      <section id="contact" className="section dark contact">
        <div>
          <span className="sectionTag">Contact</span>
          <h2>Let’s strengthen your safety controls.</h2>
          <p>Use the contact details below to request support, a safety review, or a consultation.</p>
          <div className="contactItems">
            <a href="mailto:info@aegisrise.co.za"><Mail/> info@aegisrise.co.za</a>
            <a href="tel:+260000000000"><Phone/> +260 000 000 000</a>
            <a href="https://wa.me/260000000000"><MessageCircle/> WhatsApp Enquiry</a>
          </div>
        </div>

        <form className="form" action="mailto:info@aegisrise.co.za" method="post" encType="text/plain">
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
        <p>© {new Date().getFullYear()} AegisRise Safety Technologies. All rights reserved.</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
