import React from "react";

const FirstMenu = ({
    showSubMenu,
    ariaExpand,
    item,
    index,
    onClick,
}) => {
    return (
        <li className={`first_depth`} key={item.firstDepth} onClick={onClick} ariaexpand={ariaExpand}>
            <div>
                <img src={process.env.PUBLIC_URL + './img/menu01.png'} alt="menu_icon" className="icon" />
                <p className="title">{item.firstDepth}</p>
                <img src={process.env.PUBLIC_URL + './img//menu_arrow_down.png'} alt="arrow" className="arrow" />
            </div>
            <ul className={`sub_menu ${showSubMenu}`}>
                {/* <li><a href="basic_company.html">{item.secondDepth}</a></li> */}
                <li><a href="basic_product.html">상품관리</a></li>
            </ul>
        </li>
    );
    
}

export default FirstMenu;