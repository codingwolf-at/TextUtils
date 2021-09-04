import { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("Enter text here");

  const textAreaHandler = (event) => {
    setText(event.target.value)
  }

  const upperCaseHandler = () => {
    setText(text => text.toUpperCase())
  }

  const lowerCaseHandler = () => {
    setText(text => text.toLowerCase())
  }

  const reverseTextHandler = () => {
    setText(text => text.split("").reverse().join(""))
  }

  const removeSpaceHandler = () => {
    setText(text => text.split(/[ ]+/).join(" "))
  }

  const clearTextHandler = () => {
    setText("");
  }

  return (
    <>
      <div className="container">
        <h2 className="my-3 display-6">Enter you text below</h2>
        <div className="mb-3">
          <textarea className="form-control mb-4" id="inputBox" rows="3" value={text} onChange={textAreaHandler}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upperCaseHandler}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={reverseTextHandler}>Reverse whole text</button>
        <button className="btn btn-primary mx-2" onClick={removeSpaceHandler}>Remove extra space</button>
        <button className="btn btn-primary mx-2" onClick={clearTextHandler}>Clear Text</button>
      </div>
      <div className="container">
        <h2 className="my-3 display-6">Your text summary: </h2>
        <p>{text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * (text.trim().split(" ").length)} minutes read</p>
      </div>
    </>
  )
}

export default TextForm;