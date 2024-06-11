import React from "react";
import moment from "moment";

const Step4 = ({ state }) => {
  return (
    <div>
      <h2>Review Form</h2>
      <hr />
      <p>
        {" "}
        Name: {state.fname} {state.lname}{" "}
      </p>
      <p> Email: {state.email} </p>
      <p> Start Date: {moment(state.startDate).format("DD-MM-YYYY")}</p>
      <p>End Date: {moment(state.endDate).format("DD-MM-YYYY")}</p>
      <p>
        Price: Adult £{state.price}, Child £{state.childprice}
      </p>
      <p>Currency: {state.currency}</p>
      <p>Ticket Option : {state.name} </p>

      <p>Status : {state.isStatus ? "Published" : "Unpublished"}</p>
      <p>
        Ticket Activity: Adult - {state.activationType} , Child -
        {state.activationTypeChild}
      </p>
    </div>
  );
};

export default Step4;
