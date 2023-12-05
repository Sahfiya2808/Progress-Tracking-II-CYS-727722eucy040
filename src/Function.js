function Function()
{
    return <Greeting name="Violet Evargarden"/>
}
function Greeting(props)
{
    return(
        <h3>Hello Everynyan,{props.name}!Nice to meet you!</h3>
    );
}
export default Function;