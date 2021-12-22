import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo.png";

const DropDownMenu = () => {
	return (
		<div className="dropdownmenu">
			<Link to="/vms/all">All Data</Link>
			<Link to="/vms/name">By Name</Link>
			<Link to="/vms/phone">By Phone Number</Link>
			<Link to="/vms/email">By Email</Link>
			<Link to="/vms/contactperson">By Contact Person</Link>
			<Link to="/vms/department">By Department</Link>
			<Link to="/vms/company">By Comapany</Link>
			<Link to="/vms/driver">By driver's Name</Link>
			<Link to="/vms/date">By Date</Link>
		</div>
	);
};

function Header() {
	const ref = useRef();

	const [open, setOpen] = useState(false);

	useEffect(() => {
		const ifClickedOutside = (e) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", ifClickedOutside);
		return () => {
			document.removeEventListener("mousedown", ifClickedOutside);
		};
	}, [open]);

	return (
		<div className="header">
			<div className="header__line1">
				<div className="header__name">
					DANA GROUP VISITORS MANAGEMENT SYSTEM
				</div>
				<Link to="/vms">
					<img className="header__logo" src={Logo} />
				</Link>
			</div>
			<div className="header__menu">
				<Link to="/vms/register" className="header__menu-item">
					<div>Register</div>
				</Link>

				<Link className="header__menu-item" ref={ref}>
					<div
						// onMouseOver={() => setOpen(!open)}
						onClick={() => setOpen(!open)}>
						View
						{open && <DropDownMenu />}
					</div>
				</Link>
				<Link to="/vms/" className="header__menu-item">
					<div>Logout</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
