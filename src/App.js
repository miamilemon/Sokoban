import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

var poziom = "";

function Menu(){
    if(localStorage.getItem("poziom")==null){
        poziom = "1";
    }else{
        poziom = localStorage.getItem("poziom");
    }
    root.render(
        <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
            <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl flex flex-col w-full !p-6 3xl:p-![18px] undefined">
              <div className="h-full w-full mt-5 flex flex-col my-12"> 
                  <h4 className="pb-8 self-center drop-shadow-xl text-2xl font-bold text-white">
                      Sokoban
                  </h4>
                  <button onClick={()=>Gra(poziom)} className="rounded-xl bg-gradient-to-b from-teal-100 to-teal-300 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Graj
                  </button>
                  <button onClick={()=>ListaWynikow()} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Wyniki
                  </button>
                  <button onClick={()=>window.open("https://github.com/miamilemon/sokoban/blob/main/README.md", "_blank")} className="rounded-xl bg-gradient-to-b from-teal-500 to-teal-700 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      O grze
                  </button>
              </div>
            </div>
            <h6 className="pt-32 self-bottom text-xl text-white">
            Made by: <a className="hover:text-gray-200" href="https://github.com/miamilemon" target="_blank">Nikodem M</a>
            </h6>
        </div>
    );
}

function PobierzWynik(ktory){
    var wynik = "";
    if(localStorage.getItem(ktory)==null){
        wynik = "----";
    }else{
        wynik = localStorage.getItem(ktory);
    }
    return(
        wynik
    );
}

function ListaWynikow(){
    root.render(
            <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
                <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl flex flex-col w-full !px-6 3xl:p-![12px] undefined">
                  <div className="h-full w-full mt-5 flex flex-col my-6"> 
                      <h1 className="pb-6 self-center drop-shadow-xl text-3xl font-bold text-white">
                          Wyniki
                      </h1>
                      <ol>
                        <li className="pb-4 self-center drop-shadow-xl text-md font-semibold text-white">
                            Poziom 1.<br></br>
                            <p className="self-center drop-shadow-md text-sm font-normal text-white">
                            Czas: {PobierzWynik("p1czas")} <br></br>
                            Ilość kroków: {PobierzWynik("p1kroki")}
                            </p>
                        </li>
                        <li className="pb-4 self-center drop-shadow-xl text-md font-semibold text-white">
                            Poziom 2.
                            <p className="self-center drop-shadow-md text-sm font-normal text-white">
                            Czas: {PobierzWynik("p2czas")} <br></br>
                            Ilość kroków: {PobierzWynik("p2kroki")}
                            </p>
                        </li>
                        <li className="pb-4 self-center drop-shadow-xl text-md font-semibold text-white">
                            Poziom 3.
                            <p className="self-center drop-shadow-md text-sm font-normal text-white">
                            Czas: {PobierzWynik("p3czas")} <br></br>
                            Ilość kroków: {PobierzWynik("p3kroki")}
                            </p>
                        </li>
                        <li className="pb-4 self-center drop-shadow-xl text-md font-semibold text-white">
                            Poziom 4.
                            <p className="self-center drop-shadow-md text-sm font-normal text-white">
                            Czas: {PobierzWynik("p4czas")} <br></br>
                            Ilość kroków: {PobierzWynik("p4kroki")}
                            </p>
                        </li>
                        <li className="pb-4 self-center drop-shadow-xl text-md font-semibold text-white">
                            Poziom 5.
                            <p className="self-center drop-shadow-md text-sm font-normal text-white">
                            Czas: {PobierzWynik("p5czas")} <br></br>
                            Ilość kroków: {PobierzWynik("p5kroki")}
                            </p>
                        </li>
                      </ol>
                      <button onClick={()=>Menu()} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 mt-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                          Powrót
                      </button>
                  </div>
                </div>
                <h6 className="pt-12 self-bottom text-xl text-white">
                Made by: <a className="hover:text-gray-200" href="https://github.com/miamilemon" target="_blank">Nikodem M</a>
                </h6>
            </div>
    );
}

function Gra() {
    return (
        console.log(poziom+"testest")
    );
}

function App() {
    Menu();
}

export default App;
