import React, { useState, useEffect } from 'react'
import { useData } from '../../contexts/DataContext'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

const SortControl: React.FC = () => {
  const { data, filteredData, setFilteredData, sortField, setSortField, sortDirection, setSortDirection } = useData()
  const [availableColumns, setAvailableColumns] = useState<string[]>([])

  useEffect(() => {
    if (data.length > 0) {
      const columns = Object.keys(data[0])
      setAvailableColumns(columns)
      if (columns.length > 0 && !sortField) {
        setSortField(columns[0])
      }
    }
  }, [data, sortField, setSortField])

  const applySort = () => {
    if (!sortField) return

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }
      
      const aStr = String(aValue || '').toLowerCase()
      const bStr = String(bValue || '').toLowerCase()
      return sortDirection === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr)
    })

    setFilteredData(sorted)
  }

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  }

  useEffect(() => {
    if (sortField && filteredData.length > 0) {
      applySort()
    }
  }, [sortField, sortDirection])

  if (data.length === 0) {
    return (
      <div className="space-y-3">
        <div className="text-sm text-gray-400">请先上传数据文件</div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* 排序字段选择 */}
      <div className="space-y-2">
        <label className="text-sm text-gray-300">排序字段</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
        >
          <option value="">选择排序字段</option>
          {availableColumns.map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
      </div>

      {/* 排序方向控制 */}
      <div className="space-y-2">
        <label className="text-sm text-gray-300">排序方向</label>
        <div className="flex space-x-2">
          <button
            onClick={() => setSortDirection('asc')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded text-sm transition-colors ${
              sortDirection === 'asc' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <ArrowUp size={16} />
            <span>升序</span>
          </button>
          <button
            onClick={() => setSortDirection('desc')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded text-sm transition-colors ${
              sortDirection === 'desc' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <ArrowDown size={16} />
            <span>降序</span>
          </button>
        </div>
      </div>

      {/* 当前排序状态 */}
      {sortField && (
        <div className="text-xs text-gray-400 border-t border-gray-600 pt-3">
          当前排序: <span className="text-blue-400">{sortField}</span> 
          ({sortDirection === 'asc' ? '升序' : '降序'})
        </div>
      )}
    </div>
  )
}

export default SortControl