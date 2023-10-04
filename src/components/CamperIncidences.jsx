import React from 'react'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react';
import { useIncidences } from '../context/IncidencesContext';
import { CamperCard } from './CamperCard';
import { Listbox, ListboxItem } from '@nextui-org/react';



export const CamperIncidences = () => {
  const { incidences, loadIncidences } = useIncidences();
  const [selected, setSelected] = useState([]);
  let newSelected = [];
  useEffect(() => {
    loadIncidences();
  }, []);

  useEffect(()=>{
    console.log(selected);
  },[selected])

  function handleFilterChange(filter) {
    //setSelected(filter);
    newSelected = filter;
  }

  function renderIncidences() {
    if (incidences.length === 0) {
      return (
        <h2 className="text-3xl text-center mt-8 font-bold w-screen underline decoration-sky-400 decoration-4">No Incidences</h2>
      );
    }

    const filteredIncidences = incidences.filter((incidence) => {
      if (newSelected.length === 0) {
        return true; // Mostrar todas las incidencias si no hay ningún filtro seleccionado
      } else {
        return newSelected.includes(incidence.plac);
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
  
        <Listbox
          className="w-1/4 m-auto mt-8"
          aria-label="Incidences"
          color="primary"
          variant="shadow"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selected}
          aria-orientation='horizontal'
          onSelectionChange={handleFilterChange}
        >
          <ListboxItem className="text-slate-600" name="plac" key="All">
            All
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Apolo">
            Apolo
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Artemis">
            Artemis
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Sputnik">
            Sputnik
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Corvus">
            Corvus
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Hunters">
            Hunters
          </ListboxItem>
          <ListboxItem className="text-slate-600" name="plac" key="Bathrooms">
            Bathrooms
          </ListboxItem>
        </Listbox>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-0 p-0 my-8">
        {renderIncidences()}
      </div>
    </>
  );
};