import React, {useEffect, useState} from 'react'

export default function TexForm(props) {
    
    const handleOnUpClick = () => {
        // console.log('Uppercase was clicked'+ text);
        const newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleOnLoClick = () => {
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "Success");
    };
    const handleOnClClick = () => {
      setText("");
      props.showAlert("Cleared the text", "Success");
    };
    const handleOnChange= (event) => {
        // console.log("On Click");
        setText(event.target.value);
    }
    const onChangeTime= () => {
        let ti =
          (text.split(" ").length - (text.split(" ")[text.split(" ").length - 1] === "" ? 1 : 0)) *
          60 *
          0.0032;
        console.log("Changing the time");
        ti=Math.round(ti);
        const timeMin=Math.round(ti/60);
        const timeSec=ti%60;
        const updatedTime = `${timeMin} Minutes ${timeSec} Seconds`;
        showTime(updatedTime);
    }

    const [text, setText] = useState("Here goes your text");
    const [time, showTime] = useState("0 Minutes 0 Seconds")
  return (
    <>
      <div>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            Here goes your text...
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnClClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1 className="my-3">Your text summary</h1>
        <p className="my-2">
          {text.split(" ").length - (text.split(" ")[text.split(" ").length - 1] === "") } words, {text.length}{" "}
          characters
          <br />
          Time taken to read the text:
          <br />
          {useEffect(() => {
            onChangeTime();
          })}
          {time}
        </p>
        <br />
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
