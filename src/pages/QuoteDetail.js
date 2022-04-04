import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import { Fragment } from 'react'
import HighlightQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ashley', text: 'Hello world!' },
  { id: 'q2', author: 'Ashley', text: 'hi!' }
]
const QuoteDetail = () => {
  const params = useParams()
  const match = useRouteMatch()
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
  if (!quote) {
    return <p>No quote found!</p>
  }
  return (
    <Fragment>
      <HighlightQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}
export default QuoteDetail
