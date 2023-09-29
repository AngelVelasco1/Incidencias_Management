import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useIncidences } from "../context/IncidencesContext";
import { useNavigate } from "react-router-dom";

export const CamperCard = ({incidence}) => {
    const { deleteIncidence } = useIncidences()
    const navigate = useNavigate()
    
    return (
        <Card className="py-4 w-5/6 m-auto">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-xl uppercase font-bold">Incident</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                />
                <div>
                    <p>Equipment: {incidence.equipment}</p>
                    <p>Place: {incidence.place}</p>
                    <p>Area: {incidence.area}</p>
                    <p>Status: {incidence.status}</p>
                    <p>Priority: {incidence.priority}</p>
                    <p>Category: {incidence.category}</p>
                    <p>Start Date: {incidence.start_date}</p>
                    <p>End Date: {incidence.end_date}</p>
                    <p>Description: {incidence.description}</p>
                    <button onClick={() => deleteIncidence(incidence.id)} type="submit">Delete</button>
                    <button onClick={() => navigate(`/dashboardCamper/edit/${incidence.id}`)} type="submit">Update</button>
                </div>
            </CardBody>
        </Card>
    );
}