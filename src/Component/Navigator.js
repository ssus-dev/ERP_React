import "../CSS/navi.css";
import React , {useState} from 'react';
import FirstMenu from "./FirstMenu";



const Navigator = ({menuList}) => {
    const [activeIndex, setActiveIndex] = useState(``);
    
    const innerList = menuList.map((item,index) => {
        console.log("여기",item ,index)

        const showSubMenu = index === activeIndex ? "active" : "";
        const ariaExpand = index === activeIndex ? "true" : "false";
       

        return (
            <FirstMenu 
                showSubMenu = {showSubMenu}
                ariaExpand = {ariaExpand}
                item = {item}
                index = {index}
                key={item.firstDepth}
                onClick={()=>{setActiveIndex(index);}}
            />
        );
    }); 

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
                    {innerList}
                </ul>
            </div>
        </div>
    );
}

export default Navigator;