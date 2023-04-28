import {v4 as uuidv4} from 'uuid';
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
      <ItemList>
        <Link to="/"><Home>홈으로 가기</Home></Link>
        {basket.map((item:basketType) => <Item key={uuidv4()} item={item}/>)}
      </ItemList>
      <PaymentArea />
    </Container>
  )
}


export default Basket

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap:20px;
  height:100%;
  margin:0 auto;
  padding-top:100px;
  background-color: rgb(248, 247, 247);

`

const ItemList = styled.div`
  width:900px;
  height:100vh;
`

const Home = styled.p`
  font-size:20px;
  font-weight:900;
  cursor: pointer;
`
