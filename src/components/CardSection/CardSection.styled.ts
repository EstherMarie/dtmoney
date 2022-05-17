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

      h3, p {
        color: var(--white);
        margin: 0;
      }
    }

    .cardTotal--red {
      background-color: var(--red);
      color: var(--white);

      h3, p {
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
