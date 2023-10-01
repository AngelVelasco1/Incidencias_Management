import React from 'react'
import { Navbar } from './Navbar'
import { useEffect } from 'react';
import { TrainerCard } from './TrainerCard';
import { useIncidences } from '../context/IncidencesContext';

export const TrainerIncidences = () => {
  const {incidences, loadIncidences} = useIncidences()
  useEffect(() => {   
    loadIncidences()
  }, []);

  function renderIncidences() {
    if(incidences.length === 0) return <h2 className="text-2xl font-bold">No Incidences</h2>
    return incidences.map((incidence) => (
      <TrainerCard incidence={incidence} key={incidence.id}/>
    ))
  }

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold">All Incidences</h1>
      {renderIncidences()}
    </>
  )
}
