import "./App.css";
import { Route, Routes } from "react-router-dom";
import SetupWallet from "./component/unauthorizedRoute/SetupWallet";
import RegisterWalletForm from "./component/unauthorizedRoute/RegisterWalletForm";
import RecoverWallet from "./component/unauthorizedRoute/RecoverWallet";
import ViewParaphase from "./component/unauthorizedRoute/ViewParaphase";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SetupWallet />} />
        <Route path="/register-wallet" element={<RegisterWalletForm />} />
        <Route path="/recover-wallet" element={<RecoverWallet />} />
        <Route path="/view-paraphase" element={<ViewParaphase />} />
      </Routes>
    </div>
  );
}

export default App;
