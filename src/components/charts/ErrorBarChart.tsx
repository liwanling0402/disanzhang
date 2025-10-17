import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ErrorBar } from 'recharts'

interface ErrorBarChartProps {
  data: any[]
}

const ErrorBarChart: React.FC<ErrorBarChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理误差棒图数据
  const chartData = data.slice(0, 10).map((item, index) => {
    const keys = Object.keys(item)
    const value = keys.length > 1 ? Number(item[keys[1]]) || 0 : 0
    const error = Math.max(1, value * 0.1) // 10%误差
    
    return {
      name: `项目 ${index + 1}`,
      value,
      error
    }
  })

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#9CA3AF"
            fontSize={10}
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
            dataKey="value" 
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          >
            <ErrorBar dataKey="error" width={4} strokeWidth={2} stroke="#EF4444" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ErrorBarChart