


let isVisible = false;

const toggleVisibility = () => {
    isVisible = !isVisible;
    render();
};

const render = () => {
    const template =  (
        <div>
        <h1>Visibility Toggle</h1>

        <button id="theButton" onClick={toggleVisibility}>{isVisible ? 'Hide details' : 'Show details'}</button>
        {
            isVisible && <p>Here are some details</p>
        }
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'));
};

render();