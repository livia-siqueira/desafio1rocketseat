import React from 'react'
import { Header } from './components/header'
import { TaskList } from './components/TaskList'
import "./styles/global.scss"

export function App(){
    return (
        <div>
            <Header/>
            <TaskList/>
        </div>
    )
}