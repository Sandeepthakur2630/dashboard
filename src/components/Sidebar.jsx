import React from "react";
import { sidebarData } from "../data/sidebarData";

export default function Sidebar() {
  return (
    <>
      <section>
        {sidebarData.map((item, index) => {
          return (
            <div className="p-3 bg-[#f8f6f6]" key={index}>
              <div className="p-3 hover:bg-[#e6cae6] rounded-md">
                <span className="mr-[1rem]">{item.title}</span>
                <span>{item.icon}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
