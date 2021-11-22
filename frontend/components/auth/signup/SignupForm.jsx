import React, { useState } from 'react'

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = [];
for (let i = 1; i < 32; i++) {
  DAYS.push(i);
}
const YEARS = [];
for (let i = 2021; i >=1905; i--) {
  YEARS.push(i);
}



const SignupForm = ({errors, signup}) => {
  const [month, setMonth] = useState("Jan");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2021");
  const [gender, setGender] = useState();
  
  return (
    <div className="signup-form">
      <span>
        <input className="signup-fname" type="text" placeholder="First name"/>
      </span>
        <input className="signup-lname" type="text" placeholder="Last name"/>

      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="New password"/>

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
    </div>
  )
}

export default SignupForm;