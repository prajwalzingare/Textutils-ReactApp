import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase(); //it will make string to lowercase
    return lower.charAt(0).toUpperCase() + lower.slice(1); //then 1 cahr of lowercase converted to uppercase and slice is used to return extracted part of stringss
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
//props.alert is null at begining so it is not going to run the code it show null value. But then we have to add some condition that is "AND" operator &&
