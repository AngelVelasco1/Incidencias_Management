
import React from "react";
import {Button} from "@nextui-org/react";
import { Navigate } from "react-router-dom";


export const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-fuchsia-100">
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
      <Button color="primary" variant= "bordered">
        Discord
      </Button>  
     
    </>
  )}