import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Addtaskcont } from './addtaskcont'
import { Tasklistcont } from './tasklistcont'

export const Taskcont = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3033/api/tasks')
            .then((res) => {
                const result = res.data
                setTasks(result)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const addTask = (task) => {
        const result = [{ ...task }, ...tasks]
        setTasks(result)
    }

    const deleteItem = (id) => {
        const result = tasks.filter((task) => {
            return task.id !== id
        })

        setTasks(result)
    }

    const editItem = (editdata) => {
        const result = tasks.map((task) => {
            return task.id !== editdata.id ? task : editdata
        })

        setTasks(result)
    }

    return (
        <div>
            <Tasklistcont tasks={tasks} deleteItem={deleteItem} editItem={editItem} />
            <Addtaskcont addTask={addTask} />

        </div>
    )
}