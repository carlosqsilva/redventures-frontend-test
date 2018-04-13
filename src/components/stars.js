import styled from "styled-components"
import fill from "../assets/star-filled.svg"
import empty from "../assets/star-outline.svg"

export const Filled = styled.span`
  height: 20px;
  width: 20px;
  background: url(${fill}) no-repeat;
`

export const Empty = Filled.extend`
  background: url(${empty}) no-repeat;
`
