import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import './App.css'

function App() {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 100)
        return () => clearTimeout(timer)
    }, [location.pathname])

    return (
        <div className={`page-wrapper ${isLoading ? 'loading' : ''}`}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    )
}

export default App
