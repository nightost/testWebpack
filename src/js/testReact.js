var Hello = React.createClass({
	propTypes: {
		children: React.PropTypes.element.isRequired
	},
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
                <div className="title">{this.props.name}</div>
				{this.props.children}
				<div ref='titleCon' className  = 'title'>{this.state.val}</div>
				<input ref='nameInput' onKeyUp = {this.handleInputKeyDown}/>
			</div>
			);
	}  
});

function StatelessComp (props){
	//过滤属性
	var {title,...others} = props;
	return <div {...others}>{props.name}</div>
};
/**
 * spread attr
 * @type {{name: string, ecardNo: string}}
 */
var helloProps = {
    name : '123',
    ecardNo : '333'
}
/**
 * Hello 's child class
 */
Hello.firstChild = React.createClass({
	render : function(){
		return <div data-a = '2' tst = '3'>i'm hello's first child</div>
	}
});
/**
 * hello  element
 * @type {XML}
 */
var HelloElement = (
    <div>
		<StatelessComp name = '232' title = '22'/>
	    <Hello children = {<StatelessComp name='baba'/>} name = 'hello components' {...helloProps}/>
        <Hello.firstChild />
    </div>
);
//render
ReactDOM.render(HelloElement,document.getElementById('test'));