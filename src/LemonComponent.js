class LemonComponent{

    type;
    props;
    children;
    isPrimitive;
    static isLemonComponent = true;

    constructor(props={}){

        this.type = null;
        this.props = props;
        this.children = [];
        this.isPrimitive = true;

    }

    addChild(child){

        this.children.push(child);

    }

    render(){

        return this;

    }
}

