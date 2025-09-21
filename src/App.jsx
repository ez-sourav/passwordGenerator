import Inputpass from "./component/Inputpass";
import { Toaster } from "react-hot-toast";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="select-none min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-200 via-green-300 to-green-400 p-4 ">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 text-orange-500 animate-fade-in-down bg-gray-800 transition-all duration-300 hover:shadow-2xl ">
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          Password Generator
        </h1>
        <Toaster position="top-center" reverseOrder={false} />
        <Inputpass />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
