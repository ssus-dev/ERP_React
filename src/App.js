import Navigation from "./Component/Navigator";
import { Route, Routes } from 'react-router-dom';
import Basic from "./Router/Basic";
import Member from "./Router/Member";
import Profile from "./URL/profile";
import Article from "./Router/Article";
import Articles from "./Router/Articles";
import Layout from "./Layout";
import LayoutuseNavi from "./Layout_useNavi";
import ArticlesnavLink from './Router/Articles_navLink';

const menuList = [
    {
        firstDepth : "기본관리",
		firstIcon : "./img/menu01.png",
        secondDepth : ["회사관리","상품관리"],
		route : "/basic"
    },
    {
        firstDepth : "회원관리",
		firstIcon : "./img/menu02.png",
        secondDepth : ["직원관리","거래처관리","권한관리"],
		route : "member"
    },
    {
        firstDepth : "전자결재",
		firstIcon : "./img/menu03.png",
        secondDepth : ["전자결재"],
    },
    {
        firstDepth : "상품관리",
		firstIcon : "./img/menu04.png",
        secondDepth : ["상품등록","상품목록"],
    },
    {
        firstDepth : "발주관리",
		firstIcon : "./img/menu05.png",
        secondDepth : ["견적관리","견적서작성","발주목록"],
    },
    {
        firstDepth : "환경설정",
		firstIcon : "./img/menu06.png",
        secondDepth : ["로그아웃"],
    },
];

const App = () => {
	return (
		<div>
			<Navigation menuList={menuList} />
			<div className="component-change">
				{/* Routes 내에는 반드시  Route 컴포넌트만 존재해야한다 -- error 발생 */}
				<Routes>
					{/* Header 공용으로 사용하는 경우 : Layout 추가*/}
					<Route element={<LayoutuseNavi />}>
					{/* <Route element={<Layout />}> */}
						{/* Route에서 index는 path="/" 와 같다. 더욱 명시적으로 표현하는 방법이다 (바로아래 두줄 같음)*/}
						{/* <Route path="/" element={<Basic/>}/> */}
						<Route index element={<Basic/>}/>
						<Route path="/member" element={<Member/>}/>
						<Route path="/profiles/:username" element={<Profile/>}/>
					</Route>
					
					{/* 아래부터는 중첩 라우팅 예시*/}
					<Route path="/articles" element={<ArticlesnavLink />}>
					{/* <Route path="/articles" element={<Articles />}> */}
						<Route path=":id" element={<Article />} />
					</Route>
				</Routes>
			</div>
		</div>
	);	
}

export default App;
