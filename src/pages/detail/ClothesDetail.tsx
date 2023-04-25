import { useCallback, useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid';
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { clothes } from "../../data/data"
import BasketModal from "./BasketModal"
import SizeAlert from "./SizeAlert";

export interface clothesOptionType {
  color:string,
  size: null | string,
  count:number
}

const ClothesDetail = () => {
  const clothId = useParams().id
  const filteredClothes = clothes.filter(item => item.id === clothId)[0]
  const [isDisplayingModal,setIsDisplayingModal] = useState(false)
  const [isDisplayingSizeAlert,setIsDisplayingSizeAlert] = useState(false)
  const [clothesOption,setClothesOption] = useState({
    color:filteredClothes.color[0],
    size:null,
    count:1
  })

  const displayModal = () => {
    clothesOption.size ? setIsDisplayingModal(true) : setIsDisplayingSizeAlert(true)
  }

  const handleChangeOption = useCallback((e:React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
    if((e.target as HTMLInputElement).checked === true || (e.target as HTMLSelectElement).name === "count"){
      setClothesOption({...clothesOption,[e.target.name]:e.target.value})
    }else if((e.target as HTMLInputElement).name === "size"){
      setIsDisplayingSizeAlert(false)
    }else{
      return
    }
  },[clothesOption])

  
  useEffect(()=>{
    console.log(clothesOption)
  },[clothesOption])


  return(
    <Container>
      <Img src = {`/image/${filteredClothes.imgSrc}`} />

      <ClothesInfo>
        <Title>{filteredClothes.name}</Title>
        <Price>{filteredClothes.price}원</Price>
        <Color>컬러: {clothesOption.color}</Color>

        <ColorList >
          {filteredClothes.color.map(item => (<div key ={uuidv4()}>
            <input type="radio" name="color" id={item} value={item} onChange = {handleChangeOption} />
            <label htmlFor={item}><span>{item}</span></label>
            </div>))}
        </ColorList> 
    
        {isDisplayingSizeAlert && <SizeAlert /> }

        <SizeList>
          {filteredClothes.size.map(item => (<div key={uuidv4()}>
            <input type="radio" name="size" id={item} value={item} onChange = {handleChangeOption} />
            <label htmlFor={item}><span>{item}</span></label>
          </div>))}
        </SizeList>

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
          <BasketButton onClick = {displayModal}>장바구니에 추가 - {filteredClothes.price}원</BasketButton>
        </BasketArea>

      </ClothesInfo>

      {isDisplayingModal && <BasketModal setIsDisplayingModal={setIsDisplayingModal} filteredClothes={filteredClothes} clothesOption={clothesOption}/>}
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
  width:650px;
  height:800px;
`

const ClothesInfo = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
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

const Color = styled.p`
  margin:0 0 20px 0;

`

const ColorList = styled.div`
  margin:0 0 20px 0;
`

const SizeList = styled.div`
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