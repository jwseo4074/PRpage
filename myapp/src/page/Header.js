import '../style/Header.css';

function Header() {
	
  function hamburgerToggle() {
    // const sidebarBtn = document.querySelector(".header-hbg-btn");
    // const sidebarBox = document.querySelector(".mobiel-header-bottom-box");
    // sidebarBox.classList.toggle('hamburger_active');
    // sidebarBtn.classList.toggle('active');
    console.log("Toggle");
  }

  return (
    <>
      <div className="headerForm">
          <div className="headerLeftBox">
          </div>

          <div className="headerCenterBox">
          </div>
        
          <div onClick={() => hamburgerToggle()} className="headerRightBox">
            <div className="headerRightBoxButton">
                <div className="headerRightBoxButtonTop"></div>
                <div className="headerRightBoxButtonMiddle"></div>
                <div className="headerRightBoxButtonBottom"></div>
            </div>
          </div>
      </div>
    </>
  );
};




export default Header;
