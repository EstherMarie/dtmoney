import React from "react";
import { StyledContainer } from "./Container.styled";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
