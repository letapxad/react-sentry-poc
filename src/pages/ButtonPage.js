const ButtonPage = () => {

    function handleClick() {
        alert("button clicked!!")
    }

    return (
        <>
            <h1>Button Page</h1>
            { /* eslint-disable no-undef */ }
        <button type="button" class="btn btn-primary" onClick={handleClick}>Click me!</button>
            { /* eslint-enable no-undef */ }
        </>
    )
};

export default ButtonPage;
