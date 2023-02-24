function helpers() {
    const createDomElement = ({ elementTag, className, id, src, innerHtml = '' }) => {
        const element = document.createElement(elementTag);
        if(className) element.setAttribute("class", className);
        if(id) element.setAttribute("id", id);
        if(src) element.setAttribute("src", src);
        element.innerHTML = innerHtml;
        return element;
    }

    function appendChildren( parent )  
    {
        return function appendChildren(){
            parent.appendChild(child);
        };
    } 

    const appendChildrensInParent = (parentId, childrens) => {
        const parent = document.getElementById(parentId);
        // for(let i=0;i<childrens.length;i++){
        //     parent.append(childrens[i]);
        // }
        parent.append(...childrens);
    }

    return { createDomElement, appendChildrensInParent };
}
