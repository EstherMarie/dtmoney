import { Container } from "../container";
import { StyledListagem } from "./Listagem";
import { ListItem } from "./ListItem";

export function Listagem() {
  return (
    <Container>
      <StyledListagem>
        <div className="title-section">
          <h2>Listagem</h2>
          <p>4 itens</p>
        </div>
        <div className="list-section">
          <ListItem
            titulo="Título"
            preco={1500}
            categoria="Categoria"
            data="13/04/2022"
          />
        </div>
      </StyledListagem>
    </Container>
  );
}
