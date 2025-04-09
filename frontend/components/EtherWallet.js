import { useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { Input, Button } from "web3uikit";
import { abi, contractAddresses } from "../constants";
export default function EtherWallet() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const etherWalletAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [balance, setBalance] = useState("0");
  const { runContractFunction: deposit } = useWeb3Contract({
    abi: abi,
    contractAddress: etherWalletAddress,
    functionName: "deposit",
    params: {},
    msgValue: amount,
  });
  const { runContractFunction: balanceOfContract } = useWeb3Contract({
    abi: abi,
    contractAddress: etherWalletAddress,
    functionName: "balanceOfContract",
    params: {},
  });
  const { runContractFunction: send } = useWeb3Contract({
    abi: abi,
    contractAddress: etherWalletAddress,
    functionName: "send",
    params: { to: address, amount: amountToSend },
  });
  async function GetBalance() {
    const balan = await balanceOfContract();
    document.getElementById("getBalance").innerHTML = balan;
  }
  async function success() {
    const Sended = `ETH is Sending to ${address} address. please confirm POPUP and check transaction history!`;
    document.getElementById("send").innerHTML = Sended;
  }
  console.log(amountToSend);

  return (
    <div>
      <div className="flex justify-center">
        <div className="ml-auto py-30 px-40">
          <h4>Deposit In To Smart Contract</h4>
          <br />
          <Input
            label="Enter amount in WEI"
            name="deposit amount"
            onBlur={function noRefCheck() {}}
            value={amount}
            onChange={({ target }) => setAmount(target?.value)}
            type="number"
          />
          <br />
          <Button
            color="blue"
            onClick={async function () {
              console.log("clicked button");
              await deposit();
              console.log("got it?");
            }}
            text="Deposit"
            theme="colored"
          />
        </div>
        <div className="ml-auto py-30 px-40">
          <h4>Asset locked in the contract</h4>
          <br />
          <Button
            color="blue"
            onClick={async function () {
              await GetBalance();
            }}
            text="Get Locked Balance"
            theme="colored"
          />
          <span id="getBalance" className="font-semibold">
            locked value in WEI
          </span>
        </div>
      </div>
      <div>
        <div className="flex pt-20 justify-center ml-9 space-x-10">
          <Input
            label="Enter the address"
            name="Test text Input"
            onBlur={function noRefCheck() {}}
            value={address}
            onChange={({ target }) => setAddress(target?.value)}
          />
          <Input
            label="how much do you want to send?"
            name="Test number Input"
            onBlur={function noRefCheck() {}}
            value={amountToSend}
            onChange={({ target }) => setAmountToSend(target?.value)}
            type="number"
          />
        </div>
        <div className="flex pt-10 justify-center">
          <Button
            onClick={async function () {
              await send({
                onSuccess: success(),
              });
            }}
            text="Send ETH"
            theme="primary"
          />
        </div>
        <br />
        <span id="send" className="flex justify-center text-red-400"></span>
      </div>
    </div>
  );
}
