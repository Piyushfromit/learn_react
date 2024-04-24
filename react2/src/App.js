
import ButtonFun from './component/MyButtonFile';
import ExampleFun from './component/Examplefile.js';

import MyAvtarFun from './component/Avtar.js';

// const squareArr = [1, 2, 3, 4, 5].map((i) => <li> {i * 2} </li>);

const squareArr = [1, 2, 3, 4, 5].map((i, index) => <li key={index}> {i * 2} </li>);

const users = [
  {
    id: 1,
    name: "Bittu Profile",
    src: "https://picsum.photos/200/300",
    rounded: true
  },
  {
    id: 2,
    name: "Deepak Profile",
    src: "https://picsum.photos/200/300",
    rounded: false
  },
  {
    id: 3,
    name: "Harshit Profile",
    src: "https://picsum.photos/200/300",
    rounded: true
  }
];
const userAvtar = users.map((user) =>
  <MyAvtarFun
    key={user.id}
    name={user.name}
    src={user.src}
    rounded={user.rounded}
  />);


function App() {

  return (
    // JSX Start
    <div >

      <p>
        Hi I am Piyush
      </p>
      {/* three way to call imported function: <ButtonFun></ButtonFun>,  {ButtonFun},  <ButtonFun/> */}

      <ButtonFun text='Read More' handleClick= {() => alert ('Button Clicked')}/> {/*text ='Read More' is like Key Value Pare */}

      <ExampleFun />

      <ul>{squareArr}</ul>

      <ul>{userAvtar}</ul>




    </div>
    // JSX End
  );
}


export default App;

// lc time 1:50
