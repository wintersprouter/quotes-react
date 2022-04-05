import { Fragment } from 'react'
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom'

import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

//custom React hook: useNavigateSearch
const useNavigateSearch = () => {
  const navigate = useNavigate()
  return (pathname, params) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` })
}

const QuoteList = props => {
  const navigateSearch = useNavigateSearch()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

  const changeSortingHandler = () => {
    navigateSearch(location.pathname, {
      sort: `${isSortingAscending ? 'desc' : 'asc'}`
    })
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default QuoteList
