import styled from 'styled-components';

const Button = styled.button`
    display: block;
    padding: 6px 10px;
    color: ${(porps) => porps.color || '#fff' };
    font-size: 18px;
    border-radius: 3px;
    background-color: crimson;
    border: 0;
    position: absolute;
    
    &:hover{
        background: black;
    }
`;

const Contents = styled.div`
    width:200px;
    height:200px;
    position: absolute;
    z-index: 99999;
    left:300px;
    border:1px solid red;

    h1{
        font-size:1em;
        color:red;
    }

    ${Button}{
        background: blue;
    }
`;

const Sty = () => {
    return(
        <div>
            <Button color="yellow">버튼1</Button>
            <Contents>
                <Button color="">버튼2</Button>
            </Contents>
        </div>
    );
}

export default Sty;