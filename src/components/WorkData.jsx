import React, { useState } from "react";
import { tabData } from "./common/Helper";

const WorkData = () => {
  const [currentTab, setCurrentTab] = useState("Jan");

  const HANDLE_TAB_CLICK = (tabBtn) => {
    setCurrentTab(tabBtn);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex">
        {/* ======nav-tabs===== */}
        <div className="nav_tabs d-flex justify-content-center">
          <div className="tabs d-flex gap-2 flex-column w_100 mt-5">
            <p className="text-center">rinklepoonia 471</p>
            {tabData.map((obj, index) => (
              <a
                key={index}
                href={`/${obj.tabBtn}`}
                className={`px-5 d-flex justify-content-center ${
                  currentTab === obj.tabBtn
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  HANDLE_TAB_CLICK(obj.tabBtn);
                }}
              >
                {obj.tabBtn}
              </a>
            ))}
          </div>
        </div>
        {/* =======work-data===== */}
        <div className="work_data mt-5 ms-5">
          {tabData
            .find((tab) => tab.tabBtn === currentTab)
            ?.content.map((item, index) => (
              <div
                key={index}
                className="d-flex gap-4 align-items-start pt-4 ps-4"
              >
                <img
                  className="w-100 max_w_200 h_100 object-fit-fill img_radius"
                  src={item.img}
                  alt="img"
                />
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column">
                    GitHub :-
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal"
                    >
                      {item.github}
                    </a>
                  </div>
                  {item.liveLink && (
                    <div className="d-flex flex-column">
                      Live-link :-
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal"
                      >
                        {item.liveLink}
                      </a>
                    </div>
                  )}
                  {item.figmaLink && (
                    <div className="d-flex flex-column">
                      <span className="text-nowrap">figma-link :-</span>
                      <a
                        href={item.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal"
                      >
                        {item.figmaLink}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkData;
