export function Compare() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <p className="mt-2 text-3xl text-center mb-10 leading-8 font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl sm:tracking-tight">
        See the difference yourself.
      </p>
      <div id="detailed-pricing" className="overflow-x-auto w-full">
        <div className="overflow-hidden">
          <div className="grid grid-cols-7 gap-x-5 p-3 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-xl border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
            <div className="flex items-center">Feature</div>
            <div className="text-center">Carbon</div>
            <div className="text-center">TickTick</div>
            <div className="text-center">Todoist</div>
            <div className="text-center">Microsoft Tasks</div>
            <div className="text-center">Google Tasks</div>
            <div className="text-center">Sortly</div>
          </div>
          {[
            {
              name: "Checklists",
              compare: [1, 1, 1, 1, 1, 0],
            },
            {
              name: "Free to use?",
              compare: [1, 1, 1, 1, 1, 0],
            },
            {
              name: "Kanban boards",
              compare: [1, 1, 1, 0, 0, 0],
            },
            {
              name: "Routine/Habit planner",
              compare: [1, 1, 0, 0, 0, 0],
            },
            {
              name: "Shared memos organization",
              compare: [1, 1, 0, 0, 0, 0],
            },
            {
              name: "Custom themes",
              compare: [1, 1, 1, 0, 0, 0],
            },
            {
              name: "Home inventory",
              compare: [1, 0, 0, 0, 0, 1],
            },
            {
              name: "Quick inventory scanner",
              compare: [1, 0, 0, 0, 0, 0],
            },
            {
              name: "Personalized dashboard for students",
              compare: [1, 0, 0, 0, 0, 0],
            },
            {
              name: "Open source?",
              compare: [1, 0, 0, 0, 0, 0],
            },
            {
              name: "AES-256 bit encryption",
              compare: [1, 0, 0, 0, 0, 0],
            },
            {
              name: "Analytics & gamification features",
              compare: [1, 0, 0, 0, 0, 0],
            },
          ].map((feature) => (
            <div className="grid grid-cols-7 gap-x-5 py-4 px-3 text-sm text-neutral-700 border-b border-neutral-200 dark:border-neutral-700">
              <div className="text-neutral-500 dark:text-neutral-400">
                {feature.name}
              </div>
              {feature.compare.map((r) => (
                <div className="text-center">
                  {r == 1 ? (
                    <span className="material-symbols-rounded text-green-700 dark:text-green-400">
                      check
                    </span>
                  ) : (
                    <span className="material-symbols-rounded text-red-700 dark:text-red-400">
                      close
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
