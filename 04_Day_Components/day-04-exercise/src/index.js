// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import js_logo from './images/js_logo.png'
import react_logo from './images/react_logo.png'
// To get the root element from the HTML document

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Nathaniel',
  lastName: 'Dehinbo',
}
const date = 'Oct 6, 2023'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const nath2 = (
  <div class= 'column'>
    <img src={html_logo} alt='nath' />
  </div>
)

const nath3= (
  <div class= 'column'>
    <img src={css_logo} alt='nath' />
  </div>
)

const nath4 = (
  <div class= 'column'>
    <img src={js_logo} alt='nath' />
  </div>
)

const nath5 = (
  <div class= 'column'> 
    <img src={react_logo} alt='nath' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {nath2}
    {nath3}
    {nath4}
    {nath5}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)