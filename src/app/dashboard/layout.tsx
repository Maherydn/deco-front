import React from "react";
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { RefreshProvider } from "./commande/hooks/RefreshContext";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Aside />
      <div className="lg:w-5/6 w-full h-full bg-blue-100/40 overflow-y-scroll">
        <Header name="Mahery Daniel" email="maherydn@gmail.com" />
        <RefreshProvider>{children}</RefreshProvider>
      </div>
    </div>
  );
};

export default Layout;
