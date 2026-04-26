import { FunctionComponent, ReactElement } from "react";

interface OctoLinkProps {
  href: string;
  title: string;
}

function sanitizeUrl(url: string) {

  return url;
}

const OctoLink: FunctionComponent<OctoLinkProps> = ({
  href,
  title,
}): ReactElement => {
  return <a href={sanitizeUrl(href)}>{title}</a>;
};

export { OctoLink };
