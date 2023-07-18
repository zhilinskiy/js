function Section(props) {
    const user = 'Ira';
    const today = new Date();
    let counter = 0;
    const clicker = () => console.log('Click');

    return (
        <section>
            <div>
                <h1>Hello, {user}</h1>
                <p>Today is {today.toDateString()}</p>
                <p onClick={clicker}>Click me. My count is {counter}</p>
                <p>{props.greet}</p>
            </div>
        </section>
    );
}

export default Section;