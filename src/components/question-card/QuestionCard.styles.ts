import styled  from 'styled-components';

export const Wrapper = styled.div`
    max-width: 40vw;
    background: #ebfeff;
    border-radius: 10px;
    border: 1.4px solid #d38558;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1.3rem;
        font-family: 'Times New Roman', Times, serif;
    }


    @media (max-width: 768px) {
        max-width: 70vw;

        p {
        font-size: 1.1rem;

        }
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
            correct
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
                : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #429DC4, #598D91)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);

    }


    @media (max-width: 768px) {
        max-width: 70vw;

        button {
            font-size: .8rem;
            height:auto;
        }
    }

`