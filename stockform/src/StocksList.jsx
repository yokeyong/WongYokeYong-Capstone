function StockList(props) {

    const difference = (props.stockInformation.latestPrice - props.stockInformation.priceInput) * props.stockInformation.quantity

    return (
        <div className="StockList">
            <h3>Stocks List</h3>
            <p id="Symbol">Symbol: {props.stockInformation.symbol}</p>
            <p id="Quantity">Quantity: {props.stockInformation.quantity}</p>
            <p id="PurchasePrice">Purchase Price: {props.stockInformation.priceInput}</p>
            <p id="ProfitLoss">Profit/Loss: {difference}</p>
        </div>
    )
}

export default StockList;