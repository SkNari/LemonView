class Lemon{

    static createElement(){

        var component;

        if(arguments.length<2){
            return undefined;
        }

        var type = arguments[0];
        var props = arguments[1];
        var children = [];

        for(let i = 2 ; i < arguments.length ; i++){

            children.push(arguments[i]);

        }

        if(type.isLemonComponent!=undefined){


             component = new type(props);
             component.type = type;
             component.isPrimitive = false;

        }else{

            component = new LemonComponent(props);
            component.type = type;
            component.isPrimitive = true;

        }

        for(let key in children){

            let child = children[key];

            if(Array.isArray(child)){

                for(key in child){
                    component.addChild(child[key]);
                }

            }else{
                component.addChild(child);
            }

        }

        return component;

    }

}