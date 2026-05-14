import Badge from '../ui/Badge.jsx';

function RoutineHeader({ routine, labels, currentStep, progress }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{routine.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{routine.description[labels.langKey]}</p>
        </div>
        <Badge>{labels.statusLabel}</Badge>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.currentActivity}</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">{currentStep ? currentStep.deva : labels.noStep}</p>
          <p className="mt-1 text-sm text-slate-600">{currentStep ? currentStep.roman : ''}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.progressLabel}</p>
          <p className="mt-3 text-3xl font-semibold text-cyan-600">{Math.round(progress)}%</p>
          <p className="mt-1 text-sm text-slate-600">{labels.routineProgress}</p>
        </div>
      </div>
    </div>
  );
}

export default RoutineHeader;
