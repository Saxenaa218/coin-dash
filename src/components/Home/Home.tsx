import React from "react";
import { Input } from "antd";
import CoinTable from "../../components/CoinTable";
import { store } from "../../redux";
import { debounce, SET_COINS } from "../../utils";
import "./Home.css";

const Home: React.FC = () => {
  const onChange = (e: any) => {
    const query = e.target.value;
    const coins = [...store.getState().coins];
    if (!query && query === "") {
      store.dispatch({ type: SET_COINS, payload: coins });
    } else {
      store.dispatch({
        type: SET_COINS,
        payload: coins.filter(
          (coin: any) =>
            coin.name.toLowerCase().includes(query.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(query.toLowerCase())
        ),
      });
    }
  };
  return (
    <div className="parent">
      <header className="header">Coin Dash</header>
      <section className="search">
        <Input
          placeholder="Search coins and tokens"
          onChange={debounce(onChange, 500)}
          style={{ width: "100%", maxWidth: "300px" }}
        />
      </section>
      <CoinTable />
    </div>
  );
};

export default Home;
