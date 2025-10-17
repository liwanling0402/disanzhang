import React from 'react'
import { useData } from '../contexts/DataContext'
import { chapter2Data, chapter2DatasetNames, convertToTableData } from '../data/chapter2Data'

const Chapter2DataSelector: React.FC = () => {
  const { setData, setFilteredData, setChartType } = useData()

  const handleDatasetSelect = (datasetName: keyof typeof chapter2Data) => {
    const dataset = chapter2Data[datasetName]
    const tableData = convertToTableData(datasetName)
    
    setData(tableData)
    setFilteredData(tableData)
    
    // 根据数据类型自动选择合适的图表类型
    switch (datasetName) {
      case 'temperatureData':
      case 'carSpeedBrakingData':
        setChartType('line')
        break
      case 'alibabaGMVData':
      case 'onlineShoppingRateData':
        setChartType('bar')
        break
      case 'logisticsCostData':
        setChartType('area')
        break
      case 'powerGenerationData':
        setChartType('box')
        break
      case 'hollandTestData':
        setChartType('radar')
        break
      case 'rootBiomassData':
        setChartType('errorbar')
        break
      default:
        setChartType('line')
    }
  }

  const getDatasetIcon = (datasetName: string) => {
    switch (datasetName) {
      case 'temperatureData': return '🌡️'
      case 'alibabaGMVData': return '💰'
      case 'onlineShoppingRateData': return '🛒'
      case 'logisticsCostData': return '🚚'
      case 'carSpeedBrakingData': return '🚗'
      case 'powerGenerationData': return '⚡'
      case 'hollandTestData': return '🧠'
      case 'rootBiomassData': return '🌳'
      default: return '📊'
    }
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-4">第二章数据集</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {chapter2DatasetNames.map(datasetName => (
          <button
            key={datasetName}
            onClick={() => handleDatasetSelect(datasetName)}
            className="flex items-center p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-left"
          >
            <span className="text-2xl mr-3">{getDatasetIcon(datasetName)}</span>
            <div>
              <div className="text-white font-medium text-sm">
                {chapter2Data[datasetName].title}
              </div>
              <div className="text-gray-400 text-xs mt-1">
                {chapter2Data[datasetName].description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Chapter2DataSelector