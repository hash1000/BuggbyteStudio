import Header from "@/components/Header";
import PortfolioGameCards from "@/components/portfolio/portfolio-game-cards";
import QuestionForm from "@/components/QuestionForm";

export default function Portfolio() {
  return (
    <>
      <Header num={3} url={"/assets/images/about-us-bg.png"} />
      <PortfolioGameCards />
      <QuestionForm />
    </>
  );
}
