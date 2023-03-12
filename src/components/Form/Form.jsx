import React, { useState } from "react";
import "./Form.scss";

const formTitle =
  "With a focus on results-driven design and cutting-edge technology, we'll help you take your online presence to the next lev".split(
    " "
  );

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [companyInfo, setCompanyInfo] = useState("");

  return (
    <div className="form" id="form">
      <div className="form__container">
        <div></div>
        <div>
          <h2 className="form__title">
            {formTitle.map((word) => {
              return <span>{word + " "} </span>;
            })}
          </h2>
          <form autoComplete="off">
            <div style={{ marginBottom: "1rem" }} className="form__field">
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr className="line" />
            </div>

            <div style={{ marginBottom: "1rem" }} className="form__field">
              <input
                type="email"
                autoComplete="off"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr className="line" />
            </div>

            <div style={{ marginBottom: "1rem" }} className="form__field">
              <input
                type="tel"
                autoComplete="off"
                name="tel"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <hr className="line" />
            </div>

            <div style={{ marginBottom: "1rem" }} className="form__field">
              <textarea
                name="companyInfo"
                autoComplete="off"
                placeholder="Message"
                value={companyInfo}
                onChange={(e) => setCompanyInfo(e.target.value)}
              ></textarea>
              <hr className="line" />
            </div>

            <button type="submit" className="form__submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
