function renderElement(element, container){
    
    /*let newElement = document.createElement(element.type);
    newElement.innerHTML = element.child;
    newElement.setAttribute('href',element.props.href);
    newElement.setAttribute('target',element.props.target);
    container.appendChild(newElement);*/

    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.child;
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);

    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'here is childs text'

}


const mainContainer = document.querySelector("#root");

renderElement(reactElement, mainContainer);

