import { clothes } from "../../../data/data"
import Clothes from "./Clothes";
import styled from "styled-components";

import ClothesListHeader from "./clothesListheader";
import { useEffect, useMemo, useState } from "react";

interface ClothesListProps {
  currentCategory:string
}

const ClothesList = ({currentCategory}:ClothesListProps) => {

  const [currentPriceSort,setCurrentPriceSort] = useState("가격 높은순")

  const filteredClothesList = useMemo(()=>
    clothes.filter(item => (currentCategory === "전체" ? true : item.category === currentCategory)).sort(((a,b) => (currentPriceSort === "가격 높은순" ? b.price-a.price: a.price-b.price)) ) 
  ,[currentCategory,currentPriceSort])

  useEffect(()=>{
    console.log(filteredClothesList)
  },[currentCategory,currentPriceSort])

    return(
    <Container>
      <ClothesListHeader currentPriceSort={currentPriceSort} filteredClothesList={filteredClothesList} setCurrentPriceSort={setCurrentPriceSort}/>
      <Wrapper>
        {filteredClothesList.map(item =><Clothes key={item.id} {...item} /> )}
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