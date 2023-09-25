const CampoNombre = () => {
    return(
        <>
            <div style={styleDisplayNombres}>
                        Nombre:
                        <input
                            data-tooltip-id="validacionNombre"
                            type="text" {...register('nombre', {
                            required: true,
                            maxLength: 30,
                            })}
                        />
                    </div>

                    {errors.nombre?.type == "required" && <Tooltip
                        id="validacionNombre"
                        content="Debe colocar un Nombre"
                        variant="error"
                        place="right"
                        isOpen={true}
                    />}

                    {errors.nombre?.type == "maxLength" && <Tooltip
                        id="validacionNombre"
                        content="Máximo 30 caracteres"
                        variant="error"
                        place="right"
                        isOpen={true}
                    />}
        </>
    )

}

export default CampoNombre;