import type { FormProps } from "../../interfaces/item.interface"


const FormComponent = () => {

  const addItem = (evt: React.FormEvent) => {
    evt.preventDefault()
   console.log(4545649876512)
  }

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        placeholder="Agregar..."
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormComponent