import Card from '../ui/Card.jsx';

function SafetyPanel({ routine, safetyNote, labels }) {
  return (
    <Card title={labels.safetyTitle} description={routine.safetyDescription[labels.langKey]}>
      <div className="space-y-4 text-sm text-slate-600">
        <p>{safetyNote?.message[labels.langKey] ?? labels.generalSafety}</p>
        <div className="rounded-3xl bg-slate-50 p-4 text-slate-700">
          <p className="text-sm font-semibold text-slate-900">{labels.disclaimerTitle}</p>
          <p className="mt-2">{safetyNote?.disclaimer[labels.langKey] ?? labels.disclaimerText}</p>
        </div>
      </div>
    </Card>
  );
}

export default SafetyPanel;
