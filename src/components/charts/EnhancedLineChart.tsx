import React from 'react'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface EnhancedLineChartProps {
  data: any[]
  title?: string
}

const EnhancedLineChart: React.FC<EnhancedLineChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 检测数据是否包含多条线（如温度数据包含maxTemp和minTemp）
  const keys = Object.keys(data[0] || {}).filter(key => key !== 'name' && key !== 'day' && key !== 'month' && key !== 'year')
  
  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6']

  return (
    <div className="h-80">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey={Object.keys(data[0] || {}).find(key => ['name', 'day', 'month', 'year'].includes(key)) || 'name'}
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
            <Line 
              key={key}
              type="monotone" 
              dataKey={key} 
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: colors[index % colors.length] }}
              name={key === 'maxTemp' ? '最高气温' : 
                   key === 'minTemp' ? '最低气温' : 
                   key === 'distance' ? '制动距离' : key}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedLineChart