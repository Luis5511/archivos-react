export function Greeting({title, name= "beta"}) {
    console.log(title, name);
return <>
    <h1>{title} dice {name}</h1>
</>}

export function Usercard(props,greet) {
    console.log(props);
    return (<div>
        <h1>{props.Name}</h1>
        <p>${props.Amount}</p>
        <p>{props.Married ? 'married': 'single'}</p>
        <ul>
            <li>City:{props.Address.city}</li>
            <li>Address:{props.Address.street}</li>
        </ul>
    </div>
    );
}