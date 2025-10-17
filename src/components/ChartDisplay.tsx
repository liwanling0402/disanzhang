import React from 'react'
import { useData } from '../contexts/DataContext'
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import ScatterChart from './charts/ScatterChart'
import AreaChart from './charts/AreaChart'
import HistogramChart from './charts/HistogramChart'
import BoxChart from './charts/BoxChart'
import RadarChart from './charts/RadarChart'
import ErrorBarChart from './charts/ErrorBarChart'

const ChartDisplay: React.FC = () => {
  const { chartType, filteredData } = useData()

  const renderChart = () => {
    if (filteredData.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-96 text-gray-400">
          <div className="text-6xl mb-4">📊</div>
          <p className="text-lg">请上传数据文件开始可视化</p>
          <p className="text-sm">支持CSV和JSON格式</p>
        </div>
      )
    }

    switch (chartType) {
      case 'line':
        return <LineChart data={filteredData} />
      case 'bar':
        return <BarChart data={filteredData} />
      case 'pie':
        return <PieChart data={filteredData} />
      case 'scatter':
        return <ScatterChart data={filteredData} />
      case 'area':
        return <AreaChart data={filteredData} />
      case 'histogram':
        return <HistogramChart data={filteredData} />
      case 'box':
        return <BoxChart data={filteredData} />
      case 'radar':
        return <RadarChart data={filteredData} />
      case 'errorbar':
        return <ErrorBarChart data={filteredData} />
      default:
        return <LineChart data={filteredData} />
    }
  }

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">数据可视化</h2>
        <div className="text-sm text-gray-400">
          共 {filteredData.length} 条数据
        </div>
      </div>
      
      <div className="min-h-96">
        {renderChart()}
      </div>
    </div>
  )
}

export default ChartDisplay