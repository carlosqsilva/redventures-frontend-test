import { h } from "preact"
import styled from "styled-components"
import { inject, observer } from "mobx-preact"

import { Filled } from "./stars"

const Stars = inject("search")(
  observer(({ search }) => {
    return (
      <Wrapper>
        <p>Stars</p>
        {[...Array(5)].map((e, i) => {
          return (
            <Label key={e}>
              <Input name={5 - i} onChange={search.setStar} />
              {[...Array(5 - i)].map((_, i) => <Filled key={i} />)}
            </Label>
          )
        })}
      </Wrapper>
    )
  })
)

const Wrapper = styled.div`
  padding: 10px;
  font-size: 13px;
  color: rgb(181, 181, 181);
  overflow: auto;
`

const Label = styled.label`
  height: 25px;
  display: inline-flex;
  align-items: center;

  @media screen and (min-width: 720px) {
    display: flex;
  }
`

const Input = styled.input.attrs({
  type: "checkbox"
})`
  -webkit-appearance: none;
  outline: none;
  width: 20px;
  height: 20px;
  border: 2px solid #f88000;
  border-radius: 2px;
  position: relative;

  &:checked::before {
    content: "✔";
    position: absolute;
    font-size: 22px;
    top: -3px;
    left: 0px;
    color: #f88000;
  }
`

export default Stars
