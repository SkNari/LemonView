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
             component.type = "lemonComponent";
             component.isPrimitive = false;

        }else{

            component = new LemonComponent(props);
            component.type = type;
            component.isPrimitive = true;

        }

        component.children = children;

        return component;

    }

}