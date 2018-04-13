import { h, Component } from "preact"
import styled from "styled-components"
import Chartist from "chartist"

const options = {
  fullWidth: true,
  chartPadding: {
    left: -5,
    bottom: -15
  },
  axisX: {
    showGrid: false
  },
  axisY: {
    // showGrid: true,
    onlyInteger: true
    // labelInterpolationFnc: value => `R$ ${value} `
  }
}

export default class Graph extends Component {
  componentDidMount() {
    const { price } = this.props

    const data = {
      labels: price.map(obj => obj.month),
      series: [price.map(obj => obj.value)]
    }

    this.chart = new Chartist.Bar(this.target, data, options)
  }

  render({ toggle }) {
    return (
      <Wrapper>
        <Level>
          <Title>PRICE HISTORY 2017</Title>
          <Back onClick={toggle}>Back to</Back>
        </Level>
        <div ref={e => (this.target = e)} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1rem;
  color: rgb(249, 129, 0);
  font-weight: bold;
`

const Back = styled.a`
  font-size: 12px;
  color: rgb(85, 85, 85);
  text-align: right;
  letter-spacing: 1px;
  cursor: pointer;
`
