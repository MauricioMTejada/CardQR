import React from 'react';
import BarraDeTitulo from "../Form/BarraDeTitulo"
import BoxFondo from "../Form/BoxFondo"
import CardRender from './CardRender';

const CardContainer = ({infoCard}) => {
    // console.log(infoCard);
    return (
        <div style={{display: 'flex', flexDirection:'column', padding: '0px 10px', alignSelf: 'stretch'}}>
            <BarraDeTitulo title="Tarjeta: " />
            <BoxFondo>
                <CardRender infoCard={infoCard}/>
            </BoxFondo>
        </div>
    )
}

export default CardContainer;