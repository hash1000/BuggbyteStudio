import currentYear from "@/utils/CurrentYear";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
}
const links = [
  {
    link: "https://www.buggbytestudios.com/about-us",
    name: "About",
  },
  {
    link: "https://www.buggbytestudios.com/portfolio",
    name: "Portfolio",
  },
];
export const ClientEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => {

  return (
    <Html>
      <Head />
      <Preview>BuggByte Studios Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans mt-20">
          <Container
            className="bg-black p-45  mt-20 mb-20 text-center"
            style={{
              border: "2px solid white",
              borderRadius: "10px",
              background:
                "linear-gradient(112deg, rgba(23, 69, 113, 0.30) -13.12%, rgba(0, 0, 0, 0.30) 123.07%)",
            }}
          >
            <Link
              href="https://www.buggbytestudios.com/"
              className="mx-auto w-auto inline-block "
            >
              <Img
                src="https://www.buggbytestudios.com/_next/image?url=/assets/images/logo.png&w=256&q=75"
                title="BuggByte"
                width="230"
                height="70"
                style={{
                  display: "block",
                }}
                alt="BuggByte logo"
              />
            </Link>
            <Heading className="text-center my-5 leading-10 text-white">
              <span
                style={{
                  textTransform: "capitalize",
                }}
              >
                hi {name}!
              </span>
              <br /> 
              Welcome to Buggbyte
            </Heading>
            <Section>
              <Row>
                <Text className="text-base text-center text-white">
                  Thanks for contacting us. <br />
                  Our Team will reach to you Shortly
                </Text>
              </Row>
            </Section>
            <Section className="mt-45">
              {links?.map((data, index) => (
                <Link
                  key={index}
                  className="text-white underline font-bold mx-4"
                  href={data.link}
                >
                  {data.name}
                </Link>
              ))}
            </Section>
          </Container>

          <Container className="mt-20 mb-20">
            <Text className="text-center text-gray-400 mb-45">
              Copyright ©{currentYear()}. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
