import { useContext } from "react";
import { Header } from "../../Components/Header";
import { SearchForm } from "../../Components/SearchForm";
import { Summary } from "../../Components/Summary";
import { TransactionsContext } from "../../Contexts/TransactionsContext";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions(){
    const {transactions} = useContext(TransactionsContext)

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