import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { DataProvider } from './contexts/DataContext'

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </DataProvider>
  )
}

export default App