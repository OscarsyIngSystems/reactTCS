
import { useState } from 'react';
import './App.css'
import FormComponent from './components/form-component/FormComponent'
import ListComponent from './components/list-component/ListComponent'
import type { Item } from './interfaces/item.interface';

function App() {

  const [items, setItems] = useState<Item[]>([]);
  const handleAddItem = (nuevoItem: Item) => {
    setItems((itemsAnteriores) => [...itemsAnteriores, nuevoItem])
  }
  const onDeleteItem = (id: string) => {
    // setItems(prevItem => prevItem.filter(idElement => idElement.id != id))
    setItems(prevItem => prevItem.filter(function (elemts) {
      if (elemts.id != id)
        return elemts
    }))
  }
  console.log('soy items', items)
  return (
    <>
      <FormComponent onAddItem={handleAddItem} />
      <ListComponent arrayitems={items} onDeleteItem={onDeleteItem} />
    </>
  )
}

export default App
