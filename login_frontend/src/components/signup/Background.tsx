import React from "react";
import InputBox from "./Input";

const BackgroundForm = () => {
  return (
    <>
      <div className="wrapper">
        <div className="backgroundForm">
          <p className="backgroundForm-ment">
            스터디 관리 어플의 회원이 되어주세요!
          </p>
          <h1 className="backgroundForm-signup">회원가입</h1>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundForm;
