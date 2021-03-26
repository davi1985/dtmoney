import logoIcon from "../../assets/logo.svg";

import { HeaderProps } from "../../types/types";

import { Container, Content } from "./styles";

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoIcon} alt="dtmoney" />

        <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}
