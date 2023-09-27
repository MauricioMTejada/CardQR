import React, { useEffect, useState } from 'react';
import styles from './styless.module.css'
// import countryInfo from './CountryInfo';
import { useForm, useFormContext } from 'react-hook-form';

const DropdownAvatar = ( {userData, setPaisOrigen} ) => {

    const baseFolder = '/avatars'
    const totalAvatars = 40; // Cantidad total de avatares

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('01.png');

    // Genera un arreglo con los nombres de archivo numerados del "01.png" al "40.png"
        const avatarFiles = Array.from({ length: totalAvatars }, (_, index) => {
            const num = (index + 1).toString().padStart(2, '0'); // Formato "01", "02", ...
            return `${num}.png`;
        });


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const selectedOption2 = "20.png";

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={`${baseFolder}/${selectedOption}`} alt={selectedOption} className={styles.image} />
                <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                    <div className={styles['dropdown-toggle']} onClick={toggleDropdown}>
                        v
                    </div>
                    <ul className={styles['dropdown-menu']}>
                        {avatarFiles.map((option, index) => (
                            <li key={index} onClick={() => selectOption(option)}>
                                <img src={`${baseFolder}/${option}`} alt={option} className={styles['dropdown-option-image']} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropdownAvatar;
