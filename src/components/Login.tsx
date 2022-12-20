import * as React from "react"
import { useNavigate } from "react-router-dom"
//
//
import { Header } from "./index"
import { useAuth } from "../files/useAuth"
import eventNum from "../files/eventNum"

const Login: React.FC = () => {
  const [text, setText] = React.useState<String>("")
  const auth = useAuth()
  let navigate = useNavigate()
  let navOptions = {
    replace: true,
    state: "fromLogin=true?",
  }

  function handleTyping(text: string) {
    if (text === typeof String) {
    }
    setText(text)
  }

  // submits text to the backend and redirects to the correct location
  async function submitForm() {
    if (text.length === 0) {
      // no data to submit
      return
    } else {
      const input = text.toLowerCase()
      let t = document.getElementById("login-page-error-text")
      // quick checks to see if it's actually an attempt at a valid email.
      if (
        t &&
        input.includes("@", 1) &&
        input.includes(".", 1) &&
        !input.includes(" ")
      ) {
        let result = await auth.signin(input)
        if (typeof result === "string") {
          // error signing in.
          t.innerHTML = result
        } else {
          if (typeof result === "number") {
            let city = eventNum(result)
            return navigate(`/hgtour/${city}`, navOptions)
          }

          // this should never happen?
          return (t.innerHTML = "Something went wrong")
        }
      } else {
        if (t)
          t.innerHTML =
            "Please check if you entered a valid email address. Thank you."
      }
    }
  }

  React.useEffect(() => {}, [])
  return (
    <div className='login-page'>
      <Header />
      <h3 className='login-page-title'>
        Welcome, <br /> please enter your email:{" "}
      </h3>
      <form name="login"className='login-page-form'>
        <input
          placeholder='Email'
          name="email"
          className='login-page-form-text-input'
          type='text'
          onChange={(e) => {
            handleTyping(e.target.value)
          }}
          onSubmit={(e) => {
            e.preventDefault()
            submitForm()
          }}
        />
        <button
          className='login-page-form-submit-button'
          onClick={(e) => {
            e.preventDefault()
            submitForm()
          }}
          onSubmit={(e) => {
            e.preventDefault()
            submitForm()
          }}
        >
          {" "}
          Submit{" "}
        </button>
        <div className='login-page-form-error-text-container'>
          <span
            id='login-page-error-text'
            className='login-page-form-error-text-container-text'
          ></span>
        </div>
      </form>
      <img
        className='login-page-phlogo'
        src={"phlogo.png"}
        onClick={() => window.open("http://www.elephantemusic.com/")}
        alt={
          "elephante logo art that is basically a squiggly looking elephant wearing a partyhat"
        }
      />
    </div>
  )
}

export default Login
