import React from 'react';

interface DecodedErrorProps {
  decodedError: string | null;
}

const DecodedError: React.FC<DecodedErrorProps> = ({ decodedError }) => {
  if (!decodedError) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium">Decoded Error</h2>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        <pre className="whitespace-pre-wrap font-mono text-sm">{decodedError}</pre>
      </div>
    </div>
  );
};

export default DecodedError;
