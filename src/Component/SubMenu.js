import React from "react";

const SubMenu = ({
    item,
    subItem,
    subIndex
}) => {
    return (
        <li key={item}><a href="https://naver.com">{subItem}</a></li>
    );
}

export default SubMenu;