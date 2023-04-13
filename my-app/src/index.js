import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import {TaskContextProvider} from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TaskContextProvider>
           <App />
        </TaskContextProvider>
    </React.StrictMode>
)