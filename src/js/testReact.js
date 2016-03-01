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
			<div className = 'con'>
				<div ref='titleCon' className  = 'title'>{this.state.val}</div>
				<input ref='nameInput' onKeyUp = {this.handleInputKeyDown}/>
			</div>
			);
	}  
});
ReactDOM.render(<Hello />,document.getElementById('test'));