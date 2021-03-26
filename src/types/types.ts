import { ReactNode } from "react";

export interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
