import React from "react"
import { BrowserRouter} from "react-router-dom"
import Router from "./router"
export function App() {

  return (
    <BrowserRouter>
    <div className="bg-background">
      <Router/>
    </div>
    </BrowserRouter>
  )
}

