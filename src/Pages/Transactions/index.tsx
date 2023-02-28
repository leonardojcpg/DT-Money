import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { SearchForm } from "../../Components/SearchForm";
import { Summary } from "../../Components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
interface Transaction{
    id: number;
    description: string;
    type: 'income' | 'outcome'
    price: number;
    category: string;
    createdAt: string;
}
export function Transactions(){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions(){
        const response = await fetch('http://localhost:5173/transactions')
        const data = await response.json()

        console.log(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])


    return (
        <div>
            <Header/>
            <Summary/>
        <TransactionsContainer>
            <SearchForm/>
        <TransactionsTable>
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                            <td width='50%'>{transaction.description}</td>
                            <PriceHighLight variant={transaction.type}>
                                {transaction.price}
                            </PriceHighLight>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </TransactionsTable>

        </TransactionsContainer>
        </div>
    )
    }