import { Link , Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
       <Link to="home">Home</Link> |
       <Link to="about">About</Link> |
       <Link to="contect">Contect</Link>


       <br /><br /><br />
       <hr size="4" />

        <Outlet/>

       <hr size="4" />
       
       <h1>Thise Is Footer . Com</h1>

    </>
  )
}
export default Layout
