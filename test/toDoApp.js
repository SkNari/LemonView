class ToDoApp extends LemonComponent {

    constructor(props) {

        super(props);
        this.setState({ items: [], text: '' });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.value.length) {
            return;
        }
        const newItem = {
            text: this.state.text.value,  
            id: Date.now()
        };
        let items = this.state.items.value;
        items.push(newItem);
        this.setState({items:items});
    }


    render() {

        return Lemon.createElement("div", null,
            Lemon.createElement("h3", null, "A faire"),
            Lemon.createElement(TodoList, { items: this.state.items }),
            Lemon.createElement("form", { onsubmit: this.handleSubmit, id: "toto" },
                Lemon.createElement('label', { htmlFor: "new-todo" }, "Que faut-il faire?"),
                Lemon.createElement('input', { id: "new-todo", value: this.state.text, onchange: this.handleChange }),
                Lemon.createElement('button', null, "Ajouter #" + (this.state.items.value.length + 1)))
        );

    }

}

class TodoList extends LemonComponent {
    render() {
        return Lemon.createElement("ul", null, this.props.items.map(item => Lemon.createElement("li", { key: item.id }, item.text)));
    }
}