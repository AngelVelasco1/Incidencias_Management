import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Formik, Form } from "formik";
import { addIncidenceRequest } from "../services/incidences.api";

export const CardCamper = () => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text uppercase font-bold">Incident</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    <CamperForm/>

    </Card>
  );
}

export const CamperForm = () => {
  return (
<Formik initialValues={{
      idUse: 1,
      equipmen: "",
      plac: [],
      are: [],
      statu: [],
      priorit: [],
      categor : [],
      desc: "",
      startDat: "",
      endDat: ""
    }}
      onSubmit={async(values) => {
        try {
          const response = await addIncidenceRequest(values);
          console.log(response);

        } catch(err) {
          console.error({error: err.message});
        }
      }}
    >
    {({handleChange, handleSubmit}) =>  (
         <Form onSubmit={handleSubmit}>
         <label>equipment</label>
         <input type="text" name="equipmen" onChange={handleChange}></input>
 
         <label>place</label>
         <label htmlFor="Artemis">Artemis</label>
         <input type="radio" id="Artemis" name="plac" value="Artemis" onChange={handleChange}></input>
         <label htmlFor="Apolo">Apolo</label>
         <input type="radio" id="Apolo" name="place" value="Apolo" onChange={handleChange}></input>
         <label htmlFor="Sputnik">Sputnik</label>
         <input type="radio" id="Sputnik" name="place" value="Sputnik" onChange={handleChange}></input>
         <label htmlFor="Bathrooms">Bathrooms</label>
         <input type="radio" id="Bathrooms" name="place" value="Bathrooms" onChange={handleChange}></input>
         <label htmlFor="Hunters">Hunters</label>
         <input type="radio" id="Hunters" name="place" value="Hunters" onChange={handleChange}></input>
         <label htmlFor="Corvus">Corvus</label>
         <input type="radio" id="Corvus" name="place" value="Corvus" onChange={handleChange}></input>
 
         <label>area</label>
         <input type="radio" id="Technical" name="are" value="Technical" onChange={handleChange}/>
         <label htmlFor="Technical">Technical</label>
 
         <input type="radio" id="Social" name="are" value="Social" onChange={handleChange}/>
         <label htmlFor="Social">Social</label>
 
         <input type="radio" id="Recreation" name="are" value="Recreation" onChange={handleChange}/>
         <label htmlFor="Recreation">Recreation</label>
 
         <input type="radio" id="Administrative" name="are" value="Administrative" onChange={handleChange}/>
         <label htmlFor="Administrative">Administrative</label>
 
         <input type="radio" id="HumanResources" name="are" value="Human Resources" onChange={handleChange}/>
         <label htmlFor="HumanResources">Human Resources</label>
 
         <input type="radio" id="Financial" name="are" value="Financial" onChange={handleChange}/>
         <label htmlFor="Financial">Financial</label>
 
         <label>status</label>
         <input type="radio" id="New" name="statu" value="New" onChange={handleChange}/>
         <label htmlFor="New">New</label>
 
         <input type="radio" id="InProgress" name="statu" value="In Progress" onChange={handleChange}/>
         <label htmlFor="InProgress">In Progress</label>
 
         <input type="radio" id="Resolved" name="statu" value="Resolved" onChange={handleChange}/>
         <label htmlFor="Resolved">Resolved</label>
 
         <label>priority</label>
         <input type="radio" id="Low" name="priorit" value="Low" onChange={handleChange}/>
         <label htmlFor="Low">Low</label>
 
         <input type="radio" id="Medium" name="priorit" value="Medium" onChange={handleChange}/>
         <label htmlFor="Medium">Medium</label>
 
         <input type="radio" id="High" name="priorit" value="High" onChange={handleChange}/>
         <label htmlFor="High">High</label>
 
         <label>category</label>
         <input type="radio" id="Hardware" name="categor" value="Hardware" onChange={handleChange}/>
         <label htmlFor="Hardware">Hardware</label>
 
         <input type="radio" id="Software" name="categor" value="Software" onChange={handleChange}/>
         <label htmlFor="Software">Software</label>
 
         <input type="radio" id="Services" name="categor" value="Services" onChange={handleChange}/>
         <label htmlFor="Services">Services</label>
 
         <input type="radio" id="Other" name="categor " value="Other" onChange={handleChange}/>
         <label htmlFor="Other">Other</label>
 
 
         <label>description</label>
         <textarea name="desc" placeholder="Incident Description" rows="4" onChange={handleChange}></textarea>
 
         <label>start date</label>
         <input type="date" name="startDat" onChange={handleChange}></input>
 
         <label>end date</label>
         <input type="date" name= "endDat" onChange={handleChange}></input>
 
         <button type="submit">Add</button>
       </Form>
    )   }
    </Formik>
    

  )
}

