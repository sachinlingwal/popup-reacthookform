import styles from "./IdamDetails.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaIDAM } from "./SchemaIDAM";
import { useEffect } from "react";

const IdamDetails = (props) => {
  const { userData, setUserData } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaIDAM),
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, []);

  const registerHandler = (data) => {
    setUserData({ ...userData, data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(registerHandler)} autoComplete="off">
      <div className={styles.main_container}>
        <div className={styles.column_one}>
          <div className={styles.input_field_div}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              {...register("name")}
              style={{
                border: errors.name?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.name?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <label>Client ID</label>
            <input
              type="text"
              placeholder="Enter Client id"
              name="clientId"
              {...register("clientId")}
              style={{
                border: errors.clientId?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.clientId?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <label>Scope</label>
            <input
              type="text"
              placeholder="Enter scope"
              name="scope"
              {...register("scope")}
              style={{
                border: errors.scope?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.scope?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <label>Id token URL*</label>
            <input
              className={errors.idtokenURL?.message && "errors-msgs-border"}
              type="text"
              placeholder="Enter idtokenURL"
              name="idtokenURL"
              {...register("idtokenURL")}
              style={{
                border: errors.idtokenURL?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.idtokenURL?.message}</p>
          </div>
        </div>
        <div className={styles.column_two}>
          <div className={styles.input_field_div}>
            <label>Type</label>
            <input
              type="text"
              placeholder="Enter type "
              name="type"
              {...register("type")}
              style={{
                border: errors.type?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.type?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <label>Client Secret</label>
            <input
              type="text"
              placeholder="Enter clientSecret"
              name="clientSecret"
              {...register("clientSecret")}
              style={{
                border: errors.clientSecret?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.clientSecret?.message}</p>
          </div>
          <div className={styles.input_field_div}>
            <label>AauthURL*</label>
            <input
              type="text"
              placeholder="Enter oauthURL"
              name="oauthURL"
              {...register("oauthURL")}
              style={{
                border: errors.oauthURL?.message
                  ? "0.5px solid red"
                  : "0.5px solid #908f8f",
              }}
            />
            <p className={styles.errror_msg}>{errors.oauthURL?.message}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uploadInputAvatar"></div>
      </div>
      <div className={styles.footer}>
        <button>Cancel</button>
        {/* <button>Save & Next</button> */}
        <button onSubmit={handleSubmit(registerHandler)}>Submit</button>
      </div>
    </form>
  );
};

export default IdamDetails;
