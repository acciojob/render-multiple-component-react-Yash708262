import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

   const projects = [
    {
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce website with user authentication, product catalog, shopping cart, and payment integration."
    },
    {
      name: "Task Management App", 
      description: "A productivity app for managing tasks with drag-and-drop functionality, reminders, and team collaboration."
    },
    {
      name: "Weather Dashboard",
      description: "A real-time weather application with location-based forecasts, interactive maps, and weather alerts."
    }
  ];
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project,index)=> (
        <div key={index}>
           <h1 data-ns-test="project-name">{project.name}</h1>
      <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      )
      )}
    </div>
  )
}


export default App;
