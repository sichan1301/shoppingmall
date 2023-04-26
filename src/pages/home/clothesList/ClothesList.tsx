import { clothes } from "../../../data/data"
import Clothes from "./Clothes";
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';
import ClothesListHeader from "./clothesListheader";
import { useEffect, useMemo, useState } from "react";

interface ClothesListProps {
  currentCategory:string
}


const ClothesList = ({currentCategory}:ClothesListProps) => {

  const [currentPriceSort,setCurrentPriceSort] = useState("가격 높은순")

  useEffect(()=>{
    clothes.map(item => item={...item,id:uuidv4()})
  },[])

  const filteredClothesList = useMemo(()=>
    clothes.filter(item => (currentCategory === "전체" ? true : item.category === currentCategory) && (currentPriceSort === "가격 높은순" ? clothes.sort((a,b) => b.price-a.price) : clothes.sort((a,b)=> a.price-b.price)))
    ,[currentCategory,currentPriceSort]) 

  return(
    <Container>
      <ClothesListHeader currentPriceSort={currentPriceSort} filteredClothesList={filteredClothesList} setCurrentPriceSort={setCurrentPriceSort}/>

      <Wrapper>
        {filteredClothesList.map(item => <Clothes key={item.id} {...item}/>)}   
      </Wrapper>
    </Container>
  )
}

export default ClothesList

const Container = styled.div`
  width:75%;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`