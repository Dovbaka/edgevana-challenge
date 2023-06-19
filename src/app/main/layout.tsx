'use client'
import {FC, PropsWithChildren} from "react";
import {usePathname} from "next/navigation";
import {DashboardSidebar, HeaderSearch} from "@/components";
import {HeaderTitle} from "@/components/UI/HeaderTitle";

const Layout: FC<PropsWithChildren> = ({children}) => {
  const pathname = usePathname();
  const [page] = pathname.split('/').reverse()

  return (
    <div className="grid md:grid-cols-[auto_1fr]">
      <DashboardSidebar activePage={page} />
      <main className="bg-light overflow-y-auto md:w-full">
        <div className="p-6 min-h-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            {/* need to handle title depends on the route*/}
            <HeaderTitle title="Discover Web3" subtitle="Web3 / Entrepreneur Toolkit" />
            <HeaderSearch/>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout
