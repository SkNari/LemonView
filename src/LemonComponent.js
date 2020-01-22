class LemonComponent{

    type;
    props;
    state;
    children;
    isPrimitive;
    static isLemonComponent = true;
    setStateCallback;

    constructor(props={}){

        this.type = null;
        this.props = props;
        this.children = [];
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
}

