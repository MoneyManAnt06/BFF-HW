"use client"
import React, { useState } from "react";
import Input from "../Input";



const Form = () => {
    const [note, setNote] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<
        HTMLInputElement
    >) => {
        setNote(e.target.value)
    }
    console.log(note)

    return (
        <>
            <h1 className="text-white font-bold text-lg">Notes</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    handleChange={handleChange}
                    name="note"
                    placeholder="Note"
                    type="text"
                    value={note}
                />
            </form>
        </>
    )
}

export default Form




