import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DataPoint {
  [key: string]: string | number
}

interface DataContextType {
  data: DataPoint[]
  setData: (data: DataPoint[]) => void
  filteredData: DataPoint[]
  setFilteredData: (data: DataPoint[]) => void
  chartType: 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'histogram' | 'box' | 'radar' | 'errorbar'
  setChartType: (type: 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'histogram' | 'box' | 'radar' | 'errorbar') => void
  filters: Record<string, string>
  setFilters: (filters: Record<string, string>) => void
  sortField: string
  setSortField: (field: string) => void
  sortDirection: 'asc' | 'desc'
  setSortDirection: (direction: 'asc' | 'desc') => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataPoint[]>([])
  const [filteredData, setFilteredData] = useState<DataPoint[]>([])
  const [chartType, setChartType] = useState<'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'histogram' | 'box' | 'radar' | 'errorbar'>('line')
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [sortField, setSortField] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        chartType,
        setChartType,
        filters,
        setFilters,
        sortField,
        setSortField,
        sortDirection,
        setSortDirection
      }}
    >
      {children}
    </DataContext.Provider>
  )
}