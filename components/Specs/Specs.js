import React from "react";

export default function Specs() {
  return (
    <div className="specs-container">
      <div className="specs">
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="calendar"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">Release Date</p>
          </span>
          <span className="specs__item--info">
            <p>October 5, 2017</p>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="user"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">No. of players</p>
          </span>
          <span className="specs__item--info">
            <div className="info-red">
                <p>Single System (1)</p>
                <p>Local wireless(1)</p>
                <p>Online(1-4)</p>
            </div>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="calendar"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">Genre</p>
          </span>
          <span className="specs__item--info">
          <div className="info-red">
                <p>Role-Playing</p>
                <p>Simulation</p>
            </div>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="building"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">Publisher</p>
          </span>
          <span className="specs__item--info">
          <div className="info-red">
                <p>ConcernedApe</p>
            </div>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="registered"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">ESRB rating</p>
          </span>
          <span className="specs__item--info">
          <div className="info-red">
                <p>Everyone 10+</p>
            </div>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="camera"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">Supported play modes</p>
          </span>
          <span className="specs__item--info">
            <p>October 5, 2017</p>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="file-blank"
              type="solid"
              color="grey"
            ></box-icon>
            <p className="specs-title">Game file size</p>
          </span>
          <span className="specs__item--info">
            <p>1.5 GB</p>
          </span>
        </div>
        <div className="specs__item">
          <span className="specs__item--title">
            <box-icon
              size="md"
              className="icon"
              name="globe"
              color="grey"
            ></box-icon>
            <p className="specs-title">Supported languages</p>
          </span>
          <span className="specs__item--info">
            <p>
              English, French, German, Italian, Japanese, Korean, Portuguese,
              Russian, Simplified Chinese, Spanish, Traditional Chinese
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
