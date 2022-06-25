import yahooFinance from "yahoo-finance2";

export const getDataBySymbol = async (req, res) => {
  const { symbol } = req.params;
  const query = req.query;
  console.log(query, { symbol: symbol });
  if (!query.period1 || !query.period2 || !query.interval || !symbol) {
    console.log("error 400");
  } else {
    try {
      const data = await yahooFinance.historical(symbol, query);
      return res.status(200).json(data);
    } catch (error) {
      console.error("The query have an Error" + Object.values(error));
    }
  }
};
