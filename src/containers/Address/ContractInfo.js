import React from "react";
import Tooltip from "../../components/UI/Tooltip";
import { truncateAddress } from "../../utils";
import { useContractDetails } from "../../hooks";
import { BanknotesIcon } from "@heroicons/react/24/outline";

const ContractInfo = ({ creator, txHash, tokenInfo }) => {
  return (
    <div>
      <h1 className="mt-5 font-varela font-bold text-lg mx-auto">
        Contract info
      </h1>

      <div>
        <Tooltip text="The address which created the contract, and the transaction hash of the creation">
          <span className="cursor-pointer text-gray-500">Contract creator</span>
        </Tooltip>

        <div className="col-span-5 sm:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="truncate">
              {truncateAddress(creator)} created at {truncateAddress(txHash)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="cursor-pointer text-gray-500">Token Tracker</span>
        <div className="col-span-5 sm:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="flex truncate items-center">
              <BanknotesIcon className="w-4 h-4" />
              &nbsp;
              {`${tokenInfo?.symbol} (${tokenInfo?.name})`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractInfo;