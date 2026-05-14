import Progress from '../ui/Progress.jsx';

function SequencePanel({ steps, currentStepIndex, progress, labels }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{labels.sequenceTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">{labels.sequenceHint}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <Progress value={Math.round(progress)} label={labels.overallProgress} />
        <p className="text-sm text-slate-600">{labels.currentStepCount(currentStepIndex + 1, steps.length)}</p>
      </div>
    </div>
  );
}

export default SequencePanel;
