import { useEffect, useState } from "react";
import StockList from "./StocksList";

function FinanceForm() {

    const yestDate = new Date();
    yestDate.setDate(yestDate.getDate() - 1);
    const formattedYestDate = yestDate.toISOString().split('T')[0];
    
    const [apiResponse, setApiResponse] = useState({})
    const [formData, setFormData] = useState({})

    useEffect(() => {
        if (formData) {
            const {symbol, quantity, priceInput} = formData;
            // 1st account 88XJ721RN2667TQT
            // 2nd account C7LJKZ5EGOBJ9HF9
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=88XJ721RN2667TQT`)
                .then((response) => response.status === 200 ? response.json() : console.log("Error"))
                .then((data) => {
                    setApiResponse({
                        symbol: symbol,
                        latestPrice: data["Time Series (Daily)"][formattedYestDate]["4. close"],
                        quantity: quantity,
                        priceInput: priceInput
                    })
                }
            )
        }
    }
    , [formData, formattedYestDate])

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const symbol = form.symbol.value
        const quantity = form.quantity.value
        const price = form.price.value

        setFormData({
            symbol: symbol,
            quantity: quantity,
            priceInput: price
        })
    }

    return (
        <div>
            <div className="FinanceForm" onSubmit={handleSubmit}>
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
            <StockList stockInformation={apiResponse} />
        </div>
    )
}

export default FinanceForm;