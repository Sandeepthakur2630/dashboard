import React from "react";
import Navbar2 from "./Navbar2";
import Sidebar from "./Sidebar";
import SidePage from "./SidePage";

function MainPage() {
  return (
    <>
      {/*navbar section*/}
      <section>
        <Navbar2 />
      </section>
      {/*sidebar section*/}

      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-white h-screen pl-2">
            <Sidebar />
          </div>
          <div className="col-span-10 bg-white">
            <SidePage />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
