import Inputpass from "./component/Inputpass";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="select-none min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 text-orange-500 bg-gray-800 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          Password Generator
        </h1>
        <Toaster position="top-center"reverseOrder={false}/>
        <Inputpass />
      </div>
    </div>
  );
};

export default App;
