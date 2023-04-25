import styled from "styled-components"

const SizeAlert = () => {
  return(
    <Container>
      <Exclamation>!</Exclamation>
      <Text>사이즈를 선택해 주세요</Text>
    </Container>
  )
}

export default SizeAlert 

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border:1px solid red;
  padding:15px;
  background-color: rgb(255, 237, 237);
  margin:0 0 15px 0;
`

const Exclamation = styled.span`
  border:1px solid red;
  color:red;
  font-size:15px;
  font-weight: 900;
  padding:3px 9px;
  border-radius: 50%;
`

const Text = styled.p`
  font-size:15px;
  font-weight: 600;
  margin: 0 0 0 10px;
`