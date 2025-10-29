import React from "react";

const Categories: React.FC = () => {
    return (
        <div style={{ width: 430, margin: "0 auto", fontFamily: "Inter, Arial, sans-serif" }}>
            <style>
                {`
          .wrap {
            background: #f3f8ff;
            padding: 16px;
            border-radius: 12px;
          }
          .title {
            font-weight: 800;
            color: #053058;
            margin-bottom: 8px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          .cat {
            background: white;
            border-radius: 12px;
            padding: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(11,102,255,0.06);
          }
          .cat .icon {
            width: 52px;
            height: 52px;
            border-radius: 10px;
            background: #eaf2ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #0b66ff;
            margin-bottom: 8px;
          }
        `}
            </style>

            <div className="wrap">
                <div className="title">Danh mục</div>
                <div style={{ fontSize: 13, color: "#47657f", marginBottom: 10 }}>
                    Chọn một danh mục để xem sản phẩm
                </div>
                <div className="grid">
                    <div className="cat">
                        <div className="icon">📱</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Điện tử</div>
                    </div>
                    <div className="cat">
                        <div className="icon">🛋️</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Nội thất</div>
                    </div>
                    <div className="cat">
                        <div className="icon">👗</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Thời trang</div>
                    </div>
                    <div className="cat">
                        <div className="icon">📚</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Sách</div>
                    </div>
                    <div className="cat">
                        <div className="icon">🚲</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Xe & Phụ kiện</div>
                    </div>
                    <div className="cat">
                        <div className="icon">🎮</div>
                        <div style={{ fontWeight: 600, color: "#0b2b46" }}>Đồ chơi & Game</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
