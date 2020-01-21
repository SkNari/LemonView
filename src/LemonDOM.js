const LemonDOM = {

    render(component, target) {

        /*if(component.proxy == undefined){

            component.proxy = new Proxy(component,)

        }*/

        let node = component;
        var el;

        if (node.isPrimitive != false) {
            if (typeof node != 'object') {
                el = document.createTextNode(node);
            } else {
                el = document.createElement(node.type);
                for (let key in node.props) {
                    el[key] = node.props[key];
                }
                node.children.map(child => LemonDOM.render(child, el));
            }
            target.appendChild(el);
        }else{
            LemonDOM.render(node.render(), target);
        }



    }

}