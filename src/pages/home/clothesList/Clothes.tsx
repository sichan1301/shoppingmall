import styled from "styled-components"
import { clothesType } from "../../../data/dataType"
import { Link } from "react-router-dom"

interface ClothesProps extends clothesType{
  id:string
}

const Clothes = ({id,name,price,imgSrc,category}:ClothesProps) => {
  return(
    <Link to={`/detail/${id}`}>
      <Container>
        <img src = {`image/${imgSrc}`} />
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Container>
    </Link>
  )
}

export default Clothes

const Container =styled.div`
  cursor:pointer;

  img{
    width:100%;
    height:250px;
  }
`

const Name =styled.div`
  font-size:20px;

`

const Price =styled.div`
  font-size: 16px;
`