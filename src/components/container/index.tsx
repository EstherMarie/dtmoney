import React from "react";
import { StyledContainer } from "./Container";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
