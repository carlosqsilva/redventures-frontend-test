import { h, Component } from "preact"
import styled from "styled-components"
import { observer, inject } from "mobx-preact"
import SearchBox from "../components/searchBox"

@inject("search")
@observer
class Search extends Component {
  state = {
    Results: null
  }

  handleClick = e => {
    this.props.search
      .loadData()
      .then(() => import("./results"))
      .then(({ Results }) => this.setState({ Results }))
      .then(_ => this.props.search.loadingStop())
  }

  render({ search }, { Results }) {
    return (
      <Wrapper>
        <SearchBox action={this.handleClick} />
        {Results && <Results />}
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`

export default Search
