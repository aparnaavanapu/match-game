import './index.css'

const TabItem=(props)=>{
    const {tabDetails,onChangeTab,isActive}=props
    const {tabId,displayText}=tabDetails

    const handleChangeTab=()=>{
        onChangeTab(tabId);
    }
    const activeTabClass=isActive&&'active-tab';

    return(
        <li><button className={`tab-name ${activeTabClass}`} onClick={handleChangeTab}>
        {displayText}
    </button></li>
    )

}

export default TabItem