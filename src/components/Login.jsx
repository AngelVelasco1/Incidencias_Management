import React from "react";
import { Button, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

export const Login = () => {
  const navigate = useNavigate();

  const API = `http://${import.meta.env.VITE_HOSTNAME}:${
    import.meta.env.VITE_BACKEND_PORT
  }/api/login/auth`;
  const handleDiscordLogin = async () => {
    try {
      await fetch(API, {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      window.location.href = API;
    } catch (err) {
      console.error({ error: err.message });
      navigate("/");
    }
  };

  return (
    <motion.div
    initial={{translateY: -1000}}
    animate={{translateY: 0}}
    transition= {{duration: 0.8, type: 'tween'}}
      className="w-screen h-screen flex items-center justify-center"
      id="login_container"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
        className="w-4/5 h-1/2  lg:max-w-fit min-h-fit flex flex-col justify-center m-auto bg-slate-900 items-center px-6 py-16 lg:px-44 shadow-3xl rounded-2xl"
      >
        <div className="m-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-48 rounded-xl"
            src="./src/assets/logo.png"
            alt="Your Company"
          />
          <h1 className="mt-8 text-center text-3xl font-black leading-8 tracking-tight text-white">
            Welcome to InciMax
          </h1>
          <h2 className="text-center text-xl tracking-tight text-white mb-8 font-semibold">
            Login to your account
          </h2>
        </div>
        <Button
          className="shadow-inner animate-pulse px-8 bg-gradient-to-tr from-zinc-100 to-zinc-300 text-indigo-500 text-xl font-bold"
          size="lg"
          variant="light"
          onClick={handleDiscordLogin}
        >
          <img width="42" src="./src/assets/discord.png"></img>
          Discord
        </Button>
      </motion.div>
    </motion.div>
  );
};
