import { h } from "preact"
import styled from "styled-components"
import { inject, observer } from "mobx-preact"

const Wrapper = styled.p`
  grid-column: span 2;
  font-size: 22px;
  font-family: "Montserrat";
  letter-spacing: 1px;
  text-align: center;
  align-self: center;
`

const Title = inject("search")(
  observer(({ search }) => {
    const { from, to } = search.delimiter
    if (!from || !to) return null
    return (
      <Wrapper>
        Best choices between {search.startDate.month},{" "}
        <strong>{search.startDate.day}</strong> and {search.endDate.month},{" "}
        <strong>{search.endDate.day}</strong>
      </Wrapper>
    )
  })
)

export default Title
