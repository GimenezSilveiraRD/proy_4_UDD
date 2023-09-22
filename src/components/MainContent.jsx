import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main>
      <section className="intro">
        <blockquote>
          "El mejor restaurante al que he asistido en los ultimos meses.  La atención es excelente, todos son muy amables y cordiales y la relación calidad precio es muy buena."
        </blockquote>
        <cite>Massimo Botura</cite>
      </section>
      <section className="about">
        <h2>Tradición española desde 1930</h2>
        <p>En el centro histórico. A lado de uno de los monumentos más bellos de nuestra ciudad, te brindamos una cálida cena con las personas que más amas.</p>
        <p>Nos hemos destacado por crear una exquisita variedad de platos españoles en el corazon de Providencia. Nuestros chefs de calidad internacional crean una experiencia gastronómica que permite que jamás olvides tu visita.</p>
      </section>
      <section className="details">
        <ul>
          <li><strong>Nacimiento:</strong> 2002</li>
          <li><strong>Rating:</strong> ★★★★★</li>
          <li><strong>Ubicación:</strong> Providencia</li>
          <li><strong>Raised:</strong> $25M</li>
        </ul>
      </section>
    </main>
  );
}

export default MainContent;
