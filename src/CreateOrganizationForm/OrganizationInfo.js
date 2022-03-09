import React, { useEffect, useState } from "react";
import classes from "./OrganizationInfo.module.css";
import { useForm } from "react-hook-form";
import { SchemaOrgInfo } from "./SchemaOrgInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import DropzoneComponent from "./DropZoneComponent";

const OrganizationInfo = (props) => {
  const { changePage, setUserData } = props;

  const [formData, setFormData] = React.useState({});
  const [uploadAvatar, setUploadAvatar] = useState();
  const [valuesFromLocalStorage, setValuesFromLocalStorage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaOrgInfo),
  });

  console.log(uploadAvatar);

  const registerHandler = (data) => {
    setFormData({ ...data, avatar: uploadAvatar });
    changePage(2);
    // localStorage.setItem("userData", JSON.stringify(data));
  };

  useEffect(() => {
    setUserData(formData);
  }, [formData]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userData"));
    if (items) {
      setValuesFromLocalStorage(items);
    }
  }, []);
  // console.log(items.avatar);
  // console.log(items.avatar[0].preview);

  return (
    <form onSubmit={handleSubmit(registerHandler)} autoComplete="off">
      <div className={classes.main_container}>
        <div className={classes.column_one}>
          <div className={classes.input_field_div}>
            <label htmlFor="organizationame">Organization Name*</label>
            <input
              type="text"
              placeholder="Enter organization name"
              name="organizationame"
              value={
                valuesFromLocalStorage && valuesFromLocalStorage.organizationame
              }
              {...register("organizationame")}
              style={{
                border: errors.organizationame?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>
              {errors.organizationame?.message}
            </p>
          </div>
          <div className={classes.input_field_div}>
            <label htmlFor="address">Address*</label>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              value={valuesFromLocalStorage && valuesFromLocalStorage.address}
              {...register("address")}
              style={{
                border: errors.address?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.address?.message}</p>
          </div>
          <div className={classes.input_field_div}>
            <label htmlFor="country">Country*</label>
            <input
              type="text"
              placeholder="Enter Country"
              name="country"
              value={valuesFromLocalStorage && valuesFromLocalStorage.address}
              {...register("country")}
              style={{
                border: errors.country?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.country?.message}</p>
          </div>
          <div className={classes.input_field_div}>
            <label htmlFor="email">Email*</label>
            <input
              className={errors.email?.message && "errors-msgs-border"}
              type="email"
              placeholder="Enter email"
              name="email"
              value={valuesFromLocalStorage && valuesFromLocalStorage.email}
              {...register("email")}
              style={{
                border: errors.email?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.email?.message}</p>
          </div>
        </div>
        <div className={classes.column_two}>
          <div className={classes.input_field_div}>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              placeholder="Enter Website URL"
              name="website"
              value={valuesFromLocalStorage && valuesFromLocalStorage.website}
              {...register("website")}
              style={{
                border: errors.website?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.website?.message}</p>
          </div>
          <div className={classes.input_field_div}>
            <label htmlFor="region">Region</label>
            <input
              type="text"
              placeholder="Enter region"
              name="region"
              value={valuesFromLocalStorage && valuesFromLocalStorage.region}
              {...register("region")}
              style={{
                border: errors.region?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.region?.message}</p>
          </div>
          <div className={classes.input_field_div}>
            <label htmlFor="zipcode">Zipcode*</label>
            <input
              type="number"
              placeholder="Enter zipcode"
              name="zipcode"
              value={valuesFromLocalStorage && valuesFromLocalStorage.zipcode}
              {...register("zipcode")}
              style={{
                border: errors.zipcode?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.zipcode?.message}</p>
          </div>

          <div className={classes.input_field_div}>
            <label htmlFor="phonenumber">Phone Number*</label>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phonenumber"
              value={
                valuesFromLocalStorage && valuesFromLocalStorage.phonenumber
              }
              {...register("phonenumber")}
              style={{
                border: errors.phonenumber?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={classes.errror_msg}>{errors.phonenumber?.message}</p>
          </div>
        </div>
      </div>
      <div className={classes.uploadInputAvatar}>
        <label htmlFor="fileUpload">Upload Logo / Avatar</label>
        <DropzoneComponent setUploadAvatar={setUploadAvatar} />
      </div>

      <div className={classes.footer}>
        <button type="reset">Cancel</button>
        <button type="submit">Save & Next</button>
        {/* <button>Submit</button> */}
      </div>
    </form>
  );
};

export default OrganizationInfo;
