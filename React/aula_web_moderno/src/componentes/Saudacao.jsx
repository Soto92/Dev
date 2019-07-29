import React, {Component} from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        this.setValues = this.setValues.bind(this)
    }

    setValues(e){
        // this.props.tipo = e.target.value (props são const, não podem ser alteradas! use state p isso)
        if(e.target.className === 'btn1'){
            this.setState({tipo: e.target.value})
        }else{
            this.setState({nome: e.target.value})
        }
    }

    render () {
        const { tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input className='btn1' type="text" placeholder="Tipo ..." 
                value= {tipo} onChange={this.setValues }/>
                <input className='btn2' type="text" placeholder="nome ..." 
                value= {nome}  onChange={this.setValues }/>
                 {/* <input className='btn2' type="text" placeholder="nome ..." 
                value= {nome}  onChange={e => this.setValues(e) }/> */}
            </div>
        )
    }
}