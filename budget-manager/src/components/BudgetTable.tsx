function BudgetTable({ budgetData }: { budgetData: { categoria: string; quantidade: number }[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {budgetData.map((item:{ categoria: string; quantidade: number }) => (
                    <tr key={item.categoria}>
                        <td>{item.categoria}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BudgetTable;