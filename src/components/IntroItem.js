import { useState, useEffect } from "react";
import "../styles/IntroItem.scss";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const IntroItem = (props) => {
  const [value, setValue] = useState("");
  const [spec, setSpec] = useState([]);

  useEffect(() => {
    if (props.data) {
      axios
        .get(`/api/v1/products/getById/${props.data}`)
        .then(function (response) {
          setValue(response.data.description);
          setSpec(response.data.specifications);
          console.log(response.data.specifications);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [props.data]);

  return (
    <div className="container-fluid p-3 bg-light rounded ">
      <div
        className="row d-flex containerDes"
        // style={{ height: "800px" }}
      >
        <h4>Đặc điểm nổi bật</h4>
        <div
          className="col-8 preview shadow-sm p-3 mb-5 bg-white rounded "
          style={{ height: 500, overflow: "auto" }}
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>

        <div
          className="col-4 shadow-sm p-3 mb-5 bg-white rounded"
          style={{ overflow: "auto", height: 500 }}
        >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Thông số kĩ thuật</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {spec.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      width: 200,
                      backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                    }}
                  >
                    {item.specificationName}
                  </td>
                  <td
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                    }}
                  >
                    {item.specificationValue}
                  </td>
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
