import React from 'react';
import '../../../src/styles/Styles.css';
import { Link } from 'react-router-dom';
const BackButton = () => {
    return (
    <>
        <Link to={'/home'} a herf="../../home" type="submit"  className='collection-1 btn-5'>
            <span>Back</span>
        </Link>
    </>
)
}

export default BackButton