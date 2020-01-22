const LemonDOM = {

    routage : {},
    
    idCount : 0,

    incrementId(){

        var res = this.idCount;
        this.idCount++;
        return res;

    },

    render(component, target) {

        target.appendChild(this.buildComponent(component));

    },

    addChangeListener(lemonComp,id){

        lemonComp.setStateCallback = function(){ LemonDOM.update(id) };

    },

    update(id){

        /*target = this.routage[id].physical;
        target.parentElement.removeChild(target);*/

    },
    
    buildComponent(component){

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
                node.children.map(child => el.appendChild(LemonDOM.buildComponent(child)));
            }
        }else{
            el = LemonDOM.buildComponent(node.render());
        }
        return el;

    },

    resetRoutage(){

        this.routage = {};
        this.idCount = 0;

    },

    route(component){

        let node = component;
        
        if(node.isPrimitive==false&&node.routeId==undefined){

            let id = LemonDOM.incrementId();
            LemonDOM.routage[id] = {virtual : node, physical : el};
            LemonDOM.route(node.render());
            LemonDOM.addChangeListener(node,id);

        }
        
    }


}