import React from "react";

const Addmodel = ({
  addmodel,
  setaddmodel,
  princessInput,
  setprincessInput,
  Addprincess,

  setprincessimage,
}) => {
  return (
    <div className={`add-hide ${addmodel ? "add-show" : ""}`}>
      <div className="add-section">
        <div className="add-border">
          <div className="add-main">
            <h3>Add Your Princess</h3>
            <input
              type="text"
              placeholder=" Name"
              className="addActress-name"
              onChange={(e) => setprincessInput(e.target.value)}
              value={princessInput}
            />
            <input
              type="file"
              className="addActress-image"
              onChange={(e) => setprincessimage(e.target.files[0])}
            />
            <div className="add-btn">
              <button className="add" onClick={() => Addprincess()}>
                Import Princess
              </button>
              <button className="cancel" onClick={() => setaddmodel(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addmodel;
