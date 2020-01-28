const LemonDOM = {

    routage: {},

    idCount: 0,

    incrementId() {

        var res = this.idCount;
        this.idCount++;
        return res;

    },

    render(component, target) {
        
        var el = this.buildComponent(component);
        this.route(component,el);
        target.appendChild(el);

    },

    addChangeListener(lemonComp) {

        lemonComp.setStateCallback = function () { LemonDOM.update(lemonComp) };
        lemonComp.setPropsCallback = function () { LemonDOM.update(lemonComp) };

    },

    update(lemonComp) {
        
        
        let newEl;
        let oldEl;

        oldEl = lemonComp.physicalLink;

        newEl = this.buildComponent(lemonComp);

        oldEl.parentElement.replaceChild(newEl,oldEl);

    },

    buildComponent(component) {

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
        } else {
            el = LemonDOM.buildComponent(node.render());
            node.physicalLink = el;
            LemonDOM.addChangeListener(node, el);
        }
        return el;

    },

    resetRoutage() {

        this.routage = {};
        this.idCount = 0;

    },

    route(component,domEl) {

        let node = component;
        let id = LemonDOM.incrementId();
        LemonDOM.routage[id] = { virtual: node, physical: domEl };
        LemonDOM.addChangeListener(node, id);

    }


}