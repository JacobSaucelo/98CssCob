import React from "react";

const CompTabs = () => {
  return (
    <section>
      <menu role="tablist">
        <li role="tab" aria-selected="true">
          <a href="#tabs">Desktop</a>
        </li>
        <li role="tab">
          <a href="#tabs">My computer</a>
        </li>
      </menu>
      <div class="window" role="tabpanel">
        <div class="window-body">
          <p>the tab content</p>
        </div>
      </div>
    </section>
  );
};

export default CompTabs;
