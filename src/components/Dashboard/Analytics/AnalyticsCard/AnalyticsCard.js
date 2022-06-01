import { faChartLine, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const AnalyticsCard = () => {
  return (
    <div className="container mx-auto row grid  gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ">
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
                    className=" text-success h-8 align-middle p-8"
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
                    className=" text-success h-8 align-middle p-8"
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
                    className=" text-success h-8 align-middle p-8"
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
                    className=" text-success h-8 align-middle p-8"
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
