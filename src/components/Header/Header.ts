import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--blue);
  height: 212px;
  padding-top: 32px;

  .logo {
    width: max(135px, 172px);
    height: 80px;
    position: relative;
  }

  .button {
    width: max(130px, 195px);
    padding: 12px 32px;
    
    font-weight: 600;
    font-size: 16px;
    
    color: var(--white);
    background-color: var(--buttonHeader);
    
    border: none;
    border-radius: 5px;
  }
`
