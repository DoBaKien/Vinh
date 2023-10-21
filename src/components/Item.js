import "../styles/Item.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { handleTop } from "../assets/action/Action";

const Item = (props) => {
  const [data, setData] = useState(props);
  const [img, setImg] = useState();
  const history = useHistory();

  // =============

  useEffect(() => {
    props && props.children.imageProducts.length > 0
      ? setImg(props.children.imageProducts[0].imageLink)
      : setImg(
          "https://media.istockphoto.com/id/936182806/vi/vec-to/kh%C3%B4ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%C3%ACnh-%E1%BA%A3nh-kh%E1%BA%A3-d%E1%BB%A5ng.jpg?s=612x612&w=0&k=20&c=AqTYDe8XDlTT4HlkKmWrI57391QNOV0zZeC7u8TKYiE="
        );

    setData(props);
  }, [props]);

  const handleView = () => {
    const currentPath = window.location.pathname;
    const newPath = `/Shopping/${data.children.id}`;
    handleTop();
    if (currentPath.match(/\/Shopping\/SP\d{4}/)) {
      const updatedPath = currentPath.replace(/\/Shopping\/SP\d{4}/, newPath);
      window.location.href = `${window.location.origin}${updatedPath}`;
    } else {
      history.push(newPath);
    }
  };

  return (
    <div>
      <div class="col hp cardItemH">
        <div class="card h-100 shadow-sm">
          <a href={data.children ? data.children.productLink : "#"}>
            <img
              src={img}
              class="card-img-top"
              alt={data.children ? data.children.productName : "Product Title"}
              onClick={() => handleView()}
            />
          </a>

          <div class="label-top shadow-sm" style={{ background: "#d70018" }}>
            <div
              class="text-white"
              style={{ textDecoration: "none", fontSize: 16 }}
              onClick={() => handleView()}
            >
              Giảm giá
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <div
                style={{ fontSize: 20, fontWeight: "bold" }}
                onClick={() => handleView()}
              >
                {data.children ? data.children.productName : ""}
              </div>
            </h5>

            <div class="clearfix mb-3">
              <span
                style={{
                  fontSize: 16,
                  color: "#d70018",
                  fontWeight: "bold",
                }}
              >
                {data.children ? data.children.price : 0} <span>VND </span>
              </span>
            </div>

            <div class="clearfix mb-1">
              <span class="float-start">
                <div>
                  <i class="fas fa-question-circle"></i>
                </div>
              </span>

              <span class="float-end">
                <i class="far fa-heart" style={{ cursor: "pointer" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
