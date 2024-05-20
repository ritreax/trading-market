import React from 'react';
import Team from './Team';

const teamMembers = [
  {
    name: 'Juliet Smith',
    role: 'Team Leader',
    image: 'https://img.freepik.com/free-photo/businesspeople-office-meeting_23-2148908969.jpg', // Add the actual image URL here
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John Doe',
    role: 'Backend Developer',
    image: 'https://via.placeholder.com/150', // Add the actual image URL here
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Jane Doe',
    role: 'Frontend Developer',
    image: 'https://via.placeholder.com/150', // Add the actual image URL here
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Alice Smith',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150', // Add the actual image URL here
    linkedin: 'https://linkedin.com',
  },
];

function Icerik() {
  return (
    <div className="text-white min-h-screen p-8 flex justify-center">
      <div className="max-w-screen-2xl w-full mt-20">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Biz Kimiz?</h1>
          <p className="mb-2">
            Merhaba! Biz, TradeMarket ekibi olarak sizlere selamlarımızı iletiyoruz. Aramızda Mehmet Ali ve Betül gibi backend geliştirme konusunda tutkulu arkadaşlarımız var. Onlar, projenin altyapısını oluşturmak için kendi deneyimlerini ve bilgilerini birleştiriyorlar.
          </p>
          <p className="mb-2">
            Frontend tarafında ise, Furkan ve Erhan olarak biz varız. Henüz öğrenmeye devam eden ve kendimizi geliştirmeye açık genç geliştiricileriz. Her gün yeni şeyler öğrenmek ve deneyimlerimizi artırmak için çaba sarf ediyoruz.
          </p>
          <p>
            Bizler, üniversite hayatımızın son dönemlerindeyiz ve bu proje bize birçok şey öğretiyor. Hem teknik becerilerimizi geliştiriyor hem de takım içinde iletişim ve işbirliği konusunda deneyim kazanıyoruz. TradeMarket, bizim için sadece bir bitirme projesi değil, aynı zamanda öğrenme ve keşfetme yolculuğumuzun bir parçası. Sizlerle bu deneyimi paylaşmaktan heyecan duyuyoruz ve projemiz üzerindeki gelişimimizi sizinle birlikte sürdürmek istiyoruz.
          </p>
        </section>

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hedef Kitlemiz ve Proje Hakkında</h1>
          <p className="mb-2">
            Projemiz, finansal tabloların ve borsa verilerinin etkili bir şekilde görselleştirilmesi ve analiz edilmesine odaklanan bir platform sunmayı amaçlamaktadır. Hedef kitlemiz, yatırıma yeni başlayanlar ve giriş seviyesi yatırımcılardan oluşmaktadır. Amacımız, kullanıcıların finansal verilerle etkileşimde bulunurken arayüzün kullanımını kolaylaştırıp ve içeriğin anlaşılabilirliğini sağlamaktır.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Kullanıcı Odaklı Tasarım:</h2>
          <p className="mb-2">
            Platformumuzun temel prensibi, kullanıcıların arayüzü sade bulmaları ve içeriği anlamalarıdır. Özellikle yeni gelen kullanıcılar için, karmaşık finansal terimlerin ve verilerin basitleştirilmiş bir gösterimi sağlanacaktır. Kullanıcı dostu bir tasarım ve sezgisel kullanıcı deneyimi, her seviyeden yatırımcının platformu etkin bir şekilde kullanmasını sağlayacaktır.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Frontend ve Backend Entegrasyonu:</h2>
          <p className="mb-2">
            Projemizin geliştirilmesi aşamasında, hem frontend hem de backend ekiplerimiz, kullanıcı dostu bir platform oluşturmak için işbirliği içindedir. Frontend tarafında, kullanıcı arayüzünün basitliği ve işlevselliği için özenle tasarlanmış bir kullanıcı deneyimi sunulacaktır. Backend tarafında ise, güçlü veri işleme algoritmaları ve borsa verilerini analiz etme yeteneği ile kullanıcıların taleplerini karşılayacak bir alt yapı geliştirmekteyiz.
          </p>
        </section>

        <section>
          <h1 className="text-4xl font-bold mb-4">Ekibimiz</h1>
          <Team/>
        </section>
      </div>
    </div>
  );
}

export default Icerik;
