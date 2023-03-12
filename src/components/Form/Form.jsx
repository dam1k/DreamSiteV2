import React, {useState} from 'react'
import "./Form.scss";

const formTitle = "With a focus on results-driven design and cutting-edge technology, we'll help you take your online presence to the next lev".split(" ");

const Form = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [number, setNumber] = useState('');
     const [companyInfo, setCompanyInfo] = useState('');

  return (
    <div className="form" id="form">
     <div className="form__container">
          <h2 className="form__title">
               {formTitle.map((word) => {
                    return <span>{word + ' '} </span>
               })}
          </h2>
          <form>
               <div style={{marginBottom: '1rem'}} className="form__field">
               <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
               <hr className="line"/>
               </div>

               <div style={{marginBottom: '1rem'}} className="form__field">
               <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
               <hr className="line"/>
               </div>

               <div style={{marginBottom: '1rem'}} className="form__field">
               <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
               <hr className="line"/>
               </div>

               <div style={{marginBottom: '1rem'}} className="form__field">
               <input type="text" name="companyInfo" value={companyInfo} onChange={(e) => setCompanyInfo(e.target.value)}/>
               <hr className="line"/>
               </div>

               <button type="submit" className="form__submit">Send</button>
          </form>
     </div>
     </div>
  )
}

export default Form