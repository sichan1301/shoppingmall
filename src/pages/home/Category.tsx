import styled from "styled-components"
import { category } from "../../data/data"

interface CategoryProps {
  setCurrentCategory(value:string):void
}

const Cateogry = ({setCurrentCategory}:CategoryProps) => {

  const handleClick = (e:React.MouseEvent,item:string) => {
    setCurrentCategory(item)
  }

  return(
    <Container>  
      {category.map((item,idx:number)  => (
        <div key={idx} onClick ={(e)=>{handleClick(e,item)}} >
          <p >{item}</p>
        </div>
      ))}
    </Container>
  )
}


export default Cateogry


const Container = styled.div`
  width:25%;
  margin-right:30px;
  
  p{
    background-color: #fff;
    padding:10px;
    font-size: 20px;
    margin: 0 0 16px 0;
    cursor:pointer;
  }
`