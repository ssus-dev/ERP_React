import Navigation from "./Component/Navigator";

const questionsAnswers = [
	{
		question: "How many team members can I invite?",
		answer:
			"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
	},
	{
		question: "What is the maximum file upload size?",
		answer:
			"No more than 2GB. All files in your account must fit your allotted storage space.",
	},
	{
		question: "How do I reset my password?",
		answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
	},
	{
		question: "Can I cancel my subscription?",
		answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
	},
	{
		question: "Do you provide additional support?",
		answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
	},
];

const menuList = [
    {
        firstDepth : "기본관리",
        // secondDepth : ["회사관리","상품관리"],
		secondDepth : "회사관리"
    },
    {
        firstDepth : "회원관리",
        // secondDepth : ["직원관리","거래처관리","권한관리"],
		secondDepth : "직원관리"
    },
    {
        firstDepth : "전자결재",
        // secondDepth : ["전자결재"],
		secondDepth : "전자결재"
    },
    {
        firstDepth : "상품관리",
        // secondDepth : ["상품등록","상품목록"],
		secondDepth : "상품등록",
    },
    {
        firstDepth : "발주관리",
        // secondDepth : ["견적관리","견적서작성","발주목록"],
		secondDepth : "견적관리",
    },
    {
        firstDepth : "환경설정",
        // secondDepth : ["로그아웃"],
		secondDepth : "로그아웃"
    },
];

const App = () => {
	return (
		<div>
			<Navigation menuList={menuList} />
		</div>
	);
}

export default App;
