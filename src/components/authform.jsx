import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup") {
      localStorage.setItem(email, password);
      alert("Account created!");
      navigate("/login");
    } else {
      const storedPassword = localStorage.getItem(email);
      if (storedPassword === password) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid credentials.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">{type === "signup" ? "Sign Up" : "Login"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {type === "signup" ? "Create Account" : "Login"}
      </button>
    </form>
  );
}