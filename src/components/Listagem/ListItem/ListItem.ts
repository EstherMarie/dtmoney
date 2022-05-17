import styled from "styled-components";

export const StyledListItem = styled.li`
  height: 128px;
  background-color: var(--white);
  border-radius: 5px;
  padding: 16px 24px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: unset;
  }

  .card-body {
    height: 60%;

    .title {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: var(--title);
    }

    .price-income {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: var(--green);
    }

    .price-outcome {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: var(--red);
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .category,
    .date {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: var(--text);
    }
  }

  @media (min-width: 700px) {
    height: 64px;
    padding: 20px 32px;

    flex-direction: row;
    align-items: center;

    .card-body {
      width: 70%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &>div {
        width: 35%;
      }

      .price-income, .price-outcome {
        font-size: 16px;
        text-align: left;
      }
    }

    .card-footer {
      width: 33%;
      justify-content: space-between;
    }
  }
`;
