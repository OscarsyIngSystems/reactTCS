
import { useState } from 'react';
import './App.css'
import FormComponent from './components/form-component/FormComponent'
import ListComponent from './components/list-component/ListComponent'
import type { Item } from './interfaces/item.interface';

function App() {

    const [items, setItems] = useState<Item[]>([]);


    const handleAddItem = (nuevoItem:Item) => {
    
    setItems((itemsAnteriores) => [...itemsAnteriores, nuevoItem]);
  };




  console.log('soy items', items);


  return (
   <>
   <FormComponent onAddItem={handleAddItem} />

   <ListComponent arrayitems={items} />

   
  </>
  )
}

export default App
