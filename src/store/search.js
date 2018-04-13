import {
  decorate,
  observable,
  action,
  configure,
  runInAction,
  computed
} from "mobx"

const url = "https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels"
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

configure({ enforceActions: true })

class searchStore {
  loading = false
  results = []
  stars = []
  priceRange = {
    min: 100,
    max: 600
  }
  delimiter = {
    from: undefined,
    to: undefined
  }

  get startDate() {
    return {
      month: months[this.delimiter.from.getMonth()],
      day: this.delimiter.from.getDate(),
      year: this.delimiter.from.getFullYear()
    }
  }

  get endDate() {
    return {
      month: months[this.delimiter.to.getMonth()],
      day: this.delimiter.to.getDate(),
      year: this.delimiter.to.getFullYear()
    }
  }

  get Days() {
    const { from, to } = this.delimiter
    if (!from || !to) return 1
    return Math.floor(Date.parse(to) - Date.parse(from)) / 86400000 + 1
  }

  get allStars() {
    return this.stars.join(",")
  }

  get filtered() {
    if (this.results.length === 0) return []
    const { min, max } = this.priceRange
    let stars = this.stars
    return this.results
      .filter(data => data.price >= min && data.price <= max)
      .filter(data => {
        if (stars.length === 0) return true
        return stars.includes(data.rate.toString())
      })
  }

  setStar = ({ target }) => {
    const { name, checked } = target
    checked
      ? this.stars.push(name)
      : (this.stars = this.stars.filter(v => v !== name))
  }

  setPrice = price => {
    this.priceRange = price
  }

  setDelimiter = delimiter => {
    this.delimiter = delimiter
  }

  loadData = () => {
    this.loading = true
    return fetch(url)
      .then(resp => resp.json())
      .then(results => {
        runInAction(() => {
          this.results = results.data
        })
      })
  }

  loadingStop = () => {
    this.loading = false
  }
}

decorate(searchStore, {
  results: observable,
  loading: observable,
  delimiter: observable,
  priceRange: observable,
  stars: observable,
  startDate: computed,
  allStars: computed,
  endDate: computed,
  filtered: computed,
  loadData: action,
  loadingStop: action,
  setPrice: action,
  setStar: action,
  setDelimiter: action
})

export default new searchStore()
