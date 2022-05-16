import Image from "next/image";
import Logo from "../../../public/icons/Logo.svg";
import { StyledHeader } from "./Header";
import { Container } from "../container";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <div className="logo">
          <Image src={Logo} alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <button type="button" className="button">
          Nova transação
        </button>
      </Container>
    </StyledHeader>
  );
}
