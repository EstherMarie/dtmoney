import { StyledListItem } from "./ListItem";

interface ListItemProps {
  tipo: "income" | "outcome";
  titulo: string;
  preco: number;
  categoria: string;
  data: string;
}

export function ListItem({
  tipo,
  titulo,
  preco,
  categoria,
  data,
}: ListItemProps) {
  return (
    <StyledListItem>
      <div className="card-body">
        <p className="title">{titulo}</p>
        <div>
          {tipo == "income" ? (
            <p className="price-income">R$ {preco}</p>
          ) : (
            <p className="price-outcome">- R$ {preco}</p>
          )}
        </div>
      </div>

      <div className="card-footer">
        <p className="category">{categoria}</p>
        <p className="date">{data}</p>
      </div>
    </StyledListItem>
  );
}
