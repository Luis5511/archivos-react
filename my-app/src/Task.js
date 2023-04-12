import './task.css'

export function TaskCard({Ready}) {
    return <div className='card'>
        <h1>Mi primera tarea</h1>
        <span
        className={Ready ? 'bg-green' : 'bg-red'}
        >{Ready ? "tarea realizada" : "tarea pendiente"}</span>
    </div>
}