class TestComponent2 extends LemonComponent{

    render(){

        return Lemon.createElement("div",null,"Salut ",this.props.name,Lemon.createElement("br",null),Lemon.createElement(Time,null));

    }

}