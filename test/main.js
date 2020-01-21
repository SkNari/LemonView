var elem = Lemon.createElement(Time,null);

elem.componentDidMount();

var i = {};
var g = {toto:"test"};

//console.log(elem);

elem.state = new Proxy(elem.state,{
    set : function(target,key,value){
        console.log("toto:"+target.seconds);
        return true;
    }
});

elem.tutu = "tutu";

//console.log(elem.state);

LemonDOM.render(elem,document.body);

