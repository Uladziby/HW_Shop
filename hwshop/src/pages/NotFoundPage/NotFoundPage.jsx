import notfound from "../../assets/notfound.svg";
import React from 'react';
const mystyle = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flex: 1,
};

const NotFoundPage = () => {
  return (
    <div style={mystyle}>
      {notfound}
    </div>
  );
};

export default NotFoundPage;
