'use strict';
import React,{ Component } from 'react';
import request from 'superagent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swipers from '../components/Swiper';
class App extends Component {
    constructor(props) {
        super(props);
        this.title = '欢迎光临';
        this.col = <span><img src={require('../images/icon-dingwei.png')} style={{width: '1rem',verticalAlign: 'middle',marginRight:'1rem'}} alt="" />北京市&nbsp;&nbsp;</span>;
        this.state = {
            data:[]
        }
    }
    componentWillMount() {
        request.get(this.props.ajaxurl+'data/data.json')
            .end(function(err,res) {
                if (res.ok) {
                    this.setState(
                        {
                            data:res.body[0]['swiper']
                        }
                    )
                } else {
                    alert('Oh no! error ' + res.text);
                }
            }.bind(this));
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                <div className="pad1 mt-4 mb-5">
                    <Swipers data={this.state.data}/>
                    <ul className="oneBsList clearfix mt-1">
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList1.jpg')} alt="" width="100%"/>
                                <div className="show">品牌<br/>设计</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList2.jpg')} alt="" width="100%"/>
                                <div className="show">摄影<br/>摄像</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList3.jpg')} alt="" width="100%"/>
                                <div className="show">烹饪<br/>料理</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList4.jpg')} alt="" width="100%"/>
                                <div className="show">建筑<br/>设计</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default App;
