import React, { useState } from 'react';
import moment from 'moment';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = [];
for (let i = 1; i < 32; i++) {
  DAYS.push(i);
}
const YEARS = [];
for (let i = 2021; i >=1905; i--) {
  YEARS.push(i);
}



const SignupForm = ({errors, signup, closeModal}) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("Jan");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2021");
  const [gender, setGender] = useState();

  const submit = e => {
    e.preventDefault();
    if (tooYoung()) return;
    const user = {
      user: {
        fname,
        lname,
        email,
        password,
        birthday: `${month} ${day} ${year}`,
        gender
      }
    }
    signup(user);
  }

  const tooYoung = () => {
    const birthday = moment(`${month} ${day} ${year}`);
    const now = moment();
    return now.diff(birthday, 'years') <= 13;
  }

  const setName = setter => e => {
    let value = e.target.value;
    if (value.length < 1) return setter("")
    value = value[0].toUpperCase() + value.substr(1).toLowerCase();
    setter(value)
  }
  
  return (
    <>
      <div className="signup-header">
        <h3>Sign Up</h3>
        <i onClick={closeModal} className="fas fa-times close-signup-page" />
        <p>It's quick and easy.</p>
      </div>

      <form className="signup-form" onSubmit={submit}>
        <input required className="signup-fname" type="text" placeholder="First name" value={fname} onChange={setName(setFname)}/>
        <input required className="signup-lname" type="text" placeholder="Last name" value={lname} onChange={setName(setLname)}/>

        <input required type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input required type="password" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)}/>

        <label htmlFor="months">Birthday</label>
        <select id="months" value={month} onChange={e => setMonth(e.target.value)}>
          {MONTHS.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <select value={day} onChange={e => setDay(e.target.value)}>
          {DAYS.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <select value={year} onChange={e => setYear(e.target.value)}>
          {YEARS.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <label className="general-gender-label">Gender</label>
        <label className="gender-label">
          Female
          <input type="radio" value="Female" onChange={e => setGender(e.target.value)} checked={gender === "Female"} />
        </label>
        <label className="gender-label">
          Male
          <input type="radio" value="Male" onChange={e => setGender(e.target.value)} checked={gender === "Male"} />
        </label>
        <label className="gender-label">
          Custom
          <input type="radio" value="Custom" onChange={e => setGender(e.target.value)} checked={gender === "Custom"} />
        </label>
        
        <p className="disclaimer">By clicking Sign Up, you agree to absolutely no policies whatsoever. You will not receive any emails because this is not a real social network!</p>

        <button className="signup-button">Sign Up</button>
      </form>
    </>
    
  )
}

export default SignupForm;