import type { ListProps } from "../../interfaces/item.interface"
import './list-component.scss'

function ListComponent({ arrayitems, onDeleteItem }: ListProps) {
  console.log(arrayitems, 'soy list');
  if (arrayitems.length === 0)
    return (
      <div>
        <h2>Lista vacia</h2>
      </div>
    )

  return (
    <>
      <h2>Numero de Elemntos {arrayitems.length}</h2>
      <ul>
        {arrayitems.map(item => (
          <li key={item.id}>
            {item.text}
            <span>{item.createdAt.toDateString()}</span>
            <button onClick={() => onDeleteItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListComponent