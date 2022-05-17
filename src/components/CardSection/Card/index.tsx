import Image from "next/image";
import React from "react";
import { StyledCard } from "./Card.styled";

interface CardProps {
  title: "Entradas" | "Saídas" | "Total";
  cash: number;
  date?: string;
  icon: string;
}

export function Card({ title, cash, date, icon }: CardProps) {
  let fullDate = new Date();
  let data = `${fullDate.getDay()} de ${fullDate.getMonth()}`;

  let cardClass = "";

  if (title != "Total") {
    cardClass = "";
  } else if (cash >= 0) {
    cardClass = "cardTotal--green";
  } else {
    cardClass = "cardTotal--red";
  }

  return (
    <StyledCard className={cardClass}>
      <div className="card-header">
        <h3 className="title">{title}</h3>
        <div className="icon">
          <Image src={icon} alt="" />
        </div>
      </div>
      <div className="card-body">
        <p className="cash">
          R$ <span> {cash}</span>
        </p>
        <p className="text">Última entrada dia {date}</p>
      </div>
    </StyledCard>
  );
}
