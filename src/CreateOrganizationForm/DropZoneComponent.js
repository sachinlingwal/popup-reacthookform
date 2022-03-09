import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./DropZoneComponent.module.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "0em 1em",
  gap: "1rem",
  borderWidth: 2,
  borderRadius: 6,
  borderColor: "#58A7FF",
  borderStyle: "dashed",
  backgroundColor: "#F8FAFF",
  color: "#BCCEFA",
  fontSize: "0.9em",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "10em",
  marginLeft: "2.5em",
  width: "55em",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
  backgroundColor: "#ff1744",
};

function DropzoneComponent(props) {
  const { setUploadAvatar, saveAvatar } = props;
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    // console.log(acceptedFiles);
    setUploadAvatar(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    noKeyboard: true,
    maxFiles: 1,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const style1 = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  const thumbs = files.map((file) => (
    <span key={file.name}>
      {/* <br /> */}
      <img src={file.preview} alt={file.name} width="90px" height="50px" />
      <p>{file.name}</p>
    </span>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <div {...getRootProps({ style1 })}>
      <section {...getRootProps({ style })}>
        <aside style={{ width: "8em" }}>{thumbs}</aside>
        <input {...getInputProps()} />
        <p>Drag and drop your images here.</p>
        <div className={classes.select}>Choose Files</div>
      </section>
    </div>
  );
}

export default DropzoneComponent;
