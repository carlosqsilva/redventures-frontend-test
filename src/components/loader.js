import { h } from "preact"
import styled, { keyframes } from "styled-components"

const Loader = () => (
  <Wrapper>
    <div />
    <div />
    <div />
  </Wrapper>
)

const scale = keyframes`
  0% {
    transform: scale(1);
    opacity: 1; 
  }
  45% {
    transform: scale(0.1);
    opacity: 0.7; 
  }
  80% {
    transform: scale(1);
    opacity: 1; 
  }
`

const Wrapper = styled.div`
  > div {
    background-color: rgb(249, 129, 0);
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
  }
  > div:nth-child(1) {
    animation: ${scale} 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  > div:nth-child(2) {
    animation: ${scale} 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  > div:nth-child(3) {
    animation: ${scale} 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
`

export default Loader
