import styled from "styled-components";

export const StyledListagem = styled.section`
  width: 100%;
  position: relative;
  top: -84px;

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

  .desktop-title-section {
    display: none;
  }

  .list-section {
    padding-left: 0;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 700px) {
    .title-section {
      clip: rect(0 0 0 0); 
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap; 
      width: 1px;

    p {
      display: none;
    }
  }

    .desktop-title-section {
      width: 100%;
      padding: 0 32px;

      display: flex;
      flex-direction: row;

      color: var(--text);
      font-family: var(--font-title);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;

      h3 {
        margin-bottom: 4px;
        font-weight: 400;
      }
      
      .title-first-section {
        width: 70%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &>div {
          width: 35%;
        }
      }

      .title-last-section {
        width: 33%;
        
        display: flex;
        justify-content: space-between;

        &>div {
          width: 77px;
        }
      }
    }
  }
`;
