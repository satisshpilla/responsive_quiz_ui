import React from 'react'
import styled from 'styled-components'

function Subject() {
  return (
    <Wrapper>
        <SubjectDiv>
          <SelectSubject>
            <h2>Geography</h2>
            <ScoreDiv>
               <h3>Score <span>8</span>/10</h3>
               <StartBtn>Start</StartBtn>
            </ScoreDiv>
          </SelectSubject> 
          <SelectSubject>
            <h2>General Knowledge</h2>
            <ScoreDiv>
               <h3>Score <span>0</span>/10</h3>
               <StartBtn>Start</StartBtn>
            </ScoreDiv>
          </SelectSubject> 
        </SubjectDiv>
    </Wrapper>
  )
}

export default Subject
const Wrapper = styled.div`
margin:5rem auto;
`
const SelectSubject = styled.div`
  width:25rem;
  height:10rem;
  border:2px solid black;
  h2{
      padding:1.5rem ;
      margin:0;
      @media (max-width:412px) {
          font-size:1.2rem;
          padding:1rem;
      }
  }
  @media (max-width:412px) {
      width:18rem;
      height:8rem;
  }
`
const ScoreDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0rem 3rem 1rem 1.5rem;
  @media (max-width:412px) {
      padding:0rem 2rem 1rem 1.5rem;
    }
 `
 const StartBtn = styled.button`
 background:black;
 color:white;
 font-size:0.8rem;
 padding:0.6rem 1.5rem;
 border-radius:0.4rem;
 border:none;
 `
 const SubjectDiv = styled.div`
 display:flex;
 gap:3rem;

 @media (max-width:800px) {
     flex-wrap:wrap;
     justify-content:center;
 }
 `