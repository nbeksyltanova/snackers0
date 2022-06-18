import React from "react";
import Purchase from "../conponents/Purchase";
const PurchasePages = ({ user }) => {
  return (
    <div>
      <Purchase user={user} />
    </div>
  );
};

export default PurchasePages;
