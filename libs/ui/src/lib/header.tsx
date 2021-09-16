export interface HeaderProps {
  children: any;
}

export function Header(props: HeaderProps) {
  // return header with children
  return <div className="header">{props.children}</div>;
}

export default Header;
