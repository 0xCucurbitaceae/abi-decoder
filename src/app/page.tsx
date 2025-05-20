'use client';

import { useState, useEffect } from 'react';
import { Interface } from 'ethers';
import ABIInput from '../components/ABIInput';
import ErrorDataInput from '../components/ErrorDataInput';
import DecodedError from '../components/DecodedError';

export default function Home() {
  const [abi, setAbi] = useState<string>('');
  const [errorData, setErrorData] = useState<string>('');
  const [decodedError, setDecodedError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAbiValid, setIsAbiValid] = useState<boolean>(false);

  // Validate ABI whenever it changes
  useEffect(() => {
    if (!abi.trim()) {
      setIsAbiValid(false);
      return;
    }

    try {
      // Try to parse the ABI as JSON
      const parsedAbi = JSON.parse(abi);
      
      // Check if it's an array
      if (!Array.isArray(parsedAbi)) {
        setIsAbiValid(false);
        return;
      }
      
      // Try to create an ethers Interface with the ABI to validate it
      try {
        new Interface(parsedAbi);
        setIsAbiValid(true); // Valid ABI
      } catch {
        setIsAbiValid(false);
      }
    } catch {
      setIsAbiValid(false);
    }
  }, [abi]);

  const decodeError = () => {
    try {
      setError(null);
      
      // Validate inputs
      if (!abi.trim()) {
        throw new Error('ABI is required');
      }
      
      if (!isAbiValid) {
        throw new Error('Please provide a valid ABI');
      }
      
      if (!errorData.trim()) {
        throw new Error('Error data is required');
      }
      
      // Parse ABI
      const parsedAbi = JSON.parse(abi);
      const iface = new Interface(parsedAbi);
      
      // Decode error
      const decoded = iface.parseError(errorData);
      setDecodedError(JSON.stringify(decoded, null, 2));
    } catch (err) {
      console.error('Error decoding:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setDecodedError(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Ethereum ABI Error Decoder</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <ABIInput abi={abi} setAbi={setAbi} />
          
          <ErrorDataInput errorData={errorData} setErrorData={setErrorData} />
          
          <div className="flex justify-center">
            <button
              onClick={decodeError}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Decode Error
            </button>
          </div>
          
          {error && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          )}
          
          <DecodedError decodedError={decodedError} />
        </div>
      </div>
    </main>
  );
}
