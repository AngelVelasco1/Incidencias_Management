import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useIncidences } from "../context/IncidencesContext";

export const CamperCard = ({ incidence }) => {
    const navigate = useNavigate();
    const { deleteIncidence } = useIncidences()
    const startDate = incidence.start_date.split("T")[0];
    const endDate = incidence.end_date.split("T")[0];

    return (
        <Card className="py-4 m-auto" id="incident_card">

            <CardHeader className="pb-0 pt-2 px-4 flex-col ">
                <div className="flex justify-between w-full">
                    <Chip color="default" variant="bordered" radius="sm">{startDate}</Chip>
                </div>
                <p className="text-xl uppercase font-bold">Incident</p>
                <p>{incidence.description}</p>
                <Chip variant="flat" color="danger" radius="full" >{incidence.equipment}</Chip>




            </CardHeader>
            <CardBody className="inline-block overflow-visible z-10">
                <div className=" grid grid-rows-2 grid-flow-col gap-y-4 gap-x-6 justify-center ">
                    <Chip color="primary" variant="flat" radius="md">{incidence.place}</Chip>
                    <Chip color="primary" variant="flat" radius="md">{incidence.area}</Chip>
                    <Chip color="primary" variant="flat" radius="md">{incidence.category}</Chip>
                    <Chip color="primary" variant="flat" radius="md">{incidence.priority}</Chip>
                    <Chip color="primary" variant="flat" radius="md">{incidence.status}</Chip>
                </div>

                <div className="flex items-end  mt-10 ">

                    <Button className="me-3 py-6" size="sm" radius="full" color="danger" variant="shadow" onClick={() => deleteIncidence(incidence.id)} type="submit"><svg aria-hidden="true" fill="none" stroke="currentColor"  width="26" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></Button>
                    <Button className=" py-6" size="sm" radius="full" color="warning" variant="shadow" onClick={() => navigate(`/edit?id=${incidence.id}`)} type="submit"><svg aria-hidden="true" fill="none" stroke="white" width="26" stroke-width="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></Button>
                </div>
            </CardBody>
        </Card>
    );
}