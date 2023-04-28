import styled from "styled-components"
import { clothesType } from "../../../data/dataType"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { Link } from "react-router-dom"

interface HeaderProps {
  filteredClothesList:clothesType[],
  currentPriceSort:string
  setCurrentPriceSort(value:string):void
}

const ClothesListHeader = ({filteredClothesList,currentPriceSort,setCurrentPriceSort}:HeaderProps) => {

  const totalCount = useSelector((state:RootState)=>state.totalCount)
  
  const handleChange = (e:React.ChangeEvent <HTMLSelectElement>) => {
    setCurrentPriceSort(e.target.value)
  }

  return(
    <Container>
      <Count>{filteredClothesList.length}개 제품</Count>
      <Sort>정렬</Sort>
      <Select onChange = {handleChange} value = {currentPriceSort}>
        <option value ="가격 높은순">가격 높은순</option>
        <option value ="가격 낮은순">가격 낮은순</option>
      </Select>
    
      <LinkToBasket to ="/basket">
        <Icon icon={faBasketShopping} totalCount = {totalCount} /> 
        <BasketCount>{totalCount}</BasketCount>
      </LinkToBasket>
   
    </Container>
  )
}

export default ClothesListHeader

const Container = styled.header`
  height:50px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 30px;
`

const Count = styled.span`
  font-size: 20px;
  font-weight: 900;
`

const Sort = styled.span`
  font-size: 18px;
  margin-left:10px;
`

const Select = styled.select`
  width:200px;
  height:30px;
  margin: 0 20px;
`

const LinkToBasket = styled(Link)`
  position:relative;
`

interface IconProps {
  totalCount:number
}

const Icon = styled(FontAwesomeIcon)<IconProps>`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  color: black;
  font-size: 30px;
  cursor: pointer;
  margin: 0 10px;
`;

const BasketCount = styled.span`
  position:absolute;
  bottom:10px;
  left:50%;
  font-size: 10px;
  font-weight: 800;
  border-radius: 50%;
  padding:4px 7px; 
  background-color: #ff6d6d;
  color: #fff;
`