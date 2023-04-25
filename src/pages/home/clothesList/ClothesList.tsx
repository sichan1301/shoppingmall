import { category, clothes } from "../../../data/data"
import Clothes from "./Clothes";
import styled from "styled-components";
import Header from "./header";
import { useEffect } from "react";
import { clothesType } from "../../../data/dataType";

interface ClothesListProps {
  filteredClothesList:clothesType[]
}


const ClothesList = ({filteredClothesList}:ClothesListProps) => {

  return(
    <Container>
      {filteredClothesList.map(item => <Clothes key={item.id} {...item}/>)}   
    </Container>
  )
}

export default ClothesList


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`