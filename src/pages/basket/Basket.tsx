import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { basketType, RootState } from "../../store"
import Item from "./Item"
import PaymentArea from "./PaymentArea"

const Basket = () => {
  const basket = useSelector((state:RootState)=>state.basket)

  return(
    <Container>
      <Link to="/">홈으로 가기</Link>
      <div>
        {basket.map((item:basketType) => <Item item={item}/>)}
      </div>
      <PaymentArea />
    </Container>
  )
}


export default Basket

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap:20px;
  height:100vh;
  margin:0 auto;
  padding-top:100px;
  background-color: rgb(248, 247, 247);
`