import Card from '../ui/Card.jsx';

function BreathingPanel({ currentStep, breathingHint, labels }) {
  return (
    <Card title={labels.breathingTitle} description={labels.breathingHint}>
      {currentStep?.breathing ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-slate-50 p-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 text-2xl font-semibold">
            🧘
          </div>
          <p className="text-sm font-medium text-slate-900">{breathingHint}</p>
          <p className="text-sm text-slate-600">{labels.breathingAnimation}</p>
        </div>
      ) : (
        <p className="text-sm text-slate-600">{labels.noBreathingStep}</p>
      )}
    </Card>
  );
}

export default BreathingPanel;
