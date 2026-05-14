import Button from '../ui/Button.jsx';
import Select from '../ui/Select.jsx';
import Card from '../ui/Card.jsx';

function ControlsPanel({ status, onStart, onPause, onReset, onNext, interfaceLanguage, speechLanguage, onInterfaceLanguageChange, onSpeechLanguageChange, labels }) {
  return (
    <Card title={labels.controlTitle} description={labels.controlHint}>
      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="primary" onClick={onStart} disabled={status === 'running'}>
            {labels.start}
          </Button>
          <Button variant="secondary" onClick={onPause}>
            {labels.pause}
          </Button>
          <Button variant="secondary" onClick={onReset}>
            {labels.reset}
          </Button>
          <Button variant="secondary" onClick={onNext}>
            {labels.completeNext}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label={labels.interfaceLanguage}
            name="interface-language"
            value={interfaceLanguage}
            onChange={onInterfaceLanguageChange}
            options={labels.languageOptions}
          />
          <Select
            label={labels.spokenAudioLanguage}
            name="speech-language"
            value={speechLanguage}
            onChange={onSpeechLanguageChange}
            options={labels.speechOptions}
          />
        </div>
      </div>
    </Card>
  );
}

export default ControlsPanel;
