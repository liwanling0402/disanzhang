import React from 'react'
import { RadarChart as RechartsRadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface RadarChartProps {
  data: any[]
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 处理雷达图数据 - 使用前6列作为维度
  const dimensions = Object.keys(data[0] || {}).slice(0, 6)
  
  const chartData = dimensions.map(dimension => {
    const values = data.map(item => Number(item[dimension]) || 0)
    const avg = values.reduce((sum, val) => sum + val, 0) / values.length
    
    return {
      subject: dimension.length > 8 ? dimension.substring(0, 8) + '...' : dimension,
      value: avg,
      fullMark: Math.max(100, Math.ceil(avg * 1.2))
    }
  })

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B']

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={chartData}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis 
            dataKey="subject" 
            stroke="#9CA3AF"
            fontSize={10}
          />
          <PolarRadiusAxis 
            angle={90} 
            stroke="#9CA3AF"
            fontSize={10}
          />
          <Radar
            name="平均值"
            dataKey="value"
            stroke={COLORS[0]}
            fill={COLORS[0]}
            fillOpacity={0.6}
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
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChart