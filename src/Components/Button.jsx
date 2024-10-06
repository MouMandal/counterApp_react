function Button({ handle ,deHandle}) {
    return (
        <>
            <button type="button" className="btn btn-outline-success" onClick={handle}>Increment</button>
            <button type="button" className="btn btn-outline-danger" onClick={deHandle}>Decrement</button>
        </>
    )
}
export default Button;