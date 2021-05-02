import React from 'react'
import { Taskitem } from './taskitemcont'

export const Tasklistcont = (props) => {
    const { tasks, deleteItem, editItem } = props
    return (
        <div>
            {
                tasks.length === 0 ? (
                    <div>
                        <h1>No tasks found</h1>
                        <span>Add your first task</span>
                    </div>
                ) : (
                    <div>
                        {tasks.map((task) => {
                            return <Taskitem
                                key={task.id}
                                {...task}
                                deleteItem={deleteItem}
                                editItem={editItem}
                            />
                        })}
                    </div>
                )
            }
        </div>
    )
}