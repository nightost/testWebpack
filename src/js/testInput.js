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
        this.delaySay(domValue);
        this.setState({
            'value' : domValue
        });
    },
    delaySay : function(val){
        var pm = new Promise(function(resolve,reject){
            if(val.length > 6){
                setTimeout(function(){
                    resolve('符合输入要求');
                },100);
            }
            else{
                setTimeout(function(){
                    reject('输入需要大于6位');
                },100);
            }
        });
        pm.then(function(val){
            console.log(val);
        },function(val){
            console.log(val);
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