console.log(React);/*entry point to React*/
console.log(ReactDOM);/*virtual DOM helper*/

//native js + html
const htmlInput = document.createElement('input');
htmlInput.placeholder = 'html input';
console.dir(htmlInput);
const root = document.querySelector('#native-js-root');
root.append(htmlInput);

//react input
const reactInput = React.createElement('input', {placeholder: "react input"});
const reactRoot = document.querySelector('#react-root');
ReactDOM.render(reactInput, reactRoot);
const reactRoot2 = document.querySelector('#react-root2');
ReactDOM.render(card(), reactRoot2);

//function example
function card() {
    const userObj = {
        name: "Ira"
    }
    const h2 = React.createElement('h2', {title: "I am user"}, userObj.name);
    /*JSX example*/
    //const h2 = <h2 title="I am user">{userObj.name}</h2>;

    return React.createElement('article', {}, h2);
}