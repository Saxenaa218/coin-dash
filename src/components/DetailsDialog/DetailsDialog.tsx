import React from "react";
import { Modal, Table } from "antd";
import { useSelector } from "react-redux";
import { setDetailsModal, StateTypes } from "../../redux";
import { useExchangeColumn } from "../../hooks";
import Loader from "../Loader";

const DetailsDialog: React.FC = () => {
  const exchangeColumns = useExchangeColumn();
  const visible = useSelector((state: StateTypes) => state.detailsModalVisible);
  const exchangePrices = useSelector((state: StateTypes) => state.exchangeData);
  const exchangeDataLoading = useSelector(
    (state: StateTypes) => state.exchangeDataLoading
  );
  const handleCancel = () => {
    setDetailsModal(false);
  };
  return (
    <Modal
      title={exchangePrices[0]?.base}
      visible={visible}
      footer={null}
      onCancel={handleCancel}
      width="80%"
    >
      {exchangeDataLoading ? (
        <Loader />
      ) : (
        <Table columns={exchangeColumns} dataSource={exchangePrices} />
      )}
    </Modal>
  );
};

export default DetailsDialog;
