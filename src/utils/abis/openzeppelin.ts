import { Interface } from 'ethers';

// Import OpenZeppelin contract artifacts
import ERC20Artifact from '@openzeppelin/contracts/build/contracts/ERC20.json';
import ERC721Artifact from '@openzeppelin/contracts/build/contracts/ERC721.json';
import ERC1155Artifact from '@openzeppelin/contracts/build/contracts/ERC1155.json';
import OwnableArtifact from '@openzeppelin/contracts/build/contracts/Ownable.json';
import AccessControlArtifact from '@openzeppelin/contracts/build/contracts/AccessControl.json';
import PausableArtifact from '@openzeppelin/contracts/build/contracts/Pausable.json';
import ReentrancyGuardArtifact from '@openzeppelin/contracts/build/contracts/ReentrancyGuard.json';
import ERC20BurnableArtifact from '@openzeppelin/contracts/build/contracts/ERC20Burnable.json';
import ERC20CappedArtifact from '@openzeppelin/contracts/build/contracts/ERC20Capped.json';
import ERC20PausableArtifact from '@openzeppelin/contracts/build/contracts/ERC20Pausable.json';
import ERC721BurnableArtifact from '@openzeppelin/contracts/build/contracts/ERC721Burnable.json';
import ERC721PausableArtifact from '@openzeppelin/contracts/build/contracts/ERC721Pausable.json';
import ERC721URIStorageArtifact from '@openzeppelin/contracts/build/contracts/ERC721URIStorage.json';
import ERC1155BurnableArtifact from '@openzeppelin/contracts/build/contracts/ERC1155Burnable.json';
import ERC1155PausableArtifact from '@openzeppelin/contracts/build/contracts/ERC1155Pausable.json';
import ERC1155URIStorageArtifact from '@openzeppelin/contracts/build/contracts/ERC1155URIStorage.json';

// Extract ABIs from artifacts
export const ERC20ABI = ERC20Artifact.abi;
export const ERC721ABI = ERC721Artifact.abi;
export const ERC1155ABI = ERC1155Artifact.abi;
export const OwnableABI = OwnableArtifact.abi;
export const AccessControlABI = AccessControlArtifact.abi;
export const PausableABI = PausableArtifact.abi;
export const ReentrancyGuardABI = ReentrancyGuardArtifact.abi;
export const ERC20BurnableABI = ERC20BurnableArtifact.abi;
export const ERC20CappedABI = ERC20CappedArtifact.abi;
export const ERC20PausableABI = ERC20PausableArtifact.abi;
export const ERC721BurnableABI = ERC721BurnableArtifact.abi;
export const ERC721PausableABI = ERC721PausableArtifact.abi;
export const ERC721URIStorageABI = ERC721URIStorageArtifact.abi;
export const ERC1155BurnableABI = ERC1155BurnableArtifact.abi;
export const ERC1155PausableABI = ERC1155PausableArtifact.abi;
export const ERC1155URIStorageABI = ERC1155URIStorageArtifact.abi;

// Create ethers Interfaces for each ABI
export const ERC20Interface = new Interface(ERC20ABI);
export const ERC721Interface = new Interface(ERC721ABI);
export const ERC1155Interface = new Interface(ERC1155ABI);
export const OwnableInterface = new Interface(OwnableABI);
export const AccessControlInterface = new Interface(AccessControlABI);
export const PausableInterface = new Interface(PausableABI);
export const ReentrancyGuardInterface = new Interface(ReentrancyGuardABI);
export const ERC20BurnableInterface = new Interface(ERC20BurnableABI);
export const ERC20CappedInterface = new Interface(ERC20CappedABI);
export const ERC20PausableInterface = new Interface(ERC20PausableABI);
export const ERC721BurnableInterface = new Interface(ERC721BurnableABI);
export const ERC721PausableInterface = new Interface(ERC721PausableABI);
export const ERC721URIStorageInterface = new Interface(ERC721URIStorageABI);
export const ERC1155BurnableInterface = new Interface(ERC1155BurnableABI);
export const ERC1155PausableInterface = new Interface(ERC1155PausableABI);
export const ERC1155URIStorageInterface = new Interface(ERC1155URIStorageABI);

// Export a map of all ABIs for easier access
export const OpenZeppelinABIs = {
  ERC20: ERC20ABI,
  ERC721: ERC721ABI,
  ERC1155: ERC1155ABI,
  Ownable: OwnableABI,
  AccessControl: AccessControlABI,
  Pausable: PausableABI,
  ReentrancyGuard: ReentrancyGuardABI,
  ERC20Burnable: ERC20BurnableABI,
  ERC20Capped: ERC20CappedABI,
  ERC20Pausable: ERC20PausableABI,
  ERC721Burnable: ERC721BurnableABI,
  ERC721Pausable: ERC721PausableABI,
  ERC721URIStorage: ERC721URIStorageABI,
  ERC1155Burnable: ERC1155BurnableABI,
  ERC1155Pausable: ERC1155PausableABI,
  ERC1155URIStorage: ERC1155URIStorageABI,
};

// Export a map of all Interfaces for easier access
export const OpenZeppelinInterfaces = {
  ERC20: ERC20Interface,
  ERC721: ERC721Interface,
  ERC1155: ERC1155Interface,
  Ownable: OwnableInterface,
  AccessControl: AccessControlInterface,
  Pausable: PausableInterface,
  ReentrancyGuard: ReentrancyGuardInterface,
  ERC20Burnable: ERC20BurnableInterface,
  ERC20Capped: ERC20CappedInterface,
  ERC20Pausable: ERC20PausableInterface,
  ERC721Burnable: ERC721BurnableInterface,
  ERC721Pausable: ERC721PausableInterface,
  ERC721URIStorage: ERC721URIStorageInterface,
  ERC1155Burnable: ERC1155BurnableInterface,
  ERC1155Pausable: ERC1155PausableInterface,
  ERC1155URIStorage: ERC1155URIStorageInterface,
};
