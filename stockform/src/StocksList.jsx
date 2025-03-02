import { useEffect, useState } from "react";

function StockList(props) {
    const [stockList, setStockList] = useState([]);
    let difference = 0;

    useEffect(() => {
        if (props.stockInformation.symbol !== "None") {
            const difference = (props.stockInformation.latestPrice - props.stockInformation.priceInput) * props.stockInformation.quantity;
            setStockList([
                <div className="StockList" key="StockList">
                    <h3>Stocks List</h3>
                    <li className="subList" key="subList">
                        <ul className="Symbol" key="Symbol">Symbol: {props.stockInformation.symbol}</ul>
                        <ul className="Quantity" key="Quantity">Quantity: {props.stockInformation.quantity}</ul>
                        <ul className="PurchasePrice" key="PurchasePrice">Purchase Price: {props.stockInformation.priceInput}</ul>
                        <ul className="ProfitLoss" key="ProfitLoss">Profit/Loss: {difference}</ul>
                    </li>
                </div>
            ]);
        } else {
            setStockList([
                <div className="StockList">
                    <h3>Stocks List</h3>
                    <p className="noStock">No stocks are available.</p>
                </div>
            ]);
        }
    }, [props]);

    return (
        <div>
            {stockList}
        </div>
    );
}

export default StockList;