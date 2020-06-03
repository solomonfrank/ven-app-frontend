import React from "react";

const PaginationPage = (props) => {
  const clas = `page-item ${props.isDisabled}`;
  const tpl = (
    <li className={clas}>
      <a className="page-link" href="javascript:void(0)" tabindex="-1">
        {props.buttonLabel}
      </a>
    </li>
  );
  return tpl;
};

PaginationPage.defaultProps = {
  isDisabled: false,
  buttonLabel: "-",
};

export default PaginationPage;
