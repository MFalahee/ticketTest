import * as React from "react"
import { Header } from "./index"

const Login: React.FC = () => {
  const [text, setText] = React.useState<String>("")
  function handleTyping(text: string) {
    if (text === typeof String) {
    }
    setText(text)
  }

  function submitForm() {
    console.log("submit fired")
    if (text.length === 0) {
      return

      //   check if the email is valid and in the database.
      //   redirect to the correct page with proper credentials

      //   each concert has own id -- own key
    }
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault()
    submitForm()
  }
  return (
    <div className='login-page'>
      <Header />
      <h3 className='login-page-title'>
        Welcome, <br /> please enter your email:{" "}
      </h3>
      <form className='login-page-form'>
        <input
          placeholder='tim@iamtheelephante.com'
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
      </form>
      <img
        className='login-page-phlogo'
        src={"phlogo.png"}
        onClick={() => window.open("http://www.elephantemusic.com/")}
        alt={
          "elephante logo art that is basically a squiggly looking elephant wearing a partyhat - the dev"
        }
      />
    </div>
  )
}

export default Login
