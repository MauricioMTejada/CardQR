import React from "react";
import DropdownAvatar from "./DropdownAvatar";

const CardRender = () => {
    return (
        <>
            <div
                style={{
                    width: `${(85.60 * 96) / 25.4}px`, /* Ancho en píxeles */
                    height: `${(53.98 * 96) / 25.4}px`, /* Alto en píxeles */
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                }}
            >
                Contenido del div en milímetros
                <DropdownAvatar />
            </div>
        </>
    )
}

export default CardRender;