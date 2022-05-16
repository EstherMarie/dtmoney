import styled from "styled-components";

export const StyledListItem = styled.div`
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
    gap: 20px;

    .title {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: var(--title);
    }

    .price {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: var(--green);
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
`;
