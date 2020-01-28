var elem = Lemon.createElement(TestComponent,{name:"Lucas"});

//console.log(elem);

//elem.componentDidMount();

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

//console.log(elem);

