import { Outlet, useNavigate } from 'react-router-dom';

const Layout_useNavi = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    };

    const goArticles = () => {
        // articles 경로로 이동
        // navigate('/articles');
        // replace : 페이지 이동 시 현재 페이지를 기록에 남기지 않는다.
        navigate('/articles', { replace: true });

    };

    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout_useNavi;