import React from 'react'
import styled from 'styled-components'
function Question() {
  return (
    <Wrapper>
        <i class="fa-solid fa-arrow-left-long"></i>
        <h1>Geography</h1>
        <div>
           <h2>What is the largest city in the world?</h2>
           <Options>
             <Option>
                <input type="radio" />
                <h4>Delhi</h4>
             </Option>
             <Option>
                <input type="radio" />
                <h4>Tokyo</h4>
            </Option>
            <Option>
                <input type="radio" />
                <h4>Paris</h4>
            </Option>
            <Option>
                <input type="radio" />
                <h4>Sao Paulo</h4>
            </Option>
           </Options>
        </div>
        <Buttons>
            <BackBtn>Back</BackBtn>
            <NextBtn>Next</NextBtn>
        </Buttons>
    </Wrapper>
  )
}

export default Question
const Wrapper = styled.div`
visibility:hidden;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
h2{
    @media(max-width:412px) {
        font-size:0.7rem;
    }
}
h2{
    @media(max-width:412px) {
        font-size:1rem;
    }
}

.fa-solid{
    position:absolute;
    top:3rem;
    left:20%;
    border:1px solid black;
    padding:0.3rem 0.6rem;
    @media (max-width:810px) {
        display:none;
    }
}
`
const Options = styled.div`
display:flex;
flex-direction:column;
justify-content:left;
align-items:center;
`
const Option = styled.div`
width:20rem;
height:1.8rem;
gap:0.4rem;
display:flex;
align-items:center;
border:2px solid black;
margin:0.8rem;
@media (max-width: 412px){
    width:15rem;
    height: 1.5rem;
}
`
const Buttons = styled.div`
display:flex;
gap:5rem;
margin:2rem;
`
const BackBtn = styled.button`
background:black;
color:white;
font-size:0.8rem;
padding:0.6rem 1.2rem;
border-radius:0.4rem;
border:none;
`
const NextBtn = styled.button`
background:black;
color:white;
font-size:0.8rem;
padding:0.6rem 1.2rem;
border-radius:0.4rem;
border:none;
`
