class Time extends LemonComponent{

    constructor(props){
        super(props);
        this.state = {seconds: 0};
    }

    tick(){

        this.state.seconds = this.state.seconds+1;
        console.log(this.state.seconds);

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