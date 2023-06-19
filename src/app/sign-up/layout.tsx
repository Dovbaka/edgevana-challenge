import {ReactNode} from "react";
import Header from "@/app/sign-up/header";

const Layout = ({
  children,
}: {
  children: ReactNode
}) => (
  <main>
    <Header/>
    {children}
  </main>
);

export default Layout
