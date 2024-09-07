import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookIcon from "@mui/icons-material/Book";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import GetMember from "../../../components/get-member/get-member.component";
import Return from "../../../components/return/return.component";
import AddTransaction from "../../../components/add-transaction/add-transaction.component";
import AddMember from "../../../components/add-member/add-member.component";
import AddBook from "../../../components/add-book/add-book.component";
import { AuthContext } from "../../../context/auth-context";
import "./admin-dashboard.styles.css";
import "../member-dashboard/member-dashboard.styles.css";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const AdminDashboard = () => {
  const [active, setActive] = useState("addbooks");
  const [sidebar, setSidebar] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/users/getuser/" + user._id
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? (
              <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />
            ) : (
              <DoubleArrowIcon
                style={{ fontSize: 25, color: "rgb(234, 68, 74)" }}
              />
            )}
          </IconButton>
        </div>

        <div
          className={sidebar ? "dashboard-options active" : "dashboard-options"}
        >
          <div className="dashboard-logo">
            <LibraryBooksIcon style={{ fontSize: 50 }} />
            <p className="logo-name">LCMS</p>
          </div>
          <p
            className={`dashboard-option ${
              active === "profile" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("profile");
              setSidebar(false);
            }}
          >
            <AccountCircleIcon className="dashboard-option-icon" /> Profile
          </p>
          <p
            className={`dashboard-option ${
              active === "addbook" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("addbook");
              setSidebar(false);
            }}
          >
            <BookIcon className="dashboard-option-icon" />
            Add Book
          </p>
          <p
            className={`dashboard-option ${
              active === "addtransaction" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("addtransaction");
              setSidebar(false);
            }}
          >
            <ReceiptIcon className="dashboard-option-icon" /> Add Transaction{" "}
          </p>
          <p
            className={`dashboard-option ${
              active === "getmember" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("getmember");
              setSidebar(false);
            }}
          >
            <AccountBoxIcon className="dashboard-option-icon" /> Get Member{" "}
          </p>
          <p
            className={`dashboard-option ${
              active === "addmember" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("addmember");
              setSidebar(false);
            }}
          >
            <PersonAddIcon className="dashboard-option-icon" /> Add Member{" "}
          </p>
          <p
            className={`dashboard-option ${
              active === "returntransaction" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("returntransaction");
              setSidebar(false);
            }}
          >
            <AssignmentReturnIcon className="dashboard-option-icon" /> Return{" "}
          </p>
          <p className={`dashboard-option`} onClick={logout}>
            <PowerSettingsNewIcon className="dashboard-option-icon" /> Log out{" "}
          </p>
        </div>
        <div className="dashboard-option-content">
          <div className="member-profile-content" id="profile@member">
            <div className="user-details-topbar">
              <img
                className="user-profileimage"
                src="./assets/images/Profile.jpg"
                alt=""
              ></img>
              <div className="user-info">
                <p className="user-name">{memberDetails?.userFullName}</p>
                <p className="user-id">
                  {memberDetails?.userType === "Student"
                    ? memberDetails?.admissionId
                    : memberDetails?.employeeId}
                </p>
                <p className="user-email">{memberDetails?.email}</p>
                <p className="user-phone">{memberDetails?.mobileNumber}</p>
              </div>
            </div>
            <div className="user-details-specific">
              <div className="specific-left">
                <div className="specific-left-top">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Age</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.age}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Gender</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.gender}
                    </span>
                  </p>
                </div>
                <div className="specific-left-bottom">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>DOB</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.dob}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Address</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.address}
                    </span>
                  </p>
                </div>
              </div>
              <div className="specific-right">
                <div className="specific-right-top">
                  <p className="specific-right-topic">
                    <b>Points</b>
                  </p>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    540
                  </p>
                </div>
                <div className="dashboard-title-line"></div>
                <div className="specific-right-bottom">
                  <p className="specific-right-topic">
                    <b>Rank</b>
                  </p>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    {memberDetails?.points}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="dashboard-addbooks-content"
            style={active !== "addbook" ? { display: "none" } : {}}
          >
            <AddBook />
          </div>
          <div
            className="dashboard-transactions-content"
            style={active !== "addtransaction" ? { display: "none" } : {}}
          >
            <AddTransaction />
          </div>
          <div
            className="dashboard-addmember-content"
            style={active !== "addmember" ? { display: "none" } : {}}
          >
            <AddMember />
          </div>
          <div
            className="dashboard-addmember-content"
            style={active !== "getmember" ? { display: "none" } : {}}
          >
            <GetMember />
          </div>
          <div
            className="dashboard-addmember-content"
            style={active !== "returntransaction" ? { display: "none" } : {}}
          >
            <Return />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
