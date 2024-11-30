import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react"; // Optional, if you want to use Material Tailwind components

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic (e.g., API request)
    console.log("Logging in with", email, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit" color="orange" variant="filled" className="w-full">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
