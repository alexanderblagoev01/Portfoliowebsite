// About.jsx — centered editorial section
const About = () => {
  return (
    <section className="bg-section bg-section--center">
      <div className="bg-eyebrow-script">Нашата</div>
      <h2 className="bg-section__title">Кухня</h2>
      <div className="bg-section__rule"></div>
      <p className="bg-section__lead">
        Класически български вкусове, поднесени с уважение към сезона и продукта.
        Всяко ястие се приготвя с пресни местни съставки.
      </p>
      <div className="bg-about-grid">
        <div className="bg-about-card">
          <div className="bg-about-card__icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"/>
            </svg>
          </div>
          <h3 className="bg-about-card__title">Сезонно меню</h3>
          <p className="bg-about-card__body">
            Менюто се променя със сезона — само това, което градината и пазарът дават днес.
          </p>
        </div>
        <div className="bg-about-card">
          <div className="bg-about-card__icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v6a4 4 0 0 0 8 0V2M12 12v8M8 20h8"/>
            </svg>
          </div>
          <h3 className="bg-about-card__title">Локални вина</h3>
          <p className="bg-about-card__body">
            Подбрана селекция от български изби — лично избрани от собственика.
          </p>
        </div>
        <div className="bg-about-card">
          <div className="bg-about-card__icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-3 0-5.5-1.5-7-4M3 21v-5h5"/>
            </svg>
          </div>
          <h3 className="bg-about-card__title">Без бързане</h3>
          <p className="bg-about-card__body">
            Вечери, които се проточват. Маса, която остава ваша до края на нощта.
          </p>
        </div>
      </div>
    </section>
  );
};

window.About = About;
