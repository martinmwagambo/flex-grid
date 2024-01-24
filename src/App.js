import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <body className="bg-gray-900 mb-0 mt-0 ml-0 mr-0 overflow-hidden">
      <div className="border border-red-500 border-8 p-4 overflow-hidden">

          <div className="flex flex-grow grid grid-cols-3 h-screen">
              <div className="col-span-1">
                
                  <div className="border border-pink-500 border-8 p-4 flex flex-col justify-between text-white font-bold text-xl h-full">
                      <div className="bg-transparent border border-blue-500 border-8 p-4 mb-4 text-center flex items-center justify-center h-full"> VIDEO </div>
                      <div className="bg-transparent border border-blue-500 p-4 border-8 mb-4 text-center flex items-center justify-center h-full"> PROJECTS </div>
                      <div className="bg-transparent border border-blue-500 border-8 p-4 text-center flex items-center justify-center h-full">GITHUB
                      SOCIALS
                      BLOCKTRAY
                      </div>
                  </div>
              </div>
              
              <div className="border border-pink-500 border-8 p-4 flex flex-col justify-between text-white font-bold text-xl h-full w-full col-span-2 grid grid-cols-2">

                    <div className="border border-gray-900 border-8 flex flex-col justify-between text-white font-bold text-xl">
                      <div className="bg-transparent border border-blue-500 border-8 text-center flex items-center justify-center mb-4 mr-4 h-full"> PROJECTS </div>
                      <div className="bg-transparent border border-blue-500 border-8 text-center flex items-center justify-center mr-4 mt-4 h-full"> EMPTY </div>
                    </div>
                    
                    <div className="border border-gray-900 border-8 flex flex-col justify-between text-white font-bold text-xl">
                      <div className="bg-transparent border border-blue-500 border-8 p-4 mr-4 text-center text-white font-bold text-xl flex items-center justify-center h-full">
                          STUDY / WORK
                      </div>
                    </div> 
                    
                  </div>
              </div>
          </div>
  </body>
  

 

  );
}

export default App;
