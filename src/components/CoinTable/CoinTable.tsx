import React, { useEffect } from "react";
import { Table } from "antd";
import { useColumns } from "../../hooks";
import { fetchCoins, StateTypes } from "../../redux";
import { useSelector } from "react-redux";

import "./CoinTable.css";

const CoinTable: React.FC = () => {
  const columns = useColumns();
  const coins = useSelector((state: StateTypes) => state.coins);

  useEffect(() => {
    fetchCoins();
  }, []);

  return <Table columns={columns} dataSource={coins} />;
};

export default CoinTable;
