import React from 'react';
import { getOtherExchangeData } from "../redux";
import { formatCurrency, formatNumber, getColorText } from "../utils";
import { TrendingUpIcon, TrendingDownIcon } from "../components/Icons";

const handleOtherExchangeClick = (id: string) => {
  getOtherExchangeData(id);
};

const PriceChangeCell: React.FC<{ text: string }> = ({ text }) => {
  const isPositive = parseFloat(text) >= 0;
  return (
    <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
      {isPositive ? (
        <TrendingUpIcon size={16} />
      ) : (
        <TrendingDownIcon size={16} />
      )}
      <span className="font-medium">
        {text}<span className="text-xs ml-1">%</span>
      </span>
    </div>
  );
};

const PriceCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-medium text-gray-900 dark:text-white">
    {formatCurrency(text)}
  </span>
);

const NumberCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-gray-700 dark:text-gray-300">
    {formatNumber(text)}
  </span>
);

const SymbolCell: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-mono font-medium text-gray-800 dark:text-gray-200">
    {text}
  </span>
);

const MoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg 
               transition-colors duration-200 shadow-sm hover:shadow-md"
  >
    Prices
  </button>
);

export const useColumns: () => any = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <span className="font-semibold text-gray-900 dark:text-white">
          {text}
        </span>
      ),
    },
    {
      title: "1Hr Change",
      dataIndex: "percent_change_1h",
      key: "percent_change_1h",
      render: (text: string) => <PriceChangeCell text={text} />,
    },
    {
      title: "24Hr Change",
      dataIndex: "percent_change_24h",
      key: "percent_change_24h",
      render: (text: string) => <PriceChangeCell text={text} />,
    },
    {
      title: "7D Change",
      dataIndex: "percent_change_7d",
      key: "percent_change_7d",
      render: (text: string) => <PriceChangeCell text={text} />,
    },
    {
      title: "Price (USD)",
      dataIndex: "price_usd",
      key: "price_usd",
      render: (text: string) => <PriceCell text={text} />,
    },
    {
      title: "Price (BTC)",
      dataIndex: "price_btc",
      key: "price_btc",
      render: (text: string) => (
        <span className="text-gray-700 dark:text-gray-300">
          {text}<span className="text-xs ml-1 text-orange-500">BTC</span>
        </span>
      ),
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (text: string) => (
        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-bold rounded-full">
          #{text}
        </span>
      ),
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (text: string) => <SymbolCell text={text} />,
    },
    {
      title: "Current Supply",
      dataIndex: "csupply",
      key: "csupply",
      render: (text: string) => <NumberCell text={text} />,
    },
    {
      title: "Total Supply",
      dataIndex: "tsupply",
      key: "tsupply",
      render: (text: string) => <NumberCell text={text} />,
    },
    {
      title: "Volume 24Hr",
      dataIndex: "volume24",
      key: "volume24",
      render: (text: string) => <NumberCell text={text} />,
    },
    {
      title: "Volume 24Hr A",
      dataIndex: "volume24a",
      key: "volume24a",
      render: (text: string) => <NumberCell text={text} />,
    },
    {
      title: "Market Cap (USD)",
      dataIndex: "market_cap_usd",
      key: "market_cap_usd",
      render: (text: string) => <PriceCell text={text} />,
    },
    {
      title: "More",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <MoreButton onClick={() => handleOtherExchangeClick(text)} />
      ),
    },
  ];
};
