import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) errs.email = "Email is required";
    else if (!emailRegex.test(email)) errs.email = "Invalid email format";

    if (!password.trim()) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Minimum 6 characters";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login successful!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 rounded w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
