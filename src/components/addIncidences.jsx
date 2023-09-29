import React from "react";
import { Formik, Form } from "formik";
import { useIncidences } from "../context/IncidencesContext";

export const CamperForm = () => {
  const { addIncidence } = useIncidences();
  return (
    <Formik initialValues={{
      idUse: 1,
      equipmen: "",
      plac: [],
      are: [],
      statu: [],
      priorit: [],
      categor: [],
      desc: "",
      startDat: "",
      endDat: ""
    }}
      onSubmit={async (values) => {
        try {
          addIncidence(values)
        } catch (err) {
          console.error({ error: err.message });
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => (
        <Form className="capitalize m-auto" onSubmit={handleSubmit}>
          <label className="flex flex-col">equipment</label>
          <input className="bg-gray-300" type="text" name="equipmen" required onChange={handleChange}></input>

          <label className="flex flex-col">place</label>
          <input type="radio" id="Artemis" name="plac" value="Artemis" onChange={handleChange}></input>
          <label htmlFor="Artemis">Artemis</label>

          <input type="radio" id="Apolo" name="plac" value="Apolo" onChange={handleChange}></input>
          <label htmlFor="Apolo">Apolo</label>

          <input type="radio" id="Sputnik" name="plac" value="Sputnik" onChange={handleChange}></input>
          <label htmlFor="Sputnik">Sputnik</label>

          <input type="radio" id="Bathrooms" name="plac" value="Bathrooms" onChange={handleChange}></input>
          <label htmlFor="Bathrooms">Bathrooms</label>

          <input type="radio" id="Hunters" name="plac" value="Hunters" onChange={handleChange}></input>
          <label htmlFor="Hunters">Hunters</label>

          <input type="radio" id="Corvus" name="plac" value="Corvus" onChange={handleChange}></input>
          <label htmlFor="Corvus">Corvus</label>

          <label className="flex flex-col">area</label>
          <input type="radio" id="Technical" name="are" value="Technical" onChange={handleChange} />
          <label htmlFor="Technical">Technical</label>

          <input type="radio" id="Social" name="are" value="Social" onChange={handleChange} />
          <label htmlFor="Social">Social</label>

          <input type="radio" id="Recreation" name="are" value="Recreation" onChange={handleChange} />
          <label htmlFor="Recreation">Recreation</label>

          <input type="radio" id="Administrative" name="are" value="Administrative" onChange={handleChange} />
          <label htmlFor="Administrative">Administrative</label>

          <input type="radio" id="HumanResources" name="are" value="Human Resources" onChange={handleChange} />
          <label htmlFor="HumanResources">Human Resources</label>

          <input type="radio" id="Financial" name="are" value="Financial" onChange={handleChange} />
          <label htmlFor="Financial">Financial</label>

          <label className="flex flex-col">status</label>
          <input type="radio" id="New" name="statu" value="New" onChange={handleChange} />
          <label htmlFor="New">New</label>

          <input type="radio" id="InProgress" name="statu" value="In Progress" onChange={handleChange} />
          <label htmlFor="InProgress">In Progress</label>

          <input type="radio" id="Resolved" name="statu" value="Resolved" onChange={handleChange} />
          <label htmlFor="Resolved">Resolved</label>

          <label className="flex flex-col">priority</label>
          <input type="radio" id="Low" name="priorit" value="Low" onChange={handleChange} />
          <label htmlFor="Low">Low</label>

          <input type="radio" id="Medium" name="priorit" value="Medium" onChange={handleChange} />
          <label htmlFor="Medium">Medium</label>

          <input type="radio" id="High" name="priorit" value="High" onChange={handleChange} />
          <label htmlFor="High">High</label>

          <label className="flex flex-col">category</label>
          <input type="radio" id="Hardware" name="categor" value="Hardware" onChange={handleChange} />
          <label htmlFor="Hardware">Hardware</label>

          <input type="radio" id="Software" name="categor" value="Software" onChange={handleChange} />
          <label htmlFor="Software">Software</label>

          <input type="radio" id="Services" name="categor" value="Services" onChange={handleChange} />
          <label htmlFor="Services">Services</label>

          <input type="radio" id="Other" name="categor " value="Other" onChange={handleChange} />
          <label htmlFor="Other">Other</label>


          <label className="flex flex-col">description</label>
          <textarea className="bg-gray-300" name="desc" placeholder="Incident Description" rows="4" required onChange={handleChange}></textarea>

          <label className="flex flex-col">start date</label>
          <input className="bg-gray-300" type="date" name="startDat" required onChange={handleChange}></input>

          <label className="flex flex-col">end date</label>
          <input className="bg-gray-300" type="date" name="endDat" required onChange={handleChange}></input>
          <br/>

          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add"}</button>
        </Form>
      )}
    </Formik>
  )
}

