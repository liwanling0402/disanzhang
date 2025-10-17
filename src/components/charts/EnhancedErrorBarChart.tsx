import React from 'react'
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ErrorBar } from 'recharts'

interface EnhancedErrorBarChartProps {
  data: any[]
  title?: string
}

const EnhancedErrorBarChart: React.FC<EnhancedErrorBarChartProps> = ({ data, title }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-400">
        暂无数据可显示
      </div>
    )
  }

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
            dataKey="season"
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
          <Bar 
            dataKey="tree1" 
            fill={colors[0]}
            radius={[4, 4, 0, 0]}
            name="树种1"
          >
            <ErrorBar dataKey="tree1Error" width={2} strokeWidth={1} stroke="#3B82F6" />
          </Bar>
          <Bar 
            dataKey="tree2" 
            fill={colors[1]}
            radius={[4, 4, 0, 0]}
            name="树种2"
          >
            <ErrorBar dataKey="tree2Error" width={2} strokeWidth={1} stroke="#EF4444" />
          </Bar>
          <Bar 
            dataKey="tree3" 
            fill={colors[2]}
            radius={[4, 4, 0, 0]}
            name="树种3"
          >
            <ErrorBar dataKey="tree3Error" width={2} strokeWidth={1} stroke="#10B981" />
          </Bar>
          <Bar 
            dataKey="tree4" 
            fill={colors[3]}
            radius={[4, 4, 0, 0]}
            name="树种4"
          >
            <ErrorBar dataKey="tree4Error" width={2} strokeWidth={1} stroke="#F59E0B" />
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnhancedErrorBarChart