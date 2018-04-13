import { h, render, Component } from "preact"
import Hero from "./containers/hero"
import Search from "./containers/search"
import Footer from "./containers/footer"

import searchStore from "./store/search"
import { Provider } from "mobx-preact"
import "./index.scss"

// const App = () => (

// )

const store = {
  search: searchStore
}

render(
  <Provider {...store}>
    <main>
      <Hero />
      <Search />
      <Footer />
    </main>
  </Provider>,
  document.body
)

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload()
  })
  require("preact/devtools")
}
