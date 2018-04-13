import { h } from "preact"
import styled from "styled-components"
import InputRange from "react-input-range"
import { inject, observer } from "mobx-preact"

const PriceRange = inject("search")(
  observer(({ search }) => {
    const { priceRange, setPrice } = search
    return (
      <Wrapper>
        <p>
          Price Range per <strong>night</strong>
        </p>
        <InputRange
          maxValue={600}
          minValue={100}
          step={100}
          value={priceRange}
          onChange={setPrice}
        />
        <Level>
          <span>min</span>
          <span>max</span>
        </Level>
        <Level>
          <Values>{`$${priceRange.min}`}</Values>
          <Values>{`$${priceRange.max}`}</Values>
        </Level>
      </Wrapper>
    )
  })
)

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 13px;
  color: rgb(181, 181, 181);
  overflow: auto;
`

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const Values = styled.span`
  display: block;
  font-size: 22px;
  letter-spacing: 1px;
  color: #f88000;
  font-weight: bold;
  text-align: center;
`

export default PriceRange
