import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useIncidences } from "../context/IncidencesContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Chip} from "@nextui-org/react";


export const MainForm = () => {
  const { addIncidence, getIncidence, updateIncidence } = useIncidences();
  const [isIncidenceSent, setIsIncidenceSent] = useState(false);
  const navigate = useNavigate();

  const [incidence, setIncidence] = useState({
    idUse: 1,
    equipmen: "",
    plac: "",
    are: "",
    statu: "",
    priorit: "",
    categor: "",
    desc: "",
    startDat: "",
    endDat: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryId = queryParams.get("id");

  useEffect(() => {
    const loadIncidence = async () => {
      if (queryId) {
        const incidence = await getIncidence(queryId);
        setIncidence({
          idUse: incidence.id_user,
          equipmen: incidence.equipment,
          plac: incidence.place,
          are: incidence.area,
          statu: incidence.status,
          priorit: incidence.priority,
          categor: incidence.category,
          desc: incidence.description,
          startDat: incidence.start_date,
          endDat: incidence.end_date,
        });
      }
    };
    loadIncidence();
  }, []);
  
  return (
    <Formik
      initialValues={incidence}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        if (queryId) {
          await updateIncidence(queryId, values);
         navigate("/camperIncidences") ;
        } else {
          await addIncidence(values);
          setIsIncidenceSent(true); 
        }
        actions.resetForm();
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting, values }) => (
        <Form
          className="capitalize flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div
            id="form"
            className="bg-white shadow-lg  rounded-xl px-8 pt-6 pb-8 space-y-2  space-x-1"
          >
            <h1 className="flex text-2xl justify-center">
              {queryId ? "Edit Incidence" : "Add Incidence"}
            </h1>

            <label className="flex flex-col">equipment</label>
            <input
              className="bg-gray-300 rounded-md py-1 flex flex-col"
              type="text"
              name="equipmen"
              value={values.equipmen}
              required
              onChange={handleChange}
            ></input>

            <input className="p-6" type="radio" id="Artemis" name="plac" value="Artemis" checked={values.plac === "Artemis"} onChange={handleChange}></input>
            <label htmlFor="Artemis">Artemis</label>

            <input type="radio" id="Apolo" name="plac" value="Apolo" checked={values.plac === "Apolo"} onChange={handleChange}></input>
            <label htmlFor="Apolo">Apolo</label>

            <input type="radio" id="Sputnik" name="plac" value="Sputnik" checked={values.plac === "Sputnik"} onChange={handleChange}></input>
            <label htmlFor="Sputnik">Sputnik</label>

            <input type="radio" checked={values.plac === "Bathrooms"} id="Bathrooms" name="plac" value="Bathrooms" onChange={handleChange}></input>
            <label htmlFor="Bathrooms">Bathrooms</label>

            <input type="radio" checked={values.plac === "Hunters"} id="Hunters" name="plac" value="Hunters" onChange={handleChange}></input>
            <label htmlFor="Hunters">Hunters</label>

            <input type="radio" checked={values.plac === "Corvus"} id="Corvus" name="plac" value="Corvus" onChange={handleChange}></input>
            <label htmlFor="Corvus">Corvus</label>

            <label className="flex flex-col">area</label>
            <input type="radio" checked={values.are === "Technical"} id="Technical" name="are" value="Technical" onChange={handleChange} />
            <label htmlFor="Technical">Technical</label>

            <input type="radio" checked={values.are === "Social"} id="Social" name="are" value="Social" onChange={handleChange} />
            <label htmlFor="Social">Social</label>

            <input type="radio" checked={values.are === "Recreation"} id="Recreation" name="are" value="Recreation" onChange={handleChange} />
            <label htmlFor="Recreation">Recreation</label>

            <input type="radio" checked={values.are === "Administrative"} id="Administrative" name="are" value="Administrative" onChange={handleChange} />
            <label htmlFor="Administrative">Administrative</label>

            <input type="radio" checked={values.are === "Human Resources"} id="HumanResources" name="are" value="Human Resources" onChange={handleChange} />
            <label htmlFor="HumanResources">HR</label>

            <input type="radio" checked={values.are === "Financial"} id="Financial" name="are" value="Financial" onChange={handleChange} />
            <label htmlFor="Financial">Financial</label>

            <label className="flex flex-col">status</label>
            <input type="radio" checked={values.statu === "New"} id="New" name="statu" value="New" onChange={handleChange} />
            <label htmlFor="New">New</label>

            <input type="radio" checked={values.statu === "In Progress"} id="InProgress" name="statu" value="In Progress" onChange={handleChange} />
            <label htmlFor="InProgress">In Progress</label>

            <input type="radio" checked={values.statu === "Resolved"} id="Resolved" name="statu" value="Resolved" onChange={handleChange} />
            <label htmlFor="Resolved">Resolved</label>

            <label className="flex flex-col">priority</label>
            <input type="radio" checked={values.priorit === "Low"} id="Low" name="priorit" value="Low" onChange={handleChange} />
            <label htmlFor="Low">Low</label>

            <input type="radio" checked={values.priorit === "Medium"} id="Medium" name="priorit" value="Medium" onChange={handleChange} />
            <label htmlFor="Medium">Medium</label>

            <input type="radio" checked={values.priorit === "High"} id="High" name="priorit" value="High" onChange={handleChange} />
            <label htmlFor="High">High</label>

            <label className="flex flex-col">category</label>
            <input type="radio" checked={values.categor === "Hardware"} id="Hardware" name="categor" value="Hardware" onChange={handleChange} />
            <label htmlFor="Hardware">Hardware</label>

            <input type="radio" checked={values.categor === "Software"} id="Software" name="categor" value="Software" onChange={handleChange} />
            <label htmlFor="Software">Software</label>

            <input type="radio" checked={values.categor === "Services"} id="Services" name="categor" value="Services" onChange={handleChange} />
            <label htmlFor="Services">Services</label>

            <input type="radio" checked={values.categor === "Other"} id="Other" name="categor " value="Other" onChange={handleChange} />
            <label htmlFor="Other">Other</label>


            <label className="flex flex-col">description</label>
            <textarea
              className="bg-gray-300 rounded-md p-2"
              name="desc"
              value={values.desc}
              placeholder="Incident Description"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>

            <label className="flex flex-col">start date</label>
            <input
              className="bg-gray-300"
              type="date"
              name="startDat"
              value={values.startDat.split("T")[0]}
              required
              onChange={handleChange}
            ></input>

            <label className="flex flex-col">end date</label>
            <input
              className="bg-gray-300"
              type="date"
              name="endDat"
              value={values.endDat.split("T")[0]}
              required
              onChange={handleChange}
            ></input>
            <br />
 {isIncidenceSent && (
        <Chip
          
          variant="faded"
          color="success"
        >
          Incidence added
        </Chip>
      )}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
              >
                {queryId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
