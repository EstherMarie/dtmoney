import { StyledCardSection } from "./CardSection.styled";
import { Card } from "./Card";

import iconEntradas from "../../../public/icons/Entradas.svg";
import iconSaidas from "../../../public/icons/Saidas.svg";
import iconTotal from "../../../public/icons/Total.svg";
import { Container } from "../container";

export function CardSection() {
  return (
    <StyledCardSection tabIndex={0}>
      <Container>
        <h2 className="sr-only">Saldo</h2>
        <ul className="card-list">
          <Card
            title="Entradas"
            cash={1500}
            icon={iconEntradas}
            date="13/04/2022"
          />
          <Card title="Saídas" cash={500} icon={iconSaidas} />
          <Card title="Total" cash={1000} icon={iconTotal} />
        </ul>
      </Container>
    </StyledCardSection>
  );
}
