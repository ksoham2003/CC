import "./Header.css";
import LogoImg from "../../assets/Logo.png";
import Logoimg2 from "../../assets/2.png";
import AccountImg from "../../assets/user2.png";

import { VscAccount } from "react-icons/vsc";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    key: '1',
    label: (
        <div style={{display: "flex", justifyContent: "center"}}>
            <img className="dropdown-img" src={LogoImg} />
        </div>
    ),
  },
  {
    key: '2',
    label: (
      <span>Name: Soham Kadam</span>
    ),
    disabled: false,
  },
  {
    key: '3',
    label: (
      <span>Email: sohamkadam@gmail.com</span>
    ),
    disabled: false,
  },
  {
    key: '4',
    label: (
      <span>Department: CSE</span>
    ),
    disabled: false,
  },
  {
    key: '5',
    label: (
      <span>Year: 3rd</span>
    ),
    disabled: false,
  },
  {
    key: '6',
    label: (
      <span>Div: A</span>
    ),
    disabled: false,
  },
  {
    key: '7',
    label: (
      <span>Mobile: +91123456789</span>
    ),
    disabled: false,
  },
  {
    key: '8',
    danger: true,
    label: 'Logout',
  },
];

function Header(){
    return(
        <div className="header-main-div">
            <img src={Logoimg2} style={{height: 80}} alt="" className="header-img"/>
            <img src={LogoImg} alt="" className="header-img"/>
            
            <Dropdown
                menu={{
                items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                {/* <VscAccount className="profile-icon"/> */}
                <img className="account-img" src={AccountImg}/>
                </Space>
                </a>
            </Dropdown>

        </div>
    )
}

export default Header;