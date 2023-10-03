import React from 'react'
import { Navbar } from './Navbar'
import { useEffect } from 'react';
import { CamperCard } from './CamperCard';
import { useIncidences } from '../context/IncidencesContext';

export const CamperIncidences = () => {
  const { incidences, loadIncidences } = useIncidences()
  useEffect(() => {
    loadIncidences()
  }, []);

  function renderIncidences() {
    if (incidences.length === 0) return <h2 className="text-2xl font-bold">No Incidences</h2>
    return incidences.map((incidence) => (

      <CamperCard incidence={incidence} key={incidence.id} />
    ))
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 m-0 p-0 h-screen">

        {renderIncidences()}
      </div>
    </>
  )
}