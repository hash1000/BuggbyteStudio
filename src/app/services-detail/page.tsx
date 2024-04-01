// Import necessary components and data
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/container";
import ContentComponent from "@/components/Content/Content";
import { ServiceDetail } from "@/utils/types";

interface ServiceDetailsProps {
  params: ServiceDetail[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ params }) => {
  return (
    <>
      {params &&
        params.length &&
        params.map((item, index) => (
          <Box
            key={index}
            sx={{
              background:
                item.order === 0
                  ? "#fff"
                  : "linear-gradient(110deg, rgba(23, 69, 113, 0.30) 5.87%, rgba(0, 0, 0, 0.30) 122.69%)",
              color: item.order === 0 ? "#000" : "#fff",
            }}
          >
            <Container>
              <Box
                sx={{
                  color: "#fff",
                  display: "grid",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "96.5%",
                  textTransform: "capitalize",
                }}
              >
                <ContentComponent
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                  order={item.order}
                />
              </Box>
            </Container>
          </Box>
        ))}
    </>
  );
};

export default ServiceDetails;
