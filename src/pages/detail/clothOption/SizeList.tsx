import {v4 as uuidv4} from 'uuid';
import styled from "styled-components"
import { clothesType } from "../../../data/dataType";


interface SizeListProps {
  handleChangeOption(e:React.ChangeEvent<HTMLInputElement>):void,
  filteredClothes:clothesType
}

const SizeList = ({handleChangeOption,filteredClothes}:SizeListProps) =>{

  return(
    <>
      <Title>US 사이즈</Title>
      <Wrapper>
        {filteredClothes.size.map(item => (
          <>
            <SizeInput type="radio" name="size" id={item} value={item} onChange = {handleChangeOption} />
            <Label className="sizeLabel" htmlFor={item}>{item}</Label>
          </>
        ))}
      </Wrapper>
    </>
  )
}

export default SizeList

const Title = styled.p`
  font-size: 20px;
  font-weight:700;
`

const Wrapper = styled.div`
  margin:0 0 20px 0;
  display: flex;
`

const Label= styled.label`
  cursor:pointer;
  padding:10px;
  font-weight: 900;
  border:1px solid grey;
  border-radius: 5px;
  margin-right:10px;
`

const SizeInput= styled.input`
  display: none;
  &:checked +label{
    background:black;
    color:#fff;
    height:100%;
  }  
`


