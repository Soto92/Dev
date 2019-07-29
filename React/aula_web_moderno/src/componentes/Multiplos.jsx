import React from 'react'

export default props => {
    return <h1>Boa tarde {props.nome}!</h1>;
}

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export const BomDia = props => <h1>Bom dia {props.nome}!</h1>

// export default {BoaNoite, BomDia}