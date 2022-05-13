import yahooFinance from 'yahoo-finance2';
//const query = 'BTC-USD';



export const getDataBySymbol = async (req, res) => {
  const { symbol } = req.params;
  const query = req.query;
  console.log(query)
if (!query.period1 || !query.period2 || !query.interval ) {

  console.log('error');
}
else{
   const data = await yahooFinance.historical(symbol,query);
  return res.status(200).json(data);

  
}
    
  };

