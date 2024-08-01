import React, { useState } from "react";
import img1 from "../assets/images/png/img1.png";

const WorkData = () => {
  const [tabs, setTabs] = useState("tab1");

  const HANDLE_CLICK = (tab) => {
    setTabs(tab);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="nav_tabs d-flex justify-content-center">
          <div className="tabs d-flex gap-2 flex-column w_100 mt-5">
            <p className="">rinklepoonia 471</p>
            <button
              className={`${tabs === "tab1" ? "" : ""}`}
              onClick={() => HANDLE_CLICK("tab1")}
            >
              may
            </button>
            <button
              className={`${tabs === "tab2" ? "" : ""}`}
              onClick={() => HANDLE_CLICK("tab2")}
            >
              june
            </button>
            <button
              className={`${tabs === "tab3" ? "" : ""}`}
              onClick={() => HANDLE_CLICK("tab3")}
            >
              july
            </button>
          </div>
        </div>
        {tabs === "tab1" && (
          <div className="work_data mt-5 ms-5">
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === "tab2" && (
          <div className="work_data mt-5 ms-5">
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === "tab3" && (
          <div className="work_data mt-5 ms-5">
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center pt-4 ps-4">
              <img className="max-w-300" src={img1} alt="img1" />
              <div className="d-flex flex-column">
                <div className="d-flex">
                  git hub =
                  <a
                    href="https://github.com/rinklepoonia/cv-hawk"
                    target="_blank"
                  >
                    https://github.com/rinklepoonia/cv-hawk
                  </a>
                </div>
                <div className="d-flex">
                  live-link =
                  <a target="_blank" href="https://quanticx.vercel.app/">
                    https://quanticx.vercel.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkData;
