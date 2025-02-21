import React, { useCallback, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import { uploadImg } from "../../../Service/upload/uploadSlice";
import { useDispatch } from "react-redux";

const AddProd = () => {
  const { quill, quillRef } = useQuill();
  const dispatch = useDispatch();

  const handleFile = (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    dispatch(uploadImg(formData));
  };

  return (
    <div>
      <div style={{ width: "100%", height: 200 }}>
        <div ref={quillRef} />
      </div>
      <div className="mt-16">
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleFile(e);
          }}
        />
      </div>
    </div>
  );
};

export default AddProd;