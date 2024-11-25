import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="flex gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-900/20 transition-shadow border border-gray-700">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}