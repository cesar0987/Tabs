import './App.module.css';
import styles from './App.module.css';
import React, { useState } from 'react';
import TabGenerator from '../TabGenerator/TabGenerator';

function App() {
  const [tabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={styles.container}>
      <TabGenerator tabs={tabs} 
      activeTabIndex={activeTabIndex}
      setActiveTabIndex={setActiveTabIndex}
/>
<div className={styles.containText}>Este es el contenido del {tabs[activeTabIndex]}</div>
    </div>
  );
}

export default App;
