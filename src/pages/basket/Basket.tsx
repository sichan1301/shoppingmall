import { useSelector } from "react-redux"
import { RootState, basketType } from "../../store"
import { useEffect } from "react"

const Basket = () => {
  const basket = useSelector((state:RootState)=>state.basket)

  useEffect(()=>{
    console.log(basket);
  },[])
  return(
    <>
      {basket.map((item:basketType) =><h1>{item.name}</h1>)}
      <h1>나의 장바구니</h1>
    </>
  )
}


export default Basket
