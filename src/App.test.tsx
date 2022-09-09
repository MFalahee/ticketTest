import React from "react"
import { render, screen } from "@testing-library/react"
import {} from './components/index';
import App from "./App"

test("renders the app correctly", () => {
  render(<App />)
  const welcomeText = screen.getByText(/heavy glow/i)
  expect(welcomeText).toBeInTheDocument()
})

test("renders the header correctly", () => {
})

test("renders the ticket section correctly", () => {})

test("renders the accordion properly", () => {})

test("renders the footer properly", () => {})
