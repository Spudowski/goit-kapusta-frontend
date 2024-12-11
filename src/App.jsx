import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import './App.css'


function App() {


const HomePage = lazy(() => import('./pages/HomePage'))

return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    </div>
    )
}

export default App
