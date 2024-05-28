/*
    currently 2 lang muna yung data
*/
import { useState } from "react";
import CompTabItem from "./Comp.TabItem";

const CompTabs = () => {
  const [data, setData] = useState([
    {
      id: 1,
      isSelected: true,
      value: "Desktop",
    },
    {
      id: 2,
      isSelected: false,
      value: "My Computer",
    },
  ]);

  const handleSelected = (currentId) => {
    const updatedData = data.map((tab) => {
      if (tab.id == currentId) {
        return { ...tab, isSelected: true };
      }
      return { ...tab, isSelected: false };
    });

    setData(updatedData);
  };

  return (
    <section style={{ width: "100%" }}>
      <menu role="tablist">
        {data.map((tab) => (
          <li
            role="tab"
            aria-selected={tab.isSelected}
            key={tab.id}
            onClick={() => handleSelected(tab.id)}
          >
            <div style={{ padding: "0.3rem" }}>{tab.value}</div>
            {/* <a href="#">{tab.value}</a> */}
          </li>
        ))}
      </menu>
      <div className="window" role="tabpanel">
        {data.map((content) => {
          if (content.isSelected) {
            return <CompTabItem key={content.id} value={content.value} />;
          }
        })}
      </div>
    </section>
  );
};

export default CompTabs;
