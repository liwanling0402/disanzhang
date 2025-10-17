import React from 'react'
import { BoxPlot, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface EnhancedBoxChartProps {
  data: any[]
  title?: string
}

const EnhancedBoxChart: React.FC<EnhancedBoxChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 转换数据格式为箱形图需要的格式
  const boxData = [
    {
      name: '2018年',
      min: Math.min(...data.map(d => d['2018'])),
      q1: data.map(d => d['2018']).sort((a, b) => a - b)[Math.floor(data.length * 0.25)],
      median: data.map(d => d['2018']).sort((a, b) => a - b)[Math.floor(data.length * 0.5)],
      q3: data.map(d => d['2018']).sort((a, b) => a - b)[Math.floor(data.length * 0.75)],
      max: Math.max(...data.map(d => d['2018']))
    },
    {
      name: '2017年',
      min: Math.min(...data.map(d => d['2017'])),
      q1: data.map(d => d['2017']).sort((a, b) => a - b)[Math.floor(data.length * 0.25)],
      median: data.map(d => d['2017']).sort((a, b) => a - b)[Math.floor(data.length * 0.5)],
      q3: data.map(d => d['2017']).sort((a, b) => a - b)[Math.floor(data.length * 0.75)],
      max: Math.max(...data.map(d => d['2017']))
    }
  ]

  return (
    <div className="h-80">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <div>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name"
            stroke="#9CA3AF"
            fontSize={12}
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
          <Legend />
          <BoxPlot 
            data={boxData}
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </div>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedBoxChart