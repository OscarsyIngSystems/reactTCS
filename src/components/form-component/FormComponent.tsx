import React, { useState } from "react"
import type { FormProps } from "../../interfaces/item.interface"


const FormComponent = ({ onAddItem }: FormProps) => {



 

  const [text, setText] = useState<string>('')

 

  const addItem = (evt: React.FormEvent) => {
    evt.preventDefault()
  
console.log('SOY valor input',text);


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
        onChange={ (evt) => {
         setText(evt.target.value)
        } }

      />
      <button type="submit">Agregar</button>

    </form>
 

 <ul>

 </ul>
   
   </>
  )
}

export default FormComponent