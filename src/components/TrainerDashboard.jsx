import { Navbar } from "./Navbar.jsx"
import React from 'react'
import { MainForm } from "./MainForm.jsx"


export const TrainerDashboard = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#EEE]">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {<MainForm />}
        </div>
      </main>
    </>
  )
}
