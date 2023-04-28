import styled from "styled-components"
import { Link } from "react-router-dom"

interface ClothesProps{
  id:string,
  name:string,
  price:number,
  imgSrc:string
}

const Clothes = ({id,name,price,imgSrc}:ClothesProps) => {

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
    height:400px;
  }
`

const Name =styled.div`
  font-size:20px;
`

const Price =styled.div`
  font-size: 16px;
`