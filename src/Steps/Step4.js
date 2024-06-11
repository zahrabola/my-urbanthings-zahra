import React from "react";
import moment from "moment";

const Step4 = ({ state }) => {
  return (
    <div>
      <h2>Review Form</h2>
      <hr />
      <p>
        Name: {state.fname ? `${state.fname}` : <span> No Name input </span>}{" "}
       
      </p>
<p> Last Name : {state.lname ? `${state.lname}` : <span> No Last Name input </span>}</p>
      <p>
        {" "}
        Email: {state.email ?  `${state.email}` : <span> No email input</span>}{" "}
      </p>
      <p> Start Date: {moment(state.startDate).format("DD-MM-YYYY")}</p>
      <p>End Date: {moment(state.endDate).format("DD-MM-YYYY")}</p>
      <p>
        Price: Adult £ {state.price ? `${state.price}` : <span>No Adult Price </span>}, Child £ {state.childprice ? `${state.childprice}` : <span> No Child Price </span>}
      </p>
      <p>Currency: {state.currency}</p>
      <p>Ticket Option :{state.name ? `${state.name}` : <span>No Day, Week or Month Selected </span>}</p>

      <p>Status : {state.isStatus ? "Published" : "Unpublished"}</p>
      <p>
        Ticket Activity: Adult - {state.activationType ? `${state.activationType}` : <span> No Adult Activation </span>} , Child -
        {state.activationTypeChild ? `${state.activationTypeChild}` : <span> No Child Activation </span>} 
      </p>
    </div>
  );
};

export default Step4;
