import React from 'react';
import Button from '../Button/Button';
import SIP from '../SIP/SIP';
import SIP2021 from '../SIP/SIP2021';

const Front = () => {
    return (
        <div class='contain'>
            <SIP2021 />
            <SIP />
            <Button />

        </div>
    )
}

export default Front;