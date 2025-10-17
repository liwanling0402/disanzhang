import React from 'react'
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface EnhancedAreaChartProps {
  data: any[]
  title?: string
}

const EnhancedAreaChart: React.FC<EnhancedAreaChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  const keys = Object.keys(data[0] || {}).filter(key => 
    !['name', 'month'].includes(key) && typeof data[0][key] === 'number'
  )

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B']

  return (
    <div className="h-80">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="month"
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
          {keys.map((key, index) => (
            <Area 
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.6}
              name={key === 'companyA' ? '公司A' : 
                   key === 'companyB' ? '公司B' : 
                   key === 'companyC' ? '公司C' : key}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedAreaChart