import React from "react";
import { useSelector } from "react-redux";
import { setDetailsModal, StateTypes } from "../../redux";
import { useExchangeColumn } from "../../hooks";
import { XIcon } from "../Icons";
import Loader from "../Loader";

interface ExchangeData {
  key: string;
  [key: string]: any;
}

const CustomModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title} - Exchange Prices
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <XIcon className="text-gray-500 dark:text-gray-400" size={20} />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomExchangeTable: React.FC<{ columns: any[]; dataSource: ExchangeData[] }> = ({ columns, dataSource }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {columns.map((column, index) => (
              <th
                key={column.key || index}
                className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
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
                <td key={column.key || colIndex} className="px-6 py-4 whitespace-nowrap text-sm">
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

const DetailsDialog: React.FC = () => {
  const exchangeColumns = useExchangeColumn();
  const visible = useSelector((state: StateTypes) => state.detailsModalVisible);
  const exchangePrices = useSelector((state: StateTypes) => state.exchangeData);
  const exchangeDataLoading = useSelector(
    (state: StateTypes) => state.exchangeDataLoading
  );
  
  const handleClose = () => {
    setDetailsModal(false);
  };

  // Add key property for React rendering
  const exchangePricesWithKeys = exchangePrices.map((item: any, index: number) => ({
    ...item,
    key: item.market || index.toString(),
  }));

  return (
    <CustomModal
      isOpen={visible}
      onClose={handleClose}
      title={exchangePrices[0]?.base || "Cryptocurrency"}
    >
      {exchangeDataLoading ? (
        <Loader text="Loading exchange data..." />
      ) : exchangePrices.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            <p className="text-lg font-medium mb-2">No exchange data found</p>
            <p className="text-sm">Unable to fetch exchange prices at this time</p>
          </div>
        </div>
      ) : (
        <CustomExchangeTable columns={exchangeColumns} dataSource={exchangePricesWithKeys} />
      )}
    </CustomModal>
  );
};

export default DetailsDialog;
