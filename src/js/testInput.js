/**
 * Created by nightost on 16/3/9.
 */

class World extends React.Component {
    render() {
        return <h1>World</h1>
    }
}

ReactDOM.render(<World/>, document.getElementById('test1'));
var Note = React.createClass({
    getInitialState : function(){
        return {
            value : ''
        }
    },
    handleInputChange : function(e){
        var domValue = e.target.value;
        console.log(domValue);
        this.setState({
            'value' : domValue.substr(0,2)
        });
    },
    render : function(){
        return (
            <div>
                <select multiple={true}>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                    <option value={'A'}>A</option>
                </select>
                <input type="text" value = {this.state.value} onChange = {this.handleInputChange}/>
            </div>
                );
    } 
});
ReactDOM.render(<Note />,document.querySelector('#test'));