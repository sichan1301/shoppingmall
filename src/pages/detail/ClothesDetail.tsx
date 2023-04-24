import { useParams } from "react-router-dom"
import styled from "styled-components"
import { clothes } from "../../data/data"

const ClothesDetail = () => {
  const clothId = useParams().id
  const filteredClothes = clothes.filter(item => item.id === clothId)[0]
  
  return(
    <Container>
      <img src = {`image/${filteredClothes.imgSrc}`} />
      <ClothesInfo>
        <Title>{filteredClothes.name}</Title>
        <Price>{filteredClothes.price}원</Price>
        <Size>
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </Size>


        <BasketArea>
          <Count>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Count>
          <BasketButton>장바구니에 추가</BasketButton>
        </BasketArea>

      </ClothesInfo>
    </Container>
  )
}

export default ClothesDetail

const Container = styled.div`
  width:80%;
  margin:0 auto;
  img{
    width:500px;
    height:700px;
  }
  display:flex;
`

const ClothesInfo = styled.div`
  margin-left:30px;  
  padding:20px;
`

const Title = styled.p`
  font-size: 35px;
  font-weight: 800;
  margin: 0 0 20px 0;
`

const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
`

const Size = styled.ul`
  padding:0;
  li{
    display: inline-block;
    margin-right:5px;
    font-size:16px;
    font-weight: 800;
    cursor: pointer;
    border:0.5px solid rgb(190,190,190);
    border-radius: 10px;
    padding:10px;
    text-align:center;
    width:60px;
    height:60px;
    line-height: 40px;
  }
`


const BasketArea = styled.div`
  display: flex;
`

const Count = styled.select`
  width:50px;
  height:50px;
`

const BasketButton = styled.button`
  cursor:pointer;
  font-weight: 900;
  font-size: 18px;
  margin-left:10px;
  color:#fff;
  border:none;
  width:400px;
  height:50px;
  border-radius: 5px;
  background-color: rgb(239, 51, 51);
`