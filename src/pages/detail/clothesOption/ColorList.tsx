import styled from "styled-components"
import {v4 as uuidv4} from 'uuid';
import { clothesType } from "../../../data/dataType";


interface ColorListProps {
  currentColor:string,
  handleChangeOption(e:React.ChangeEvent<HTMLInputElement>):void,
  filteredClothes:clothesType
}

const ColorList = ({handleChangeOption,filteredClothes,currentColor}:ColorListProps) =>{

  return(
    <Container>
      {filteredClothes.color.map(item => (<div key={uuidv4()}>
        <input type="radio" name="color" id={item} value={item} onChange = {handleChangeOption} checked={item === currentColor && true}/>
        <Label htmlFor={item}>{item}</Label>
      </div>))}
    </Container>
  )
}

export default ColorList

const Container = styled.div`
  margin:0 0 20px 0;
  display: flex;
`

const Label = styled.label`
  margin-right:20px;
`
