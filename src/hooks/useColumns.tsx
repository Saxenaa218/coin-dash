import { formatCurrency, formatNumber, getColorText } from "../utils";

export const useColumns: () => any = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "1Hour change",
      dataIndex: "percent_change_1h",
      key: "percent_change_1h",
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "24Hour Change",
      dataIndex: "percent_change_24h",
      key: "percent_change_24h",
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "7Day Change",
      dataIndex: "percent_change_7d",
      key: "percent_change_7d",
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "Price in USD",
      dataIndex: "price_usd",
      key: "price_usd",
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
    {
      title: "Price in BTC",
      dataIndex: "price_btc",
      key: "price_btc",
      render: (text: string) => (
        <span>
          {text}
          <b>BTC</b>
        </span>
      ),
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Current Supply",
      dataIndex: "csupply",
      key: "csupply",
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Total Supply",
      dataIndex: "tsupply",
      key: "tsupply",
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Volume 24Hr",
      dataIndex: "volume24",
      key: "volume24",
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Volume 24Hr A",
      dataIndex: "volume24a",
      key: "volume24a",
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Market Cap(USD)",
      dataIndex: "market_cap_usd",
      key: "market_cap_usd",
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
  ];
};
