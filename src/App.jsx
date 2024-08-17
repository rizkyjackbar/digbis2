import headerImg from '../src/assets/img/Header.png';
import smartHomeHubImg from '../src/assets/img/wifisupersonic.png';
import lightBulbImg from '../src/assets/img/breadboard.png';
import thermostatImg from '../src/assets/img/plantwater.png';
import securityCameraImg from '../src/assets/img/smartclean.png';
import doorLockImg from '../src/assets/img/doorlock.jpeg';
import smartSpeakerImg from '../src/assets/img/smartspeaker.jpeg';

function App() {
  const products = [
    {
      id: 1,
      name: "Wifi Supersonic",
      description: "Experience lightning-fast internet speeds with the Wifi Supersonic, designed for seamless streaming and browsing across multiple devices.",
      price: "$99.99",
      image: smartHomeHubImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 2,
      name: "BreadBoard",
      description: "An essential tool for any electronics enthusiast, the BreadBoard is perfect for prototyping circuits and testing new designs.",
      price: "$19.99",
      image: lightBulbImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 3,
      name: "Automatic Plant Waterer",
      description: "Keep your plants hydrated with the Automatic Plant Waterer, ensuring they get the right amount of water even when you're away.",
      price: "$149.99",
      image: thermostatImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 4,
      name: "Smart Clean",
      description: "Effortlessly keep your home spotless with the Smart Clean, a powerful robotic vacuum that navigates around obstacles with ease.",
      price: "$129.99",
      image: securityCameraImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 5,
      name: "Smart Door Lock",
      description: "Upgrade your home security with the Smart Door Lock, offering keyless entry and remote access from your smartphone.",
      price: "$89.99",
      image: doorLockImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 6,
      name: "Smart Speaker",
      description: "Enjoy high-quality audio and voice-activated assistance with the Smart Speaker, your hub for smart home control and entertainment.",
      price: "$59.99",
      image: smartSpeakerImg,
      rating: Math.floor(Math.random() * 5) + 1,
    },
  ];

  return (
    <>
      <div
        className="flex items-start justify-center md:justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-opacity-75 rounded my-10 md:my-20">
          <h1
            className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-none"
            
            style={{ fontFamily: 'Gelasio, serif', textAlign: 'left' }}
          >
            “Connect Your World: Empowering Innovators with <span style={{ color: '#608F6E' }}>IoTight</span> Solutions”
          </h1>
          <h3
            className="mb-4 text-left text-gray-700 text-lg sm:text-xl md:text-2xl"
            style={{ fontFamily: 'Gelasio, serif', lineHeight: '1.5' }}
          >
            “Terkoneksi dengan Inovasi: Solusi IoT untuk Masa Depan yang Lebih Baik!”
          </h3>
          <button className="bg-[#1E1E1E] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </div>


      {/* Best Products Section with Grid on Mobile and Horizontal Scroll on Desktop */}
      <div className="p-8 mb-10">
        <h2
          className="text-3xl font-semibold mb-2"
          style={{ fontFamily: 'Gelasio, serif', textAlign: 'center' }}
        >
          Best Products
        </h2>
        <p
          className="text-lg text-gray-600 mb-6 text-center"
          style={{ fontFamily: 'Gelasio, serif' }}
        >
          Discover our most popular products
        </p>

        {/* On smaller screens, display grid layout, on desktop, allow horizontal scroll */}
        <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-t-lg mb-4 h-48 md:h-64 lg:h-72"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-md font-semibold">{product.price}</p>
              <div className="mt-2">
                {Array.from({ length: product.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - product.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Horizontal scroll section for larger screens */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="flex-shrink-0 w-1/4 border rounded-lg p-4 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover rounded-t-lg mb-4 h-72"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-md font-semibold">{product.price}</p>
                <div className="mt-2">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, i) => (
                    <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
