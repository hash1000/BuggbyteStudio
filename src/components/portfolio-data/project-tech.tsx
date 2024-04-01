import { projectInfo } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ProjectTypeItem from "./ProjectTypeItem";

export default function ProjectTechnologies({
  portfolioData,
}: {
  portfolioData: projectInfo;
}) {
  return (
    <>
      {portfolioData?.projectType && (
        <Box>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            Project Type:
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              maxWidth: "inherit",
              borderRadius: "5px",
              border: "1px solid  #DD2C00",
              backgroundColor: "#071626",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              padding: "18px",
              gap: { xs: "20px", sm: "0px" },
            }}
          >
            {portfolioData?.projectType?.videoGame && (
              <ProjectTypeItem
                iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                altText="Video Game"
                label="Video Game"
              />
            )}
            {portfolioData?.projectType?.mobileApp && (
              <ProjectTypeItem
                iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                altText="Mobile App"
                label="Mobile App"
              />
            )}
            {portfolioData?.projectType?.arMobileApp && (
              <ProjectTypeItem
                iconSrc="/assets/social-media-icons/project-info-type-svg1.svg"
                altText="AR MOBILE APP"
                label="AR MOBILE APP"
              />
            )}
          </Box>
        </Box>
      )}
      {portfolioData?.technologyStacks && (
        <Box
          sx={{
            marginTop: "35px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            Technology Stacks:
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              maxWidth: "inherit",
              borderRadius: "5px",
              border: "1px solid  #DD2C00",
              backgroundColor: "#071626",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "18px",
              gap: { xs: "20px", sm: "0px" },
            }}
          >
            {portfolioData?.technologyStacks?.unity && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/project-info-unity.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                    paddingRight: "20px",
                  }}
                >
                  Unity
                </Typography>
              </Box>
            )}
            {portfolioData?.technologyStacks?.autoDesk && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/auto-desk-maya.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                    paddingRight: "20px",
                  }}
                >
                  Auto desk Maya
                </Typography>
              </Box>
            )}
            {portfolioData?.technologyStacks?.blender && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/blender.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  Blender
                </Typography>
              </Box>
            )}
            {portfolioData?.technologyStacks?.adobePhotoshopIllustrator && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/adobe.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  Adobe Photoshop & Illustrator
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
      {portfolioData?.availableAt && (
        <Box
          sx={{
            marginTop: "35px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            Available at:
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              maxWidth: "inherit",
              borderRadius: "5px",
              border: "1px solid  #DD2C00",
              backgroundColor: "#071626",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              padding: "18px",
              gap: { xs: "20px", sm: "0px" },
            }}
          >
            {portfolioData?.availableAt?.appleStore && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/project-info-apple.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                    paddingRight: "20px",
                  }}
                >
                  Apple Store
                </Typography>
              </Box>
            )}
            {portfolioData?.availableAt?.playStore && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/social-media-icons/project-info-playstore.svg"
                  alt="project-info-type-svg1"
                  width={36}
                  height={36}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  Play Store
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
