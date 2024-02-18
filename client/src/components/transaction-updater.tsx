import axios from "axios";
interface Props {
  user: string;
  amount: number;
  description: string;
}
export default async function add_transaction({
  user,
  amount,
  description,
}: Props) {
  try {
    const api_link = "http://localhost:2000/api/v1/transactions/" + user;
    const add_transaction = await axios.post(
      "http://localhost:2000/api/v1/transaction",
      {
        user: user,
        amount: amount,
        description: description,
      },
    );

    const get_transactions = await axios.get(api_link);
  } catch (err) {
    if (err instanceof Error) return err.message;
    return "Server error";
  }
}
