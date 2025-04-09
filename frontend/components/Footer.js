export default function Footer() {
  return (
    <footer className="flex absolute bottom-1 w-full h-9 border-t-2">
      <a
        href="https://sepolia.etherscan.io/address/0xc66aef310da790594f24d7226d9dd23cc6130535#code"
        className="border-b-2 mt-2 border-blue-500"
        target="_blank"
      >
        Click to View on Sepolia Etherscan
      </a>
      <div className="ml-auto py-34 px-40">© Developed By:</div>
      <a className=" mr-auto py-34 px-40">Larbi</a>
    </footer>
  );
}
