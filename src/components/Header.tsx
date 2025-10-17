import React from 'react'
import { BarChart3, Download, Settings } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="glass-effect h-16 border-b border-white/10 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <BarChart3 className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold text-white">数据可视化平台</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Download className="h-5 w-5" />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Header