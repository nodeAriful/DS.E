import React from 'react';

const spaces = {
    xxxs: "xxxs",
    xxs: "xxs",
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl",
    xxxl: "xxxl",
};
var Spacing = Object.freeze(spaces);

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode } }));
};

export { Color as C, Spacing as S };
//# sourceMappingURL=Color-e1a0d56d.js.map