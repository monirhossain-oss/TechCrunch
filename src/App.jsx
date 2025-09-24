import { Link } from "react-router";
import logo from '../src/assets/Screenshot_2025-09-23_195230-removebg-preview.png'

function App() {
  return (
    <div className="pt-20 hidden md:block bg-green-700 px-6">
      <div className="flex justify-center  items-center">
        <Link to="/" className="flex items-center gap-3 hover:bg-black transition-colors duration-300">
          <img src={logo} alt="tech logo" className="w-20 h-10 object-contain" />
          <h1 className="text-white text-6xl font-extrabold">TechCrunch</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
