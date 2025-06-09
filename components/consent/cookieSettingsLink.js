'use client'

const CookieSettingsLink = ({}) => {

    const openSettings = () => {
      UC_UI.showSecondLayer();
    }
    return (
      <a href="#" onClick={openSettings}> Cookie-Einstellungen </a>
    );
};

export default CookieSettingsLink;