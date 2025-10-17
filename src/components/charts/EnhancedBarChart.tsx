import React from 'react'
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface EnhancedBarChartProps {
  data: any[]
  title?: string
}

const EnhancedBarChart: React.FC<EnhancedBarChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 检测数据是否包含多组柱形
  const keys = Object.keys(data[0] || {}).filter(key => 
    !['name', 'category', 'year', 'season'].includes(key) && 
    typeof data[0][key] === 'number'
  )

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B']

  return (
    <div className="h-80">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey={Object.keys(data[0] || {}).find(key => ['name', 'category', 'year', 'season'].includes(key)) || 'name'}
            stroke="#9CA3AF"
            fontSize={12}
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
          <Legend />
          {keys.map((key, index) => (
            <Bar 
              key={key}
              dataKey={key} 
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
              name={key === 'gmv' ? 'GMV(亿元)' : 
                   key === 'rate' ? '替代率' : key}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedBarChart