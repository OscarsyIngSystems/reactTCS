import { useState } from "react"

 const useSumar = () => {


    const [resultado, setResultado] = useState(0)

    

    const suma = (num1 : number, num2 : number) =>{
          setResultado(  num1 + num2 )  
    }


  return (
    {
      resultado,
      suma
    }
  )
}

export default useSumar





