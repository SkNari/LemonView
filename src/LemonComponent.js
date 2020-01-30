class LemonComponent {

    type;
    props;
    state;
    children;
    isPrimitive;
    static isLemonComponent = true;
    setStateCallback;

    constructor(props = {}) {

        this.props = {};
        this.children = [];
        for(let key in props){
            if(props[key].isState==true){
                this.props[key] = props[key].value;
                props[key].users[key] = this;
            }else{
                this.props[key] = props[key];
            }
        }
        this.isPrimitive = true;
        this.state = {};
        this.setStateCallback = undefined;

    }

    addChild(child) {

        this.children.push(child);

    }

    render() {

        return this;

    }

    setState(state) {

        let childUpdated = false;

        if (this.stateIsSet == undefined) {

            this.state = {};

            for(let key in state){

                this.state[key] = {value:state[key],users:{},isState:true}

            }

            this.stateIsSet = true;

        } else {
            for(let key in this.state){
                if(state[key]!=undefined){
                    this.state[key].value = state[key];
                    let children = this.state[key].users;
                    for(let childKey in children){
                        let props = {};
                        props[childKey] = this.state[key].value;
                        children[childKey].setProps(props);
                        childUpdated = true;
                    }  
                }
            }
            if (typeof (this.setStateCallback) == 'function'&&!childUpdated) {

                this.resetUsers();
                this.setStateCallback();

            }
        }

    }

    setProps(props) {

        for (let key in this.props) {

            this.props[key] = props[key]!=undefined?props[key]:this.props[key];

        }
        if (typeof (this.setPropsCallback) == 'function') {
            this.setPropsCallback();
        }

    }

    resetUsers(){

        for(let key in this.state){
            this.state[key].users = {};
        }

    }
}

