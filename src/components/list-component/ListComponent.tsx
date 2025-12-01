import type { ListProps } from "../../interfaces/item.interface"

function ListComponent({ arrayitems }: ListProps) {


  console.log(arrayitems, 'soy list');





  return (
    <>
      <ul>
          {arrayitems.map( item => (


           <>
            <li key={item.id}  >{item.text}</li>
            <p> {item.id}  </p>
           </>
          )  )}











        {/* {arrayitems.map(item => (

          <>
            <li key={item.id}> {item.text} </li>
          <span> {item.id} </span>
          </>

        ))} */}
      </ul>
      

    </>
  )
}

export default ListComponent