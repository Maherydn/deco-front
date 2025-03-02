"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    window.location.href = "/dashboard/home";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white mx-8 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Entrez votre username"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Entrez votre mot de passe"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

// export default LoginPage;

// "use client";

// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// export default function LoginPage() {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await login(username, password);
//     window.location.href = "/dashboard/home";
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-xl mb-4">Connexion</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nom d'utilisateur"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="border p-2 w-full mb-2"
//         />
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 w-full mb-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           Se connecter
//         </button>
//       </form>
//     </div>
//   );
// }
