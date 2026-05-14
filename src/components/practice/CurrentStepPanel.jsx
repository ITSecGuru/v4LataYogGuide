import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';

function CurrentStepPanel({ currentStep, stepSeconds, formattedTime, labels }) {
  return (
    <Card title={labels.currentStepTitle} description={labels.currentStepHint}>
      {currentStep ? (
        <div className="space-y-5">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{labels.stepNameLabel}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{currentStep.deva}</h3>
            <p className="mt-1 text-base text-slate-600">{currentStep.roman}</p>
            {currentStep.english && <p className="mt-1 text-sm text-slate-500">{currentStep.english}</p>}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.duration}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{currentStep.duration ?? 0}s</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.elapsed}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{stepSeconds}s</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.remaining}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{formattedTime}</p>
            </div>
          </div>
          {currentStep.notes && (
            <div className="rounded-3xl bg-slate-100 p-4 text-slate-700">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{labels.stepNotesLabel}</p>
              <p className="mt-2 text-sm leading-6">{currentStep.notes[labels.langKey]}</p>
            </div>
          )}
          <Badge>{currentStep.type.toUpperCase()}</Badge>
        </div>
      ) : (
        <p className="text-sm text-slate-600">{labels.noActiveStep}</p>
      )}
    </Card>
  );
}

export default CurrentStepPanel;
