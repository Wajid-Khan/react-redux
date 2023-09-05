import { Outlet } from "react-router-dom"
import NavbarLink from "./NavbarLink";


const RootLayout = () => {
  return (
    <>
        <NavbarLink />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout