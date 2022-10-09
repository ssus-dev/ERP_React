import React from "react";
import SubMenu from "./SubMenu";

const FirstMenu = ({
    showSubMenu,
    item,
    index,
    onClick,
}) => {

    const subList = item.secondDepth.map((subItem,subIndex) => {
        return(
            <SubMenu
                key={subItem}
                subItem = {subItem}
                subIndex={subIndex}
            />
        );
    });
    return (
        <li className={`first_depth ${showSubMenu}`} key={item.firstDepth} onClick={onClick}>
            <div>
                <img src={process.env.PUBLIC_URL + item.firstIcon} alt="menu_icon" className="icon" />
                <p className="title">{item.firstDepth}</p>
                <img src={process.env.PUBLIC_URL + './img//menu_arrow_down.png'} alt="arrow" className="arrow" />
            </div>
            <ul className={`sub_menu ${showSubMenu}`}>
                {subList}
            </ul>
        </li>
    );
    
}

export default FirstMenu;