import navi from "../CSS/navi.css";
import React , {useState} from 'react';
import CSSTransition from "react-transition-group/CSSTransition";

const Navigator = () => {

    const [isActive, setSlide] = useState(false);
    const [isTitle , setTitle] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const toggleSilde = () => {
        setSlide(!isActive);
        setTitle(!isTitle);
    }

    return (
        <div className="header">
            <div className="fix_layout">
                <h1 className="logo">
                    <a href="https://naver.com">
                        <img src={process.env.PUBLIC_URL+'./img/logo_test.png'} alt="logo"/>
                    </a>
                </h1>
                <div className="today_zone">
                    <p className="name"><span>Today</span> 홍길동</p>
                    <div className="list">
                        <span>
                            <img src={process.env.PUBLIC_URL+'./img/today_icon01.png'} alt="today_icon01"/>
                            신규거래처
                        </span>
                        <p className="content" data-val="개">15</p>
                    </div>
                    <div className="list">
                        <span>
                            <img src={process.env.PUBLIC_URL+'./img/today_icon02.png'} alt="today_icon01"/>
                            주문
                        </span>
                        <p className="content" data-val="건">7</p>
                    </div>
                    <div className="list">
                        <span>
                            <img src={process.env.PUBLIC_URL+'./img/today_icon03.png'} alt="today_icon01"/>
                            금액
                        </span>
                        <p className="content" data-val="원">1,560,000</p>
                    </div>
                </div>
                <ul className="menu">
                    <li className={`first_depth ${isTitle ? "active" : ""}`} onClick={toggleSilde}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu01.png'} alt="menu_icon" className="icon"/>
                            <p className="title">기본관리</p>
                            <img src={process.env.PUBLIC_URL+'./img//menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        <ul className={`sub_menu ${isActive ? "active" :""}`}>
                            <li><a href="basic_company.html">회사관리</a></li>
                            <li><a href="basic_product.html">상품관리</a></li>
                        </ul>
                    </li>
                    <li className={`first_depth ${isTitle ? "active" : ""}`} onClick={toggleSilde}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu02.png'} alt="menu_icon" className="icon"/>
                            <p className="title">회원관리</p>
                            <img src={process.env.PUBLIC_URL+'./img/menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        {/* <CSSTransition in={showMessage} timeout={10} classNames="example" unmountOnExit> */}
                            <ul className={`sub_menu ${isActive ? "active" :""}`}>
                                <li><a href="member_member.html">직원관리</a></li>
                                <li><a href="member_company.html">거래처관리</a></li>
                                <li><a href="member_manager.html">권한관리</a></li>
                            </ul>
                        {/* </CSSTransition> */}
                    </li>
                    <li className={"first_depth"}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu03.png'} alt="menu_icon" className="icon"/>
                            <p className="title">전자결재</p>
                            <img src={process.env.PUBLIC_URL+'./img//menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        <ul className="sub_menu">
                            <li><a href="report_sign.html">전자결재</a></li>
                        </ul>
                    </li>
                    <li className={"first_depth"}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu04.png'} alt="menu_icon" className="icon"/>
                            <p className="title">상품관리</p>
                            <img src={process.env.PUBLIC_URL+'./img//menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        <ul className="sub_menu">
                            <li><a href="goods_add.html">상품등록</a></li>
                            <li><a href="goods_list.html">상품목록</a></li>
                        </ul>
                    </li>
                    <li className={"first_depth"}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu05.png'} alt="menu_icon" className="icon"/>
                            <p className="title">발주관리</p>
                            <img src={process.env.PUBLIC_URL+'./img//menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        <ul className="sub_menu">
                            <li><a href="order_manage.html">견적관리</a></li>
                            <li><a href="order_write.html">견적서작성</a></li>
                            <li><a href="order_list.html">발주목록</a></li>
                        </ul>
                    </li>
                    <li className={"first_depth"}>
                        <div>
                            <img src={process.env.PUBLIC_URL+'./img/menu06.png'} alt="menu_icon" className="icon"/>
                            <p className="title">환경설정</p>
                            <img src={process.env.PUBLIC_URL+'./img//menu_arrow_down.png'} alt="arrow" className="arrow"/>
                        </div>
                        <ul className="sub_menu">
                            <li><a href="https://naver.com">로그아웃</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigator;