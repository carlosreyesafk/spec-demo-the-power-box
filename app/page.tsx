import "./globals.css";

const WHATSAPP = "https://wa.me/18298605009";
const ADDRESS = "Calle 4 #23, Ensanche Isabelita, Santo Domingo Este, República Dominicana";

export default function Page() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#inicio">THE <span>POWER</span> BOX</a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#horario">Horario</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Escríbenos</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="inicio">
        <div className="container">
          <div className="hero-badge">TRAINING SAFE</div>
          <h1>
            THE <span className="accent">POWER</span> BOX
          </h1>
          <p className="quote">
            &ldquo;Lo que hoy parece imposible, pronto será tu calentamiento&rdquo;
          </p>
          <p className="lead">
            Centro de entrenamiento en Ensanche Isabelita, Santo Domingo Este.
            Ejercicios funcionales, asesoría constante de entrenadores y un Plan
            Único que se adapta a ti.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
              Escríbenos por WhatsApp
            </a>
            <a className="btn btn-ghost" href="#servicios">Ver servicios</a>
          </div>
          <div className="hero-meta">
            <div><strong>(809) 937-0660</strong><br />Llámanos</div>
            <div><strong>Calle 4 #23, Ens. Isabelita</strong><br />Santo Domingo Este</div>
            <div><strong>Lun–Vie</strong><br />5:00 AM – 10:00 AM · 3:00 PM – 9:00 PM</div>
          </div>
        </div>
      </header>

      {/* SERVICIOS */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="kicker">SERVICIOS</div>
          <h2>Todo lo que necesitas en un solo paquete</h2>
          <p className="sub">
            Nuestro Plan Único incluye entrenamiento funcional de alta intensidad,
            ejercicios cardiovasculares y cardiomusculares con maquinarias de última
            generación, siempre con entrenadores a tu lado.
          </p>
          <div className="grid">
            <div className="card">
              <div className="icon">🎯</div>
              <h3>Entrenamiento Personalizado</h3>
              <p>Se adapta a tu horario y a tus metas. No entrenas solo: un entrenador te asigna, explica y da seguimiento a tu rutina.</p>
            </div>
            <div className="card">
              <div className="icon">❤️‍🔥</div>
              <h3>Rehabilitación Cardiovascular</h3>
              <p>Potencia tu salud con un enfoque progresivo y seguro del trabajo cardiovascular.</p>
            </div>
            <div className="card">
              <div className="icon">🧍</div>
              <h3>Clases de Técnica y Postura</h3>
              <p>Entrena de forma segura y efectiva con corrección técnica en cada movimiento.</p>
            </div>
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Ejercicios Funcionales</h3>
              <p>Resultados a corto plazo con ejercicios funcionales de alta intensidad y trabajo cardiomuscular.</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>Kinesiología — Training Safe</h3>
              <p>Especialización en kinesiología para entrenar con el menor nivel de riesgos y mejor calidad de vida.</p>
            </div>
            <div className="card">
              <div className="icon">🤝</div>
              <h3>Entrenadores a Tu Lado</h3>
              <p>Asesoría constante de profesionales que te acompañan a preparar tu cuerpo, desarrollar tus capacidades y aumentar tu resistencia física.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="section alt" id="nosotros">
        <div className="container">
          <div className="kicker">NOSOTROS</div>
          <h2>Training Safe</h2>
          <div className="about-box">
            <p>
              <strong>Emprendimos el camino The Power Box pensando en ti</strong>, movidos por la
              inquietud de ayudar a las personas a mejorar su condición tanto física como mental
              por medio de una actividad física.
            </p>
            <br />
            <p>
              Brindamos <strong>resultados a corto plazo con ejercicios funcionales</strong>, aunado a
              la especialización en <strong>kinesiología</strong>, ofreciendo así a nuestros socios la
              seguridad de un entrenamiento con el menor nivel de riesgos, logrando mejor condición
              física, lo que se traduce en <strong>mejor calidad de vida</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* HORARIO */}
      <section className="section" id="horario">
        <div className="container">
          <div className="kicker">HORARIO</div>
          <h2>¿Cuándo entrenar?</h2>
          <p className="sub">Ven en el horario que mejor se adapte a tu día.</p>
          <div className="hours">
            <div className="hour-card">
              <div className="day">Lunes a Viernes</div>
              <div className="time">5:00 AM – 10:00 AM</div>
            </div>
            <div className="hour-card">
              <div className="day">Lunes a Viernes</div>
              <div className="time">3:00 PM – 9:00 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACION */}
      <section className="section alt" id="ubicacion">
        <div className="container">
          <div className="kicker">UBICACIÓN</div>
          <h2>Encuéntranos</h2>
          <div className="loc-grid">
            <div className="loc-card">
              <h3>📍 Dirección</h3>
              <p>{ADDRESS}</p>
            </div>
            <div className="loc-card">
              <h3>📞 Contacto</h3>
              <p>
                Tel: (809) 937-0660<br />
                WhatsApp: (829) 860-5009<br />
                WhatsApp: (829) 426-9572
              </p>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              title="Mapa — The Power Box"
              src="https://www.google.com/maps?q=Calle+4+%2323,+Ensanche+Isabelita,+Santo+Domingo+Este,+Rep%C3%BAblica+Dominicana&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>¡Tu transformación empieza aquí!</h2>
            <p>Escríbenos hoy y da el primer paso. ¡Inscríbete y comienza tu transformación!</p>
            <a className="btn btn-white" href={WHATSAPP} target="_blank" rel="noreferrer">
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <h4>THE POWER BOX</h4>
              <p>Training Safe — centro de entrenamiento en Santo Domingo Este.</p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p>
                (809) 937-0660<br />
                (829) 860-5009 · (829) 426-9572<br />
                {ADDRESS}
              </p>
            </div>
            <div>
              <h4>Redes</h4>
              <p>
                <a href="https://www.facebook.com/powerboxrdrd" target="_blank" rel="noreferrer">Facebook</a><br />
                <a href="https://www.instagram.com/powerbox.rd" target="_blank" rel="noreferrer">Instagram</a>
              </p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} The Power Box — Ensanche Isabelita, Santo Domingo Este.</span>
            <span>Propuesta de demostración — no es el sitio oficial.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
