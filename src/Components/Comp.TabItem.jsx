const CompTabItem = ({ value }) => {
  return (
    <div className="window-body">
      <h3>{value}</h3>
      <p style={{ fontWeight: 600 }}>the tab content</p>
      <p>the tab content</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          odit.
          <ul className="tree-view" style={{ margin: "0.5rem" }}>
            <li>We can put</li>
            <li>
              <strong style={{ color: "purple" }}>✨ {value}😭🔥 ✨</strong>
            </li>
            <li>We want in here</li>
          </ul>
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          explicabo facilis sunt doloremque.
        </li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  );
};

export default CompTabItem;
