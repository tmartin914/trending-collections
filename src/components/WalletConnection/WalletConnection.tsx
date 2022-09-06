import { WalletConnectionProps } from './WalletConnectionProps';

/**
 * Component to handle ETH wallet connection/disconnection
 */
export const WalletConnection: React.FC<WalletConnectionProps> = ({walletConnected, setWalletConnected}) => {
    /**
     * Connect ETH Wallet
     */
    const ConnectWallet = () => {
        console.log('Wallet Connected'); // TODO: connect wallet
        setWalletConnected(true);
    }

    /**
     * Disconnect ETH Wallet
     */
    const DisconnectWallet = () => {
        console.log('Wallet Disconnected'); // TODO: disconnect wallet
        setWalletConnected(false);
    }

    /**
     * When wallet connect button is clicked, determine appropriate function to call
     */
    const WalletConnectionButtonClicked = () => {
        if (walletConnected) {
            DisconnectWallet();
        } else {
            ConnectWallet();
        }
    }

    /**
     * Gets the prefix text for the wallet connection button
     * @returns button connection prefix
     */
    function GetButtonConnectionStringPrefix(): string {
        return walletConnected ? 'Disconnect' : 'Connect';
    }

    return <button onClick={WalletConnectionButtonClicked}>{GetButtonConnectionStringPrefix()} ETH Wallet</button>;
};