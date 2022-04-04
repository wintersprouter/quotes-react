import QuoteForm from '../components/comments/QuoteForm '
const NewQuote = () => {
  const addQuoteHandler = quoteData => {
    console.log(quoteData)
  }
  return <QuoteForm onAddQuote={addQuoteHandler} />
}
export default NewQuote
