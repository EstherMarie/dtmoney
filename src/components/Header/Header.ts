import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--blue);
  height: 212px;
  padding-top: 32px;

  .logo {
    width: 135px;
    height: 80px;
    position: relative;
  }

  .button {
    width: 130px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;

    font-weight: 600;
    font-size: 12px;

    color: var(--white);
    background-color: var(--buttonHeader);

    border: none;
    border-radius: 5px;
  }

  @media (min-width: 500px) {
    .logo {
      width: 172px;
      height: 80px;
      position: relative;
    }

    .button {
      width: 195px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 32px;
      padding-right: 32px;

      font-weight: 600;
      font-size: 16px;

      font-size: 16px;
    }
  }
`;
