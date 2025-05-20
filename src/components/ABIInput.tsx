import React, { useState, useEffect } from 'react';
import { 
  OpenZeppelinABIs,
} from '../utils/abis';

interface ABIInputProps {
  abi: string;
  setAbi: (abi: string) => void;
}

type ABIOption = 'custom' | keyof typeof OpenZeppelinABIs;

const ABIInput: React.FC<ABIInputProps> = ({ abi, setAbi }) => {
  const [selectedABI, setSelectedABI] = useState<ABIOption>('custom');

  // Update the ABI when a predefined one is selected
  useEffect(() => {
    if (selectedABI !== 'custom') {
      const selectedAbiContent = OpenZeppelinABIs[selectedABI];
      setAbi(JSON.stringify(selectedAbiContent, null, 2));
    }
  }, [selectedABI, setAbi]);

  const handleABIChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedABI(e.target.value as ABIOption);
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then(
      (clipText) => {
        try {
          // Try to parse and format the JSON
          const parsed = JSON.parse(clipText);
          setAbi(JSON.stringify(parsed, null, 2));
          setSelectedABI('custom'); // Switch to custom when pasting
        } catch (e) {
          // If it's not valid JSON, just paste the raw text
          setAbi(clipText);
          setSelectedABI('custom'); // Switch to custom when pasting
        }
      },
      () => {
        // Handle clipboard read error
        console.error('Failed to read from clipboard');
      }
    );
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAbi(e.target.value);
    setSelectedABI('custom'); // Switch to custom when manually editing
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label htmlFor="abi-select" className="block text-lg font-medium">
          Contract ABI
        </label>
        <button
          onClick={handlePaste}
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm"
        >
          Paste from Clipboard
        </button>
      </div>
      
      <div className="w-full">
        <select
          id="abi-select"
          value={selectedABI}
          onChange={handleABIChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
        >
          <option value="custom">Custom ABI</option>
          <optgroup label="OpenZeppelin Standards">
            <option value="ERC20">ERC20</option>
            <option value="ERC721">ERC721</option>
            <option value="ERC1155">ERC1155</option>
          </optgroup>
          <optgroup label="OpenZeppelin Extensions">
            <option value="ERC20Burnable">ERC20 Burnable</option>
            <option value="ERC20Capped">ERC20 Capped</option>
            <option value="ERC20Pausable">ERC20 Pausable</option>
            <option value="ERC721Burnable">ERC721 Burnable</option>
            <option value="ERC721Pausable">ERC721 Pausable</option>
            <option value="ERC721URIStorage">ERC721 URI Storage</option>
            <option value="ERC1155Burnable">ERC1155 Burnable</option>
            <option value="ERC1155Pausable">ERC1155 Pausable</option>
            <option value="ERC1155URIStorage">ERC1155 URI Storage</option>
          </optgroup>
          <optgroup label="OpenZeppelin Access Control">
            <option value="Ownable">Ownable</option>
            <option value="AccessControl">Access Control</option>
          </optgroup>
          <optgroup label="OpenZeppelin Security">
            <option value="Pausable">Pausable</option>
            <option value="ReentrancyGuard">Reentrancy Guard</option>
          </optgroup>
        </select>
      </div>
      
      <textarea
        id="abi-input"
        value={abi}
        onChange={handleTextAreaChange}
        className="w-full h-64 p-4 border border-gray-300 rounded-md font-mono text-sm resize-none"
        placeholder="Paste your contract ABI here (JSON format)"
      />
    </div>
  );
};

export default ABIInput;
