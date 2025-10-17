import React from 'react'
import DataUpload from './DataUpload'
import EnhancedChartDisplay from './EnhancedChartDisplay'
import Chapter2DataSelector from './Chapter2DataSelector'

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-6">
        <Chapter2DataSelector />
        <DataUpload />
        <EnhancedChartDisplay />
      </div>
    </main>
  )
}

export default MainContent