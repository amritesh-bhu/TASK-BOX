import axios from 'axios'
import React from 'react'
import { Formcont } from './formcont'

export const Addtaskcont = (props) => {
    const { addTask } = props
    const formSubmission = (formData) => {

        axios.post('http://localhost:3033/api/tasks', formData)
            .then((res) => {
                console.log('add data', res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
        addTask(formData)
    }
    return (
        <div>
            <Formcont formSubmission={formSubmission} />
        </div>
    )
}