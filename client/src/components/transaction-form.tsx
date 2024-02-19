"use client";
import { useState } from 'react';
import axios from 'axios';

const TransactionForm: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const createTransaction = async (transactionData: { amount: number, description: string }) => {
    try {
      const response = await axios.post('/api/create-transaction', transactionData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Call client function to create transaction
      const transactionData = { amount: Number(amount), description };
      const response = await createTransaction(transactionData);

      console.log('Transaction created:', response);

      setAmount('');
      setDescription('');
    } catch (error) {
      setError(error.message);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black" // Added text-black class
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black" // Added text-black class
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
