import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useIncidences } from "../context/IncidencesContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MainForm = () => {
  const navigate = useNavigate();
  const { addIncidence, getIncidence, updateIncidence } = useIncidences();
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
          navigate("/camperIncidences");
        } else {
          await addIncidence(values);
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
              className="bg-gray-300 rounded-md py-1"
              type="text"
              name="equipmen"
              value={values.equipmen}
              required
              onChange={handleChange}
            ></input>

            <RadioGroup label="Place" name="plac" orientation="horizontal">
              <Radio
                onChange={handleChange}
                id="Artemis"
                value="Artemis"
                checked={values.plac === "Artemis"}
              >
                Artemis
              </Radio>
              <Radio
                onChange={handleChange}
                id="Apolo"
                value="Apolo"
                checked={values.plac === "Apolo"}
              >
                Apolo
              </Radio>
              <Radio
                onChange={handleChange}
                id="Sputnik"
                value="Sputnik"
                checked={values.plac === "Sputnik"}
              >
                Sputnik
              </Radio>
              <Radio
                onChange={handleChange}
                id="Hunters"
                value="Hunters"
                checked={values.plac === "Hunters"}
              >
                Hunters
              </Radio>
              <Radio
                onChange={handleChange}
                id="Corvus"
                value="Corvus"
                checked={values.plac === "Corvus"}
              >
                Corvus
              </Radio>
              <Radio
                onChange={handleChange}
                id="Bathrooms"
                value="Bathrooms"
                checked={values.plac === "Bathrooms"}
              >
                Bathrooms
              </Radio>
            </RadioGroup>

            <RadioGroup label="Area" name="are" orientation="horizontal">
              <Radio
                onChange={handleChange}
                id="Technical"
                value="Technical"
                checked={values.are === "Technical"}
              >
                Technical
              </Radio>
              <Radio
                onChange={handleChange}
                id="Social"
                value="Social"
                checked={values.are === "Social"}
              >
                Social
              </Radio>
              <Radio
                onChange={handleChange}
                id="Recreation"
                value="Recreation"
                checked={values.are === "Recreation"}
              >
                Recreation
              </Radio>
              <Radio
                onChange={handleChange}
                id="Administrative"
                value="Administrative"
                checked={values.are === "Administrative"}
              >
                Administrative
              </Radio>
              <Radio
                onChange={handleChange}
                id="HR"
                value="Human Resources"
                checked={values.are === "Human Resources"}
              >
                Human Resources
              </Radio>
              <Radio
                onChange={handleChange}
                id="Financial"
                value="Financial"
                checked={values.are === "Financial"}
              >
                Financial
              </Radio>
            </RadioGroup>

            <RadioGroup label="Status" name="statu" orientation="horizontal">
              <Radio
                onChange={handleChange}
                id="New"
                value="New"
                checked={values.statu === "New"}
              >
                New
              </Radio>
              <Radio
                onChange={handleChange}
                id="in_progress"
                value="in_progress"
                checked={values.statu === "In progress"}
              >
                In progress
              </Radio>
              <Radio
                onChange={handleChange}
                id="Resolved"
                value="Resolved"
                checked={values.statu === "Resolved"}
              >
                Resolved
              </Radio>
            </RadioGroup>

            <RadioGroup label="Priority" name="priorit" orientation="horizontal">
              <Radio
                onChange={handleChange}
                id="Low"
                value="Low"
                checked={values.priorit === "Low"}
              >
                Low
              </Radio>
              <Radio
                onChange={handleChange}
                id="Medium"
                value="Medium"
                checked={values.priorit === "Medium"}
              >
                Apolo
              </Radio>
              <Radio
                onChange={handleChange}
                id="High"
                value="High"
                checked={values.priorit === "High"}
              >
                High
              </Radio>
            </RadioGroup>

            <RadioGroup label="Category" name="categor" orientation="horizontal">
              <Radio
                onChange={handleChange}
                id="Hardware"
                value="Hardware"
                checked={values.categor === "Hardware"}
              >
                Hardware
              </Radio>
              <Radio
                onChange={handleChange}
                id="Software"
                value="Software"
                checked={values.categor === "Software"}
              >
                Software
              </Radio>
              <Radio
                onChange={handleChange}
                id="Services"
                value="Services"
                checked={values.categor === "Services"}
              >
                Services
              </Radio>
              <Radio
                onChange={handleChange}
                id="Other"
                value="Other"
                checked={values.categor === "Other"}
              >
                Other
              </Radio>
            </RadioGroup>


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

            <div className="text-center">
              {" "}
              {/* Agregamos un div de centrado */}
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
