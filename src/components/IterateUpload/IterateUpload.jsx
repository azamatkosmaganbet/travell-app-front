import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const IterateUplaod = () => {
  var singleFileObj = [];
  var singleFileArray = [];
  const [singleFile, setSingleFile] = useState([]);
  console.log(singleFileObj, singleFileArray)
  const uploadSingleFiles = (e) => {
    singleFileObj.push(e.target.files);
    singleFileArray.push(URL.createObjectURL(singleFileObj[0][0]));
    setSingleFile([...singleFile, singleFileArray]);
  };

  console.log(singleFile);

  const uploadFiles = (e) => {
    e.preventDefault();
    console.log(singleFile);
  };

  const removeImage = (index) => {
    console.log("reomve");
    setSingleFile([
      ...singleFile.slice(0, index),
      ...singleFile.slice(index + 1, singleFile.length)
    ]);
  };

  return (
    <>
      <form>
        <div>
          <h4 className="mb-3"> Добавьте по одному</h4>
          <div className="form-group multi-preview">
            <div className="row">
              {singleFile.length !== 0 &&
                singleFile.map((url, index) => (
                  <div key={url} className="col-md-2">
                    <div className="img-block bg-gray">
                      <img className="img-fluid2" src={url} alt="..." />
                      <span
                        className="remove_img"
                        onClick={() => removeImage(index)}
                      >
                        X
                      </span>
                    </div>
                  </div>
                ))}

              {singleFile.length > 3 ? null : (
                <div className="col-md-2">
                  <div className="form-group">
                    <div className="upload-btn-wrapper">
                      <button className="image-btn"> + </button>
                      <input
                        type="file"
                        name="myfile"
                        onChange={uploadSingleFiles}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default IterateUplaod;
