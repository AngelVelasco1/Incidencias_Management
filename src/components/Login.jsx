
import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();

  const API = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/api/login/auth`;
  const handleDiscordLogin = async() => {
    try {
      await fetch(API, {
        method: "GET",
        mode: "no-cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      window.location.href = API;
    } catch (err) {
      console.error({ error: err.message });
      navigate("/");
    }
  }

  return (
    <div id="login" className=" animate-browse-in	flex mt-20  min-h-full flex-1 flex-col justify-center  bg-slate-900	 items-center px-6 py-24 lg:px-44 shadow-3xl rounded-2xl" >
      <div className="m-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-32  rounded-xl"
          src="./src/assets/logo.png"
          alt="Your Company"
        />
        <h1 className="mt-10 text-center text-3xl font-black leading-9 tracking-tight text-white">
          Welcome to InciMax
        </h1>
        <h2 className="text-center text-xl tracking-tight text-white mb-8 font-semibold">Login to your account</h2>
      </div>
      <Button className="shadow-inner animate-pulse px-8 bg-gradient-to-tr from-zinc-100 to-zinc-300 text-indigo-500 text-xl font-bold" size="lg" variant="light" onClick={handleDiscordLogin}>
        <img width="42" src="./src/assets/discord.png "></img>
        Discord
      </Button>

    </div>

  )
}