import Select from '../ui/Select.jsx';

function RoutineSelector({ routines, activeRoutineId, onSelect, labels }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{labels.chooseRoutine}</h2>
          <p className="mt-2 text-sm text-slate-600">{labels.chooseRoutineHint}</p>
        </div>
      </div>
      <div className="mt-5">
        <Select
          label={labels.routineMenuLabel}
          name="routine"
          value={activeRoutineId}
          onChange={onSelect}
          options={routines.map((routine) => ({
            value: routine.id,
            label: routine.title
          }))}
        />
      </div>
    </div>
  );
}

export default RoutineSelector;
