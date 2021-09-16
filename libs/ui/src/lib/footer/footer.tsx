import './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {
  children: any;
}

export function Footer(props: FooterProps) {
  // return footer with children
  return <footer className="footer">{props.children}</footer>;
}

export default Footer;
