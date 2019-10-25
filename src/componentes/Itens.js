import React, {Component, Fragment} from "react";


export default class Itens extends Component  {
constructor(){
 super();
    this.state = {
        item:"",
         itens :["20 pregos" , "30 porcas" , "15 parafusos"]
    };

   
    this.adicionaItem = this.adicionaItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
}



render(){

   
    return(
        <Fragment>
        <h1>Estoque</h1>
        <input onChange={this.handleChange} value={this.state.item}/>
        <button onClick={this.adicionaItem}>Adicionar</button>
        <ul>
            { this.state.itens.map(item=> <li>{item}</li>) }
        </ul>
        </Fragment>
     
     
     );
}

adicionaItem(){
this.setState({
    item: "",
    itens : [].concat(this.state.itens ,this.state.item )})

}


handleChange(event){
    this.setState({ item : event.target.value});
 console.log(event.target.value);

}
}

