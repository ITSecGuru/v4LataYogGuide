import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { routines } from './data/routines.js';
import { uiText } from './data/uiText.js';
import { safetyNotes } from './data/safety.js';
import { audioPrompts } from './data/audioPrompts.js';
import { formatSeconds } from './lib/time.js';
import { getNextStepIndex, getRoutineProgress, getStepDisplayName } from './lib/routineEngine.js';
import { speakPrompt } from './lib/audio.js';
import { breathingHint } from './lib/breathing.js';
import RoutineSelector from './components/layout/RoutineSelector.jsx';
import RoutineHeader from './components/layout/RoutineHeader.jsx';
import SafetyPanel from './components/layout/SafetyPanel.jsx';
import CurrentStepPanel from './components/practice/CurrentStepPanel.jsx';
import ControlsPanel from './components/practice/ControlsPanel.jsx';
import IllustrationPanel from './components/practice/IllustrationPanel.jsx';
import BreathingPanel from './components/practice/BreathingPanel.jsx';
import SequencePanel from './components/practice/SequencePanel.jsx';
import RoutineStepList from './components/practice/RoutineStepList.jsx';

const defaultRoutineId = 'patanjaliJogging1';

function App() {
  const [selectedRoutineId, setSelectedRoutineId] = useState(defaultRoutineId);
  const [interfaceLanguage, setInterfaceLanguage] = useState('english');
  const [speechLanguage, setSpeechLanguage] = useState('english');
  const [status, setStatus] = useState('idle');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepSeconds, setStepSeconds] = useState(0);

  const activeRoutine = useMemo(
    () => routines.find((routine) => routine.id === selectedRoutineId) ?? routines[0],
    [selectedRoutineId]
  );

  const currentStep = activeRoutine.steps[currentStepIndex] ?? null;
  const text = uiText[interfaceLanguage];
  const routineSafety = safetyNotes[selectedRoutineId];
  const progress = getRoutineProgress(activeRoutine.steps, currentStepIndex, stepSeconds);

  useEffect(() => {
    if (!currentStep || status !== 'running') return;
    const prompt = audioPrompts[speechLanguage]?.step ?? audioPrompts.english.step;
    speakPrompt(currentStep, prompt, speechLanguage);
  }, [currentStep, speechLanguage, status]);

  useEffect(() => {
    if (status !== 'running' || !currentStep) return;
    const interval = setInterval(() => {
      setStepSeconds((seconds) => {
        const nextSeconds = seconds + 1;
        if (currentStep.duration && nextSeconds >= currentStep.duration) {
          const nextIndex = getNextStepIndex(activeRoutine.steps, currentStepIndex);
          setCurrentStepIndex(nextIndex);
          return 0;
        }
        return nextSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, currentStep, activeRoutine.steps, currentStepIndex]);

  useEffect(() => {
    setStepSeconds(0);
  }, [currentStepIndex, selectedRoutineId]);

  const handleStart = () => {
    if (!currentStep) return;
    setStatus('running');
  };

  const handlePause = () => setStatus('paused');
  const handleReset = () => {
    setStatus('idle');
    setCurrentStepIndex(0);
    setStepSeconds(0);
  };

  const handleNext = () => {
    const nextIndex = getNextStepIndex(activeRoutine.steps, currentStepIndex);
    setCurrentStepIndex(nextIndex);
    setStepSeconds(0);
    setStatus('paused');
  };

  const handleRoutineChange = (id) => {
    setSelectedRoutineId(id);
    setStatus('idle');
    setCurrentStepIndex(0);
    setStepSeconds(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-white p-6 shadow-soft pattern-background">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-600">{text.brand}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {text.appTitle}
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600 sm:text-base">{text.appSubtitle}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">{text.interfaceLanguage}</p>
                <div className="mt-2 flex items-center gap-3 text-lg font-semibold">
                  {text.languageMap[interfaceLanguage]}
                </div>
              </div>
              <div className="rounded-3xl bg-white px-5 py-4 text-slate-900 shadow-soft">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{text.spokenAudioLanguage}</p>
                <div className="mt-2 flex items-center gap-3 text-lg font-semibold">
                  {text.languageMap[speechLanguage]}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
          <section className="space-y-6">
            <RoutineSelector
              routines={routines}
              activeRoutineId={selectedRoutineId}
              onSelect={handleRoutineChange}
              labels={text}
            />
            <RoutineHeader
              routine={activeRoutine}
              labels={text}
              currentStep={currentStep}
              progress={progress}
            />
            <div className="grid gap-6 xl:grid-cols-[0.95fr_0.75fr]">
              <div className="space-y-6">
                <CurrentStepPanel
                  currentStep={currentStep}
                  stepSeconds={stepSeconds}
                  formattedTime={formatSeconds(currentStep?.duration ?? 0 - stepSeconds)}
                  labels={text}
                />
                <IllustrationPanel currentStep={currentStep} labels={text} />
                <BreathingPanel currentStep={currentStep} labels={text} breathingHint={breathingHint(currentStep)} />
              </div>
              <div className="space-y-6">
                <ControlsPanel
                  status={status}
                  onStart={handleStart}
                  onPause={handlePause}
                  onReset={handleReset}
                  onNext={handleNext}
                  interfaceLanguage={interfaceLanguage}
                  speechLanguage={speechLanguage}
                  onInterfaceLanguageChange={setInterfaceLanguage}
                  onSpeechLanguageChange={setSpeechLanguage}
                  labels={text}
                />
                <SafetyPanel routine={activeRoutine} safetyNote={routineSafety} labels={text} />
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <SequencePanel steps={activeRoutine.steps} currentStepIndex={currentStepIndex} progress={progress} labels={text} />
            <RoutineStepList steps={activeRoutine.steps} currentStepIndex={currentStepIndex} labels={text} />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
