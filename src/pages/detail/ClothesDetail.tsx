import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { clothes } from "../../data/data"
import SizeAlert from "./clothOption/SizeAlert";
import ColorList from "./clothOption/ColorList";
import SizeList from "./clothOption/SizeList";
import BasketArea from "./clothOption/BasketArea";

export interface clothesOptionType {
  color:string,
  size: null | string,
  count:number
}

const ClothesDetail = () => {
  const clothId = useParams().id
  const filteredClothes = clothes.filter(item => item.id === clothId)[0]

  
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

  // const handleChangeOption = useCallback((e:React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
  //   if((e.target as HTMLInputElement).checked === true || (e.target as HTMLSelectElement).name === "count"){
  //     setClothesOption({...clothesOption,[e.target.name]:e.target.value})
  //   }else{
  //     return
  //   }
  // },[clothesOption])

  useEffect(()=>{
    clothesOption.size !== null && setIsDisplayingSizeAlert(false)
    console.log(clothesOption)
  },[clothesOption.size])

  return(
    <Container>
      <Img src = {`/image/${filteredClothes.imgSrc}`} />

      <ClothesInfo>
        <Title>{filteredClothes.name}</Title>
        <Price>{filteredClothes.price}원</Price>
        <Color>컬러: {clothesOption.color}</Color>

        <ColorList 
          handleChangeOption={handleChangeOption} 
          filteredClothes={filteredClothes}/>

        {isDisplayingSizeAlert && <SizeAlert /> }

        <SizeList 
          handleChangeOption={handleChangeOption} 
          filteredClothes={filteredClothes}/>

        <BasketArea 
          handleChangeOption={handleChangeOption} 
          filteredClothes={filteredClothes} 
          clothesOption={clothesOption} 
          setIsDisplayingSizeAlert ={setIsDisplayingSizeAlert} />

      </ClothesInfo>
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
