import * as React from "react";

export interface VerticalTimelineProps {
  animate?: boolean | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
  layout?:
    | "1-column"
    | "1-column-left"
    | "1-column-right"
    | "2-columns"
    | undefined;
  lineColor?: string | undefined;
}

export interface VerticalTimelineElementProps {
  children?: React.ReactNode;
  id?: string | undefined;
  className?: string | undefined;
  date?: string | undefined;
  dateClassName?: string | undefined;
  iconClassName?: string | undefined;
  iconOnClick?: (() => void) | undefined;
  iconStyle?: React.CSSProperties | undefined;
  icon?: React.ReactNode | undefined;
  intersectionObserverProps?: any;
  onTimelineElementClick?: (() => void) | undefined;
  position?: string | undefined;
  style?: React.CSSProperties | undefined;
  textClassName?: string | undefined;
  contentStyle?: React.CSSProperties | undefined;
  contentArrowStyle?: React.CSSProperties | undefined;
  visible?: boolean | undefined;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}

interface GameExperience {
  title: string;
  tags: string[];
  description: string;
  btnLink: string;
  btnTitle: string;
  imgUrl: string;
}

interface ServiceDetail {
  image: string;
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  order?: number;
}
interface OtherProjectsDetail {
  category?: string;
  title: string;
  description: string;
  btnText?: string;
  btnLink?: string;
  imageUrl: string;
}

interface MediaCardProps {
  isActive: boolean;
  gameExperience: GameExperience;
}
type ProjectLifecycleItem = {
  step: number;
  phase: string;
  description: string;
};

interface FooterProps {
  footerData: {
    section: string;
    links?: Array<{ text: string; url: string }>;
    address?: string;
    phone?: string;
    email?: string;
    socialMedia?: Array<{ platform: string; icon: string; url: string }>;
  }[];
}

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface progressData {
  title: number;
  subtitle: String;
}

interface portfolio {
  categories: string[];
  subHeading: string;
  heading: string;
  description: string;
  link: string;
  img: string;
  size: Size;
}
interface Size {
  width: number;
  height: number;
}

interface slide {
  subTitle: string;
  title: {
    t1: string;
    t2: string;
  };
  description: string;
  btns: {
    Styled: boolean;
    text: string;
    link: string;
  }[];
  imagePath: string;
}

interface hero {
  text?: string | undefined;
  title: string;
  des: string;
  image?: string | undefined;
  buttonText?: string | undefined;
  btnLink?: string;
}
interface TimeLineType {
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

interface gameArt {
  title: string;
  description: string;
  images: string[];
}

interface FooterSection {
  section: string;
  links: Link[];
  socialMedia?: SocialMedia[];
}
interface SocialMedia {
  platform: string;
  icon: string;
  url: string;
}
interface Link {
  text: string;
  url: string;
}
interface ServiceOfferType {
  title: string;
  desc: string;
  imageUrl: string;
  btnLink: string;
}
type CircleItem = {
  url: string;
};

interface projectInfo {
  title: string;
  description: string;
  mainImage: string;
  projectType?: {
    videoGame?: boolean;
    mobileApp?: boolean;
    arMobileApp?: boolean;
  };
  technologyStacks?: {
    unity?: boolean;
    autoDesk?: boolean;
    blender?: boolean;
    autoDesk3DSMAX?: boolean;
    adobePhotoshopIllustrator?: boolean;
  };
  availableAt?: {
    appleStore?: boolean;
    playStore?: boolean;
  };
}

export type {
  GameExperience,
  ServiceDetail,
  MediaCardProps,
  FooterProps,
  FormData,
  progressData,
  slide,
  hero,
  ServiceOfferType,
  portfolio,
  TimeLineType,
  OtherProjectsDetail,
  FooterSection,
  gameArt,
  projectInfo,
  ProjectLifecycleItem,
  CircleItem,
};
