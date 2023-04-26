import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { basketType, CountUpdate, Delete } from "../../store"

interface ItemProps {
  item:basketType
}


const Item = ({item}:ItemProps) => {
  const dispatch = useDispatch()
  const [selectCount,setSelectCount] = useState(item.count)
  const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCount(Number(e.target.value))
    dispatch(CountUpdate({id:item.id,count:item.count}))
  }

  const handleQuitClick = () => {
    dispatch(Delete({id:item.id,size:item.size}))
  }

  return(
    <Container>
      <Img src = {`image/${item.imgSrc}`} />

      <ItemInfo>
        <Wrapper>
          <Name>{item.name}</Name>
          <Quit onClick = {handleQuitClick}>✕</Quit>
        </Wrapper>

        <Wrapper>
          <Option>{item.color}</Option>
          <Option>가격</Option>
          <Option>구매 수량</Option>
          <Option>결제 금액</Option>
        </Wrapper>

        <Wrapper>
          <Option>사이즈:{item.size}</Option>
          <Option>{item.price}원</Option>
          <Count value ={selectCount} onChange= {handleSelectChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Count>
          <Option>{item.price * selectCount}원</Option>
        </Wrapper>
      </ItemInfo>
    </Container>
    
  )
}

export default Item 




const Container = styled.div`
  width:900px;
  height:300px;
  display: flex;
  padding:20px;
  margin-bottom:20px;
  background-color: #fff;
`

const ItemInfo = styled.div`
  width:80%;  
  padding:10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  width:190px;
  height:230px;
`

const Name = styled.p`
  font-size:20px;
  font-weight:700;
`

const Quit = styled.p`
  font-size: 20px;
  cursor: pointer;
`

const Option = styled.p`
  font-size:16px; 
`

const Count = styled.select`
  width:70px;
    
`
