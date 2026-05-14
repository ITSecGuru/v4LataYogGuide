function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-600 ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
