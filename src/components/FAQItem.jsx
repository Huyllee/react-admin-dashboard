import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const FAQItem = ({
  color,
  variant,
  defaultExpanded = false,
  title,
  description,
}) => {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary>
        <Typography color={color} variant={variant}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;
