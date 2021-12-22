import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import moment from "moment";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = [];
for (let i = 1; i < 32; i++) {
  DAYS.push(i);
}
const YEARS = [];
for (let i = 2021; i >= 1905; i--) {
  YEARS.push(i);
}

const SignupForm = ({ errors, signup, closeModal }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [month, setMonth] = useState("Jan");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2021");
  const [gender, setGender] = useState();

  const [ageError, setAgeError] = useState(true);
  const [changedAge, setChangedAge] = useState(false);

  
  
  const navigate = useNavigate();

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setChangedAge(true);
      checkAge();
    }
  }, [month, day, year]);

  const submit = async (e) => {
    e.preventDefault();
    if (!changedAge) {
      setChangedAge(true);
      return;
    }
    if (ageError) return;
    const user = {
      user: {
        fname,
        lname,
        email,
        password,
        birthday: `${month} ${day} ${year}`,
        gender,
      },
    };
    const response = await signup(user);
    if (response.type !== 'RECEIVE_SIGNUP_ERRORS') {
      closeModal();
      navigate('/');
    }
  };

  const checkAge = () => {
    const birthday = moment(`${month}-${day}-${year}`, "MMM-D-YYYY");
    const now = moment();
    if (now.diff(birthday, "years") >= 13) {
      setAgeError(false);
      return;
    }
    setAgeError(true);
  };

  const setName = (setter) => (e) => {
    let value = e.target.value;
    if (value.length < 1) return setter("");
    value = value[0].toUpperCase() + value.substr(1);
    setter(value);
  };

  const setBirthDate = (setter) => (e) => {
    setChangedAge(true);
    setter(e.target.value);
  };

  return (
    <>
      <div className="signup-header">
        <h3>Sign Up</h3>
        <i onClick={closeModal} className="fas fa-times close-signup-page" />
        <p>It's quick and easy.</p>
      </div>

      <form className="signup-form" onSubmit={submit}>
        <div className="name-inputs">
          <input
            autoFocus
            required
            className="signup-fname"
            type="text"
            placeholder="First name"
            value={fname}
            onChange={setName(setFname)}
          />

          <input
            required
            className="signup-lname"
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={setName(setLname)}
          />
        </div>

        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="birthday">
          {ageError && changedAge && (
            <p className="signup-error">
              {"You must be at least 13 years old to sign up."}
            </p>
          )}
          <label htmlFor="months">Birthday</label>
          <div className="birthday-inputs">
            <select id="months" value={month} onChange={setBirthDate(setMonth)}>
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select value={day} onChange={setBirthDate(setDay)}>
              {DAYS.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select value={year} onChange={setBirthDate(setYear)}>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="gender">
          <label className="general-gender-label">Gender</label>
          <div className="gender-inputs">
            <label className="gender-label">
              Female
              <input
                type="radio"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Female"}
              />
            </label>
            <label className="gender-label">
              Male
              <input
                type="radio"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Male"}
              />
            </label>
            <label className="gender-label">
              Custom
              <input
                type="radio"
                value="Custom"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Custom"}
              />
            </label>
          </div>
        </div>

        <p className="disclaimer">
          By clicking Sign Up, you agree to absolutely no policies whatsoever.
          You will not receive any emails because this is not a real social
          network!
        </p>

        {errors.response && (Array.isArray(errors.response.data)) &&
          errors.response.data.map((error, idx) => (
            <p className="signup-error" key={idx}>
              {error}
            </p>
          ))}

        <button className="signup-button">Sign Up</button>
      </form>
    </>
  );
};

SignupForm.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  signup: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignupForm;