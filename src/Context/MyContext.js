import React from 'react';

const shoes = {
    '1st-shoe': {
        name: "SHOE no 1",
        image:
            'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwc6ca2a4e/images/2.1/mens-shoes/LombardCap_4306_Walnut_Profile_web.jpg?sw=260&sh=260&sm=fit'
    },
    '2nd-shoe': {
        name: 'SHOE no 2',
        image:
            'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw9bb938ad/images/2.1/mens-shoes/dalton-1111-walnut-profile-web-c.jpg?sw=260&sh=260&sm=fit'
    },
    '3rd-shoe': {
        name: 'SHOE no 3',
        image:
            'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwa27db5a5/images/2.1/mens-shoes/dalton-0181-burgundy-profile-web-c.jpg?sw=260&sh=260&sm=fit'
    },
    '4th-shoe': {
        name: 'SHOE no 4',
        image:
            'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw16c96c96/images/2.1/mens-shoes/Williamsburg_3881_Chili_Profile_web.jpg?sw=260&sh=260&sm=fit'
    }
};
const MyContext=React.createContext(shoes);

export default MyContext;
