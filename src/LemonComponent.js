class LemonComponent{

    type;
    props;
    state;
    children;
    isPrimitive;
    static isLemonComponent = true;
    setStateCallback;

    constructor(props={}){

        this.children = [];
        this.props = props;
        this.isPrimitive = true;
        this.state = {};
        this.setStateCallback = undefined;

    }

    addChild(child){

        this.children.push(child);

    }

    render(){

        return this;

    }

    setState(state){

        this.state = state;
        if(typeof(this.setStateCallback) == 'function'){
            this.setStateCallback();
        }

    }

    setProps(props){

        this.props = props;
        if(typeof(this.setPropsCallback) == 'function'){
            this.setPropsCallback();
        }

    }
}

