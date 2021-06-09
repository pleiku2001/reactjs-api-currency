import "./App.css";
import React, { useState,useEffect } from "react";
import Coin from "./Coin";
const axios = require("axios");
function App() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  const handleChange = (e) => setSearch(e.target.value);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCoins(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const handleCoin=coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  

  return (
    <div className="App">
      <h1>App Get API Currency</h1>
      <form action="">
        <input type="text" onChange={handleChange} value={search} placeholder='type coin' className='input' />
      </form>

      <h3> List Coin </h3>
      {handleCoin.map((e)=>{
        return(
          <Coin
          key={e.id}
          name={e.name}
          symbol={e.symbol}
          current_price={e.current_price}
          image={e.image}
          total_volume={e.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
