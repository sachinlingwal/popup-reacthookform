import React, { useEffect, useState } from "react";
import classes from "./CreateOrganizationForm.module.css";
import { FiX } from "react-icons/fi";
import OrganizationInfo from "./OrganizationInfo";
import IdamDetails from "./IdamDetails";

function CreateOrganizationForm(props) {
  const { onRequestClose } = props;
  const [userData, setUserData] = useState([]);

  //data for header table
  const orgInfoIDAMDetail = [
    { id: 1, name: "Organization Info" },
    { id: 2, name: "IDAM Details" },
  ];
  //state for navigation orgInfo and IDAM info
  const [selected, setSelected] = useState("");

  //funcation for navigation
  const changePage = (id) => {
    setSelected(id);
  };

  //delete user details from storage
  const deleteItemFromLocalStorage = () => {
    localStorage.removeItem("userData");
  };
  useEffect(() => {
    changePage(1);
  }, []);

  return (
    <div className={classes.App}>
      <div className={classes.main_form_container}>
        <div className={classes.header}>
          <div>
            <span>Create Organization</span>
          </div>
          <div
            style={{ cursor: "pointer", height: "0em" }}
            onClick={() => deleteItemFromLocalStorage()}
          >
            <FiX size={20} color="#9c9c9c" onClick={onRequestClose} />
          </div>
        </div>
        <div className={classes.miniheader}>
          <div className={classes.miniheaderitem}>
            {orgInfoIDAMDetail.map((item) => {
              const { name, id } = item;
              return (
                <span
                  key={id}
                  onClick={() => changePage(id)}
                  style={{
                    borderBottom:
                      selected === id ? "3px solid #5484C0" : "white",
                    color: selected === id ? "#5484C0" : "#9CB9DD",
                    fontWeight: selected === id ? "500" : "500",
                    paddingBottom: selected === id ? "0.7em" : "",
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
        <div className={classes.body}>
          {selected === 1 ? (
            <OrganizationInfo
              onRequestClose={onRequestClose}
              changePage={changePage}
              setUserData={setUserData}
              userData={userData}
            />
          ) : selected === 2 ? (
            <IdamDetails
              onRequestClose={onRequestClose}
              changePage={changePage}
              setUserData={setUserData}
              userData={userData}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateOrganizationForm;
