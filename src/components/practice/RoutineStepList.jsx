import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';

function RoutineStepList({ steps, currentStepIndex, labels }) {
  return (
    <Card title={labels.stepListTitle} description={labels.stepListHint}>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`rounded-3xl border border-slate-200 p-4 ${index === currentStepIndex ? 'bg-cyan-50 border-cyan-200' : 'bg-white'}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{step.deva}</p>
                <p className="text-sm text-slate-500">{step.roman}</p>
              </div>
              <Badge>{step.type}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
              <span>{step.duration ? `${step.duration}s` : labels.noDuration}</span>
              {step.english && <span>{step.english}</span>}
            </div>
            {step.notes && (
              <p className="mt-3 text-xs text-slate-500">{step.notes[labels.langKey]}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RoutineStepList;
