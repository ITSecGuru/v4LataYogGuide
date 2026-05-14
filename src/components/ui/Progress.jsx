function Progress({ value = 0, label = '' }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-cyan-600 transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default Progress;
