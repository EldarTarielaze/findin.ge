import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import UserStore from "./components/Stores/UserStore";

const FileUpload = () => {
  const [file, setFile] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files);
    setFilename(e.target.files.name);
  };
  const onSubmit = async e => {
    const imgM = file.length;
    console.log(file.length);
    e.preventDefault();
    for (var i = 0; i < imgM; i++) {
      var x = new File([file[i]], `${UserStore.ID}_${i + 1}.jpg`, {
        type: file[i].type,
        lastModified: file[i].lastModified,
      });
      const formData = new FormData();
      console.log(file);
      formData.append("file", x);
      console.log(formData);
      try {
        const res = await axios.post("/imageupload", formData, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: progressEvent => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
          },
        });

        const { fileName, filePath } = res.data;

        setUploadedFile({ fileName, filePath });

        setMessage("File Uploaded");
      } catch (err) {
        if (err.response.status === 500) {
          setMessage("There was a problem with the server");
        } else {
          setMessage(err.response.data.msg);
        }
      }
      console.log(file[i]);
    }
  };
  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            multiple
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
        <img src={imgSrc} alt="" />
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img
              className="imgURL"
              style={{ width: "100%" }}
              src={uploadedFile.filePath}
              alt=""
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
