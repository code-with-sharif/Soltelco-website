import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { multipleaccordion } from "../Support/Multipleaccordion";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="black"
      className={`${
        id === open ? "rotate-180" : ""
      } h-3 w-3 transition-transform ease-in-out mr-4 text-[24px]`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(null);
  const [clickedTitle, setClickedTitle] = React.useState(null);

  const handleOpen = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
    setClickedTitle(index);
  };

  return (
    <main>
      {multipleaccordion.map((item, index) => (
        <div key={index}>
          <h1
            className={`${
              item.heading1 ? "mb-10" : "mb-0"
            } text-[24px] font-bold 
            `}
          >
            {item.heading1}
          </h1>
          <Accordion     className="mb-1"
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className="bg-[#eee] py-3 text-[#bf00ff] text-[14px] pl-4 rounded-md cursor-pointer"
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="text-[#8492a6] text-[14px] text-justify px-4 hover:-z-50 border-2 border-red-600">
              {item.paragraph}
            </AccordionBody>
          </Accordion>
        </div>
      ))}
    </main>
  );
}

export default AccordionCustomIcon;
