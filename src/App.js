import React, { Component } from 'react'

class Arrow extends Component{

  mensagem = () => {
    return "Dan, melhor professor <3"
  }

  dobro = (x) => {
    return x * 2
  }

  render(){
    return(
      <div>
        <h1>{this.mensagem()}</h1>
        <h2>O dobro do número escolhido é: {this.dobro(4)}</h2>
      </div>
    )
  }
}

export default Arrow