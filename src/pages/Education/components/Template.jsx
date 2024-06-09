import React from 'react';

const videos = [
  { id: 1, title: 'Yazılar', thumbnails: ['././src/assets/yazi-01.jpg', '././src/assets/yazi-02.jpg', '././src/assets/yazi-03.jpg'] },
  { id: 2, title: 'Başlangıç Seviyesi', thumbnails: ['././src/assets/BS-01.jpg', '././src/assets/BS-02.jpg', '././src/assets/BS-03.jpg'] },
  { id: 3, title: 'Orta Seviye', thumbnails: ['././src/assets/OS-01.jpg', '././src/assets/OS-02.jpg', '././src/assets/OS-03.jpg'] },
  { id: 4, title: 'İleri Seviye', thumbnails: ['././src/assets/ZS-01.jpg', '././src/assets/ZS-02.jpg', '././src/assets/ZS-03.jpg'] },
];

function Template() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-white p-8 max-w-7xl w-full">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold">TradeMarket Eğitimi ile temel seviyeden yatırım ve borsada kendini geliştir!</h1>
          <p className="mt-4">Finansal okuryazarlığınızı geliştirin ve borsada etkili işlemler yapın</p>
        </header>
        {videos.map((section) => (
          <section key={section.id} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <a href="#" className="text-blue-400">Tüm yazıları görüntüle +</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.thumbnails.map((thumb, index) => (
                <div key={index} className="h-40 bg-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md flex items-center justify-center">
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover rounded-md" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Template;
