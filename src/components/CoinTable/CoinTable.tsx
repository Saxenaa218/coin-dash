import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useColumns } from "../../hooks";
import { fetchCoins, StateTypes } from "../../redux";
import DetailsDialog from "../DetailsDialog";
import Loader from "../Loader";
import "./CoinTable.css";

interface CoinData {
  key: string;
  [key: string]: any;
}

const CustomTable: React.FC<{ columns: any[]; dataSource: CoinData[] }> = ({ columns, dataSource }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {columns.map((column, index) => (
              <th
                key={column.key || index}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {dataSource.map((row, rowIndex) => (
            <tr
              key={row.key || rowIndex}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
            >
              {columns.map((column, colIndex) => (
                <td key={column.key || colIndex} className="px-4 py-4 whitespace-nowrap text-sm">
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CoinTable: React.FC = () => {
  const [filteredCoins, setFilteredCoins] = useState<CoinData[]>([]);
  const columns = useColumns();
  const coins = useSelector((state: StateTypes) => state.coins);
  const coinsLoading = useSelector((state: StateTypes) => state.coinsLoading);
  const query = useSelector((state: StateTypes) => state.query);

  useEffect(() => {
    const filtered = query === ""
      ? coins
      : coins.filter(
          (coin: any) =>
            coin.name.toLowerCase().includes(query.trim().toLowerCase()) ||
            coin.symbol.toLowerCase().includes(query.trim().toLowerCase())
        );
    
    // Add key property for React rendering
    const filteredWithKeys = filtered.map((coin: any, index: number) => ({
      ...coin,
      key: coin.id || index.toString(),
    }));
    
    setFilteredCoins(filteredWithKeys);
  }, [coins, query]);

  useEffect(() => {
    fetchCoins();
  }, []);

  if (coinsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="p-6">
        {filteredCoins.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400">
              <p className="text-lg font-medium mb-2">No coins found</p>
              <p className="text-sm">Try adjusting your search terms</p>
            </div>
          </div>
        ) : (
          <CustomTable columns={columns} dataSource={filteredCoins} />
        )}
      </div>
      <DetailsDialog />
    </>
  );
};

export default CoinTable;
