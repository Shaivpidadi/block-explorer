import React from "react";
import { Table } from "antd";
import { ethers } from "ethers";

const columns = [
  { title: "Block Number", dataIndex: "blockNumber", key: "blockNumber" },
  { title: "Hash", dataIndex: "hash", key: "hash" },
  { title: "Timestamp", dataIndex: "timestamp", key: "timestamp" },
];

const data = [
  { key: 1, blockNumber: 12345, hash: "0xabc...", timestamp: "2024-10-11" },
];

const Blocks = () => {
  const getBlockNumber = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:8545"
    );
    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
  };

  getBlockNumber();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Blocks</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Blocks;
