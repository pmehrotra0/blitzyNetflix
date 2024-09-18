import NavData from '../assets/data/NavData.json';

const NavBar = () => {
    return(<div className='nav-wrapper'>
        <div className='nav-left'>
            <div>🖥️Netflix</div>
            <div className='nav-menu'>
            {NavData.map((item) => {
                return <div className='nav-item' key={item.id}>{item.title}</div>
            })}
            </div>
        </div>
        <div className='nav-right'>
            <div className='search-input'><input type="text"/></div>
            <div>👤</div>
        </div>
    </div>)
}

export default NavBar;