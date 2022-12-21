type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div style={{ maxWidth: "100%", boxSizing: "border-box" }}>{children}</div>;
};

export default Layout;
