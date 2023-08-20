import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 4rem;
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
`;

export const FormContainer = styled.form`
  border: 0;
  border-radius: 8px;
  background: #333;

  padding: 1rem 2rem;
  width: 30%;

  h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: white;
  }
`;

export const FormGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  label {
    color: white;
  }

  input {
    width: 100%;
    outline: none;
    padding: 1rem;
    background-color: #202024;
    border: 0;
    border-radius: 8px;
    color: white;
    font-weight: bold;
  }

  button {
    width: 100%;
    padding: 1rem;
    color: white;
    font-weight: bold;
    background-color: #075985;
    border: 0;
    border-radius: 8px;
    margin-bottom: 1rem;

    cursor: pointer;

    &:hover {
      transition: 0.2s;
      opacity: 0.7;
    }
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  border: 0;
  border-radius: 8px;
  background: #333;

  padding: 1rem 2rem;
  width: 30%;

  h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: white;
  }

  div {
    overflow: auto;
    height: 25rem;
    table {
      width: 100%;
      margin-top: 3.5rem;
      border-collapse: collapse;
      thead {
        th {
          text-align: left;
          padding: 0.6rem;
          color: white;
          background-color: black;
        }
      }
      tbody {
        td {
          text-align: left;
          padding: 0.8rem;
          color: white;
          background-color: #202024;
        }
      }
    }
  }
`;
