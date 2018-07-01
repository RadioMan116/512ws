const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '20px',
    container: {
        maxWidth: '1920',
        fields: '30px'
    },
    breakPoints: {
        ld: {
            width: "1700px",
            fields:"30px"
        },
        m: {
            width: "1440px",
            fields: "25px"
        },
        s: {
            width: "1024px",
            fields: "20px"
        },

        sm: {
            width: "768px",
            fields: "10px"
        },
        md: {
            width: "730px",
            fields: "5px"
        },
        xs: {
            width: "480px",
            fields: "5px"
        },
        ls: {
            width: "375px",
            fields: "5px"
        },
        xxs: {
            width: "320px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/precss', settings);