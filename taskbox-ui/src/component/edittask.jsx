import axios from 'axios'
import React, { useState } from 'react'
import { Formcont } from './formcont'

export const Edittask = (props) => {
    const { id, title, status, formSubmission } = props
    return (
        <div>
            <Formcont
                id={id}
                title={title}
                status={status}
                formSubmission={formSubmission}
            />

        </div>
    )
}