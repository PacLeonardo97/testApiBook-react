import styled from "styled-components";

const ContainerBooks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.75);
  background-color: #20232a;
  color: white;

  h2.title {
    align-self: center;
    font-weight: bold;
    font-size: 22px;
  }

  img {
    height: 225px;
    width: 225px;
    align-self: center;
    margin: 16px 0px;
    justify-content: space-between;
  }

  p {
    margin: 8px;
    font-size: 17px;
    letter-spacing: 0.5px;

    :last-child {
      margin-bottom: 16px;
    }
    
    span {
      font-weight: bold;
      color: #c5a5c5;
    }
  }
`;

const FormContainer = styled.form`
    .containerInput {
        margin: 16px 0px;
        text-align: center;
    }
    button { 
        margin: 16px 0px;
    }
`;

export { ContainerBooks, FormContainer };
