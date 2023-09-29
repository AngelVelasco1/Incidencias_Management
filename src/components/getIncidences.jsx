import React from 'react'
import { Navbar } from './Navbar'
import { useEffect } from 'react';
import { CamperCard } from './CamperCard';
import { useIncidences } from '../context/IncidencesContext';

export const IncidencesCamper = () => {
  const {incidences, loadIncidences} = useIncidences()
  useEffect(() => {   
    loadIncidences()
  }, []);

  function renderIncidences() {
    if(incidences.length === 0) return <h2 className="text-2xl font-bold">No Incidences</h2>
    return incidences.map((incidence) => (
      <CamperCard incidence={incidence} key={incidence.id}/>
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
