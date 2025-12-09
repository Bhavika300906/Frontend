import { Component } from "react";
import FuncComp from "./FuncComp";

class ClassCompo extends Component {
    render() {
        return (
            <div>  <h1>RCC- React Class Component</h1>
                <FuncComp />
            </div>

        )
    }
}

export default ClassCompo;

//  RCC- React Class Component
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         RCC- React Class Component
//       </div>
//     )
//   }
// }

// RCE- React Class Exported Component
// import React, { Component } from 'react'

// export class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//         RCE- React Class Exported Component
//       </div>
//     )
//   }
// }

// export default ClassCompo
