import React, { useEffect, useState } from 'react';
import styles from './styless.module.css'
import countryInfo from './CountryInfo';
import { useForm, useFormContext } from 'react-hook-form';

const DropdownList = ( {userData, setPaisOrigen} ) => {
    // const { register, watch } = useFormContext();
    // const {watch} = useForm()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(countryInfo[0]);

    useEffect(() => {
        setPaisOrigen(countryInfo[0].name);
      }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // console.log(isDropdownOpen);
    // console.log(selectedOption);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setPaisOrigen(option.name);
        // console.log(watch('countryCode'))
    };

    // Carga el estado inicial por defecto del elemento seleccionado:
    //     useEffect(() => {
    //       const matchingOption = countryInfo.find(option => option.countryCode === userData.country_code);
    //       if (matchingOption) {
    //           setSelectedOption(matchingOption);
    //       }
    //   }, [userData.country_code]);

    //   useEffect(() => {
    //     console.log(watch('countryCode')); // Log updated value after setValue
    // }, [watch('countryCode')]);

    return (
        <div className={styles.container}>
            {/* <p>Selected Value: {selectedOption ? selectedOption.countryCode : ''}</p> */}

            <div className={`${styles.dropdown}`}>

                <div className={`${styles['dropdown-toggle']}`} onClick={toggleDropdown}>
                    {selectedOption && (
                        <img src={selectedOption.flag} alt={selectedOption.name} className={`${styles['dropdown-option-image']}`} />
                    )}
                    <span className={`${styles['dropdown-option-label']}`}>
                        {selectedOption ? selectedOption.name : 'Argentina'}
                    </span>
                    <span className={`${styles['dropdown-caret']}`}></span>
                </div>

                <ul className={`${styles['dropdown-menu']} ${isDropdownOpen ? styles.open : ''}`}>
                    {countryInfo.map((option, index) => (
                        <li key={index} onClick={() => selectOption(option)}>
                            <img src={option.flag} alt={option.name} className={`${styles['dropdown-option-image']}`} />
                            <span className={`${styles['dropdown-option-label']}`}>{option.name}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default DropdownList;
