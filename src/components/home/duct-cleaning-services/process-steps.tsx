interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group relative"
          role="listitem"
        >
          <div className="relative z-20">
            <div className="w-16 h-16 rounded-full bg-indigo-600 shadow-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
              <span className="text-xl font-extrabold text-white">{step.number}</span>
            </div>

            {index < steps.length - 1 && (
              <div className="absolute top-8 left-1/2 translate-x-1/2 h-1 w-[120%] bg-gradient-to-r from-indigo-500/40 to-transparent hidden md:block blur-[1px]"></div>
            )}
          </div>
          <h4 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {step.title}
          </h4>
          <p className="text-sm text-gray-400 max-w-xs">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
