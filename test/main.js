var elem = Lemon.createElement(TestComponent2,null);

//elem.componentDidMount();

g = {toto:[],titi:"huhu"};

function toto(){

};

/*console.log(g.toto);
Object.defineProperty(g, 'toto', {
    get: function () {
        return this['toto1'];
    },
    set: function (val) {
        console.log("impossible");
        this["toto1"] = val;
    },
    enumerable: true,
    configurable: true
});

console.log(g);

g.toto = [];
g.toto[0] = "oui";

console.log(g);

//console.log(elem);

//console.log(elem.state);*/

LemonDOM.render(elem,document.body);

console.log(LemonDOM.routage);

elem.setState({oui:"oui"});


