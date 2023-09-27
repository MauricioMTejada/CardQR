import React from 'react';
import BarraDeTitulo from "../Form/BarraDeTitulo"
import BoxFondo from "../Form/BoxFondo"
import CardRender from './CardRender';

const CardContainer = () => {

    return (
        <>
            <BarraDeTitulo title="Tarjeta: " />
            <BoxFondo>
                <CardRender />
            </BoxFondo>
        </>
    )
}

export default CardContainer;