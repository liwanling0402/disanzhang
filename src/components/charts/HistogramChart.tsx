import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface HistogramChartProps {
  data: any[]
}

const HistogramChart: React.FC<HistogramChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理直方图数据 - 将数据分组到区间
  const numericValues = data
    .map(item => {
      const keys = Object.keys(item)
      return keys.length > 1 ? Number(item[keys[1]]) || 0 : 0
    })
    .filter(val => !isNaN(val))

  if (numericValues.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        无可用的数值数据
      </div>
    )
  }

  const min = Math.min(...numericValues)
  const max = Math.max(...numericValues)
  const range = max - min
  const binCount = Math.min(10, Math.ceil(Math.sqrt(numericValues.length)))
  const binSize = range / binCount

  const bins: number[] = Array(binCount).fill(0)
  numericValues.forEach(value => {
    const binIndex = Math.min(binCount - 1, Math.floor((value - min) / binSize))
    bins[binIndex]++
  })

  const chartData = bins.map((count, index) => ({
    range: `${(min + index * binSize).toFixed(1)}-${(min + (index + 1) * binSize).toFixed(1)}`,
    count
  }))

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="range" 
            stroke="#9CA3AF"
            fontSize={10}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Bar 
            dataKey="count" 
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HistogramChart