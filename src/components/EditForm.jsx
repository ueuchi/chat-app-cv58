// import { useState } from "react"
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

// // export default class EditForm extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       input: "",
// //       editing: true,
// //     }
// //     this.handleEditing = this.handleEditing.bind(this)
// //     this.handleSubmit = this.handleSubmit.bind(this)
// //   }
// //   render() {
// //     const { editing } = this.state
// //     return (
// //       <div>
// //           {editing ? (
// //               <button onClick={this.handleSubmit}>emoji</button>
// //           ) : (
// //             <div>
// //               <Picker style={{ position: 'absolute', top: '0px', right: '240px' }} />
// //               {/* <button onClick={this.handleEditing}>Edit</button> */}
// //             </div>
// //           )}
// //       </div>
// //     )
// //   }

// //   handleEditing(e) {
// //     e.preventDefault()
// //     this.setState({
// //       editing: !this.state.editing,
// //     })
// //   }

// //   handleSubmit(e) {
// //     e.preventDefault()
// //     this.setState({
// //       input: this.state.input,
// //       editing: !this.state.editing,
// //     })
// //   }
// // }

// const EditForm = () => {
//   const [state, setState] = useState(true)
//   const handleEditing = (e) => {
//     e.preventDefault()
//     this.setState({
//       editing: !this.state.editing,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     this.setState({
//       input: this.state.input,
//       editing: !this.state.editing,
//     })
//   }
//   // this.state = {
//   //   input: "",
//   //   editing: true,
//   // }
//   // this.handleEditing = this.handleEditing.bind(this)
//   // this.handleSubmit = this.handleSubmit.bind(this)
//   const { editing } = state
//   return (
//     <div>
//         {editing ? (
//             <button onClick={this.handleSubmit}>emoji</button>
//         ) : (
//           <div>
//             <Picker style={{ position: 'absolute', top: '0px', right: '240px' }} />
//             {/* <button onClick={this.handleEditing}>Edit</button> */}
//           </div>
//         )}
//     </div>
//   )
// }



// export default EditForm
