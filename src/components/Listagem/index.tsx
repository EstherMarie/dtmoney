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
        <div className="desktop-title-section">
          <div className="title-first-section">
            <h3>Título</h3>
            <div>
              <h3>Preço</h3>
            </div>
          </div>
          <div className="title-last-section">
            <h3>Categoria</h3>
            <div>
              <h3>Data</h3>
            </div>
          </div>
        </div>
        <ul className="list-section">
          <ListItem
            tipo="income"
            titulo="Título"
            preco={1500}
            categoria="Categoria"
            data="13/04/2022"
          />
          <ListItem
            tipo="outcome"
            titulo="Saída"
            preco={500}
            categoria="Categoria"
            data="13/04/2022"
          />
        </ul>
      </StyledListagem>
    </Container>
  );
}
