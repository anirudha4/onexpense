import Header from "@components/dashboard/Header"
import Statistics from "@components/dashboard/Statistics"
import Transactions from "@components/dashboard/Transactions"

const Dashboard = () => {
    return (
        <div className="h-full flex flex-col relative">
            <Header />
            <Statistics />
            <div className="dashboard-grid">
                <Transactions />
            </div>
        </div>
    )
}

export default Dashboard