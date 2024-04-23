
import ButtonFun from './component/MyButtonFile';
import ExampleFun from './component/Examplefile.js';

function App() {
  
  return (
    // JSX Start
    <div >
      
        <p>
          Hi I am Piyush
        </p>
       {/* three way to call imported function: <ButtonFun></ButtonFun>,  {ButtonFun},  <ButtonFun/> */}
       
       <ButtonFun text ='Read More'/> {/*text ='Read More' is like Key Value Pare */} 

       <ExampleFun />

    </div>
    // JSX End
  );
}


export default App;

// lc time 1:50
