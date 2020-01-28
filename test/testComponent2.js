class TestComponent2 extends LemonComponent{

    render(){

        return Lemon.createElement("div",null,"Salut ",this.props.name);

    }

}