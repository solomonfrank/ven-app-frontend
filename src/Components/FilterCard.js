import React from "react";

const FilterListCard = (props) => {
  const { result, filterByParams } = props;
  return (
    <div class="row mb-4" onClick={() => filterByParams(result)}>
      <div class="col-sm-12">
        <div class="card card-ls">
          <div class="card-body">
            <h5 class="card-title text-center">
              {result.start_year}-{result.end_year}
            </h5>
            <p class="card-text text-center">
              {" "}
              {result.gender ? result.gender : "Not specified"}
              <div>{CountryList(result.countries)}</div>
              <div>{ColorList(result.colors)}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountryList = (props) => {
  if (props.length) {
    return props.map((c) => (
      <span class="badge badge-secondary mr-2">{c}</span>
    ));
  } else {
    return "Country unavailable";
  }
};

export const ColorList = (props) => {
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
  if (props.length) {
    return props.map((c) => (
      <span className="mr-2 mt-2" style={backgroundColor(c)}></span>
    ));
  } else {
    return "Color unavaible";
  }
};
export default FilterListCard;
