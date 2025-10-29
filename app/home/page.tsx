export default function Page() {
    return (
        <div style={{ width: 430, margin: "0 auto", fontFamily: "Inter, Arial, sans-serif" }}>
            <style>
                {`
          .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(11,102,255,0.08);
            overflow: hidden;
          }
          .app {
            background: #eaf2ff;
            padding: 18px;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
          }
          .logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .logo .dot {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #0b66ff;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
          }
          .search {
            margin: 10px 0;
            display: flex;
            gap: 8px;
          }
          .search input {
            flex: 1;
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid rgba(11,102,255,0.12);
            background: white;
          }
          .filter {
            background: #0b66ff;
            color: white;
            padding: 10px;
            border-radius: 10px;
            min-width: 44px;
            text-align: center;
          }
          .list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-bottom: 14px;
            margin-top: 8px;
          }
          .item {
            display: flex;
            gap: 12px;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid rgba(11,102,255,0.06);
            align-items: center;
            background: white;
          }
          .thumb {
            width: 86px;
            height: 86px;
            border-radius: 10px;
            background: linear-gradient(135deg,#cfe3ff,#eaf2ff);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: #0b66ff;
          }
          .meta {
            flex: 1;
          }
          .title {
            font-size: 15px;
            font-weight: 700;
            color: #0b2b46;
            margin-bottom: 6px;
          }
          .price {
            font-weight: 800;
            color: #0b66ff;
          }
          .badge {
            font-size: 12px;
            padding: 6px 8px;
            border-radius: 999px;
            background: #f0f7ff;
            color: #0b66ff;
            border: 1px solid rgba(11,102,255,0.06);
          }
          .bottomNav {
            display: flex;
            justify-content: space-around;
            padding: 12px;
            margin-top: 14px;
          }
          .navBtn {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;
            color: #0b66ff;
          }
        `}
            </style>

            <div className="app card" style={{ padding: 14 }}>
                <div className="header">
                    <div className="logo">
                        <div className="dot">CB</div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#0b2b46" }}>Chợ Đồ Cũ</div>
                            <div style={{ fontSize: 12, color: "#556f8a" }}>Tìm & Bán đồ nhanh</div>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <div style={{ fontSize: 13, color: "#0b66ff" }}>Đăng</div>
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(11,102,255,0.08)",
                            }}
                        >
                            ⚙️
                        </div>
                    </div>
                </div>

                <div className="search">
                    <input placeholder="Tìm kiếm: ví, bàn, điện thoại..." />
                    <div className="filter">Lọc</div>
                </div>

                <div style={{ display: "flex", gap: 8, overflow: "auto", padding: "6px 0" }}>
                    <div className="badge">Điện tử</div>
                    <div className="badge">Nội thất</div>
                    <div className="badge">Thời trang</div>
                    <div className="badge">Đồ chơi</div>
                </div>

                <div className="list">
                    <div className="item">
                        <div className="thumb">iPhone</div>
                        <div className="meta">
                            <div className="title">iPhone X - Chưa sửa, pin tốt</div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ fontSize: 13, color: "#7a8a9c" }}>Hà Nội · 2d trước</div>
                                <div className="price">2.800.000₫</div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="thumb">Ghế</div>
                        <div className="meta">
                            <div className="title">Ghế sofa 2 chỗ - like new</div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ fontSize: 13, color: "#7a8a9c" }}>HCM · 1w trước</div>
                                <div className="price">650.000₫</div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="thumb">Áo</div>
                        <div className="meta">
                            <div className="title">Áo khoác denim - Size M</div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ fontSize: 13, color: "#7a8a9c" }}>Đà Nẵng · 3d trước</div>
                                <div className="price">150.000₫</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomNav">
                    <div className="navBtn">
                        🏠
                        <div>Trang chủ</div>
                    </div>
                    <div className="navBtn">
                        🔍
                        <div>Tìm</div>
                    </div>
                    <div className="navBtn">
                        ➕
                        <div>Đăng</div>
                    </div>
                    <div className="navBtn">
                        💬
                        <div>Chat</div>
                    </div>
                    <div className="navBtn">
                        👤
                        <div>Tôi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}