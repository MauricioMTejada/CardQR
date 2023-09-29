import { Controller, useForm } from "react-hook-form"
import BarraDeTitulo from "./BarraDeTitulo"
import BoxFondo from "./BoxFondo"
import DatePicker from "react-datepicker";
import { useState, forwardRef } from "react";
import DropdownList from "../CountryInfo/DropdownList";
import { getYear, getMonth } from "date-fns";
import es from 'date-fns/locale/es';
import range from "lodash/range";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Form = ( {setInfoCard} ) => {

    const { register, handleSubmit, formState: {errors}, control, } = useForm()

    // Fecha para persona mayor de edad:
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        const [fNacimiento, setFNacimiento] = useState(eighteenYearsAgo);

    // Estado país de origen:
        const [paisOrigen, setPaisOrigen] = useState()

    // Estado Fecha de Validez
        const [dateRange, setDateRange] = useState([new Date(), null]);
        const [startDate, endDate] = dateRange;

    // Botón de fecha de nacimiento:
        const BotonFecha = forwardRef(({ value, onClick }, ref) => (
            <button  onClick={onClick} ref={ref}>
            {value}
            </button>
        ));

    const [submitAttempted, setSubmitAttempted] = useState(false);

    // Lista desplegable de la fecha de nacimiento:
        const years = range(1950, getYear(new Date()) - 17, 1);
        const months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", ];

    // Estilos:
        const styleDivContent = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}
        const styleDisplayNombres = {display: 'flex', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', alignItems: 'center', width: '300px' }

    const onSubmit = (data) => {
        setSubmitAttempted(true);
        data.fechaNacimiento = fNacimiento;
        data.paisOrigen = paisOrigen;
        // data.fechaValidezInicial = startDate;
        // data.fechaValidezFinal =  watch('endDate');
        console.log(data);
        setInfoCard(data)
    }

    console.log(submitAttempted);


return(
    <div style={{display: 'flex', flexDirection:'column', padding: '0px 10px'}}>
        <BarraDeTitulo title="Formulario: "/>
        <BoxFondo>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo Nombre */}
                    <div style={styleDivContent}>
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

                        {submitAttempted && errors.nombre?.type == "required" && <Tooltip
                            id="validacionNombre"
                            content="Debe colocar un Nombre"
                            variant="error"
                            place="right"
                            isOpen={true}
                        />}

                        {submitAttempted && errors.nombre?.type == "maxLength" && <Tooltip
                            id="validacionNombre"
                            content="Máximo 30 caracteres"
                            variant="error"
                            place="right"
                            isOpen={true}
                        />}

                {/* Campo Apellido */}
                        <div style={styleDisplayNombres}>
                            Apellido:
                            <input
                                data-tooltip-id="validacionApellido"
                                type="text" {...register('apellido', {
                                required: true,
                                maxLength: 30,
                                })}
                            />
                        </div>

                        {submitAttempted && errors.apellido?.type == "required" && <Tooltip
                            id="validacionApellido"
                            content="Debe colocar un Apellido"
                            variant="error"
                            place="right"
                            isOpen={true}
                        />}

                        {submitAttempted && errors.apellido?.type == "maxLength" && <Tooltip
                            id="validacionApellido"
                            content="Máximo 30 caracteres"
                            variant="error"
                            place="right"
                            isOpen={true}
                        />}

                {/* Campo Fecha de Nacimiento */}
                        <div style={styleDisplayNombres}>
                            <div>
                                Fecha de nacimiento<br/>
                                (mayor de 18 años)

                            </div>

                            <DatePicker
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled,
                                }) => (
                                    <div style={{ margin: 10, display: "flex", justifyContent: "center", }} >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                            {"<"}
                                        </button>

                                        <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} >
                                            {years.map((option) => (
                                                <option key={option} value={option}> {option} </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map((option) => (
                                                <option key={option} value={option}> {option} </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                            {">"}
                                        </button>
                                    </div>
                                )}
                                selected={fNacimiento}
                                customInput={<BotonFecha />}
                                onChange={(date) => {
                                    setFNacimiento(date)}}
                                locale={es}
                                dateFormat="dd/MM/yyyy"
                                maxDate={eighteenYearsAgo}
                            />
                        </div>

                {/* Campo País de Origen */}
                        <div style={styleDisplayNombres}>
                            País de origen
                            <DropdownList setPaisOrigen={setPaisOrigen}/>
                        </div>
                    </div>

                {/* Campo Fecha de Validez */}
                    <div data-tooltip-id="validacionFechaValidez">
                        Fecha de validez:

                        <Controller
                            control={control}
                            name='fechaValidez'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DatePicker
                                    selected={startDate}
                                    onChange={(e) => {
                                        setDateRange(e);
                                        field.onChange(e);
                                      }}
                                    //   isClearable={true}
                                    //  className="form-control"
                                    monthsShown={2}
                                    locale={es}
                                    inline
                                    minDate={new Date()}
                                    selectsRange
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            )}
                        />

                    {submitAttempted && errors.fechaValidez?.type == "required" && <Tooltip
                            id="validacionFechaValidez"
                            content="Completar Fecha de Validez"
                            variant="error"
                            place="right"
                            isOpen={true}
                        />}

                    </div>

                    <input type="submit" value="Generar Tarjeta" style={{ color: 'black' }} />
            </form>
        </BoxFondo>
    </div>
    )
}

export default Form