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
  email: string;
  service: string;
  message: string;
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

export const BuggByteEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  service,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>BuggByte Studios</Preview>
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
        <Body className="bg-offwhite text-base font-sans mt-20 mb-20">
          <Container
            className="bg-black p-45 mt-20 mb-20 text-center"
            style={{
              border: "2px solid white",
              borderRadius: "10px",
              background:
                "linear-gradient(112deg, rgba(23, 69, 113, 0.30) -13.12%, rgba(0, 0, 0, 0.30) 123.07%)",
            }}
          >
            <Link
              href="https://www.buggbytestudios.com/"
              className="mx-auto my-20 w-auto inline-block"
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
            <Text className="text-base text-left text-white" style={paragraph}>
              You&apos;ve received a new form submission from a user. Here are the
              details:
            </Text>
            <Section>
              <Row>
                <Text className="text-base text-left text-white">
                  <b>Name: </b>
                  <span
                    className="mx-4 text-left"
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {name}
                  </span>
                </Text>
                <Text className="text-base text-left text-white">
                  <b>Email: </b>
                  <span className="mx-4 text-left">
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </span>
                </Text>
                <Text className="text-base text-left text-white">
                  <b>Service: </b>
                  <span
                    className="mx-4 text-left"
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {service}
                  </span>
                </Text>
                <Text className="text-base text-left text-white">
                  <b>Message: </b>
                  <span className="mx-4 text-left">{message}</span>
                </Text>
              </Row>
            </Section>
            <Text className="text-base text-left text-white" style={paragraph}>
              Best regards,
              <br />
              Buggbyte studios
            </Text>
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
