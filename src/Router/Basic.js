import { Link } from "react-router-dom";

const Basic = () => {
    return (
      <div>
        <h1>홈</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <Link to="/member">회원정보로 보기</Link>
        <ul>
			<li>
				<Link to="/profiles/velopert">velopert의 프로필</Link>
			</li>
			<li>
				<Link to="/profiles/gildong">gildong 프로필</Link>
			</li>
			{/* 아래부터는 중첩 라우팅 예시 */}
			<li>
				<Link to="/articles">게시글 목록</Link>
			</li>
		</ul>
      </div>
    );
  };

export default Basic;