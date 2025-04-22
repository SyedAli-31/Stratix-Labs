import { Stethoscope, Gauge, CalendarCheck } from "lucide-react";

interface BenefitsCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ icon, title, description }) => {
  const IconComponent = () => {
    switch (icon) {
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-indigo-500" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-indigo-500" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-6 h-6 text-indigo-500" />;
      default:
        return <Stethoscope className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 shadow-[0_0_30px_rgba(99,102,241,0.2)] group transition-transform hover:scale-[1.035] duration-300 p-6 space-y-4 hover:shadow-indigo-800/40">
      <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110">
        <IconComponent />
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitsCard;
