import React from 'react'
import { useData } from '../contexts/DataContext'
import EnhancedLineChart from './charts/EnhancedLineChart'
import EnhancedBarChart from './charts/EnhancedBarChart'
import EnhancedAreaChart from './charts/EnhancedAreaChart'
import EnhancedRadarChart from './charts/EnhancedRadarChart'
import EnhancedErrorBarChart from './charts/EnhancedErrorBarChart'
import EnhancedBoxChart from './charts/EnhancedBoxChart'
import { chapter2Data } from '../data/chapter2Data'

const EnhancedChartDisplay: React.FC = () => {
  const { chartType, filteredData } = useData()

  const renderChart = () => {
    if (filteredData.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-96 text-gray-400">
          <div className="text-6xl mb-4">📊</div>
          <p className="text-lg">请选择第二章数据集开始可视化</p>
          <p className="text-sm">支持多种图表类型和交互功能</p>
        </div>
      )
    }

    // 检测数据特征来决定使用哪种图表
    const dataKeys = Object.keys(filteredData[0] || {})
    
    // 判断是否为温度数据（包含maxTemp和minTemp）
    if (dataKeys.includes('maxTemp') && dataKeys.includes('minTemp')) {
      return <EnhancedLineChart data={filteredData} title="未来15天温度变化趋势" />
    }
    
    // 判断是否为汽车速度数据
    if (dataKeys.includes('speed') && dataKeys.includes('distance')) {
      return <EnhancedLineChart data={filteredData} title="汽车速度与制动距离关系" />
    }
    
    // 判断是否为GMV数据
    if (dataKeys.includes('gmv')) {
      return <EnhancedBarChart data={filteredData} title="阿里巴巴GMV年度趋势" />
    }
    
    // 判断是否为网购替代率数据
    if (dataKeys.includes('rate')) {
      return <EnhancedBarChart data={filteredData} title="各商品种类网购替代率" />
    }
    
    // 判断是否为物流费用数据
    if (dataKeys.includes('companyA') && dataKeys.includes('companyB') && dataKeys.includes('companyC')) {
      return <EnhancedAreaChart data={filteredData} title="物流公司费用统计" />
    }
    
    // 判断是否为发电量数据
    if (dataKeys.includes('2018') && dataKeys.includes('2017')) {
      return <EnhancedBoxChart data={filteredData} title="2017-2018年发电量对比" />
    }
    
    // 判断是否为霍兰德测试数据
    if (dataKeys.includes('research') && dataKeys.includes('art')) {
      return <EnhancedRadarChart data={filteredData} title="霍兰德职业兴趣测试" />
    }
    
    // 判断是否为细根生物量数据
    if (dataKeys.includes('tree1') && dataKeys.includes('tree2')) {
      return <EnhancedErrorBarChart data={filteredData} title="树种细根生物量对比" />
    }

    // 默认使用增强的线图
    return <EnhancedLineChart data={filteredData} />
  }

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">第二章数据可视化</h2>
        <div className="text-sm text-gray-400">
          共 {filteredData.length} 条数据 | 图表类型: {chartType}
        </div>
      </div>
      
      <div className="min-h-96 bg-white/5 border border-white/10 rounded-lg p-4">
        {renderChart()}
      </div>
    </div>
  )
}

export default EnhancedChartDisplay