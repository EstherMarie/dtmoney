import Image from "next/image";
import React from "react";
import { StyledCard } from "../CardSection";

interface CardProps {
  title: "Entrada" | "Saida" | "Total";
  cash: string;
  date?: string;
  icon: string;
}

export function Card({ title, cash, date, icon }: CardProps) {
  let fullDate = new Date();
  let data = `${fullDate.getDay()} de ${fullDate.getMonth()}`;

  // if (tipo === "Entrada") {
  //   extrato = {
  //     ...extrato,
  //     title: "Entradas",
  //     icon: iconEntradas,
  //   };
  // } else if (tipo === "Saida") {
  //   extrato = {
  //     ...extrato,
  //     title: "Saídas",
  //     icon: iconSaidas,
  //   };
  // } else {
  //   extrato = {
  //     ...extrato,
  //     title: "Total",
  //     icon: iconTotal,
  //   };
  // }

  return (
    <StyledCard className={title == "Total" ? "cardTotal" : ""}>
      <div className="card-header">
        <div className="title">{title}</div>
        <div className="icon">
          <Image src={icon} alt="" />
        </div>
      </div>
      <div className="card-body">
        <div className="cash">
          R$ <span> {cash}</span>
        </div>
        <div className="text">Última entrada dia {date}</div>
      </div>
    </StyledCard>
  );
}
