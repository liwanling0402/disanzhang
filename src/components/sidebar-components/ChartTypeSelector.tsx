import React from 'react'
import { useData } from '../../contexts/DataContext'

const ChartTypeSelector: React.FC = () => {
  const { chartType, setChartType } = useData()

  const chartTypes = [
    { value: 'line' as const, label: '折线图', icon: '📈' },
    { value: 'bar' as const, label: '柱状图', icon: '📊' },
    { value: 'pie' as const, label: '饼图', icon: '🥧' },
    { value: 'scatter' as const, label: '散点图', icon: '🔵' },
    { value: 'area' as const, label: '面积图', icon: '🟦' },
    { value: 'histogram' as const, label: '直方图', icon: '📋' },
    { value: 'box' as const, label: '箱形图', icon: '📦' },
    { value: 'radar' as const, label: '雷达图', icon: '🛰️' },
    { value: 'errorbar' as const, label: '误差棒图', icon: '📏' }
  ]

  return (
    <div className="space-y-2">
      {chartTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => setChartType(type.value)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            chartType === type.value
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <span className="text-lg">{type.icon}</span>
          <span className="font-medium">{type.label}</span>
        </button>
      ))}
    </div>
  )
}

export default ChartTypeSelector