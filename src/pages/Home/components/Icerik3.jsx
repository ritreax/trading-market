import React from 'react';

function Icerik3() {
  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            TradeMarket ile yatırım dünyasında kendini en doğru, en hızlı şekilde geliştir!
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Paranızın kontrolünü ele alın, yatırım bilgileriyle donanmış olun ve finansal hedeflerinizi gerçekleştirmek için gereken bilgiye sahip olun.
          </p>
          
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 h-80 md:w-[36rem] md:h-96 bg-gray-600 bg-opacity-10 rounded-lg overflow-hidden border border-gray-500">
            <video className="w-full h-full object-cover opacity-70" loop autoPlay muted>
              <source src="./src/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Icerik3;