import dayjs from "dayjs";
import { formatCurrency, formatNumber } from "../utils";

export const useExchangeColumn: () => any = () => {
  return [
    {
      title: "Coin",
      dataIndex: "base",
      key: "base",
    },
    {
      title: "Exchange",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price in USD",
      dataIndex: "price_usd",
      key: "price_usd",
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
    {
      title: "Comparison",
      dataIndex: "quote",
      key: "quote",
    },
    {
      title: "Comparison",
      dataIndex: "quote",
      key: "quote",
    },

    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (time: string) => (
        <span>
          {dayjs.unix(parseFloat(time)).format("hh:mm:ss a DD MMM YYYY Z")}
        </span>
      ),
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Volume (USD)",
      dataIndex: "volume_usd",
      key: "volume_usd",
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
  ];
};
