import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--blue);
  height: 212px;
  padding-top: 32px;
  padding: 24px;

  .container {
    max-width: calc(1120px - 24px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 48px;
  }

  .logo {
    width: 80px;
    height: 80px;
    position: relative;
  }

  .button {
    padding: 12px 32px;
    
    font-weight: 600;
    font-size: 16px;
    
    color: var(--white);
    background-color: var(--buttonHeader);
    
    border: none;
    border-radius: 5px;
  }
`
