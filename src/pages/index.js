import React from "react"
import "../components/App.css"
import HeroImage from "../components/HeroImage"
import Header from "../components/Header"
import Project from "../components/Project"
import About from "../components/About"
import projects from "../components/projects.js"

const IndexPage = () => {
  return (
    <>
      <Header />
      <div className="hero-image-container">
        <HeroImage />
      </div>
      <div className="section" id="projects">
        <h1 id="projects">PROJECTS</h1>
        <hr />
        <section className="projects-container">
          <Project project={projects[0]} />
          <Project project={projects[1]} />
          <Project project={projects[2]} />
          <Project project={projects[3]} />
          <Project project={projects[4]} />
          <Project project={projects[5]} />
        </section>
      </div>
      <About />
    </>
  )
}

export default IndexPage
