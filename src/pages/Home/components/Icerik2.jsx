import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Icerik2() {
  const [adelData, setAdelData] = useState(null);
  const [thyData, setThyData] = useState(null);
  const [akbnkData, setAkbnkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adelResponse = await axios.get('http://213.142.148.111:5000/api/Stock/ADEL');
        const thyResponse = await axios.get('http://213.142.148.111:5000/api/Stock/THYAO');
        const akbnkResponse = await axios.get('http://213.142.148.111:5000/api/Stock/AKBNK');
        
        setAdelData(adelResponse.data);
        setThyData(thyResponse.data);
        setAkbnkData(akbnkResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('API Hatası:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
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
          <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
            <img src="././src/assets/adel.png" alt="ADEL" width={40} className='mr-4'/>
            {adelData && (
              <div className="flex flex-col">
                <div className="text-xl font-bold">{adelData.code}</div>
                <div className="text-2xl">{adelData.stockname} - {adelData.lastprice} - {adelData.volume}</div>
              </div>
            )}
          </div>
          <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
            <img src="././src/assets/thy.png" alt="THYAO" width={70} className='mr-4'/>
            {thyData && (
              <div className="flex flex-col">
                <div className="text-xl font-bold">{thyData.code}</div>
                <div className="text-2xl">{thyData.stockname} - {thyData.lastprice} - {thyData.volume}</div>
              </div>
            )}
          </div>
          <div className="flex items-center bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-4 text-white font-sans shadow-md">
            <img src="././src/assets/akbank.png" alt="AKBNK" width={70} className='mr-4'/>
            {akbnkData && (
              <div className="flex flex-col">
                <div className="text-xl font-bold">{akbnkData.code}</div>
                <div className="text-2xl">{akbnkData.stockname} - {akbnkData.lastprice} - {akbnkData.volume}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Icerik2;
