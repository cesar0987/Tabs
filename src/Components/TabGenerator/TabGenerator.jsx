import style from './TabGenerator.module.css';


const TabGenerator = ({ tabs,activeTabIndex,setActiveTabIndex }) => {

  const handleTabClick = (index) => {
     (index === activeTabIndex) ? setActiveTabIndex(0): setActiveTabIndex(index) 
  };

  return (
    <div className={style.container}>
      {tabs.map((tab, index) => {
        const checkActive = index===activeTabIndex ? style.activeTab : style.tab;
        return(
        <>
         <div
          key={index}
          tab={tab}
          className={checkActive}
          onClick={() => handleTabClick(index)}
        >{tab}
        </div>
        </>
      )})}
      
    </div>
  );
}

export default TabGenerator;