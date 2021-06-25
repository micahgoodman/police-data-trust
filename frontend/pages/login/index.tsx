import React, { useState } from "react"

import TextFieldInput from "../../components/textFieldInput"

export default function Login() {
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  })

  const handleFieldsInput = (e: any, key: string) => {
    setUserCreds({
      ...userCreds,
      [key]: e.target.value,
    })
  }
  return (
    <div className="Login">
      <img src="" placeholder="login logo" />
      <h1>Login</h1>
      <article className="email-container">
        <TextFieldInput
          label={"Email:"}
          placeholder={"Email"}
          type="text"
          handler={handleFieldsInput}
        />
      </article>
      <article className="password-container">
        <TextFieldInput
          label={"Password:"}
          placeholder={"Password"}
          type="password"
          handler={handleFieldsInput}
        />
      </article>
    </div>
  )
}
