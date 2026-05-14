function Card({ title, description, children, className = '' }) {
  return (
    <div className={`rounded-3xl bg-white p-6 shadow-soft ${className}`}>
      {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
      {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default Card;
