import React from "react";
import { Box, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import FAQItem from "../../components/FAQItem";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />

      <FAQItem
        defaultExpanded={true}
        color={colors.greenAccent[500]}
        variant="h5"
        title="An Important Question"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet sapien ipsum, id varius sem pulvinar nec. Nullam malesuada turpis vitae nunc laoreet, ut congue diam rutrum."
      />

      <FAQItem
        defaultExpanded={true}
        color={colors.greenAccent[500]}
        variant="h5"
        title="Another Important Question"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet sapien ipsum, id varius sem pulvinar nec. Nullam malesuada turpis vitae nunc laoreet, ut congue diam rutrum."
      />

      <FAQItem
        defaultExpanded={true}
        color={colors.greenAccent[500]}
        variant="h5"
        title="Your Favorite Question"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet sapien ipsum, id varius sem pulvinar nec. Nullam malesuada turpis vitae nunc laoreet, ut congue diam rutrum."
      />

      <FAQItem
        defaultExpanded={true}
        color={colors.greenAccent[500]}
        variant="h5"
        title="Some Random Question"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet sapien ipsum, id varius sem pulvinar nec. Nullam malesuada turpis vitae nunc laoreet, ut congue diam rutrum."
      />

      <FAQItem
        defaultExpanded={true}
        color={colors.greenAccent[500]}
        variant="h5"
        title="The Final Question"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet sapien ipsum, id varius sem pulvinar nec. Nullam malesuada turpis vitae nunc laoreet, ut congue diam rutrum."
      />
    </Box>
  );
};

export default FAQ;
