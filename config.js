/**
 * config.js — Chỉnh sửa file này để tùy chỉnh thư mời
 * Chỉ cần sửa các giá trị bên dưới, không cần đụng vào index.html
 */
window.ENV = {

  // ===== THÔNG TIN SINH VIÊN =====
  GRAD_NAME: "Nguyễn Lan Anh",
  PORTRAIT_IMAGE: "images/portrait.png",

  // ===== ẢNH NỀN TRANG TRÍ (nghiêng ở góc nền đỏ) =====
  BG_CORNER_1: "images/bg-corner-1.jpg",
  BG_CORNER_2: "images/bg-corner-2.jpg",

  // ===== THÔNG TIN TRƯỜNG =====
  UNIVERSITY_NAME_EN: "Foreign Trade University",
  UNIVERSITY_NAME_VN: "Đại học Ngoại Thương",
  UNIVERSITY_SHORT: "FTU",

  // ===== THỜI GIAN & ĐỊA ĐIỂM =====
  CEREMONY_WEEKDAY: "Chủ nhật",
  CEREMONY_DATE: "20/09/2026",
  CEREMONY_DATE_ISO: "2026-09-20T11:00:00",
  CEREMONY_END_ISO: "2026-09-20T13:00:00",
  CEREMONY_TIME_RANGE: "11h00 - 13h00",
  CEREMONY_LOCATION: "Trung tâm Hội nghị Quốc gia",
  CEREMONY_ADDRESS: "Đường Phạm Hùng, phường Từ Liêm, TP. Hà Nội, Việt Nam",

  // ===== LỜI NHẮN =====
  INVITE_MESSAGE: "Sự hiện diện của bạn là niềm vui và kỷ niệm thật đẹp trong ngày đặc biệt này.",
  CLOSING_MESSAGE: "Cảm ơn vì đã là một phần trong thanh xuân của tớ.",

  // ===== LƯU Ý =====
  GIFT_NOTE: "Mình xin phép không nhận hoa và quà to vì sợ không vác về được, mong mọi người thông cảm nhé.",
  PARKING_NOTE: "Trung tâm Hội nghị Quốc gia không có chỗ gửi xe, mọi người đi Grab hoặc gửi xe ở các điểm gần đó giúp mình nhé!",

  // ===== NÚT BẤM =====
  // Để trống RSVP_URL để dùng xác nhận nhanh ngay trên trang (lưu trên trình duyệt).
  // Điền link (Google Form, Zalo...) nếu muốn dẫn sang nơi khác khi bấm "Mình sẽ đến".
  RSVP_URL: "",
  MAP_QUERY: "Trung tâm Hội nghị Quốc gia, Phạm Hùng, Từ Liêm, Hà Nội",

  // ===== HÀNH TRÌNH (timeline) =====
  TIMELINE: [
    {
      icon: "fa-door-open",
      tag: "Năm nhất",
      title: "Ngày đầu bước vào FTU",
      desc: "Cô sinh viên năm nhất rụt rè bước qua cổng trường, mang theo bao nhiêu hoài bão và một chút lo lắng.",
    },
    {
      icon: "fa-mug-hot",
      tag: "Năm hai — ba",
      title: "Những đêm deadline",
      desc: "Những đêm thức trắng bên ly cà phê, deadline chồng deadline, nhưng chưa bao giờ chịu bỏ cuộc.",
    },
    {
      icon: "fa-laptop",
      tag: "Năm ba — tư",
      title: "Những lần thuyết trình, thi cử",
      desc: "Từ run rẩy trước lớp đến tự tin thuyết trình, từng kỳ thi đã tôi luyện nên một phiên bản trưởng thành hơn.",
    },
    {
      icon: "fa-graduation-cap",
      tag: "20/09/2026",
      title: "Và cuối cùng — ngày tốt nghiệp",
      desc: "Mọi nỗ lực đã được đền đáp. Đây là ngày để ăn mừng, và tớ rất muốn có bạn ở bên cạnh.",
    },
  ],

  // ===== GALLERY (thêm/bớt tuỳ ý, để src rỗng "" nếu chưa có ảnh) =====
  GALLERY: [
    { src: "images/gallery-1.jpg", caption: "Nắng chiều và tà áo cử nhân" },
    { src: "images/gallery-2.jpg", caption: "Một góc tự hào" },
    { src: "images/gallery-3.jpg", caption: "Khoảnh khắc ngồi lại" },
    { src: "images/gallery-4.jpg", caption: "Ánh nhìn ngày đặc biệt" },
    // { src: "images/gallery-5.jpg", caption: "Một chiều rực rỡ" },
  ],
};
