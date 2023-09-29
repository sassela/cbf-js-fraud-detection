import Navigation from "./Navigation";


const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <main className='container'>{children}</main>
    </>
  );
}; export default Layout;
