import React from "react";
import { Affix, Input } from "antd";
import CoinTable from "../../components/CoinTable";
import { setQuery } from "../../redux";
import { debounce } from "../../utils";
import "./Home.css";

const Home: React.FC = () => {
  const onChange = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <div className="parent">
      <Affix offsetTop={0}>
        <header className="header">Coin Dash</header>
      </Affix>
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
