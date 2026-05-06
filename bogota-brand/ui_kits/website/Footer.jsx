// Footer.jsx — dark footer with hours, contact, address
const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="bg-footer__inner">
        <div className="bg-footer__brand">
          <span className="bg-footer__script">Ресторант</span>
          <div className="bg-footer__name">БОГОТА</div>
          <p className="bg-footer__tag">
            Кухня от сърцето на София. Класика, поднесена с уважение към продукта.
          </p>
        </div>
        <div className="bg-footer__col">
          <h4 className="bg-footer__h">Адрес</h4>
          <p>ул. Примерна 12</p>
          <p>София 1000, България</p>
        </div>
        <div className="bg-footer__col">
          <h4 className="bg-footer__h">Контакти</h4>
          <p>+359 2 123 4567</p>
          <p>info@bogota.bg</p>
        </div>
        <div className="bg-footer__col">
          <h4 className="bg-footer__h">Часове</h4>
          <p>Пон–Пет · 12:00–23:00</p>
          <p>Съб–Нед · 11:00–24:00</p>
        </div>
      </div>
      <div className="bg-footer__legal">
        © 2026 Ресторант Богота · Всички права запазени
      </div>
    </footer>
  );
};

window.Footer = Footer;
