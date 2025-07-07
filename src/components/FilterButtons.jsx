import { List, Clock, CheckCircle } from 'lucide-react';

const FilterButtons = ({ activeFilter, onFilterChange }) => {
  const filters = [
    {
      type: 'all',
      label: 'すべて',
      icon: List,
      color: 'blue'
    },
    {
      type: 'incomplete',
      label: '未完了',
      icon: Clock,
      color: 'amber'
    },
    {
      type: 'complete',
      label: '完了済み',
      icon: CheckCircle,
      color: 'green'
    },
  ];

  const getButtonStyles = (filter, isActive) => {
    const baseStyles = "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 focus:ring-4 focus:ring-offset-2";

    if (isActive) {
      switch (filter.color) {
        case 'blue':
          return `${baseStyles} bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg focus:ring-blue-300`;
        case 'amber':
          return `${baseStyles} bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg focus:ring-amber-300`;
        case 'green':
          return `${baseStyles} bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg focus:ring-green-300`;
        default:
          return `${baseStyles} bg-gray-600 text-white shadow-lg`;
      }
    } else {
      return `${baseStyles} bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-gray-300`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-8">
      <h3 className="text-sm font-semibold text-gray-600 mb-4 px-2">表示フィルター</h3>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.type;
          return (
            <button
              key={filter.type}
              onClick={() => onFilterChange(filter.type)}
              className={getButtonStyles(filter, isActive)}
            >
              <filter.icon className="w-5 h-5" />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
