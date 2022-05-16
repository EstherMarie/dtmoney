import { StyledListItem } from "./ListItem";

interface ListItemProps {
  titulo: string;
  preco: number;
  categoria: string;
  data: string;
}

export function ListItem({ titulo, preco, categoria, data }: ListItemProps) {
  return (
    <StyledListItem>
      <div className="card-body">
        <p className="title">{titulo}</p>
        <p className="price">R$ {preco}</p>
      </div>

      <div className="card-footer">
        <p className="category">{categoria}</p>
        <p className="date">{data}</p>
      </div>
    </StyledListItem>
  );
}
