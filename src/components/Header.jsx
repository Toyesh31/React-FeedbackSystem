import React from "react";

function Header(props) {
  const HeaderStyle = {
    backgroundColor: props.bgColor,
    text: props.textColor,
  };
  return (
    <header style={HeaderStyle}>
      <div className="container">
        <h2>{props.text} </h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
