
import React from "react";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const API = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/api/login/auth`;

  const handleDiscordLogin = async () => {
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
    <>
      <form >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to Incidences
            </h1>
            <h2>Login to your account</h2>
          </div>
        </div>
        <Button color="default" variant="ghost" onClick={handleDiscordLogin}>
          <img id="discordImg" src="./src/assets/discord.png "></img>
          Discord
        </Button>
      </form>

    </>
  )
}