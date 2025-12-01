import React, { useState } from "react"
import type { FormProps } from "../../interfaces/item.interface"

import './formStyles.css'
import useSumar  from "../../hooks/useSumar"



const FormComponent = ({ onAddItem }: FormProps) => {


  const { resultado, suma } = useSumar();


  let login = true


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
      <form onSubmit={addItem}>
        <input

          type="text"
          placeholder="Agregar..."
          value={text}
          onChange={(evt) => {
            setText(evt.target.value)
          }}

        />

        {
          login &&
          (<>
            <button className="btn_primary" type="submit"

            >Agregar</button>
          </>)



        }
      </form>

      <button className="btn_primary" type="submit"
        onClick={ ()=>{
          suma(56,87)
        }  }
      >Suma</button>

      {
        resultado == 0 ? <h3></h3> : <h3> {resultado} </h3>
      }
      <ul>

      </ul>

    </>
  )
}

export default FormComponent