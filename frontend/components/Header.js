import { ConnectButton } from "web3uikit";
export default function Header() {
  return (
    <div className=" border-b-2 flex flex-row font-bold ">
      <h1 className="py-4 px-4 text-blue-900">Ether Lock App</h1>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
}
