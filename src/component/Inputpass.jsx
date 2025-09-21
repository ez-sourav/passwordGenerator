import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { RiFileCopyLine } from "react-icons/ri";
import { LuRefreshCw } from "react-icons/lu";

const Inputpass = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //   useRef
  const passwordRef = useRef(null);

  const copyPasswordClipbord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    toast.success(`Copied to Clipboard "${password}"`, {
      id: "copy-success",
      position: "top-center",
    });
  }, [password]);

  const generateButton = ()=>{
    passwordGenerator()
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "@#$%&(){}!";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);
  return (
    <>
      <div className="flex flex-row shadow-md rounded-lg overflow-hidden my-8 mb-0 w-full max-w-md mx-auto">
        <input
          type="text"
          value={password}
          className="flex-1 py-3 px-4 bg-white text-gray-700 text-lg outline-none border-2 border-gray-200 focus:border-blue-500 transition-colors text-center sm:text-left"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        {/* Copy Button  */}
        <button
          title="Copy"
          onClick={copyPasswordClipbord}
          className="outline-none text-2xl bg-blue-600 hover:bg-blue-700
                 text-white px-5 py-3 rounded-r-lg font-semibold 
                 transition-colors duration-300 shadow-md 
                 flex justify-center items-center hover:cursor-pointer"
        >
          <RiFileCopyLine />
        </button>
      </div>

      <div
        title="Generate"
        className="my-5  bg-emerald-500 text-center rounded-lg  w-full max-w-md mx-auto"
      >
        {/* Generate button */}
        <button
            onClick={generateButton}
          title="Generate"
          className="outline-none hover:cursor-pointer text-2xl text-white py-2.5 w-full flex justify-center items-center"
        >
          <LuRefreshCw />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-y-4 sm:gap-x-4 w-full max-w-md mx-auto">
        {/* Length */}
        <div className="flex flex-col items-center sm:items-start gap-y-2 w-full sm:w-auto">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer w-full sm:w-40"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-lg">Length: {length}</label>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-x-2">
          <input
            className="w-4 h-4 hover:cursor-pointer"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-lg hover:cursor-pointer" htmlFor="numberInput">
            Numbers
          </label>
        </div>

        {/* Symbols */}
        <div className="flex items-center gap-x-2">
          <input
            className="w-4 h-4 hover:cursor-pointer "
            type="checkbox"
            defaultChecked={symbolAllowed}
            id="symbolInput"
            onChange={() => setSymbolAllowed((prev) => !prev)}
          />
          <label className="text-lg hover:cursor-pointer" htmlFor="symbolInput">
            Symbols
          </label>
        </div>
      </div>
    </>
  );
};
export default Inputpass;
