import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { clothes } from "../../data/data"
import { Add } from "../../store";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import SizeAlert from "./clothesOption/SizeAlert";
import ColorList from "./clothesOption/ColorList";
import SizeList from "./clothesOption/SizeList";
import BasketModal from "./BasketModal";

export interface clothesOptionType {
  color:string,
  size: null | string,
  count:number
}

const ClothesDetail = () => {
  
  const clothId = Number(useParams().id)
  const filteredClothes = clothes[clothId-1]

  const dispatch = useDispatch()
  const [isDisplayingModal,setIsDisplayingModal] = useState(false)
  const [isDisplayingSizeAlert,setIsDisplayingSizeAlert] = useState(false)

  const [clothesOption,setClothesOption] = useState<clothesOptionType>({
    color:filteredClothes.color[0],
    size:null,
    count:1
  })

  const handleChangeOption = useCallback((e:React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
    if((e.target as HTMLInputElement).checked === true){
      setClothesOption({...clothesOption,[e.target.name]:e.target.value})
    }else if ((e.target as HTMLSelectElement).name === "count"){
      setClothesOption({...clothesOption,[e.target.name]:Number(e.target.value)})
    }else{
      return
    }
  },[clothesOption])

  useEffect(()=>{
    clothesOption.size !== null && setIsDisplayingSizeAlert(false)
  },[clothesOption.size])


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
      <Img src = {`/image/${filteredClothes.imgSrc}`} />

      <ClothesInfo>
        <Title>{filteredClothes.name}</Title>
        <Price>{filteredClothes.price}원</Price>
        <Color>컬러: {clothesOption.color}</Color>

        <ColorList 
          currentColor={clothesOption.color}
          handleChangeOption={handleChangeOption} 
          filteredClothes={filteredClothes}/>

        {isDisplayingSizeAlert && <SizeAlert /> }

        <SizeList 
          handleChangeOption={handleChangeOption} 
          filteredClothes={filteredClothes}/>

        <BasketArea>
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
        </BasketArea>
      </ClothesInfo>
      
      {isDisplayingModal && <BasketModal setIsDisplayingModal={setIsDisplayingModal} clothesOption={clothesOption}/>} 
    </Container>
  )
}

export default ClothesDetail

const Container = styled.div`
  width:80%;
  margin:0 auto;
  padding-top:100px;
  display:flex;
`

const Img = styled.img`
  width:45%;
  height:800px;
`

const ClothesInfo = styled.div`
  width:55%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left:50px;  
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

const Color = styled.p`
  margin:0 0 20px 0;

`

const BasketArea = styled.div`
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