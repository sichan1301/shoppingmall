import styled from "styled-components"
import {v4 as uuidv4} from 'uuid';
import { clothesType } from "../../../data/dataType";

interface ColorListProps {
  handleChangeOption(e:React.ChangeEvent<HTMLInputElement>):void,
  filteredClothes:clothesType
}

const ColorList = ({handleChangeOption,filteredClothes}:ColorListProps) =>{

  return(
    <Container>
      {filteredClothes.color.map(item => (<>
        <input type="radio" name="color" id={item} value={item} onChange = {handleChangeOption} />
        <Label htmlFor={item}>{item}</Label>
      </>))}
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
