import {
    faBriefcase,
  faChartLine,
  faClock,
  faUserGroup,
  faWaveSquare,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AnalyticsCard = () => {
  return (
    <div className="container mx-auto row grid  gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      <div className="cols-md-6 cols-lg-3">
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="row flex justify-center">
              <div className="col text-left">
                <p>Sessions</p>
                <h1 className="my-2">24k</h1>
                <p>
                  <span className="mr-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className=" text-success inline-block mr-2"
                    ></FontAwesomeIcon>
                    8.5%
                  </span>
                  New Sessions Today
                </p>
              </div>
              <div className="col-auto align-center">
                <p>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className=" text-success h-6 align-middle p-8"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cols-md-6 cols-lg-3">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="row flex justify-center">
              <div className="col text-left">
                <p>Avg.Sessions</p>
                <h1 className="my-2">00:18</h1>
                <p>
                  <span className="mr-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className=" text-success inline-block mr-2"
                    ></FontAwesomeIcon>
                    1.5%
                  </span>
                  Weekly Avg.Sessions
                </p>
              </div>
              <div className="col-auto align-center">
                <p>
                  <FontAwesomeIcon
                    icon={faClock}
                    className=" text-success h-6 align-middle p-8"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cols-md-6 cols-lg-3">
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="row flex justify-center">
              <div className="col text-left">
                <p>Bounce Rate</p>
                <h1 className="my-2">$2400</h1>
                <p>
                  <span className="mr-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className=" text-warning inline-block mr-2"
                    ></FontAwesomeIcon>
                    35%
                  </span>
                  Bounce Rate Weekly
                </p>
              </div>
              <div className="col-auto align-center">
                <p>
                  <FontAwesomeIcon
                    icon={faWaveSquare}
                    className=" text-success h-6 align-middle p-8"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cols-md-6 cols-lg-3">
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="row flex justify-center">
              <div className="col text-left">
                <p>Goal Completions</p>
                <h1 className="my-2">85000</h1>
                <p>
                  <span className="mr-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className=" text-success inline-block mr-2"
                    ></FontAwesomeIcon>
                    9.5%
                  </span>
                  Completions Weekly
                </p>
              </div>
              <div className="col-auto align-center">
                <p>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className=" text-success h-6 align-middle p-8"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
