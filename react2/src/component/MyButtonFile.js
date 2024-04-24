
function MyButton(prop) {
       const { text , handleClick } = prop;

      
       return (
              <button onClick={handleClick} >{text}</button>
       );
       // same as button.addEventListener("click", handleClick);

}

export default MyButton;