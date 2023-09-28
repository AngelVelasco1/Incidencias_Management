import React from 'react'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react';
import { getIncidencesRequest } from '../services/incidences.api';
import { CamperCard } from './CamperCard';

export const IncidencesCamper = () => {
  const [incidences, setIncidences] = useState([]);
  useEffect(() => {
    async function loadIncidences() {
      const response = await getIncidencesRequest();
      setIncidences(response.data);
    }
    loadIncidences()
  }, []);

  function renderIncidences() {
    if(incidences.length === 0) return <h2 className="text-2xl ">No Incidences</h2>
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
