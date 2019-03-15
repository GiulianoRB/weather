import React from 'react';

const Location = (props) => {
    const city = props.city;
    //lo siguiente son 3 formas de hacer lo mismo (pasar parametros)
    //const city = props.city;
    //const {city} = props; tambien se puede cuando trae varios parametros
    //const Location = ({city}) => //esto en la cabecera de la funcion (o constante)

    return(<div><h1>{city}</h1></div>)
}

export default Location;