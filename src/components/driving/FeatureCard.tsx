
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

const FeatureCard = ({ icon: Icon, title, description, colorClass }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
