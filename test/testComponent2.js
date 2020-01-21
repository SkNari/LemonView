class TestComponent2 extends LemonComponent{

    render(){

        return Lemon.createElement("div",null,Lemon.createElement(TestComponent,{name:"toto"}),Lemon.createElement(TestComponent,{name:"titi"}));

    }

}