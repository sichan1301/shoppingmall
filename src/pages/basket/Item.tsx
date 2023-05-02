import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { basketType, CountUpdate, Delete } from "../../store"

interface ItemProps {
  item:basketType
}

const Item = ({item}:ItemProps) => {
  const dispatch = useDispatch()
  const [selectCount,setSelectCount] = useState(item.count);
  
  const handleQuitClick = () => {
    dispatch(Delete(item))
  }
  console.log('item', item); 
  const handleCountChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`handleCountChange`); 
    setSelectCount(Number(e.target.value)) 
    dispatch(CountUpdate({item:item, currentCount:Number(e.target.value)}))
  }
  
  // useEffect(()=>{
  //   console.log('useEffect'); 
  //   dispatch(CountUpdate({item:item, currentCount:selectCount}))
  // },[selectCount])

  useEffect(() => {
    console.log(`rendered`);
    return () => {
      console.log(`destroy`);
    }
  }, []);

  return(
    <Container>
      <Link to = {`/detail/${item.id}`} >
        <Img src = {`image/${item.imgSrc}`} />
      </Link>
      <ItemInfo>
        <Wrapper>
          <Link to = {`/detail/${item.id}`} >
            <Name>{item.name}</Name>
          </Link>
          <Quit onClick = {handleQuitClick}>✕</Quit>
        </Wrapper>

        <Wrapper>
          <Option>컬러:{item.color}</Option>
          <Inner>
            <Option>가격</Option>
            <Option>구매 수량</Option>
            <Option>결제 금액</Option>
          </Inner>
        </Wrapper>

        <Wrapper>
          <Option>사이즈:{item.size}</Option>

          <Inner>
            <Option>{item.price}원</Option>
            <Count value ={selectCount} onChange= {handleCountChange}>
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
            <Option>{item.price * item.count}원</Option>
          </Inner>
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
const Inner = styled.div`
  display:flex;
  align-items:center;
  gap:40px;
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
  height:40px;
`