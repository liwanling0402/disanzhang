import React from 'react'
import { BoxPlot, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface BoxChartProps {
  data: any[]
}

const BoxChart: React.FC<BoxChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理箱形图数据 - 将数据按列分组
  const columns: Record<string, number[]> = {}
  
  data.forEach(item => {
    Object.keys(item).forEach(key => {
      const value = Number(item[key])
      if (!isNaN(value)) {
        if (!columns[key]) columns[key] = []
        columns[key].push(value)
      }
    })
  })

  const chartData = Object.entries(columns).map(([name, values]) => {
    const sorted = [...values].sort((a, b) => a - b)
    const q1 = sorted[Math.floor(sorted.length * 0.25)]
    const median = sorted[Math.floor(sorted.length * 0.5)]
    const q3 = sorted[Math.floor(sorted.length * 0.75)]
    const iqr = q3 - q1
    const lowerWhisker = Math.max(sorted[0], q1 - 1.5 * iqr)
    const upperWhisker = Math.min(sorted[sorted.length - 1], q3 + 1.5 * iqr)
    
    return {
      name: name.length > 10 ? name.substring(0, 10) + '...' : name,
      min: sorted[0],
      q1,
      median,
      q3,
      max: sorted[sorted.length - 1],
      lowerWhisker,
      upperWhisker
    }
  })

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <div>
          <div className="text-center text-gray-400 text-sm mb-4">
            箱形图显示数据分布（最小值、Q1、中位数、Q3、最大值）
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-white font-medium mb-2">{item.name}</div>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>最小值: {item.min.toFixed(2)}</div>
                  <div>Q1: {item.q1.toFixed(2)}</div>
                  <div>中位数: {item.median.toFixed(2)}</div>
                  <div>Q3: {item.q3.toFixed(2)}</div>
                  <div>最大值: {item.max.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}

export default BoxChart