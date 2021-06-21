import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "english" : "nether";
    return (
      <div className="ui field">
        <label>Name </label>
        <input value={text} />
      </div>
    );
  }
}

export default Field;
