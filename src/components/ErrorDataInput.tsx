import React from 'react';

interface ErrorDataInputProps {
  errorData: string;
  setErrorData: (errorData: string) => void;
}

const ErrorDataInput: React.FC<ErrorDataInputProps> = ({ errorData, setErrorData }) => {
  const handlePaste = () => {
    navigator.clipboard.readText().then(
      (clipText) => {
        setErrorData(clipText.trim());
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
        <label htmlFor="error-data-input" className="block text-lg font-medium">
          Error Data
        </label>
        <button
          onClick={handlePaste}
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm"
        >
          Paste from Clipboard
        </button>
      </div>
      <textarea
        id="error-data-input"
        value={errorData}
        onChange={(e) => setErrorData(e.target.value)}
        className="w-full h-32 p-4 border border-gray-300 rounded-md font-mono text-sm resize-none"
        placeholder="Paste your error data here (e.g., 0x08c379a0...)"
      />
      <p className="text-sm text-gray-500">
        This should be the error data returned by the contract call, usually starting with 0x.
      </p>
    </div>
  );
};

export default ErrorDataInput;
