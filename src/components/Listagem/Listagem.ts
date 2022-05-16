import styled from "styled-components";

export const StyledListagem = styled.section`
  width: 100%;
  position: relative;
  top: -100px;

  h2 {
    color: var(--title);
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--text);
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
