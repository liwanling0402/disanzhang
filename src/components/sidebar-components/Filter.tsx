import React, { useState, useEffect } from 'react'
import { useData } from '../../contexts/DataContext'
import { Filter as FilterIcon, X } from 'lucide-react'

const Filter: React.FC = () => {
  const { data, filteredData, setFilteredData, filters, setFilters } = useData()
  const [availableColumns, setAvailableColumns] = useState<string[]>([])
  const [currentFilter, setCurrentFilter] = useState({ column: '', value: '' })

  useEffect(() => {
    if (data.length > 0) {
      const columns = Object.keys(data[0])
      setAvailableColumns(columns)
    }
  }, [data])

  const applyFilter = () => {
    if (!currentFilter.column || !currentFilter.value) return

    const newFilters = { ...filters, [currentFilter.column]: currentFilter.value }
    setFilters(newFilters)

    const filtered = data.filter(item => {
      return Object.entries(newFilters).every(([column, value]) => {
        const itemValue = String(item[column] || '').toLowerCase()
        return itemValue.includes(value.toLowerCase())
      })
    })

    setFilteredData(filtered)
    setCurrentFilter({ column: '', value: '' })
  }

  const removeFilter = (column: string) => {
    const newFilters = { ...filters }
    delete newFilters[column]
    setFilters(newFilters)

    const filtered = data.filter(item => {
      return Object.entries(newFilters).every(([col, value]) => {
        const itemValue = String(item[col] || '').toLowerCase()
        return itemValue.includes(value.toLowerCase())
      })
    })

    setFilteredData(filtered)
  }

  const clearAllFilters = () => {
    setFilters({})
    setFilteredData(data)
  }

  if (data.length === 0) {
    return (
      <div className="space-y-3">
        <div className="text-sm text-gray-400">请先上传数据文件</div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* 当前激活的过滤器 */}
      {Object.keys(filters).length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">激活的过滤器</span>
            <button
              onClick={clearAllFilters}
              className="text-xs text-red-400 hover:text-red-300"
            >
              清除全部
            </button>
          </div>
          {Object.entries(filters).map(([column, value]) => (
            <div key={column} className="flex items-center justify-between bg-gray-700/50 rounded px-3 py-2">
              <div className="text-sm">
                <span className="text-blue-400">{column}</span>
                <span className="text-gray-400 mx-2">包含</span>
                <span className="text-green-400">"{value}"</span>
              </div>
              <button
                onClick={() => removeFilter(column)}
                className="text-red-400 hover:text-red-300"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 添加新过滤器 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <FilterIcon size={16} />
          <span>添加过滤器</span>
        </div>
        
        <select
          value={currentFilter.column}
          onChange={(e) => setCurrentFilter({ ...currentFilter, column: e.target.value })}
          className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
        >
          <option value="">选择列</option>
          {availableColumns.map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>

        <input
          type="text"
          value={currentFilter.value}
          onChange={(e) => setCurrentFilter({ ...currentFilter, value: e.target.value })}
          placeholder="输入过滤值..."
          className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={applyFilter}
          disabled={!currentFilter.column || !currentFilter.value}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded px-4 py-2 text-sm transition-colors"
        >
          应用过滤器
        </button>
      </div>

      {/* 数据统计 */}
      <div className="text-xs text-gray-400 border-t border-gray-600 pt-3">
        显示 {filteredData.length} / {data.length} 条记录
      </div>
    </div>
  )
}

export default Filter