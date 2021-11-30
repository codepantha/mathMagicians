import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://random-math-quote-api.herokuapp.com/',
        );
        const quote = await response.json();
        setQuote(quote);
      } catch (e) {
        setError(
          'The quote genie is down with a cold. Come back later for a quote...',
        );
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="w-100">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="page__padding scale-up-ver-top">
          <p className="f4 lh-copy tracked pv4">{quote.quote}</p>
          <p>{quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
