import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
     return(
      <div>
        <h1>Custom MyApp!</h1>
      </div>
     )
}

// createRoot(document.getElementById('root')).render(
  
//   <StrictMode>
//     <App />
//     <MyApp />
//   </StrictMode>
// )


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://youtube.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


// const anotherElement = (  
//      <a href="https://youtube.com" target='_blank'>Visit You-Tube</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     anotherElement
// )

const reactElement = React.createElement(
   'a',
   { href: 'https://google.com', target:'_blank' },
   'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
     reactElement

)
