"use client";

import {useEffect} from "react";
import {Box} from "@mui/material";
import PorfolioHeader from "@/components/PortfolioHeader";
import GameArt from "@/components/game-art";
import ProjectInfo from "@/components/portfolio-data/project-info";
import QuestionForm from "@/components/QuestionForm";
import OtherProject from "@/components/other-projects";
import projectDetails from "@/Mock/portfolio-detail.json";
import {notFound} from "next/navigation";
import {hero, gameArt, projectInfo} from "@/utils/types";

interface PortfolioProps {
  params: {
    details: string[];
  };
}

type ProjectDetail = {
  [key: string]: {
    Header: hero;
    GameArt: gameArt;
    ProjectInfo: projectInfo;
  };
};

export default function Portfolio({params}: PortfolioProps) {
  const gameNameToFind = params.details[0] ?? "";
  const selectedGame = projectDetails.find(
    (item) => gameNameToFind in item
  ) as ProjectDetail;

  useEffect(() => {
    if (!selectedGame) {
      notFound();
    }
  }, [selectedGame]);

  if (!selectedGame) {
    return null;
  }

  const {
    Header,
    GameArt: GameArtData,
    ProjectInfo: PortfolioData,
  } = selectedGame[gameNameToFind]

  return (
    <Box>
      {Header && <PorfolioHeader headerData={Header} />}
      {GameArtData && <GameArt gameArtData={GameArtData} />}
      {PortfolioData && <ProjectInfo portfolioData={PortfolioData} />}
      <OtherProject />
      <QuestionForm />
    </Box>
  );
}
