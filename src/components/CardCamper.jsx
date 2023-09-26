import React from "react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";

const Tools =() => {
  const [selectedColor, setSelectedColor] = React.useState("default")

  const variants = [ "shadow"];

  const DropdownContent = ({variant, color}) => (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color={color}
          variant={variant}
          className="capitalize"
        >
          {variant}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={color} 
        variant={variant}
      >
        <DropdownItem key="new">Add Incident</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <DropdownContent key={variant} color={selectedColor} variant={variant} />
      ))}

    </div>
  );
}


import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export const CardCamper = () => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <Tools/>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
