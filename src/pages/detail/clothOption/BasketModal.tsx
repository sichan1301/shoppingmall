import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { clothes } from "../../../data/data"
import { clothesType } from "../../../data/dataType"
import { RootState } from "../../../store"
import { clothesOptionType } from "../ClothesDetail"

interface BasketModalProps {
  setIsDisplayingModal(value:boolean):void,
  clothesOption:clothesOptionType
}

const BasketModal = ({setIsDisplayingModal,clothesOption}:BasketModalProps) => {
  const {totalCount,totalPrice} = useSelector((state:RootState) => state)
  const clothId = useParams().id
  const filteredClothes = clothes.filter(item => item.id === clothId)[0]

  const handleButtonClick = () => {
    setIsDisplayingModal(false)
  }

  return(
    <Container>
      <Header>
        <h1>장바구니에 추가되었어요</h1>
        <button onClick = {handleButtonClick}>✕</button>
      </Header>
      
      <Wrapper>
        <InfoArea>
          <Image src = {`/image/${filteredClothes.imgSrc}`} /> 
          <div>
            <Title>{filteredClothes.name}</Title>
            <Option>컬러: {clothesOption.color}</Option>
            <Option>US 사이즈 {clothesOption.size}</Option>
            <Option>{filteredClothes.price}</Option>
            <Option>무료배송 + 무료반품</Option>
          </div>
        </InfoArea>

        <PriceArea>
          <Option>{totalCount}개 제품</Option> 
          <Option>금액 {totalPrice}원</Option>
    
          <StyledLink to ="/basket">장바구니 보기</StyledLink>
          <Shopping onClick ={handleButtonClick}>쇼핑 계속하기</Shopping>
        </PriceArea>
      </Wrapper>
    </Container>
  )
}
export default BasketModal

const Container = styled.div`
  z-index:100;
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:820px;
  height:290px;
  background-color: #fff;
  padding: 20px;
`

const Header = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-between;
  h1{
    margin:0;
  }
  button{
    font-size:30px;
  }
`


const Wrapper = styled.div`
  margin:10px 0 0 0;
  display: flex;
`

const InfoArea = styled.div`
  display:flex;
  align-items: center;
  width:60%;
  border-right:1px solid grey;
`

const Image = styled.img`
  width:120px;
  height:150px;
  margin-right:10px;
`

const Title = styled.p`
  font-size:24px;
  font-weight: 600;
  margin: 0 0 6px 0;
`

const Option = styled(Title)`
  font-size:20px;
  font-weight: 500;
`

const PriceArea = styled.div`
  margin-left:20px;
  display:flex;
  flex-direction:column;
  width:40%;
`

const StyledLink = styled(Link)`
  background-color: #dd0606;
  border-radius: 5px;
  font-size: 16px;
  height:50px;
  margin-bottom:5px;
  font-weight: 700;
  color:#fff;
  text-align:center;
  line-height:50px;
  :visited{
    color:#fff;
  }
`

const Shopping = styled.button`
  font-size: 16px;
  font-weight: 700;
  height:50px;
  border-radius: 5px;
  border:0.5px solid black;
`