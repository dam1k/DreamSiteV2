import React, { useState, useLayoutEffect, useRef } from "react";
import "./Form.scss";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const formTitle =
  "With a focus on results-driven design and cutting-edge technology, we'll help you take your online presence to the next lev".split(
    " "
  );

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [companyInfo, setCompanyInfo] = useState("");
  const navigate = useNavigate();

  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".form__title div", {
        y: "100%",
        ease: "power4.out",
        duration: 1.2,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".form__title",
          // markers: true,
          start: "bottom 90%",
        },
      });
      gsap.from(".line--form", {
        width: "0%",
        ease: "power4.out",
        // delay: -0.5,
        duration: 3,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".line--form",
          // markers: true,
          start: "bottom 90%",
        },
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="form" id="form">
      <div className="form__container">
        <div></div>
        <div>
          <h2 className="form__subtitle overflow">
            <div>BRIFIENG</div>
          </h2>
          <div className="form__text">
            <div className="form__title">
              {formTitle.map((word, index) => {
                return (
                  <h2 className="overflow">
                    <div key={index}>{word}</div>
                  </h2>
                );
              })}
            </div>
          </div>
          <form
            autoComplete="off"
            action="https://formsubmit.co/dream.site.md1@gmail.com"
            method="POST"
            onSubmit={() => navigate("/")}
          >
            <div style={{ marginBottom: "1rem" }} className="form__field">
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr className="line line--form" />
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
              <hr className="line line--form" />
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
              <hr className="line line--form" />
            </div>

            <div style={{ marginBottom: "1rem" }} className="form__field">
              <textarea
                name="companyInfo"
                autoComplete="off"
                placeholder="Message"
                value={companyInfo}
                onChange={(e) => setCompanyInfo(e.target.value)}
              ></textarea>
              <hr className="line line--form" />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://dreamsite.md"
            ></input>
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
