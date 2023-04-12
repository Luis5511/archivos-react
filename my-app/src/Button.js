export function Button({text}) {
    console.log(text);
    return <button onClick={function() {
        console.log('hola mundo')
    }}>
        {text}
    </button>
}
  
