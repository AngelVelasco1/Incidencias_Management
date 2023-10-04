import React from 'react'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react';
import { useIncidences } from '../context/IncidencesContext';
import { CamperCard } from './CamperCard';
import {CheckboxGroup, Checkbox} from "@nextui-org/react";


export const CamperIncidences = ({ incidence}) => {
    const { incidences, loadIncidences } = useIncidences()
const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [filteredIncidences, setFilteredIncidences] = useState([]);

  useEffect(() => {
    loadIncidences();
  }, []);

  useEffect(() => {
    if (selectedPlaces.length === 0) {
      setFilteredIncidences(incidences);
    } else {
      const filtered = incidences.filter((incidence) =>
        selectedPlaces.includes(incidence.place)
      );
      setFilteredIncidences(filtered);
    }
  }, [selectedPlaces, incidences]);

  function handleCheckboxChange(places) {
    setSelectedPlaces(places);
  }

  return (
    <>
      <Navbar/>
      <CheckboxGroup
        className='w-screen flex items-center   mt-8'
        label="Select Places"
        orientation='horizontal'
        value={selectedPlaces}
        onChange={handleCheckboxChange}
      >
        <Checkbox value="Apolo">Apolo</Checkbox>
        <Checkbox value="Artemis">Artemis</Checkbox>
        <Checkbox value="Sputnik">Sputnik</Checkbox>
        <Checkbox value="Corvus">Corvus</Checkbox>
        <Checkbox value="Hunters">Hunters</Checkbox>
        <Checkbox value="Bathrooms">Bathrooms</Checkbox>

      </CheckboxGroup>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-0 p-0 my-8" >
        {filteredIncidences.length === 0 ? (
          <h2 className="w-screen text-2xl font-bold text-center underline decoration-sky-400 decoration-4">
            No Incidences
          </h2>
        ) : (
          filteredIncidences.map((incidence) => (
            <CamperCard incidence={incidence} key={incidence.id} />
          ))
        )}
      </div>
    </>
  );
};