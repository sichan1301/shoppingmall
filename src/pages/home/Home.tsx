import { useState } from "react"
import styled from "styled-components"
import Cateogry from "./Category"
import ClothesList from "./clothesList/ClothesList"

const Home = () => {
  const [currentCategory,setCurrentCategory] = useState("전체")
  return(
    <Main>
      <Container>
        <Cateogry setCurrentCategory = {setCurrentCategory} />
        <ClothesList currentCategory={currentCategory} />
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

