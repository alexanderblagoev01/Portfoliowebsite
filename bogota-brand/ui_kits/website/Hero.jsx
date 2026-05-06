// Hero.jsx — full-bleed hero with photo placeholder + dual-line title
const Hero = ({ onReserveClick }) => {
  return (
    <section className="bg-hero-section">
      <div className="bg-hero-section__photo" aria-hidden="true">
        <div className="bg-hero-section__scrim"></div>
      </div>
      <div className="bg-hero-section__content">
        <div className="bg-eyebrow-script">Ресторант</div>
        <h1 className="bg-hero-section__title">БОГОТА</h1>
        <div className="bg-hero-section__rule"></div>
        <p className="bg-hero-section__lead">
          Кухня от сърцето на София —<br/>
          класика, поднесена с уважение към продукта.
        </p>
        <div className="bg-hero-section__actions">
          <button className="bg-btn bg-btn--primary" onClick={onReserveClick}>
            Запазете маса
          </button>
          <a href="#menu" className="bg-btn bg-btn--ghost">Виж менюто →</a>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
