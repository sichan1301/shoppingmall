import { Link } from "react-router-dom"
import styled from "styled-components"
import { clothesType } from "../../data/dataType"
import { clothesOptionType } from "./ClothesDetail"

interface BasketModalProps {
  setIsDisplayingModal(value:boolean):void,
  filteredClothes:clothesType,
  clothesOption:clothesOptionType
}

const BasketModal = ({setIsDisplayingModal,filteredClothes,clothesOption}:BasketModalProps) => {

  const handleButtonClick = () => {
    setIsDisplayingModal(false)
  }

  return(
    <Container>
      <Header>
        <h1>장바구니에 추가되었어요</h1>
        <button onClick = {handleButtonClick}>X</button>
      </Header>
      
      <Wrapper>
        <InfoArea>
          <Image src = {`/image/${filteredClothes.imgSrc}`} /> 


          {/* 임시이미지임 바꿀것 */}
          <div>
            <Title>{filteredClothes.name}</Title>
            <Option>컬러: {clothesOption.color}</Option>
            <Option>US 사이즈 {clothesOption.size}</Option>
            <Option>{filteredClothes.price}</Option>
            <Option>무료배송 + 무료반품</Option>
          </div>
        </InfoArea>

        <PriceArea>
          <Option> 5개 제품</Option> 
          <Option>금액 830,000원</Option>
          {/* store 완성되면 고칠 것  */}
          
          <Basket><Link to ="/basket">장바구니 보기</Link></Basket>
          <Shopping onClick ={handleButtonClick}>쇼핑 계속하기</Shopping>
        </PriceArea>
      </Wrapper>
    </Container>
  )
}
export default BasketModal

const Container = styled.div`
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

const Basket = styled.button`
  background-color: #dd0606;
  border-radius: 5px;
  font-size: 16px;
  height:50px;
  margin-bottom:5px;
  font-weight: 700;
  a{
    color:#fff;
  }
`

const Shopping = styled(Basket)`
  color:black;
  background-color: #fff;
  border:0.5px solid black;
`