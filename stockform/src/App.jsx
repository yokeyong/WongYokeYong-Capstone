import { useState } from 'react'
import './App.css'

function FinanceForm() {
  return (
    <div className="FinanceForm">
      <h3> Finance Dashboard </h3>
      <form>
        <label>
          <input type="text" name="symbol" placeholder="Stock Symbol" />
        </label>
        <label>
          <input type="number" name="quantity" placeholder="Quantity" />
        </label>
        <label>
          <input type="number" name="price" placeholder="Purchase Price" />
        </label>
        <button type="submit">Add Stock</button>
      </form>
    </div>
  )
}

function StockList() {
  return (
    <div className="StockList">
      <h3>Stocks List</h3>
      <p>No stocks added yet.</p>
    </div>
  )
}

// async function retrieveStockInfomration(stock) {
//   const responseStock = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=88XJ721RN2667TQT`)
//   const currentDate = new Date().toISOString().split('T')[0]

//   if (responseStock.status === 200) {
//     return responseStock.then((response) => response.json())
//       .then((data) => {
//         return {
//           symbol: data["Meta Data"]["2. Symbol"],
//           latestPrice: data["Time Series (Daily)"][currentDate]["4. close"]
//         }
//       })
//   } else {
//     return "Stock not found/invalid."
//   }
// }



function App() {
  const [count, setCount] = useState(0)

  return<div>
        <FinanceForm />
        <StockList />
      </div>
}

export default App
