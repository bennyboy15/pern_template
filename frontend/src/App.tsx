import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App