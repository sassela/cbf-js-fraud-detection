import { Transaction } from "./Transaction";

export interface Hit {
  _index: string;
  _id: string;
  _score: number;
  _source: Transaction
}
