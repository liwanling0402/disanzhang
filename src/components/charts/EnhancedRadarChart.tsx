import React from 'react'
import { RadarChart as RechartsRadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts'

interface EnhancedRadarChartProps {
  data: any[]
  title?: string
}

const EnhancedRadarChart: React.FC<EnhancedRadarChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 霍兰德测试数据的维度
  const dimensions = ['research', 'art', 'social', 'enterprise', 'conventional', 'realistic']
  const dimensionLabels = ['研究型', '艺术型', '社会型', '企业型', '传统型', '现实型']

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']

  return (
    <div className="h-80">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 1]} />
          {data.map((item, index) => (
            <Radar
              key={item.person || index}
              name={item.person}
              dataKey={dimensions[index]}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.6}
            />
          ))}
          <Legend />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedRadarChart