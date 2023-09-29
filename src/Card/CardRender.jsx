import React from "react";
import DropdownAvatar from "./DropdownAvatar";
import QRCode from "react-qr-code";
import backgroundImage from '../../public/backgroundCard/01.jpg'

const CardRender = ({infoCard}) => {

    const proportionCard = ((85.60 * 96)/ 25.4)+70
    const styleCard = {
        width: `${1 * proportionCard }px`, /* Ancho en píxeles */
        height: `${0.63 * proportionCard}px`, /* Alto en píxeles */
        // backgroundColor: "lightblue",
        border: "1px solid black",
        borderRadius: '15px',
        display: "flex",
        flexDirection: "row",
        padding: '10px',

        backgroundImage: `url(${backgroundImage})`,
        justifyContent: 'center',
        // alignSelf: 'center'
    }
    const styleContainer = { textAlign: "left", display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '30px 0px'};
    const styleItem = { padding: "5px 10px" };
    const styleItemValidez = { padding: "5px 10px", fontStyle: 'italic', fontSize: '0.8rem', color: '#424242'}
    const styleContainerImage = {padding: '7px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'  }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={styleCard} >
                {/* Contenedor Imagen */}
                    <div style={styleContainerImage} >
                        <DropdownAvatar />
                            <QRCode
                                value={`{Nombre: ${infoCard.nombre}, Apellido: ${infoCard.apellido}, Fecha de Nacimiento: ${infoCard.fechaNacimiento.toLocaleDateString()}, País de origen: ${infoCard.paisOrigen}, Fecha de Validez: del ${infoCard.fechaValidez[0].toLocaleDateString()} al ${infoCard.fechaValidez[1].toLocaleDateString()}}`}
                                size={80}
                            />
                    </div>

                {/* Contenedor Datos */}
                    <div style={styleContainer}>
                        <div style={styleItem}><strong><u>Nombre:</u></strong> {infoCard.nombre}</div>
                        <div style={styleItem}><strong><u>Apellido:</u></strong> {infoCard.apellido}</div>
                        <div style={styleItem}><strong><u>Fecha de Nacimiento:</u></strong> {infoCard.fechaNacimiento.toLocaleDateString()}</div>
                        <div style={styleItem}><strong><u>País de origen:</u></strong> {infoCard.paisOrigen}</div>
                        {infoCard.fechaValidez && (
                        <div style={styleItemValidez}><strong><u>Fecha de Validez:  </u></strong> <br />
                        del {infoCard.fechaValidez[0].toLocaleDateString()} al {infoCard.fechaValidez[1].toLocaleDateString()}</div>
                        )}
                    </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '350px', padding: '10px', fontStyle: 'italic', fontSize: '0.8rem', color: '#424242'}}>
                Nota: el código QR se actualiza con la información ingresada, se puede comprobar escaneando el código.
            </div>
        </div>
    )
}

export default CardRender;