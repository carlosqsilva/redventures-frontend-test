import { h, Component } from "preact"
import styled from "styled-components"
import { inject, observer } from "mobx-preact"
import DayPicker, { DateUtils } from "react-day-picker"
import { Button } from "./buttons"
import Loader from "./loader"

@inject("search")
@observer
export default class SearchBox extends Component {
  handleClick = day => {
    const { delimiter, setDelimiter } = this.props.search
    const range = DateUtils.addDayToRange(day, delimiter)
    setDelimiter(range)
  }

  formatDate = date => {
    return (
      <span>
        {date.month} <strong>{date.day}</strong>, {date.year}
      </span>
    )
  }

  render({ search, action }) {
    const { from, to } = search.delimiter
    const modifiers = { start: from, end: to }
    return (
      <Wrapper>
        <Title>Select the dates to stay in Charlotte</Title>
        <Container>
          <Block>
            <div>
              <Text primary>CHECK-IN</Text>
              <Text>
                {from ? this.formatDate(search.startDate) : "Choose a date"}
              </Text>
            </div>
            <div>
              <Text primary>CHECK-OUT</Text>
              <Text>
                {to ? this.formatDate(search.endDate) : "Choose a date"}
              </Text>
            </div>
            <Button onClick={action}>
              {search.loading ? <Loader /> : "Search hotels"}
            </Button>
          </Block>
          <Block>
            <DayPicker
              className="selection"
              onDayClick={this.handleClick}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              weekdaysShort={["S", "M", "T", "W", "T", "F", "S"]}
              disabledDays={[{ before: new Date() }]}
            />
          </Block>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: #fff;
  margin: -150px 10px 20px 10px;
  padding: 0 10px;
  border-radius: 7px;
  overflow: auto;
  box-shadow: 0px -40px 46px rgba(0, 0, 0, 0.33);

  @media screen and (min-width: 720px) {
    width: 840px;
  }
`

const Title = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-size: 22px;
  font-family: "Montserrat";
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    padding: 40px 80px;
    flex-direction: initial;
  }
`

const Block = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:first-child {
    > div {
      width: 120px;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: initial;
    justify-content: center;
    &:first-child {
      order: 2;
      flex-wrap: wrap;
      > div {
        margin: 10px;
      }
    }
  }
`

const Text = styled.p`
  font-size: ${props => (props.primary ? "22px" : "16px")};
  color: ${props => (props.primary ? "rgb(85,85,85)" : "rgb(181,181,181)")};
  text-align: left;
  margin: 0;
`
