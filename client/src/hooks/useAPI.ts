import axios from "axios";

type T_environment = "development" | "production";
type T_route = "transaction" | "user" | "transactions";

const API_CONFIG = (environment: T_environment) => {
  switch (environment) {
    case "development":
      return "http://localhost:2000/api/v1";
    case "production":
      return "https://api.example.com/api/v1";
  }
};

export type T_transaction = {
  user: string;
  amount: number;
  description: string;
};

const createTransaction = async ({
  transaction,
  API_ENDPOINT,
}: {
  transaction: T_transaction;
  API_ENDPOINT: string;
}) => {
  try {
    await axios.post(API_ENDPOINT, transaction);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

const getTransaction = async ({
  API_ENDPOINT,
  transaction_id,
}: {
  API_ENDPOINT: string;
  transaction_id: string;
}) => {
  try {
    const data = (await axios.get(`${API_ENDPOINT}/${transaction_id}`)).data;
    return data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

const updateTransaction = async ({
  API_ENDPOINT,
  transaction_id,
  transaction,
}: {
  API_ENDPOINT: string;
  transaction_id: string;
  transaction: T_transaction;
}) => {
  try {
    const res = await axios.put(
      `${API_ENDPOINT}/${transaction_id}`,
      transaction,
    );
    return res;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

const deleteTransaction = async ({
  API_ENDPOINT,
  transaction_id,
}: {
  API_ENDPOINT: string;
  transaction_id: string;
}) => {
  try {
    const res = await axios.delete(`${API_ENDPOINT}/${transaction_id}`);
    return res;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

const getTransactions = async ({
  user_id,
  API_ENDPOINT,
}: {
  user_id: string;
  API_ENDPOINT: string;
}): Promise<{
  success: boolean;
  transactions?: T_transaction[];
  error?: string;
}> => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/${user_id}`);
    return { success: true, transactions: res.data };
  } catch (error) {
    let message = "Some error ocurred";
    if (error instanceof Error) {
      console.log(error.message);
      message = error.message;
    }

    return { success: false, error: message };
  }
};

type T_useAPI = { environment: T_environment; route: T_route };

const useAPI = ({ environment, route }: T_useAPI) => {
  const URL = API_CONFIG(environment);
  const API_ENDPOINT = `${URL}/${route}`;
  switch (route) {
    case "transaction":
      return {
        addTransaction: (transaction: T_transaction) =>
          createTransaction({ transaction, API_ENDPOINT }),
        getTransaction: (transaction_id: string) =>
          getTransaction({ transaction_id, API_ENDPOINT }),
        updateTransaction: (
          transaction_id: string,
          transaction: T_transaction,
        ) => updateTransaction({ transaction_id, transaction, API_ENDPOINT }),
        deleteTransaction: (transaction_id: string) =>
          deleteTransaction({ transaction_id, API_ENDPOINT }),
      };

    case "transactions":
      return {
        getTransactions: (user_id: string) =>
          getTransactions({ user_id, API_ENDPOINT }),
      };

    case "user":
      return {};
  }
};

export default useAPI;
