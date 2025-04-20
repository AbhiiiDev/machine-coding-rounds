import Settings from "./Settings";
import Profile from "./Profile";
import Interest from "./Interest";
import "../styles.css";
import { useState } from "react";

const TabView = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Abhishek",
    age: 21,
    email: "vermaabhii397@gmail.com",
    interests: ["javascript", "react", "AI/ML"],
    settings: ["dark"],
  });
  const tabs = [
    {
      name: "Profile",
      component: <Profile d={data} setData={setData} />,
    },
    {
      name: "Interest",
      component: <Interest data={data} setData={setData} />,
    },
    {
      name: "Settings",
      component: <Settings data={data} />,
    },
  ];

  const activeTabView = tabs[activeTab].component;
  return (
    <div>
      Tab Panel
      <div className="tab-head">
        {tabs.map((t, idx) => (
          <>
            <div className="single-tab" onClick={() => setActiveTab(idx)}>
              {t.name}
            </div>
          </>
        ))}
      </div>
      <div className="tab-view">{activeTabView}</div>
    </div>
  );
};

export default TabView;
