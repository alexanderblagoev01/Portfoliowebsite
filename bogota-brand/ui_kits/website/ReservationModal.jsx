// ReservationModal.jsx — three-step modal reservation
const ReservationModal = ({ open, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    date: '14.05.2026',
    time: '20:00',
    guests: '2 души',
    name: '',
    phone: '',
    notes: '',
  });
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!open) { setStep(1); setSubmitting(false); }
  }, [open]);

  if (!open) return null;

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => { setStep(3); setSubmitting(false); }, 600);
  };

  return (
    <div className="bg-modal-overlay" onClick={onClose}>
      <div className="bg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="bg-modal__close" onClick={onClose} aria-label="Затвори">×</button>

        {step === 1 && (
          <>
            <div className="bg-eyebrow-script">Запазете</div>
            <h2 className="bg-modal__title">Маса</h2>
            <div className="bg-modal__rule"></div>
            <div className="bg-form-grid">
              <label className="bg-field">
                <span className="bg-field__label">Дата</span>
                <input type="text" value={form.date} onChange={(e) => update('date', e.target.value)} />
              </label>
              <label className="bg-field">
                <span className="bg-field__label">Час</span>
                <select value={form.time} onChange={(e) => update('time', e.target.value)}>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                </select>
              </label>
              <label className="bg-field bg-field--full">
                <span className="bg-field__label">Брой гости</span>
                <select value={form.guests} onChange={(e) => update('guests', e.target.value)}>
                  <option>2 души</option><option>3 души</option><option>4 души</option>
                  <option>5 души</option><option>6 души</option><option>7+ души</option>
                </select>
              </label>
            </div>
            <button className="bg-btn bg-btn--primary bg-modal__action" onClick={() => setStep(2)}>
              Продължете →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="bg-eyebrow-script">Вашите</div>
            <h2 className="bg-modal__title">Данни</h2>
            <div className="bg-modal__rule"></div>
            <div className="bg-form-grid">
              <label className="bg-field bg-field--full">
                <span className="bg-field__label">Име</span>
                <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Име и фамилия" />
              </label>
              <label className="bg-field bg-field--full">
                <span className="bg-field__label">Телефон</span>
                <input type="text" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+359" />
              </label>
              <label className="bg-field bg-field--full">
                <span className="bg-field__label">Бележки (по желание)</span>
                <input type="text" value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Алергии, повод, специални молби" />
              </label>
            </div>
            <div className="bg-modal__actions">
              <button className="bg-btn bg-btn--ghost" onClick={() => setStep(1)}>← Назад</button>
              <button className="bg-btn bg-btn--primary" disabled={submitting || !form.name} onClick={submit}>
                {submitting ? 'Изпращане…' : 'Потвърдете'}
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <div className="bg-modal__success">
            <div className="bg-success-mark">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="bg-eyebrow-script">Благодарим</div>
            <h2 className="bg-modal__title">Очакваме ви</h2>
            <div className="bg-modal__rule"></div>
            <p className="bg-modal__lead">
              Резервацията ви за <b>{form.guests}</b> на <b>{form.date}</b> в <b>{form.time}</b> е приета.
              Ще получите потвърждение на телефона си.
            </p>
            <button className="bg-btn bg-btn--primary bg-modal__action" onClick={onClose}>Затвори</button>
          </div>
        )}
      </div>
    </div>
  );
};

window.ReservationModal = ReservationModal;
