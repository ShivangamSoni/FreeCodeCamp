import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";

const QuoteBox = () => {
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    axios
      .get(url)
      .then((resp) => {
        const {
          data: { quotes },
        } = resp;
        setQuote(quotes[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(quote.text)}%0ABy:%20${encodeURI(
    quote.author,
  )}%0A%0A&hashtags=RandomQuote,ShivangamSoniReactQuoteGenerator,ReactQuoteGenerator`;

  return (
    <div id="quote-box">
      <figure className="quoteWrapper">
        <blockquote id="text">{quote.text}</blockquote>
        <figcaption id="author">&mdash;{quote.author}</figcaption>
      </figure>

      <div className="btnWrapper">
        <Button type="a" href={tweetUrl} target="_blank" id="tweet-quote">
          Tweet
        </Button>
        <Button onClick={getQuote} id="new-quote">
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default QuoteBox;
