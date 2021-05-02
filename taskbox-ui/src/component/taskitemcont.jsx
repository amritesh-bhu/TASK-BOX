import axios from 'axios'
import React, { useState } from 'react'
import { Edittask } from './edittask'
import { Formcont } from './formcont'

export const Taskitem = (props) => {
    const { id, title, status, deleteItem, editItem } = props
    const [toggle, setToggle] = useState(false)

    const removeItem = () => {
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((res) => {
                console.log('delete data', res.data)
            })
            .catch((err) => {
                alert(err.message)
            })

        deleteItem(id)
    }

    const handletoggle = () => {
        setToggle(!toggle)
    }

    const formSubmission = (data) => {
        axios.put(`http://localhost:3033/api/tasks/${data.id}`, data)
            .then((res) => {
                console.log('update data', res.data)
            })
        editItem(data)
        setToggle(!toggle)
    }

    return (
        <div>
            {
                toggle ? (
                    <div>
                        <Edittask
                            formSubmission={formSubmission}
                            id={id}
                            title={title}
                            status={status}
                        />
                        <button onClick={handletoggle}> cancel</button>
                    </div>
                ) : (
                    <div>
                        <h3>{title}</h3>
                        <button onClick={removeItem}>Remove </button>
                        <button onClick={handletoggle}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}