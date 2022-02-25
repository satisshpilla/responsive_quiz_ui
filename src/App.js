import React from 'react'
import styled from 'styled-components';
import Question from './components/question';
import Subject from './components/subject';
function App() {
  return (
    <Wrapper className="App">
      <Subject />
      <Question/>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
max-width:800px;
margin:0 auto;
font-family:Poppins,sans-serif;
`