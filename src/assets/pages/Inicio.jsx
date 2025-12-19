import React, { useEffect, useState } from 'react';
import './Carta.css';

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 8);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carta-container">
      {/* Efectos de fondo animados */}
      <div className="background-effects">
        <div className="glow-effect glow-red"></div>
        <div className="glow-effect glow-blue"></div>
        <div className="glow-effect glow-purple"></div>
        <div className="particles"></div>
      </div>

      {/* Contenido principal */}
      <div className={`carta-content ${isVisible ? 'fade-in' : ''}`}>
        {/* Header con nombre */}
        <div className="carta-header">
          <h1 className="main-title">
            <span className="title-glow">Para Dana</span>
          </h1>
          <p className="subtitle">Una carta desde el corazón</p>
        </div>

        {/* Sección de introducción */}
        <section className="carta-section intro-section">
          <div className="section-content">
            <p className="carta-text highlight-text">
              Quiero verte feliz, levantándote una y otra vez como cada mañana con una sonrisa en el rostro 
              y la ilusión de levantarte y seguir cada día por delante.
            </p>
          </div>
        </section>

        {/* Sección del sol */}
        <section className="carta-section sun-section">
          <div className="section-content">
            <div className="sun-icon">☀️</div>
            <p className="carta-text">
              Quiero verte brillar como un sol que sale por el horizonte calentando el mundo. 
              Quiero verte valorándote, caminando firme pasito a pasito.
            </p>
          </div>
        </section>

        {/* Sección de distancia */}
        <section className="carta-section distance-section">
          <div className="section-content">
            <p className="carta-text">
              La distancia no me quita las ganas de estar contigo, solo me hace imaginarme con más anhelo 
              el día que por fin estemos juntos.
            </p>
          </div>
        </section>

        {/* Sección de motivación */}
        <section className="carta-section motivation-section">
          <div className="section-content">
            <p className="carta-text">
              Quiero influir en que salgas adelante, es mi manera de demostrarte lo que quiero sentir 
              y que sientas algo que quiero conseguir contigo, corazón.
            </p>
          </div>
        </section>

        {/* Sección de paciencia */}
        <section className="carta-section patience-section">
          <div className="section-content">
            <p className="carta-text">
              Sé que todo sin prisas pero con toda la intención de que seas tú porque yo te elijo. 
              Yo soy feliz, soy feliz porque agradezco que llegaste, agradezco que me haces sentir, 
              me haces pensar, ver mejor las cosas.
            </p>
          </div>
        </section>

        {/* Sección de confianza */}
        <section className="carta-section trust-section">
          <div className="section-content">
            <p className="carta-text">
              Estoy volviendo a confiar con miedo pero confiando y sintiendo y diciéndote muchas cositas 
              que siento de mí. Realmente te quiero y no como una palabra bonita que se lanza al viento.
            </p>
          </div>
        </section>

        {/* Sección de presencia */}
        <section className="carta-section presence-section">
          <div className="section-content">
            <p className="carta-text">
              A lo largo de esto quiero que sepas que aquí estoy y quiero que me permitas confiar con miedo, 
              poquito a poco. Me motivas mucho y te deseo una feliz navidad y próspero año nuevo.
            </p>
          </div>
        </section>

        {/* Sección de agradecimiento */}
        <section className="carta-section gratitude-section">
          <div className="section-content">
            <p className="carta-text highlight-text">
              Me siento feliz de terminar el año conociéndote, conociéndonos, porque te tengo a ti 
              y te quiero muchísimo Dana. De verdad es increíble como entraste en mi corazón, 
              poquito a poco todo y sin prisa pero con toda la intención de ir a verte.
            </p>
          </div>
        </section>

        {/* Sección de repetición de te quiero */}
        <section className="carta-section love-section">
          <div className="section-content">
            <div className="love-repetition">
              <span className="love-word">Te</span>
              <span className="love-word">quiero</span>
              <span className="love-word">Te</span>
              <span className="love-word">quiero</span>
              <span className="love-word">Te</span>
              <span className="love-word">quiero</span>
              <span className="love-word">Te</span>
              <span className="love-word">quiero</span>
              <span className="love-word">Te</span>
              <span className="love-word">quiero</span>
            </div>
            <p className="carta-text">
              Ya quiero ir a verte y quiero todo contigo. Por más que dé miedo sentir, quiero pasar ese miedo 
              y sentirlo, que no sentir y te quiero mucho.
            </p>
          </div>
        </section>

        {/* Sección de cualidades */}
        <section className="carta-section qualities-section">
          <div className="section-content">
            <p className="carta-text">
              Eres fuerte, independiente, inteligente, muy madura, divertida, empática, risueña, llorona, 
              amigable, comprensiva. Quiero poder conocer más facetas tuyas, más cosas que se puedan hacer 
              más que en una pantalla.
            </p>
            <p className="carta-text highlight-text">
              Te quiero, corazón de melocotón. Te quiero y te quiero ir a verte en persona.
            </p>
          </div>
        </section>

        {/* Sección del camino */}
        <section className="carta-section path-section">
          <div className="section-content">
            <p className="carta-text">
              Por más difícil que sea el camino, la distancia se acorta con cada paso y logro que hagamos. 
              Quiero festejar tus logros como míos y quiero que estés ahí para mis logros.
            </p>
          </div>
        </section>

        {/* Sección final */}
        <section className="carta-section final-section">
          <div className="section-content">
            <p className="carta-text">
              Este es mi cartita de regalo. Sé que nos vamos conociendo pero este regalito es algo que quise 
              escribirte y a mi manera te quiero.
            </p>
          </div>
        </section>

        {/* Sección de Brown - BMTH */}
        <section className="carta-section brown-section">
          <div className="section-content">
            <div className="brown-header">
              <h2 className="brown-title">Brown</h2>
              <p className="brown-subtitle">Bring Me The Horizon</p>
            </div>
            <p className="carta-text brown-text">
              Por cierto, hay una canción de Bring Me The Horizon llamada "Brown", con la cual te identificas mucho. 
              Sé que no está bien, pero a la vez quiero demostrarte genuinamente que me interesa y quiero mucho 
              a esa persona, o sea, a ti Dana.
            </p>
            <p className="carta-text brown-text">
              Quiero entenderte en ese tema, porque quiero conocerte completamente, con todas tus facetas, 
              con todo lo que te hace ser quien eres.
            </p>
          </div>
        </section>

        {/* Firma */}
        <div className="carta-signature">
          <p className="signature-text">Con todo mi cariño,</p>
          <p className="signature-name">Tu Xinito</p>
          <div className="heart-icon">❤️</div>
        </div>

        {/* Efectos de neón adicionales */}
        <div className="neon-lines">
          <div className="neon-line line-1"></div>
          <div className="neon-line line-2"></div>
          <div className="neon-line line-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
