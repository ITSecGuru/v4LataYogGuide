import Button from '../ui/Button.jsx';
import Select from '../ui/Select.jsx';
import Card from '../ui/Card.jsx';

function ControlsPanel({ status, onStart, onPause, onReset, onNext, interfaceLanguage, speechLanguage, onInterfaceLanguageChange, onSpeechLanguageChange, labels }) {
  return (
    <Card title={labels.controlTitle} description={labels.controlHint}>
      <div className="grid gap-3">
        <div className="grid gap-2 sm:grid-cols-2">
          <Button variant="primary" className="w-full" onClick={onStart} disabled={status === 'running'}>
            {labels.start}
          </Button>
          <Button variant="secondary" className="w-full" onClick={onPause}>
            {labels.pause}
          </Button>
          <Button variant="secondary" className="w-full" onClick={onReset}>
            {labels.reset}
          </Button>
          <Button variant="secondary" className="w-full" onClick={onNext}>
            {labels.completeNext}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ControlsPanel;
