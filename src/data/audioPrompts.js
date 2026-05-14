export const audioPrompts = {
  english: {
    step: (step) => `Next step: ${step.deva}, ${step.roman}${step.english ? ', ' + step.english : ''}. Hold for ${step.duration || 10} seconds.`,
    routineStart: (routine) => `Starting routine: ${routine.title}. Follow the steps and breathe steadily.`
  },
  hindi: {
    step: (step) => `अगला चरण: ${step.deva}, ${step.roman}${step.english ? ', ' + step.english : ''}. ${step.duration || 10} सेकंड के लिए बनाए रखें।`,
    routineStart: (routine) => `रूटीन आरंभ हो रहा है: ${routine.title}. धीरे-धीरे श्वास लें।`
  }
};
