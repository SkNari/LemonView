class Time extends LemonComponent{

    constructor(props){
        super(props);
        this.setState({seconds:0});
        this.componentDidMount();
    }

    tick(){

        this.setState({seconds: this.state.seconds.value+1});
        //console.log(this.state.seconds);

    }

    componentDidMount(){
        this.interval = setInterval( () => this.tick() ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){

        return Lemon.createElement("div",null,this.state.seconds);

    }

}
