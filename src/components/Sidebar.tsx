import React from 'react'
import { Filter, ArrowUpDown, ChartTypeSelector } from './sidebar-components'

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 glass-effect border-r border-white/10 p-6 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">数据控制</h2>
          <Filter />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">排序设置</h2>
          <ArrowUpDown />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">图表类型</h2>
          <ChartTypeSelector />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar