import styled from "styled-components";

export const StyledCardSection = styled.section`
  position: relative;
  top: -84px;
  overflow-x: auto;

  .card-list {
    display: flex;
    justify-content: space-between;
    padding: 0;

    @media (max-width: 1080px) {
      gap: 16px;
    }

    padding-right: 24px;

    .cardTotal--green {
      background-color: var(--green);
      color: var(--white);

      p {
        color: var(--white);
        margin: 0;
      }
    }

    .cardTotal--red {
      background-color: var(--red);
      color: var(--white);

      p {
        color: var(--white);
        margin: 0;
      }
    }
  }

  @media (min-width: 980px) {
      .card-list {
        width: 100%;
        overflow-x: unset;
        display: flex;
        justify-content: space-between;

        padding-right: 0;

        gap: 32px;
      }
  }
`;

export const StyledCard = styled.li`
  min-width: 300px;
  /* height: 200px; */

  border-radius: 5px;

  padding: 20px 20px 42px;

  color: var(--title);
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: unset;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 14px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }

  .card-body {
    margin-top: 35px;

    .cash {
      font-size: 30px;
      line-height: 45px;

      span {
        font-weight: 500;
      }
    }

    .text {
      font-size: 12px;
      line-height: 12px;
      color: var(--text);
    }
  }

  @media (min-width: 980px) {
    height: 136px;
    width: 352px;

    .card-body {
      margin-top: 7.5px;

      .text {
        display: none;
      }
    }
  }
`;
