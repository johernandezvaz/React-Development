// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Jose'
// };

// const getResult = () => 'José';

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, name} ) => {

    

    // console.log(props);
// if (!title){
//     throw new Error('El titulo no existe');
// }

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage)}</code> */}
            <p> {subTitle}</p>
            <p>{name}</p>
        </>  
    )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'José Hernández',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',
}