"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { InputField } from "./components";

interface Props {
  user: string;
  amount: string;
  description: string;
}

export default function TransactionUpdater() {
  const user = "65cf86b3f1c0f913afddfc3d";
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(0);

  const add_transaction = async ({ user, amount, description }: Props) => {
    try {
      const add_transaction = await axios.post(
        "http://localhost:2000/api/v1/transaction",
        {
          user: user,
          amount: amount,
          description: description,
        },
      );
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };

  const [list_transactions, setList] = useState<React.JSX.Element[]>([]);
  const get_transactions = async (user: string) => {
    try {
      const api_link = "http://localhost:2000/api/v1/transactions/" + user;
      const get_transactions = await axios.get(api_link);
      const list_transactions_func: React.JSX.Element[] = [];

      if (get_transactions.data.length > 1) {
        for (let i = 0; i < get_transactions.data.length; i++) {
          list_transactions_func.push(
            <div key={i} className="block border w-11/12 m-2 p-3 border-white">
              <p>{get_transactions.data[i].amount}</p>
              <p>{get_transactions.data[i].description}</p>
            </div>,
          );
        }
      } else {
        list_transactions_func.push(
          <div className="block border w-11/12 m-2 p-3 border-white">
            <p>{get_transactions.data.amount}</p>
            <p>{get_transactions.data.description}</p>
          </div>,
        );
      }
      setList(list_transactions_func);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };
  if (!count) {
    get_transactions(user);
    setCount(1);
  }
  return (
    <>
      <div>
        <InputField
          type="text"
          value="amount"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <InputField
          type="text"
          value="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button
          className="block bg-white text-black p-2  m-auto border"
          onClick={() => {
            add_transaction({ user, amount, description }).then(() => {
              get_transactions(user);
            });
          }}
        >
          Add Transaction
        </button>
      </div>
      <div className="w-100 m-auto ">{list_transactions}</div>
    </>
  );
}
