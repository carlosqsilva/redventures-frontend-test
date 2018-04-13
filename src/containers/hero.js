import { h } from "preact"
import styled from "styled-components"
import background from "../assets/hero.jpg"
import logo from "../assets/crown.svg"

const Wrapper = styled.section`
  background: url(${background}) top center no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  color: #fff;
  text-align: center;
  overflow: auto;
`

const Container = styled.div`
  margin: 100px auto;
  text-align: center;
  font-family: "Montserrat";
`

const Text = styled.p`
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: bold;
  margin: 10px 0;
`

const Brand = styled.h1`
  display: inline-block;
  padding: 10px 0;
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: 6px;
  padding-left: 6px;
  font-weight: bold;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    border: 2px solid #fff;
  }
  &::after {
    top: 0;
  }
  &::before {
    bottom: 0;
  }
  @media screen and (min-width: 720px) {
    font-size: 76px;
  }
`

const Hero = props => (
  <Wrapper>
    <Container>
      <img src={logo} alt="" />
      <Text>WELCOME TO</Text>
      <Brand>CHARLOTTE</Brand>
      <Text>THE QUEEN CITY</Text>
    </Container>
  </Wrapper>
)
export default Hero
