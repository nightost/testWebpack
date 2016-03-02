var Hello = React.createClass({
	getInitialState: function() {
	    return {val: ''};
	},
	handleInputKeyDown : function(event){
		// console.log(event);
		this.setState({
			val : event.currentTarget.value
		});
	},
	getDefaultProps : function(){
		return {
			title : 'hello world'
		};
	},
	componentWillUpdate : function(){
		console.log('即将更新');
	},
	componentDidUpdate : function(){
		console.log('已经更新');
	},
	componentWillMount : function(){
		console.log('即将加入dom');
	},
	componentDidMount: function () {
		console.log('加入dom');
	},
	render : function(){
		return (
			<div className = 'con' time = {this.props.name}>
				<div ref='titleCon' className  = 'title'>{this.state.val}</div>
				<input ref='nameInput' onKeyUp = {this.handleInputKeyDown}/>
			</div>
			);
	}  
});
Hello.firstChild = React.createClass({
	render : function(){
		return <div>i'm hello's first child</div>
	}
});
var HelloElement = (
    <div>
	    <Hello name = 'hello components'/>
        <Hello.firstChild />
    </div>
);
ReactDOM.render(HelloElement,document.getElementById('test'));