import styled from "styled-components"
import { clothesType } from "../../../data/dataType"

interface HeaderProps {
  filteredClothesList:clothesType[],
  currentPriceSort:string
  setCurrentPriceSort(value:string):void
}

const Header = ({filteredClothesList,currentPriceSort,setCurrentPriceSort}:HeaderProps) => {

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
    </Container>
  )
}


export default Header

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
