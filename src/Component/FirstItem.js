import React , {useState} from "react";

const FirstMenu = (menu) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const temp = menu.map((item,index) => {

        return ();
    }); 

    return (
        <li className={`first_depth`}>
            <div>
                <img src={process.env.PUBLIC_URL + './img/menu01.png'} alt="menu_icon" className="icon" />
                <p className="title">기본관리</p>
                <img src={process.env.PUBLIC_URL + './img//menu_arrow_down.png'} alt="arrow" className="arrow" />
            </div>
            <ul className={`sub_menu`}>
                <li><a href="basic_company.html">회사관리</a></li>
                <li><a href="basic_product.html">상품관리</a></li>
            </ul>
        </li>
    );
    
}

export default FirstMenu;