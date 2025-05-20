import React from 'react';

interface ABIInputProps {
  abi: string;
  setAbi: (abi: string) => void;
}

const ABIInput: React.FC<ABIInputProps> = ({ abi, setAbi }) => {
  const handlePaste = () => {
    navigator.clipboard.readText().then(
      (clipText) => {
        try {
          // Try to parse and format the JSON
          const parsed = JSON.parse(clipText);
          setAbi(JSON.stringify(parsed, null, 2));
        } catch (e) {
          // If it's not valid JSON, just paste the raw text
          setAbi(clipText);
        }
      },
      () => {
        // Handle clipboard read error
        console.error('Failed to read from clipboard');
      }
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor="abi-input" className="block text-lg font-medium">
          Contract ABI
        </label>
        <button
          onClick={handlePaste}
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm"
        >
          Paste from Clipboard
        </button>
      </div>
      <textarea
        id="abi-input"
        value={abi}
        onChange={(e) => setAbi(e.target.value)}
        className="w-full h-64 p-4 border border-gray-300 rounded-md font-mono text-sm resize-none"
        placeholder="Paste your contract ABI here (JSON format)"
      />
    </div>
  );
};

export default ABIInput;
