import React, { useState } from "react";
import "./home.css";
const Home = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const handleChand = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(file);
  };
  return (
    <>
      <div className="uploadSection">
        <div className="input">
          <label>File name :</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Upload file : </label>
          <input type="file" onChange={handleChand} />
        </div>

        <button onClick={handleSubmit}>submit</button>
      </div>
      <div className="uploadSecion"></div>
    </>
  );
};

export default Home;
