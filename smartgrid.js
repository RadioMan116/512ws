const smartgrid = require("smart-grid");

const settings = {
  columns: 12,
  offset: "20px",
  container: {
    maxWidth: "1366px",
    fields: "62px"
  },
  breakPoints: {
    // m: {
    //   width: "1440px",
    //   fields: "25px"
    // },
    s: {
      width: "1024px",
      fields: "20px"
    },
    xs: {
      width: "480px",
      fields: "5px"
    },
    xxs: {
      width: "320px",
      fields: "5px"
    }
  },
  oldSizeStyle: false,
  properties: ["justify-content"]
};

smartgrid("./src/precss", settings);
