import React from 'react';
import dayjs from "dayjs";
import { formatCurrency, formatNumber } from "../utils";

const CoinCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase">
    {text}
  </span>
);

const ExchangeCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-medium text-gray-900 dark:text-white">
    {text}
  </span>
);

const PriceCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-mono font-medium text-green-600 dark:text-green-400">
    {formatCurrency(text)}
  </span>
);

const QuoteCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300">
    {text}
  </span>
);

const TimeCell: React.FC<{ time: string }> = ({ time }) => (
  <span className="text-sm text-gray-500 dark:text-gray-400">
    {dayjs.unix(parseFloat(time)).format("hh:mm:ss a DD MMM YYYY Z")}
  </span>
);

const VolumeCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
    {formatNumber(text)}
  </span>
);

const VolumeUSDCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-mono text-sm text-purple-600 dark:text-purple-400">
    {formatCurrency(text)}
  </span>
);

export const useExchangeColumn: () => any = () => {
  return [
    {
      title: "Coin",
      dataIndex: "base",
      key: "base",
      render: (text: string) => <CoinCell text={text} />,
    },
    {
      title: "Exchange",
      dataIndex: "name", 
      key: "name",
      render: (text: string) => <ExchangeCell text={text} />,
    },
    {
      title: "Price (USD)",
      dataIndex: "price_usd",
      key: "price_usd",
      render: (text: string) => <PriceCell text={text} />,
    },
    {
      title: "Quote Currency",
      dataIndex: "quote",
      key: "quote",
      render: (text: string) => <QuoteCell text={text} />,
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "market",
      render: (text: string) => (
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {text}
        </span>
      ),
    },
    {
      title: "Last Updated",
      dataIndex: "time",
      key: "time",
      render: (time: string) => <TimeCell time={time} />,
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      render: (text: string) => <VolumeCell text={text} />,
    },
    {
      title: "Volume (USD)",
      dataIndex: "volume_usd",
      key: "volume_usd",
      render: (text: string) => <VolumeUSDCell text={text} />,
    },
  ];
};
