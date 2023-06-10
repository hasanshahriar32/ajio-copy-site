import MenPageCerusecl from '@/app/component/MenPageCerusecl/MenPageCerusecl';
import MenPageHeader from '@/app/component/MenPageHeader/MenPageHeader';
import React from 'react';
import '@splidejs/react-splide/css';

const Men = () => {
    return (
        <div>
            {/* men */}
            <MenPageHeader />
            <MenPageCerusecl />
        </div>
    );
};

export default Men;