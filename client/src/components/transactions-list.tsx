import React from "react";
import useAPI from "@/hooks/useAPI";
import { MdMoreVert } from "react-icons/md";

const TransactionsList = async () => {
  const user = "65cf9fc313d0eb24d0b8f66e";

  const { getTransactions } = useAPI({
    environment: "development",
    route: "transactions",
  });

  const res = getTransactions && (await getTransactions(user));
  const transactions = res?.success && res.transactions;

  return (
    <div className="w-80 h-fit max-h-96 p-2 overflow-y-scroll flex flex-col gap-2 rounded-lg bg-neutral-950 shadow-md shadow-black">
      {transactions &&
        transactions.map((transaction, index) => (
          <div
            key={index}
            className="border border-white/5 w-full h-12 p-2 flex justify-between items-center gap-2 rounded-lg bg-neutral-950 shadow-md shadow-black hover:border-white/15 hover:scale-[1.01] ease-in-out duration-500"
          >
            <div className="w-full flex justify-between gap-2">
              {" "}
              <h1 className="w-full">{transaction.description}</h1>
              <p className="w-full text-center">{transaction.amount}</p>
            </div>
            <MdMoreVert className="w-8 h-8" />
          </div>
        ))}
    </div>
  );
};

export default TransactionsList;
