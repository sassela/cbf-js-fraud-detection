import Navigation from "./Navigation";


const Layout = ({ children }:any) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};export default Layout;
