import React, { useRef } from 'react'
import { Upload, FileText, Database } from 'lucide-react'
import { useData } from '../contexts/DataContext'

const DataUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { setData, setFilteredData } = useData()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    const extension = file.name.split('.').pop()?.toLowerCase()

    reader.onload = (e) => {
      const content = e.target?.result as string
      
      try {
        let parsedData: any[] = []
        
        if (extension === 'csv') {
          // 简单的CSV解析
          const lines = content.split('\n')
          const headers = lines[0].split(',').map(h => h.trim())
          
          parsedData = lines.slice(1).map(line => {
            const values = line.split(',').map(v => v.trim())
            const obj: Record<string, string> = {}
            headers.forEach((header, index) => {
              obj[header] = values[index] || ''
            })
            return obj
          }).filter(item => Object.values(item).some(val => val))
          
        } else if (extension === 'json') {
          parsedData = JSON.parse(content)
          if (!Array.isArray(parsedData)) {
            parsedData = [parsedData]
          }
        }
        
        setData(parsedData)
        setFilteredData(parsedData)
        
      } catch (error) {
        console.error('文件解析错误:', error)
        alert('文件解析失败，请检查文件格式')
      }
    }

    if (extension === 'csv') {
      reader.readAsText(file)
    } else if (extension === 'json') {
      reader.readAsText(file)
    } else {
      alert('仅支持CSV和JSON格式文件')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add('border-blue-400', 'bg-blue-500/10')
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-blue-400', 'bg-blue-500/10')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-blue-400', 'bg-blue-500/10')
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const fileInput = fileInputRef.current
      if (fileInput) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(files[0])
        fileInput.files = dataTransfer.files
        fileInput.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }
  }

  return (
    <div className="chart-container">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <Database className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">上传数据文件</h2>
        <p className="text-gray-400 mb-6">支持CSV和JSON格式</p>
        
        <div
          className="border-2 border-dashed border-gray-600 rounded-xl p-8 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 cursor-pointer"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center space-y-3">
            <Upload className="h-12 w-12 text-gray-400" />
            <div className="text-center">
              <p className="text-white font-medium">拖放文件到这里</p>
              <p className="text-gray-400 text-sm">或点击选择文件</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>CSV</span>
          </div>
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>JSON</span>
          </div>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.json"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  )
}

export default DataUpload