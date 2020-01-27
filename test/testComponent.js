class TestComponent extends LemonComponent{

    render(){

        return Lemon.createElement("div",null,"Salut ",this.props.name,Lemon.createElement(Time,null));

    }

}