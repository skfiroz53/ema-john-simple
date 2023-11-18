// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className = "App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App


         //-------------------- structure copy

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
         <Header></Header>
         <Shop></Shop>
    </div>
  )
}

export default App












  // --------------------pactice start------------------------

//    import { useState } from 'react'
//    import './App.css'
//    import Header from './Components/Header/Header'
   
   
//    function App() {
//      const [count, setCount] = useState(0)
   
//      return (
//        <div className = "App">
//             <Header></Header>
//        </div>
//      )
//    }
   
//  export default App           
