class Utility{

    static isPrimitive(val){

        var type = typeof(val);
        if(type==='string'||type==='number'||type==='bigint'||type==='boolean'||type==='undefined'||type==='symbol'||val==null){
            return true;
        }else{
            return false;   
        }

    }

}