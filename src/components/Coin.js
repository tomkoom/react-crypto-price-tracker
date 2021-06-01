import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, marketcap, priceChange, volume }) => {
    return (
        <div className="coinsContainer">
            <div className="coinRow">
                <img className="coinImg" src={image} alt="crypto" />

                <h1 className="coinName">{name}</h1>
                <p className="coinSymbol">{symbol}</p>
                <p className="coinPrice">${price}</p>

                <p className="coinVolume">Volume: ${volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                <p className="coinPercent red">
                    {priceChange.toFixed(2)}
                </p>
                ) : (
                <p className="coinPercent green">
                    {priceChange.toFixed(2)}
                </p>
                )}

            <p className="coinMarketcap">
                Mkt Cap: ${marketcap.toLocaleString()}
            </p>

            </div>


            <div className="coin">
            
            
            
            
            
            
            

        </div>
        </div>
        
    )
}

export default Coin;
