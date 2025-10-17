import React from 'react'
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface PieChartProps {
  data: any[]
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

  // 简单的数据处理
  const chartData = data.slice(0, 6).map((item, index) => {
    const keys = Object.keys(item)
    return {
      name: keys.length > 0 ? String(item[keys[0]]).substring(0, 10) : `项目 ${index + 1}`,
      value: keys.length > 1 ? Number(item[keys[1]]) || 1 : 1
    }
  })

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Legend 
            wrapperStyle={{
              fontSize: '12px',
              color: '#9CA3AF',
              paddingTop: '20px'
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChart