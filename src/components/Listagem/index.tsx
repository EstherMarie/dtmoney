import { Container } from "../container";
import { StyledListagem } from "./Listagem.styled";
import { ListItem } from "./ListItem";

export function Listagem() {
  return (
    <section>
      <Container>
        <StyledListagem>
          <div className="title-section">
            <h2>Listagem</h2>
            <p>4 itens</p>
          </div>
          <div className="desktop-title-section">
            <div className="title-first-section">
              <p>Título</p>
              <div>
                <p>Preço</p>
              </div>
            </div>
            <div className="title-last-section">
              <p>Categoria</p>
              <div>
                <p>Data</p>
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
    </section>
  );
}
