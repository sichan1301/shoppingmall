import { category, clothes } from "../../../data/data"
import Clothes from "./Clothes";
import styled from "styled-components";
import Header from "./header";
import { useEffect } from "react";

interface ClothesListProps {
  currentCategory:string
}


const ClothesList = ({currentCategory}:ClothesListProps) => {

  const categoryFilteredClothesList = currentCategory === "전체" ? clothes : clothes.filter(item => item.category === currentCategory)
  
  useEffect(()=>{
    console.log(clothes);
  },[currentCategory])

  return(
    <Container>
      <Header categoryFilteredClothesList={categoryFilteredClothesList}/>
      <Wrapper>
        {categoryFilteredClothesList.map(item => <Clothes key={item.id} {...item}/>)}   
      </Wrapper>
    </Container>
  )
}

export default ClothesList


const Container = styled.div`
  width:80%;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`