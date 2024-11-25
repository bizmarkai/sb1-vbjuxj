import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function IndustryCard({ title, description, Icon }: IndustryCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-blue-900/20 hover:-translate-y-1 border border-gray-700">
      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}