export const CheckStatus = ({ value }) => {
  if (value === "1") {
    return <div>Đang xử lý</div>;
  } else if (value === "2") {
    return <div>Đang vận chuyển</div>;
  } else if (value === "3") {
    return <div>Hoàn thành</div>;
  }
};
export const ValueDate = ({ value }) => {
  const dateObject = new Date(value);
  const day = dateObject.getDate(); // Lấy ngày
  const month = dateObject.getMonth() + 1; // Lấy tháng (lưu ý: tháng trong JavaScript bắt đầu từ 0 nên phải cộng thêm 1)
  const year = dateObject.getFullYear(); // Lấy năm
  const hours = dateObject.getHours(); // Lấy giờ
  const minutes = dateObject.getMinutes(); // Lấy phút
  const date = `${hours}:${minutes} - ${day}/${month}/${year}`;
  return <div>{date}</div>;
};
export const ValueDate2 = (value) => {
  const dateObject = new Date(value);
  const day = dateObject.getDate(); // Lấy ngày
  const month = dateObject.getMonth() + 1; // Lấy tháng (lưu ý: tháng trong JavaScript bắt đầu từ 0 nên phải cộng thêm 1)
  const year = dateObject.getFullYear(); // Lấy năm
  const hours = dateObject.getHours(); // Lấy giờ
  const minutes = dateObject.getMinutes(); // Lấy phút
  const date = `${hours}:${minutes} - ${day}/${month}/${year}`;
  return date;
};
