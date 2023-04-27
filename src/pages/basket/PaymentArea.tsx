import { useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"

const PaymentArea = () => {
  const {totalPrice,totalCount} = useSelector((state:RootState)=>state)

  useEffect(()=>{
    console.log(totalCount);
    console.log(totalPrice);
  },[totalPrice,totalCount])

  return(
    <Container>
      <Wrapper>
        <p>금액</p>
        <p>{totalPrice}</p>
      </Wrapper>
      
      <Wrapper>
        <p>배송비</p>
        <p>무료</p>
      </Wrapper>

      <Wrapper>
        <p>결제금액</p>
        <p>{totalPrice}</p>
      </Wrapper>
      <Pay as ="button">결제하기</Pay>
    </Container>
  )
}

export default PaymentArea


const Container = styled.div`
  width:430px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(200,200,200);
`

const Pay = styled.a`
  height:50px;
  width:430px;
  font-size:20px;
  background-color: #e21a1a;
  color:#fff;
`