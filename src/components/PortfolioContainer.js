import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NavTabs from "./NavTabs";

export default function PortfolioContainer() {

const [view, setView] = useState('Home');

  const renderPage = () => {
    if (view === "Home") {
      return <Home />;
    }
    if (view === "About") {
      return <About />;
    }
    if (view === "Portfolio") {
      return <Portfolio />;
    }
    if (view === "Contact") {
      return <Contact />;
    }
      return <Resume />;
  };

  const handleViewChange = (view) => setView(view);

  return (
    <div>
        <NavTabs view={view} handleViewChange={handleViewChange}/>
        {renderPage()}
    </div>
  )
}
