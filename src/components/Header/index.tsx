import Image from "next/image";
import Logo from "../../../public/icons/Logo.svg";
import { StyledHeader } from "./Header";
import { Container } from "../container";

export function Header() {
  let date = new Date();
  let dia = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <StyledHeader>
      <Container>
        <div className="logo">
          <h1>
            <Image
              src={Logo}
              alt="dt Money"
              layout="fill"
              objectFit="contain"
            ></Image>
          </h1>
        </div>

        {/* <div className="date-section">{dia}</div> */}
        <button type="button" className="button">
          Nova transação
        </button>
      </Container>
    </StyledHeader>
  );
}
