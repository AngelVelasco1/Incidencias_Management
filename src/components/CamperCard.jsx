import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const CamperCard = ({ incidence }) => {
    const navigate = useNavigate()
    return (
        <Card className="py-4 w-1/2 m-auto">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-xl uppercase font-bold">Incident</p>
            </CardHeader>
            <CardBody className="inline-block overflow-visible py-2">

                <div className=" grid grid-rows-3 grid-flow-col ">
                    <Card className="flex bg-red-200 justify-center items-center">
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.equipment}</p></p>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.description}</p></p>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.area}</p></p>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.status}</p></p>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.priority}</p></p>
                        </CardBody>
                    </Card>


                    <Card>
                        <CardBody className="flex flex border-none">
                            <p>                    <p>{incidence.place}</p></p>
                        </CardBody>
                    </Card>



                    <Card>
                        <CardBody>
                            <p>                    <p>{incidence.category}</p></p>
                        </CardBody>
                    </Card>


                    <Card>
                        <CardBody>
                            <p>                    <p>{incidence.start_date}</p></p>
                        </CardBody>
                    </Card>



                    <Card>
                        <CardBody>
                            <p>                    <p>{incidence.end_date}</p></p>
                        </CardBody>
                    </Card>

                </div>
                <button className=" bg-blue-500 p-2 h-12 rounded-md" onClick={() => navigate(`/edit?id=${incidence.id}`)} type="submit"><img src="./src/assets/update.svg"></img></button>
            </CardBody>
        </Card>
    );
}