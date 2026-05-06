// Header.jsx — top navigation with dual-script Bogota logo
const Header = ({ activeTab = 'home', onTabChange, onReserveClick }) => {
  const tabs = [
    { id: 'home', label: 'Начало' },
    { id: 'menu', label: 'Меню' },
    { id: 'kitchen', label: 'Кухнята ни' },
    { id: 'contact', label: 'Контакти' },
  ];
  return (
    <header className="bg-header">
      <div className="bg-header__inner">
        <a href="#" className="bg-logo" onClick={(e) => { e.preventDefault(); onTabChange?.('home'); }}>
          <span className="bg-logo__script">Ресторант</span>
          <span className="bg-logo__name">БОГОТА</span>
        </a>
        <nav className="bg-nav">
          {tabs.map(t => (
            <a key={t.id}
               href="#"
               className={`bg-nav__link ${activeTab === t.id ? 'is-active' : ''}`}
               onClick={(e) => { e.preventDefault(); onTabChange?.(t.id); }}>
              {t.label}
            </a>
          ))}
        </nav>
        <button className="bg-btn bg-btn--primary bg-header__cta" onClick={onReserveClick}>
          Запазете маса
        </button>
      </div>
    </header>
  );
};

window.Header = Header;
