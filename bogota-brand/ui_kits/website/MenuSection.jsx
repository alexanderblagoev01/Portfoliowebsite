// MenuSection.jsx — menu grid with categories
const MENU = {
  starters: {
    title: 'Предястия',
    items: [
      { name: 'Шопска салата', desc: 'Домати, краставица, чушки, лук, сирене.', price: '12 лв.' },
      { name: 'Печени чушки', desc: 'С орехи, чесън и магданоз.', price: '14 лв.' },
      { name: 'Топено сирене', desc: 'С домашен хляб и розмарин.', price: '16 лв.' },
    ],
  },
  mains: {
    title: 'Основни',
    items: [
      { name: 'Телешки бузи', desc: 'Бавно готвени с червено вино, корени и мащерка.', price: '32 лв.' },
      { name: 'Печена пъстърва', desc: 'С хрупкави билкови картофи и лимонов жълтък.', price: '28 лв.' },
      { name: 'Агнешки джолан', desc: 'С печени корени и сос от червено вино.', price: '36 лв.' },
      { name: 'Каварма', desc: 'В глинено гърне, поднесена с топло хлебче.', price: '24 лв.' },
    ],
  },
  desserts: {
    title: 'Десерти',
    items: [
      { name: 'Баклава', desc: 'С орехи и розова вода.', price: '10 лв.' },
      { name: 'Крем карамел', desc: 'Класиката, направена днес.', price: '9 лв.' },
    ],
  },
};

const MenuSection = () => {
  return (
    <section className="bg-section bg-section--paper" id="menu">
      <div className="bg-eyebrow-script">Сезонно</div>
      <h2 className="bg-section__title">Меню</h2>
      <div className="bg-section__rule"></div>
      <div className="bg-menu-grid">
        {Object.entries(MENU).map(([key, cat]) => (
          <div key={key} className="bg-menu-col">
            <h3 className="bg-menu-col__title">{cat.title}</h3>
            <ul className="bg-menu-col__list">
              {cat.items.map((it, i) => (
                <li key={i} className="bg-menu-item">
                  <div className="bg-menu-item__row">
                    <span className="bg-menu-item__name">{it.name}</span>
                    <span className="bg-menu-item__price">{it.price}</span>
                  </div>
                  <div className="bg-menu-item__desc">{it.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-section__footer-note">
        Менюто се обновява всеки сезон. За алергени, моля попитайте сервитьора.
      </div>
    </section>
  );
};

window.MenuSection = MenuSection;
