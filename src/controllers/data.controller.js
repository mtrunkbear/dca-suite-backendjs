import yahooFinance from 'yahoo-finance2';
//const query = 'BTC-USD';
const queryOptions = { period1: '2010-02-01', period2:'2021-02-01',interval:'1mo' };



export const getDataBySymbol = async (req, res) => {
  const { symbol } = req.params;
  const body = req.query;
  console.log(body)
    const data = await yahooFinance.historical(symbol,queryOptions)

    res.status(200).json(data);
  };

/*

 const datos = getData().then(results => results.map((item)=>item.open));




app.get('/api/historical',(req,res)=>{
    //getData().then(results => results.map((item)=>item.open)).then(results =>res.json(results))
    getData().then(results =>res.json(results))


})
const getData =async()=>{

    const data = await yahooFinance.historical(query,queryOptions)
    return data;
    
    } */