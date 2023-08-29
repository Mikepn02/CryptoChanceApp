
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Kira 🤑</div>
      {/* <button>Connect Wallet</button> */}
      <WalletMultiButton />
      {/* <button onClick={() => connectWallet()}>Connect Wallet</button> */}
    </div>
  );
};

export default Header;
