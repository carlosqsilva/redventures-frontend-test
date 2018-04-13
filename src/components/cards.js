import { h, Component } from "preact"
import styled from "styled-components"
import { inject, observer } from "mobx-preact"
import { Filled } from "./stars"
import { Button } from "./buttons"
import Graph from "./graph"

const CardContainer = inject("search")(
  observer(({ search }) => (
    <Wrapper>
      {search.filtered.map((data, i) => (
        <Card data={data} days={search.Days} key={i} />
      ))}
    </Wrapper>
  ))
)

class Card extends Component {
  state = {
    chart: false
  }

  toggleChart = e => {
    this.setState(prevState => ({
      chart: !prevState.chart
    }))
  }

  render({ data, days }, { chart }) {
    return (
      <Container>
        <Image src={data.image} />
        <Content>
          {chart && (
            <Graph price={data.price_history} toggle={this.toggleChart} />
          )}
          <Info>
            <Stars>
              {[...Array(data.rate * 1)].map((e, i) => <Filled key={i} />)}
            </Stars>
            <Title>{data.name}</Title>
            <Description>{data.description}</Description>
            <span>
              <Button small>Book now</Button>
              <Button info small onClick={this.toggleChart}>
                Price history
              </Button>
            </span>
          </Info>
          <TotalPrice>
            <span>
              Total <strong>{days}</strong>:
            </span>
            <Total>{`$${Math.floor(data.price * days)}`}</Total>
            <span>Per night:</span>
            <Price>{`$${data.price}`}</Price>
          </TotalPrice>
        </Content>
      </Container>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex: 1;

  @media screen and (min-width: 720px) {
    padding-left: 60px;
    margin: 20px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 720px) {
    justify-content: initial;
    flex-direction: initial;
    align-items: initial;
    margin-bottom: 60px;
    padding: 20px;
  }
`

const Image = styled.img.attrs({
  alt: props => props.alt || ""
})`
  border-radius: 4px;
  width: 100%;

  @media screen and (min-width: 720px) {
    margin-left: -80px;
    margin-right: 40px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.33);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 720px) {
    flex-direction: initial;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Stars = styled.div`
  margin-bottom: 5px;
  display: flex;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: rgb(249, 129, 0);
  margin: 10px 0 5px 0;
  letter-spacing: 1px;
  line-height: 26px;
  font-weight: bold;
  font-size: 1rem;
  order: -1;
  @media screen and (min-width: 720px) {
    order: initial;
  }
`

const Description = styled.p`
  color: rgb(181, 181, 181);
  font-size: 15px;
  margin: 0;
`

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(178, 176, 192);
  font-size: 14px;
  width: 100%;

  @media screen and (min-width: 720px) {
    border-left: 2px solid #d9d9d9;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 20px;
    text-align: right;
    max-width: 120px;
  }
`

const Total = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat";
  color: rgb(121, 189, 26);
  letter-spacing: 2px;
  margin: 10px 0;
`

const Price = Total.extend`
  color: rgb(249, 129, 0);
  font-size: 1rem;
`

export default CardContainer
