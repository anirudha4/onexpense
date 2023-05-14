import Header from "@components/dashboard/Header"
import Statistics from "@components/dashboard/Statistics"
import Transactions from "@components/dashboard/Transactions"

const Dashboard = () => {
    return (
        <div className="flex flex-col relative h-full">
            <Header />
            <Statistics />
            <Transactions />
        </div>
    )
}

export default Dashboard