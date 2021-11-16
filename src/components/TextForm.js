import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = function () {
    // console.log("Upper case was clicked" + text);
    let newtext = text.toUpperCase();
    // let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Upper case", "success");
  };
  const handledownClick = function () {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };
  const clear = function () {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text has been cleared", "success");
  };
  const handlecopy = function () {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };
  const handleextraspace = function () {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  //handle on change function gives you to ability to write on textform
  const handleonchange = function (e) {
    // console.log("onchange");
    setText(e.target.value);
  };
  // text="new text"//wrong way to change text
  // setText("new text");//correct way to change text

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleonchange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#3a5d89" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-1 "
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handledownClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlecopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleextraspace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charecters
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          min read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
