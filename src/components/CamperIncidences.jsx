import React from 'react'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react';
import { useIncidences } from '../context/IncidencesContext';
import { CamperCard } from './CamperCard';
import { Listbox, ListboxItem, Checkbox } from "@nextui-org/react";

export const CamperIncidences = () => {
  const { incidences, loadIncidences } = useIncidences();
  const [selected, setSelected] = useState([
    
  ]);
  useEffect(() => {
    loadIncidences();
  }, []);

  function handleFilterChange(filter) {
    setSelected(filter);
  }

  function renderIncidences() {
    if (incidences.length === 0) {
      return (
        <h2 className="text-3xl text-center mt-8 font-bold w-screen underline decoration-sky-400 decoration-4">No Incidences</h2>
      );
    }

    const filteredIncidences = incidences.filter((incidence) => {
      if (selected.length === 0) {
        return true; // Mostrar todas las incidencias si no hay ningún filtro seleccionado
      } else {
        return selected.includes(incidence.plac);
      }
    });

    return filteredIncidences.map((incidence) => (
      <CamperCard incidence={incidence} key={incidence.id} />
    ));
  }

  return (
    <>
      <Navbar />
      <div>
        {/* Tu código para mostrar el título y el selector */}
        {/* ... */}
        <Listbox
          aria-label="Filter incidences"
          variant="flat"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={handleFilterChange}
        >
          <ListboxItem className="text-white" name="plac" key="All">
            All
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Apolo">
            Apolo
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Artemis">
            Artemis
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Sputnik">
            Sputnik
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Corvus">
            Corvus
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Hunters">
            Hunters
          </ListboxItem>
          <ListboxItem className="text-white" name="plac" key="Bathrooms">
            Bathrooms
          </ListboxItem>
        </Listbox>
      </div>

      <div className="grid grid-cols-3 gap-4 m-0 p-0 my-8">
        {renderIncidences()}
      </div>
    </>
  );
};