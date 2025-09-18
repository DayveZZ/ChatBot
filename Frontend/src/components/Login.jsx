import React from "react";

const Login = () => {
  return (
    <div className="h-dvh flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl font-semibold uppercase">Login</h1>
      <form className="flex flex-col items-center gap-8 bg-black/5 px-4 py-8 w-1/3 rounded-xl shadow-xl">
        <input
          type="text"
          placeholder="Username"
          className="w-full outline-0"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full outline-0"
        />
        <button className="bg-black/10 py-2 px-4 rounded cursor-pointer hover:bg-black/15 hover:text-black/80">
          Login
        </button>
      </form>

      <p className="text-black/70">
        Don't have account?{" "}
        <button className="text-black cursor-pointer hover:text-red-700/80">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
