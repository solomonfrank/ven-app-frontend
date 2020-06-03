import React from "react";
import { ColorList } from "./FilterCard";

const FoundResult = (props) => {
  const { result } = props;

  const backgroundColor = (color) => {
    const style = {
      backgroundColor: `${color}`,
      borderRadius: 100,
      width: 20,
      height: 20,
      display: "inline-block",
    };

    return style;
  };
  return (
    <div class="row mb-4">
      <div class="col-sm-12">
        <div class="card card-res">
          <div class="card-body">
            <div class="media media-cd">
              <div class="align-self-center round-danger">
                <img
                  src="../../assets/images/img2.jpg"
                  width="250"
                  height="150"
                />
              </div>
              <div
                class="media-body"
                style={{ padding: "5px", marginLeft: "10px" }}
              >
                <h5 class="mt-0">
                  {result.first_name} {result.last_name}{" "}
                </h5>
                <div className="item-prop">
                  <div className="brand">
                    <p className="mr-2 title-text"> Brand</p>
                    <p className="mr-2 title-val"> {result.car_model}</p>
                  </div>

                  <div class="vl"></div>

                  <div className="brand">
                    <p className="mr-2 title-text"> Year</p>
                    <p className="mr-2 title-val"> {result.car_model_year}</p>
                  </div>
                  <div class="vl"></div>
                  <div className="brand">
                    <p className="mr-2 title-text"> color</p>

                    <span
                      className="mr-2"
                      style={backgroundColor(result.car_color)}
                    ></span>
                  </div>
                </div>

                <div className="item-prop">
                  <div className="brand">
                    <p className="mr-2 title-text"> Country</p>
                    <p className="mr-2 title-val title-val-upper">
                      {result.country}
                    </p>
                  </div>

                  <div className="brand">
                    <p className="mr-2 title-text"> Gender</p>
                    <p className="mr-2 title-val title-val-upper">
                      {" "}
                      {result.gender}
                    </p>
                  </div>

                  <div className="brand">
                    <p className="mr-2 title-text"> Job</p>
                    <p className="mr-2 title-val title-val-upper">
                      {result.job_title}
                    </p>
                  </div>
                </div>

                <div className="item-prop">
                  <h6>
                    Email: <span className="title-val">{result.email}</span>
                  </h6>
                </div>
                <div className="item-prop">
                  <h6>
                    Bio: <span className="title-val">{result.bio}</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundResult;
