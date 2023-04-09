import './App.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

//Mapy poszczegolnych poziomow gry w postaci tablicy 3d
//Jaki numer odpowiada jakiemu elementowi mapy
//0=podloga, 1=sciana, 2=blok, 3=gracz, 4=pole do ustawienia bloku
const Mapa = [
    [//Mapa poziomu 1
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 4, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 2, 1, 1],
        [1, 1, 1, 4, 0, 0, 0, 1],
        [1, 3, 1, 1, 1, 2, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 1, 4, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 2, 0, 0, 0, 1, 1],
        [1, 0, 0, 1, 1, 2, 1, 1],
        [1, 0, 0, 0, 4, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 4, 3, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 2, 2, 0, 1],
        [1, 4, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 2, 2, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 3, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1],
        [1, 4, 0, 1, 4, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 4, 1, 4, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 2, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 2, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 3, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ]
]

const Template = [
    "box-content bg-teal-700 max-h-6 max-w-6 w-max h-max p-6 border-4 border-teal-800",
    "box-content bg-stone-600 max-h-6 max-w-6 w-max h-max p-6 border-4 border-stone-700",
    "box-content bg-yellow-600 max-h-6 max-w-6 w-max h-max p-6 border-4 border-stone-800",
    "box-content bg-indigo-500 max-h-6 max-w-6 w-max h-max p-6 border-4 border-indigo-700",
    "box-content bg-red-800 max-h-6 max-w-6 w-max h-max p-6 border-4 border-red-900"
]

const renderMapy = (bloki) => {
    return bloki.map(blok => <div className={blok}></div>)
}

function RenderMapy(mapa){
    var string = [];
    var pomoc = 0;
    for(let i = 0; i<8; i++){
        for(let z=0; z<8; z++){
            string[pomoc] = Template[mapa[i][z]];
            pomoc++;
        }
    }
    return(
        renderMapy(string)
    );
}

function Menu(){
    //renderujemy
    root.render(
        <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
            <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl flex flex-col w-full !p-6 3xl:p-![18px] undefined">
              <div className="h-full w-full mt-5 flex flex-col my-12"> 
                  <h4 className="pb-8 self-center drop-shadow-xl text-2xl font-bold text-white">
                      Sokoban
                  </h4>

                  <button onClick={()=>WybierzPoziom()} className="rounded-xl bg-gradient-to-b from-teal-100 to-teal-300 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
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
    //tworzymy sobie zmienna ktora pozniej zwrocimy :)
    var wynik = "";
    //sprawdzamy czy istnieje dana wartosc u nas w localstorage
    if(localStorage.getItem(ktory)==null){
        //jak nie istnieje to przypisujemy sobie pusty wynik
        wynik = "----";
    }else{
        //a jak jest to przypisujemy wartosc z localstorage
        wynik = localStorage.getItem(ktory);
    }
    //zwracamy to co nam wyszlo
    return(
        wynik
    );
}

function ListaWynikow(){
    root.render(
            <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
                <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl flex flex-col w-full !px-6 3xl:p-![12px] undefined">
                  <div className="h-full w-full mt-5 flex flex-col my-6"> 
                      <h1 className="pb-6 self-center drop-shadow-xl text-2xl font-bold text-white">
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

function WybierzPoziom(){
    root.render(
        <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
            <div className=" relative flex flex-col rounded-[20px] max-w-[300px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl w-full !p-6 3xl:p-![18px] undefined">
              <div className="h-full w-full mt-8 flex flex-col my-6"> 
                  <h4 className="pb-8 self-center drop-shadow-xl text-2xl font-bold text-white">
                      Sokoban
                  </h4>

                  <button onClick={()=>Gra(0)} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Poziom 1
                  </button>
                  <button onClick={()=>Gra(1)} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Poziom 2
                  </button>
                  <button onClick={()=>Gra(2)} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      Poziom 3
                  </button>
                  <button onClick={()=>Gra(3)} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      Poziom 4
                  </button>
                  <button onClick={()=>Gra(4)} className="rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      Poziom 5
                  </button>
                  <button onClick={()=>Menu()} className="rounded-xl bg-gradient-to-b from-teal-500 to-teal-700 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-800">
                      Powrót
                  </button>
              </div>
            </div>
            <h6 className="pt-32 self-bottom text-xl text-white">
            Made by: <a className="hover:text-gray-200" href="https://github.com/miamilemon" target="_blank">Nikodem M</a>
            </h6>
        </div>
    );
}


function Gra(poziom) {
    var mapa = Mapa[poziom]
    root.render(
        <div className="flex flex-col justify-center items-center bg-teal-800 h-[100vh]">
            <div className="flex flex-row items-start text-left justify-start max-w-[450px] w-full">
                <button onClick={()=>Menu()} className="self-start mr-4 rounded-xl bg-gradient-to-b from-teal-300 to-teal-500 px-3 py-3 text-base font-bold text-white transition duration-200 hover:shadow-lg hover:shadow-teal-700">
                      Powrót
                </button>
                <div className="float-left">
                    <h1 className="drop-shadow-xl text-md font-bold text-white">Czas: </h1>
                    <h1 className="pb-2 drop-shadow-xl text-md font-bold text-white"> Ilość kroków: </h1>
                </div>
            </div>
            <div className="grid grid-row-8 grid-cols-8 items-center justify-center rounded-[20px] max-w-[500px] max-h-[500px] bg-teal-900 bg-clip-border shadow-3xl shadow-shadow-xl h-full w-full !p-6 3xl:p-![18px] undefined">
                {RenderMapy(mapa)}
            </div>
        </div>
    );
}

function App() {
    Menu();
}

export default App;