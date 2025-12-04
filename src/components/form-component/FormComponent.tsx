import React, { useState } from "react"
import type { FormProps } from "../../interfaces/item.interface"
import './form-component.scss'

const FormComponent = ({ onAddItem }: FormProps) => {

  const [text, setText] = useState<string>('')

  const addItem = (evt: React.FormEvent) => {
    evt.preventDefault()
    console.log('SOY valor input', text);
    if (text.trim()) {
      onAddItem({
        id: crypto.randomUUID(),
        text: text.trim(),
        createdAt: new Date()
      })
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={addItem} className="form-container">
        <input
          type="text"
          placeholder="Agregar..."
          value={text}
          onChange={(evt) => {
            setText(evt.target.value)
          }}
          className="form-container__input"
        />
        <button type="submit" className="form-container__button">Agregar</button>
      </form>
    </>
  )
}

export default FormComponent