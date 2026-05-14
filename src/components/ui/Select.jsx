function Select({ label, name, options, value, onChange, className = '' }) {
  return (
    <label className={`block text-sm text-slate-700 ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-500">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
