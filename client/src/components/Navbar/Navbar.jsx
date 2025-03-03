import './navbar.scss';
import {useState} from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="./logo.png" alt="pm_logo" />
                </a>
            </div>
            <div className="right">
                <a href="">Главная</a>
                <a href="">Где получить профилактику?</a>
                <a href="">Связь с консултантом</a>
                <a href="">Блог</a>
                <a href="">О проекте</a>
                <a href="">Контакты</a>
                <div className="menuIcon">
                    <img 
                    src="./menu.png"
                    alt="" 
                    onClick={() => setOpen(prev => !prev)}
                    />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="">Главная</a>
                    <a href="">Где получить профилактику?</a>
                    <a href="">Связь с консултантом</a>
                    <a href="">Блог</a>
                    <a href="">О проекте</a>
                    <a href="">Контакты</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;