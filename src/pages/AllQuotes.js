import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ashley', text: 'Hello world!' },
  { id: 'q2', author: 'Ashley', text: 'hi!' }
]
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}
export default AllQuotes
