import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { useColumns } from "../../hooks";
import { fetchCoins, StateTypes } from "../../redux";
import DetailsDialog from "../DetailsDialog";
import Loader from "../Loader";

import "./CoinTable.css";

const CoinTable: React.FC = () => {
  const [filteredCoins, setFilteredCoins] = useState<object[]>([]);
  const columns = useColumns();
  const coins = useSelector((state: StateTypes) => state.coins);
  const coinsLoading = useSelector((state: StateTypes) => state.coinsLoading);
  const query = useSelector((state: StateTypes) => state.query);

  useEffect(() => {
    const filteredCoins =
      query === ""
        ? coins
        : coins.filter(
            (coin: any) =>
              coin.name.toLowerCase().includes(query.trim().toLowerCase()) ||
              coin.symbol.toLowerCase().includes(query.trim().toLowerCase())
          );
    setFilteredCoins(filteredCoins);
  }, [coins, query]);

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      {coinsLoading ? (
        <Loader />
      ) : (
        <>
          <div className="table-wrapper">
            <Table columns={columns} dataSource={filteredCoins} />
          </div>
          <DetailsDialog />
        </>
      )}
    </>
  );
};

export default CoinTable;
