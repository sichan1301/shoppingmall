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
      <Link to ="/basket">
        <Icon count = {totalCount} icon={faBasketShopping} />
      </Link>
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
  margin-left:10px;
`


interface IconProps {
  count:number
}

const Icon = styled(FontAwesomeIcon)<IconProps>`
  color: black;
  font-size: 30px;
  cursor: pointer;
  margin: 0 10px;
  /* position:relative;
  :before{
    position:absolute;
    content:"";
    width:10px;
    height:10px;
    font-size:10px;
    border-radius: 50%;
    top:0;
    left:50%;
    transform: translate(-50%);
    background:rgb(0,0,0);
  } */
`;
