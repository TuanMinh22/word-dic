import './Footer.css'
import { Facebook, Instagram, GitHub } from '@material-ui/icons'

export default function Footer() {
    return (
        <div className="footer">
            <hr style={{ width: "90%", marginTop: 20 }} />
            <span className="name">
                Made by{" "}
                <a href="https://www.youtube.com/c/RoadsideCoder" target="__blank">
                    Nguyễn Tuấn Minh
                </a>
            </span>
            <div className="iconContainer">
                <a href="https://www.facebook.com/minh.tuan.5621149/" target="__blank">
                    <Facebook />
                </a>
                <a href="https://www.instagram.com/minhmax2001/" target="__blank">
                    <Instagram />
                </a>
                <a href="https://github.com/tuanminh01" target="__blank">
                    <GitHub />
                </a>
            </div>
        </div>
    )
}
