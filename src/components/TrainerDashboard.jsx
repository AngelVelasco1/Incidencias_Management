import { NavbarTrainer } from "./NavbarTrainer.jsx"
import React from 'react'
import { MainForm } from "./MainForm.jsx"


export const TrainerDashboard = () => {
  return (
    <>
      <NavbarTrainer />
      <main className="bg-[#EEE]">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {<MainForm />}
        </div>
      </main>
    </>
  )
}
