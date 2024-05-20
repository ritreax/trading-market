import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Icerik2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://213.142.148.111:5000/api/Stock/ADEL')
      .then(response => {
        console.log('API Response:', response.data);
        // API'den gelen veriyi bir dizi içine al
        const dataArray = [response.data];
        setData(dataArray);
        setLoading(false);
      })
      .catch(error => {
        console.error('API Hatası:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Hata: {error.message}</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-52 mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
          Doğru analiz, doğru yatırım, doğru yer!
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold pb-8 text-gray-400">
          TradeMarket dünyasında analizlerinizi en hızlı şekilde yapın,
          <br className="hidden md:block" />
          en doğru yatırımlara çevirin!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item.id} className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
              <img src="././src/assets/adel.png" alt="" width={40} className='mr-4'/>
              <div className="flex flex-col">
                <div className="text-xl font-bold">{item.code}</div>
                <div className="text-2xl">{item.stockname} - {item.lastprice} - {item.volume}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Icerik2;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaBitcoin } from 'react-icons/fa';

// function Icerik2() {
//   const [adelData, setAdelData] = useState([]);
//   const [bimasData, setBimasData] = useState([]);
//   const [thyoData, setThyoData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // ADEL verisi için API isteği
//     axios.get('http://213.142.148.111:5000/api/Stock/ADEL')
//       .then(response => {
//         setAdelData(response.data);
//       })
//       .catch(error => {
//         console.error('ADEL API Hatası:', error);
//         setError(error);
//       });
//   }, []);

//   useEffect(() => {
//     // BIMAS verisi için API isteği
//     axios.get('http://213.142.148.111:5000/api/Stock/BIMAS')
//       .then(response => {
//         setBimasData(response.data);
//       })
//       .catch(error => {
//         console.error('BIMAS API Hatası:', error);
//         setError(error);
//       });
//   }, []);

//   useEffect(() => {
//     // THYO verisi için API isteği
//     axios.get('http://213.142.148.111:5000/api/Stock/THYO')
//       .then(response => {
//         setThyoData(response.data);
//         setLoading(false); // Tüm veriler yüklendiğinde loading state'ini false olarak ayarla
//       })
//       .catch(error => {
//         console.error('THYO API Hatası:', error);
//         setError(error);
//       });
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center">Yükleniyor...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">Hata: {error.message}</div>;
//   }

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="max-w-5xl pt-52 pb-52 mx-auto px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
//           Doğru analiz, doğru yatırım, doğru yer!
//         </h1>
//         <h2 className="text-xl md:text-2xl font-semibold pb-8 text-gray-400">
//           TradeMarket dünyasında analizlerinizi en hızlı şekilde yapın,
//           <br className="hidden md:block" />
//           en doğru yatırımlara çevirin!
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* ADEL verisi */}
//           <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
//             <FaBitcoin className="text-4xl text-orange-500 mr-4" />
//             <div className="flex flex-col">
//               <div className="text-xl font-bold">{adelData.code}</div>
//               <div className="text-2xl">{adelData.stockname} - {adelData.lastprice} - {adelData.volume}</div>
//             </div>
//           </div>
//           {/* BIMAS verisi */}
//           <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
//             <FaBitcoin className="text-4xl text-orange-500 mr-4" />
//             <div className="flex flex-col">
//               <div className="text-xl font-bold">{bimasData.code}</div>
//               <div className="text-2xl">{bimasData.stockname} - {bimasData.lastprice} - {bimasData.volume}</div>
//             </div>
//           </div>
//           {/* THYO verisi */}
//           <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
//             <FaBitcoin className="text-4xl text-orange-500 mr-4" />
//             <div className="flex flex-col">
//               <div className="text-xl font-bold">{thyoData.code}</div>
//               <div className="text-2xl">{thyoData.stockname} - {thyoData.lastprice} - {thyoData.volume}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Icerik2;



// import React from 'react';
// import { FaBitcoin } from 'react-icons/fa';

// const data = [
//   { id: 1, name: 'BTCUSD', value: '55,00', percentage: '100%' },
//   { id: 2, name: 'ETHUSD', value: '4,000', percentage: '75%' },
//   { id: 3, name: 'LTCUSD', value: '300', percentage: '50%' },
// ];

// function Icerik2() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="max-w-5xl pt-52 pb-52 mx-auto px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 ">
//           Doğru analiz, doğru yatırım, doğru yer!
//         </h1>
//         <h2 className="text-xl md:text-2xl font-semibold pb-8 text-gray-400">
//           TradeMarket dünyasında analizlerinizi en hızlı şekilde yapın,
//           <br className="hidden md:block" />
//           en doğru yatırımlara çevirin!
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item) => (
//             <div key={item.id} className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
//               <FaBitcoin className="text-4xl text-orange-500 mr-4" />
//               <div className="flex flex-col">
//                 <div className="text-xl font-bold">{item.name}</div>
//                 <div className="text-2xl">{item.value}</div>
//                 <div className={`text-lg ${item.percentage.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.percentage}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Icerik2;

