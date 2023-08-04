import React from "react";
import javmost from "./img/javmost.jpg";
import pornhub from "./img/Pornhub.png";
import missAv from "./img/missAv.jpg";
import xham from "./img/xHamster.png";
import xvideo from "./img/XVideos.png";
import SpankBang from "./img/SpankBang.jpg";
const PrincessModel = ({
  pmodel,
  setpmodel,
  princessName,
  deletePrincess,
  princessid,
  copy,
  setcopy,
}) => {
  const copyactressname = () => {
    navigator.clipboard.writeText(princessName);
    setcopy(true);
  };

  const closemodel = () => {
    setpmodel(false);
    setcopy(false);
  };
  return (
    <div className={`pm-hide ${pmodel ? "pm-show" : ""}`}>
      <div className="pm-section">
        <div className="pm-border">
          <div className="pm-main">
            <div className="pm-title">
              <h4>{princessName}</h4>
              <p onClick={() => closemodel()}>Close</p>
            </div>
            <div className="pm-imglist">
              <a
                href={`https://missav.com/en/search/${princessName}/`}
                target="_blank"
              >
                {" "}
                <img src={missAv} alt="" />
              </a>
              <a
                href={`https://www5.javmost.com/search/${princessName}/`}
                target="_blank"
              >
                <img src={javmost} alt="" />
              </a>
              <a
                href={`https://www.pornhub.com/video/search?search=${princessName}`}
                target="_blank"
              >
                {" "}
                <img src={pornhub} alt="" />
              </a>

              <a
                href={`https://megaxh.com/search/${princessName}`}
                target="_blank"
              >
                {" "}
                <img src={xham} alt="" />
              </a>
              <a
                href={`https://www.xvideos2.com/?k=${princessName}`}
                target="_blank"
              >
                {" "}
                <img src={xvideo} alt="" />
              </a>
              <a
                href={`https://spankbang.com/s/${princessName}/`}
                target="_blank"
              >
                {" "}
                <img src={SpankBang} alt="" />
              </a>
            </div>
            <div className="pm-btn">
              <button className="copy" onClick={() => copyactressname()}>
                Copy Name
              </button>
              <button
                className="delete"
                onClick={() => deletePrincess(princessid)}
              >
                Delete Princess
              </button>
            </div>

            <h3
              style={{
                display: `${copy ? "block" : "none"}`,
                color: "#52b740",
                border: "2px solid #52b740",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "50px",
              }}
            >
              Actress name copy on clipboard
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincessModel;
