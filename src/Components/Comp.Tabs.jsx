import { useState } from "react";

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
    <section>
      <menu role="tablist">
        {data.map((tab) => (
          <li
            role="tab"
            aria-selected={tab.isSelected}
            key={tab.id}
            onClick={() => handleSelected(tab.id)}
          >
            <a href="#">{tab.value}</a>
          </li>
        ))}
      </menu>
      <div className="window" role="tabpanel">
        <div className="window-body">
          <p>the tab content</p>
        </div>
      </div>
    </section>
  );
};

export default CompTabs;
