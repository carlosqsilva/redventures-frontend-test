import { h, Component } from "preact"
import styled from "styled-components"
import Title from "../components/title"
import PriceRange from "../components/filterPrice"
import Stars from "../components/filterStar"
import Cards from "../components/cards"

export const Results = () => (
  <Container>
    <Title />
    <Panel>
      <PriceRange />
      <Stars />
    </Panel>
    <Cards />
  </Container>
)

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 300px 1fr;
  }
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  > div + div {
    border-top: 2px solid #e3e3e3;
  }
`
