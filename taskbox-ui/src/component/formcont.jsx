import React, { useState } from 'react'
import { nanoid } from 'nanoid'
// import axios from 'axios'
export const Formcont = (props) => {

    const { formSubmission, id: slno, title: msg, status: altr } = props

    const [id, setId] = useState(slno ? slno : nanoid())
    const [title, setTitle] = useState(msg ? msg : '')
    const [status, setStatus] = useState(altr ? altr : false)


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleStatus = (e) => {
        setStatus(e.target.checked)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(id, title, status)
        const formData = {
            id: id,
            title: title,
            status: status
        }

        console.log(formData)

        formSubmission(formData)

        setId(nanoid())
        setTitle('')
        setStatus(false)

    }

    return (
        <div>

            <form onSubmit={handlesubmit}>
                <label>title</label><br />
                <input
                    type='text'
                    placeholder='enter task here'
                    onChange={handleTitle}
                    value={title}
                /><br /><br />

                <input
                    type='checkbox'
                    checked={status}
                    onChange={handleStatus}
                /><label>Complete</label><br />

                <input type='submit' value='save' />
            </form>
        </div>
    )
}