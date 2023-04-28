import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { clothesType } from "../../../data/dataType"
import { Add } from "../../../store"
import BasketModal from "./BasketModal"
import { clothesOptionType } from "../ClothesDetail"

interface BasketAreaProps {
  handleChangeOption(e:React.ChangeEvent<HTMLSelectElement>):void,
  clothesOption:clothesOptionType,
  setIsDisplayingSizeAlert(value:boolean):void,
  filteredClothes:clothesType
}

const BasketArea = ({handleChangeOption,clothesOption,setIsDisplayingSizeAlert,filteredClothes}:BasketAreaProps) =>{

  const [isDisplayingModal,setIsDisplayingModal] = useState(false)
  const dispatch = useDispatch()

  const handleBasketClick = () => {
    if(clothesOption.size !==null){
      const productInfo = {...filteredClothes,...clothesOption}
      dispatch(Add({productInfo}))
      setIsDisplayingModal(true)
    }else{
      setIsDisplayingSizeAlert(true)
    }
  }

  return(
    <Container>
      <Count onChange = {handleChangeOption} name = "count" value ={clothesOption.count}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </Count>
      <BasketButton onClick = {handleBasketClick}>장바구니에 추가 - {filteredClothes.price}원</BasketButton>
      {isDisplayingModal && <BasketModal setIsDisplayingModal={setIsDisplayingModal} clothesOption={clothesOption}/>}      
    </Container>
  )
}

export default BasketArea

const Container = styled.div`
  display: flex;
`

const Count = styled.select`
  width:50px;
  height:50px;
`

const BasketButton = styled.button`
  font-weight: 900;
  font-size: 18px;
  margin-left:10px;
  color:#fff;
  width:400px;
  height:50px;
  border-radius: 5px;
  background-color: rgb(239, 51, 51);
`