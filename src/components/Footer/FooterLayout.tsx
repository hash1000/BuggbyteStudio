import React, {ReactNode} from "react";

interface FooterLayoutProps {
  children: ReactNode;
}
const FooterLayout: React.FC<FooterLayoutProps> = ({children}) => {
  return (
    <>
      <footer>{children}</footer>
    </>
  );
};
export default FooterLayout;
