// import React from 'react';
import headerImg from '../src/assets/img/Header.png';

function App() {
  return (
    <>
      <div
        className="flex items-start justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="w-1/2 p-8 bg-opacity-75 rounded">
          <h1
            className="mb-4"
            style={{ fontFamily: 'Gelasio, serif', fontSize: '72px', textAlign: 'left', lineHeight: '1.1' }}
          >
            Connect Your World: Empowering Innovators with IoTight Solutions
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
