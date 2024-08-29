import RightSideBar from "@/components/RightSideBar";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Kirill", lastName: "Krymov", email:"kkrymov.x@gmail.com" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={3921.92}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 3921.92 },{currentBalance: 5641.92 }]}
      />
    </section>
  );
};

export default Home;
