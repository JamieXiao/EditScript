import React, { useState, useEffect } from 'react'

function App() {
  const [pizza, setPizza] = useState('');
  // make an API request to backend
  const fetchPizza = () => {
    fetch("/pizza")
      .then((res) => {
        return res.json(); // jsonify the response
      }).then(data => { // data is the response
        console.log(data)
        setPizza(data.response)
      })
  }

  const fetchBurger = () => {
    fetch("/burger")
      .then((res) => {
        return res.json(); // jsonify the response
      }).then(data => { // data is the response
        console.log(data)
        setPizza(data.response)
      })
  }

  const fetchStuff = () => {
    fetchPizza();
    fetchBurger();
  }

  useEffect(() => {
    fetchStuff();
  }); // [] will run this func before everything else

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {pizza}
        </p>
      </header>
    </div>
  );
}

// function App() {

//   const [data, setData] = useState([{}]);

//   const fetchData = () => {
//     fetch("http://127.0.0.1:5000/members")
//       .then((res) => {
//         return res.json(); // jsonify the response
//       }).then(data => {
//         console.log(data)
//         setData(data.response)
//       })
//   }

//   const fetchStuff = () => {
//     fetchData();
//   }

//   useEffect(() => {
//     fetchStuff();
//   }); // [] will run this func b4 everything else

//   // useEffect(() => {
//   //   fetch("/members").then(
//   //     res => res.json()
//   //   ).then(
//   //     data => {
//   //       setData(data)
//   //       console.log(data)
//   //     }
//   //   )
//   // }, []) // square brackets fetch once

//   return (
//     <div>
//       {(typeof data.members === "undefined") ? (
//         <p>Loading...</p>
//       ) : (
//         data.members.map((member, i) => (
//           <p key={i}>{member}</p>
//         ))
//       )}
//     </div>
//   )
// }

export default App;