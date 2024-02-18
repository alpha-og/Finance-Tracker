import Image from "next/image";
import add_transaction from "@/components/transaction-updater";

add_transaction({
  user: "65cf86b3f1c0f913afddfc3d",
  amount: 10000,
  description: "Dummy UI",
});

export default function Home() {
  return <h1>Finance Tracker</h1>;
}
