import { StyledCardSection } from "./CardSection";
import { Card } from "./Card";

import iconEntradas from "../../../public/icons/Entradas.svg";
import iconSaidas from "../../../public/icons/Saidas.svg";
import iconTotal from "../../../public/icons/Total.svg";
import { Container } from "../container";

export function CardSection() {
  return (
    <StyledCardSection tabIndex={0}>
      <Container>
        <ul className="card-list">
          <Card
            title="Entrada"
            cash={1500}
            icon={iconEntradas}
            date="13/04/2022"
          />
          <Card title="Saida" cash={500} icon={iconSaidas} />
          <Card title="Total" cash={1000} icon={iconTotal} />
        </ul>
      </Container>
    </StyledCardSection>
  );
}
