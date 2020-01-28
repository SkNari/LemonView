class TestComponent extends LemonComponent{

    render(){

        let that = this;
        let nameTagEl = Lemon.createElement(TestComponent2,{name:"toto"});
        return Lemon.createElement("div",null,Lemon.createElement("input",{onchange:function(){ that.change(nameTagEl,this.value) }}),nameTagEl);

    }

    change(comp,value){

        comp.setProps({name:value});

    }

}