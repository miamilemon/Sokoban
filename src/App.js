import logo from './logo.svg';
import './App.css';

function Menu(){
    return(
        <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
            <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl flex flex-col w-full !p-6 3xl:p-![18px] undefined">
              <div className="h-full w-full mt-5 flex flex-col my-12"> 
                  <h4 className="pb-8 self-center drop-shadow-xl text-xl font-bold text-white">
                      Sokoban
                  </h4>
                  <button className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Graj
                  </button>
                  <button className="rounded-xl bg-gradient-to-b from-teal-500 to-teal-700 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      O grze
                  </button>
              </div>
            </div>
            <h6 className="pt-32 self-bottom text-xl text-white">
            Made by: <a className="hover:text-gray-200" href="github.com/miamilemon">Nikodem M</a>
            </h6>
        </div>
    );
}

function App() {
  return (
    Menu()
  );
}

export default App;
