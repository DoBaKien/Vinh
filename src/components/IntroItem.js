import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import "../styles/IntroItem.scss";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const IntroItem = (props) => {
  const [value, setValue] = useState("");

  const [data, setData] = useState();
  const [status, setStatus] = useState(false);
  const [spec, setSpec] = useState([]);

  useEffect(() => {
    if (props.data) {
      axios
        .get(`/api/v1/products/getById/${props.data}`)
        .then(function (response) {
          setData(response.data);
          setValue(response.data.description);
          setSpec(response.data.specifications);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [props.data]);

  const openEdit = () => {
    setStatus(true);
  };

  const modules = {
    clipboard: {
      matchVisual: false,
    },
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  const SaveContent = async () => {
    try {
      data.description = value;

      const res = await axios.post(
        "http://localhost:8521/api/v1/products/saveOrUpdate",
        data
      );

      console.log("Phản hồi từ server:", res.data);
      setStatus(false);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.log(value);
      console.error("Lỗi:", error);
    }
  };
  return (
    <div className="container-fluid shadow-none p-3 mb-5 bg-light rounded">
      <button className="btn btn-primary" onClick={() => openEdit()}>
        Sửa nội dung
      </button>

      <div
        className="row d-flex containerDes"
        // style={{ height: "800px" }}
      >
        {status ? ( // Nếu status là true, hiển thị trình soạn thảo
          <div className="col-8 editor text-center shadow-sm p-3 mb-5 bg-white rounded   ">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="editorInput"
              modules={modules}
              preserveWhitespace={true}
            />
            <button className="btn btn-primary" onClick={() => SaveContent()}>
              Lưu
            </button>
          </div>
        ) : (
          // Nếu status là false, hiển thị trước
          <div
            className="col-8 preview shadow-sm p-3 mb-5 bg-white rounded "
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
        )}
        <div
          className="col-4 shadow-sm p-3 mb-5 bg-white rounded"
          style={{ overflow: "auto", height: 300 }}
        >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Thông số kĩ thuật</th>
              </tr>
            </thead>
            <tbody>
              {spec.map((item, index) => (
                <tr key={index}>
                  <td>{item.specificationName}</td>
                  <td>{item.specificationValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default IntroItem;
