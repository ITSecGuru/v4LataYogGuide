import Card from '../ui/Card.jsx';

function IllustrationPanel({ currentStep, labels }) {
  return (
    <Card title={labels.illustrationTitle} description={labels.illustrationHint}>
      {currentStep ? (
        <div className="space-y-4">
          <img
            src={currentStep.image}
            alt={currentStep.roman}
            className="h-72 w-full rounded-3xl object-cover"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <a className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700" href={currentStep.image} target="_blank" rel="noreferrer">
              {labels.pictureLink}
            </a>
            <a className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700" href={currentStep.video} target="_blank" rel="noreferrer">
              {labels.videoLink}
            </a>
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate-600">{labels.noIllustration}</p>
      )}
    </Card>
  );
}

export default IllustrationPanel;
