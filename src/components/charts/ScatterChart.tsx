import React from 'react'
import { ScatterChart as RechartsScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface ScatterChartProps {
  data: any[]
}

const ScatterChart: React.FC<ScatterChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理散点图数据
  const chartData = data.map((item, index) => {
    const keys = Object.keys(item)
    return {
      x: keys.length > 0 ? Number(item[keys[0]]) || index : index,
      y: keys.length > 1 ? Number(item[keys[1]]) || 0 : 0,
      z: keys.length > 2 ? Number(item[keys[2]]) || 1 : 1
    }
  })

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsScatterChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="x" 
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
          <Scatter 
            data={chartData} 
            fill={COLORS[0]}
            shape="circle"
          />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScatterChart