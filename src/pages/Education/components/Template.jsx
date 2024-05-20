import React from 'react';

const videos = [
  { id: 1, title: 'Yazılar', thumbnails: ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'] },
  { id: 2, title: 'Başlangıç Seviyesi', thumbnails: ['thumb4.jpg', 'thumb5.jpg', 'thumb6.jpg'] },
  { id: 3, title: 'Orta Seviye', thumbnails: ['thumb7.jpg', 'thumb8.jpg', 'thumb9.jpg'] },
  { id: 4, title: 'İleri Seviye', thumbnails: ['thumb10.jpg', 'thumb11.jpg', 'thumb12.jpg'] },
];

function Template() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-white p-8 max-w-7xl w-full">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold">TradeMarket Eğitimi ile temel seviyeden yatırım ve borsada kendini geliştir!</h1>
          <p className="mt-4">Finansal okuryazarlığınızı geliştirin ve borsada etkili işlemler yapın</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg', 'thumb4.jpg'].map((thumb, index) => (
            <div key={index} className="h-24 bg-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md flex items-center justify-center">
              <img src={thumb} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover rounded-md" />
            </div>
          ))}
        </div>

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
