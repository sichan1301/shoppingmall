import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { clothes } from "../../data/data"
import Cateogry from "./Category"
import ClothesList from "./clothesList/ClothesList"
import Header from "./clothesList/clothesListheader"

const Home = () => {
  const [currentCategory,setCurrentCategory] = useState("전체")
  const [currentPriceSort,setCurrentPriceSort] = useState("가격 높은순")
  const filteredClothesList = useMemo(()=>
    clothes.filter(item => (currentCategory === "전체" ? true : item.category === currentCategory) && (currentPriceSort === "가격 높은순" ? clothes.sort((a,b) => b.price-a.price) : clothes.sort((a,b)=> a.price-b.price)))
    ,[currentCategory,currentPriceSort]) 

  return(
    <Main>
      <Container>
        <Cateogry setCurrentCategory = {setCurrentCategory} />
        <Wrapper>
          <Header currentPriceSort ={currentPriceSort} filteredClothesList={filteredClothesList} setCurrentPriceSort={setCurrentPriceSort}/>
          <ClothesList filteredClothesList={filteredClothesList} />
        </Wrapper>
      </Container>
    </Main>
  )
}


export default Home


const Main = styled.main`
  background-color: rgb(243, 239, 239);
`

const Container = styled.main`
  padding:20px;
  display: flex;
  width:80%;
  height:2000px;
  margin : 0 auto;
`

const Wrapper = styled.div`
  width:75%;
`

