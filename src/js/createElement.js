/**
* Function for creating HTMLElement(s) from a string of code
* @param {String} [code] - Valid HTML code
* @return {HTMLElement|HTMLElement[]} - Either a single HTML element or an array of them depending on the HTML code.
*/
function createElement(code){
    const ele = document.createElement('div');
    ele.innerHTML = code;

    if(ele.children.length == 1)
        return ele.children[0];
    else
        return Array.from(ele.children);
}

export default createElement;
