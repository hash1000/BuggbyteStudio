import {Box, Typography} from "@mui/material";
import Image from "next/image";

const ProjectTypeItem = ({
  iconSrc,
  altText,
  label,
}: {
  iconSrc: string;
  altText: string;
  label: string;
}) => (
  <Box sx={{display: "flex", gap: "10px"}}>
    <Image src={iconSrc} alt={altText} width={36} height={36} />
    <Typography sx={{color: "#FFF", fontSize: "24px", fontWeight: 500}}>
      {label}
    </Typography>
  </Box>
);

export default ProjectTypeItem;
