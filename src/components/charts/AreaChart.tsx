import React from 'react'
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface AreaChartProps {
  data: any[]
}

const AreaChart: React.FC<AreaChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理面积图数据
  const chartData = data.map((item, index) => {
    const keys = Object.keys(item)
    return {
      name: index + 1,
      value: keys.length > 1 ? Number(item[keys[1]]) || 0 : 0
    }
  })

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={chartData}>
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
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#3B82F6" 
            fill="url(#colorValue)" 
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart