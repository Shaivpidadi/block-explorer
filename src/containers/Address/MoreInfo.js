import React from "react";
import Tooltip from "../../components/UI/Tooltip";
import { truncateAddress } from "../../utils";

const MoreInfo = ({ totalTxs, latestTxs, firstTxs }) => {
  return (
    <div>
      <h1 className="mt-5 font-varela font-bold text-lg mx-auto">Txn info</h1>

      <div>
        <Tooltip text="The total transactions initiated by this address and the sum of transaction fees. Only “Transactions”, token transfers, and NFT transfers are counted.">
          <span className="cursor-pointer text-gray-500">
            Total txns initiated
          </span>
        </Tooltip>

        <div className="col-span-5 sm:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="truncate">{totalTxs} Txs</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="cursor-pointer text-gray-500">Latest txn sent</span>
        <div className="col-span-5 sm:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="truncate">
              {latestTxs
                ? truncateAddress(latestTxs)
                : "NO TRANSACTIONS RECORDED"}
              {/* 10/22/2024, 13:46:23 */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="cursor-pointer text-gray-500">First txn sent</span>
        <div className="col-span-5 sm:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="truncate">
              {firstTxs
                ? truncateAddress(firstTxs)
                : "NO TRANSACTIONS RECORDED"}
              {/* 04/04/2023, 13:08:23 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
