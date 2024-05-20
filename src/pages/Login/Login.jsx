import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({
    userName: "",
    password: ""
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://213.142.148.111:5000/api/Login", data);
      if (response.status === 200 && response.data.success) {  
        alert("Doğru giriş");
        setCookie('token', response.data.jwttoken) // şu jwt token kısmına apiden gelen tokenin name ini basıcaksın
        navigate("/home"); 
      } else {
        alert("Hatalı giriş yaptınız");
      }
    } catch (error) {
      alert("Hatalı giriş yaptınız");
      console.error("There was an error logging in!", error);
    }
  };

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  return (
    <div className="dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <div
            className="flex items-center h-full px-20 bg-cover"
            style={{ backgroundImage: "url(./src/assets/login-register.png)" }}
          >
            <div>
              <img src="./src/assets/tm-Logo-beyaz.png" alt="tm-Logo" width={100} />
              <p className="max-w-3xl mt-3 text-gray-100 text-3xl font-bold">
                Doğru Yerdesiniz!
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-100 dark:text-white">
                Giriş Yap!
              </h2>
              <p className="mt-3 text-gray-300 dark:text-gray-300">
                Hesabınıza erişmek için oturum açın
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-200 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Kullanıcı Adı"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-200 dark:text-gray-200"
                    >
                      Şifre
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Şifremi unuttum
                    </a>
                  </div>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Şifre"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Giriş Yap
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-200">
                Henüz hesabınız yok mu?{" "}
                <a
                  href="/register"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Kayıt Ol
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;