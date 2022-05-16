import Image from "next/image";
import React from "react";
import { StyledCard } from "./Card";
import iconEntradas from "../../../public/icons/Entradas.svg";

interface CardProps {
  title: string;
  cash: string | number;
  icon: string;
  date: string;
}

export function Card({
  title,
  cash = "1.500,00",
  icon = iconEntradas,
  date = "13 de abril",
}: CardProps) {
  return (
    <StyledCard>
      <div className="card-header">
        <div className="title">{(title = "Entradas")}</div>
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
