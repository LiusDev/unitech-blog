/* eslint-disable react/react-in-jsx-scope */
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

import MemberCard from "./MemberCard";

const members = [
    {
        id: 1,
        name: "Đào Xuân Quý",
        position: "Leader",
        avatar: "/quydx.webp",
        desc: 'Develop chính của dự án, phân công nhiệm vụ, và là "cầu nối" giữa các thành viên trong team',
        facebook: "https://www.facebook.com/x.quy.203",
    },
    {
        id: 2,
        name: "Nguyễn Thị Quỳnh",
        position: "Coordinator",
        avatar: "/quynhnt.webp",
        desc: "Phân chia công việc, đảm bảo tất cả thành viên hoàn thành công việc đúng tiến độ, kết nối mọi người trong nhóm lại với nhau",
        facebook: "https://www.facebook.com/quyn.nguyt",
    },
    {
        id: 3,
        name: "Ngô Sỹ Thắng",
        position: "Marketer",
        avatar: "/thangns.webp",
        desc: "Lên ý tưởng truyền thông về dự án, thu thập dữ liệu và quản lý Fanpage",
        facebook: "https://www.facebook.com/up.cheer.7796",
    },
    {
        id: 4,
        name: "Hà Việt Hiếu",
        position: "Content Creator",
        avatar: "/hieuhv.webp",
        desc: "Sáng tạo nội dung, tổng hợp kiến thức, viết bài trên blog",
        facebook: "https://www.facebook.com/haviethieu8888.jsclub",
    },
    {
        id: 5,
        name: "Nguyễn Lê Quỳnh Trang",
        position: "Supporter",
        avatar: "/trangnlq.webp",
        desc: '"Cô coder xinh đẹp", hỗ trợ nhân lực cho team, có trách nhiệm trong công việc',
        facebook: "https://www.facebook.com/trang.nguyenquynh.988373",
    },
    {
        id: 6,
        name: "Trần Quốc Việt",
        position: "Designer",
        avatar: "/viettq.webp",
        desc: "Phụ trách thiết kế các ấn phẩm, bài đăng cho blog cũng như fanpage",
        facebook: "https://www.facebook.com/khong.phai.quoc.viet",
    },
]

const suppoters = [
    {
        id: 1,
        name: "Đỗ Thị Thu Hà",
        position: "Giảng viên hướng dẫn",
        avatar: "/hadtt.webp",
        desc: "Giảng viên hướng dẫn nhóm UniTym trong quá trình thực hiện dự án",
        facebook: "https://www.facebook.com/do.thuha.735",
    },
    {
        id: 2,
        name: "Cấn Nguyễn Bảo Châu",
        position: "UI/UX Support",
        avatar: "/chaucnb.webp",
        desc: "Hỗ trợ thiết kế giao diện cho website",
        facebook: "https://www.facebook.com/choldchold14",
    },
    {
        id: 3,
        name: "Triệu Đình Quang",
        position: "Security Support",
        avatar: "/quangtd.webp",
        desc: "Hỗ trợ các vấn đề liên quan tới bảo mật cho website",
        facebook: "https://www.facebook.com/best.yasuo.5623",
    },
]

const Intro = () => {
    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 rounded-lg mb-8 border border-sky-900'>
            <h3 className='mb-8 m-8 pb-4 font-semibold border-b border-sky-900'>Giới thiệu dự án</h3>
            <div>
                <p className='mb-4 leading-relaxed m-8'>UniTech Blog là một website chia sẻ những kỹ năng phần mềm cho lập trình viên được thực hiện bởi những bạn trẻ trong nhóm UniTym đến từ lớp SE1748 - ĐH FPT Hà Nội. Blog có những bài viết rất bổ ích liên quan tới khối ngành công nghệ thông tin, tips, tricks, những kiến thức ngoài giảng đường... từ đó giúp các bạn sinh viên thêm động lực để tiếp tục con đường theo đuổi ngành công nghệ thông tin.</p>
                <h3 className='mx-8 mt-8 text-center'>Fanpage</h3>
                <div className='hidden lg:flex items-center justify-center'>
                    <iframe src="https://www.facebook.com/v16.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df10b784594f0e3c%26domain%3Ddevelopers.facebook.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff27c52af4866c4%26relation%3Dparent.parent&container_width=734&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FSSG.UniTech.Blog&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&width=500" width="500" height="130" style={ { border: "none", overflow: "hidden" } } allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='flex lg:hidden items-center justify-center'>
                    <iframe src="https://www.facebook.com/v16.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df35be635b3bf8f8%26domain%3Ddevelopers.facebook.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff27c52af4866c4%26relation%3Dparent.parent&container_width=734&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FSSG.UniTech.Blog&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&width=280" width="280" height="130" style={ { border: "none", overflow: "hidden" } } allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <h3 className='mx-8 mt-8 text-center text-2xl lg:text-3xl'>Nhóm thực hiện</h3>
                <div className="my-8 lg:mx-8">
                    <Swiper
                        spaceBetween={ 30 }
                        centeredSlides={ true }
                        autoplay={ {
                            delay: 5000,
                            disableOnInteraction: false,
                        } }
                        pagination={ {
                            clickable: true,
                        } }
                        modules={ [Autoplay, Pagination, Navigation] }
                        className="mySwiper"
                    >
                        { members.map(member => (
                            <SwiperSlide key={ member.id }>
                                <MemberCard member={ member } />
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
                <h3 className='mx-8 mt-16 text-center text-2xl lg:text-3xl'>Đặc biệt cảm ơn tới</h3>
                <div className='my-8 lg:mx-8'>
                    <Swiper
                        spaceBetween={ 30 }
                        centeredSlides={ true }
                        autoplay={ {
                            delay: 7500,
                            disableOnInteraction: false,
                        } }
                        pagination={ {
                            clickable: true,
                        } }
                        modules={ [Autoplay, Pagination, Navigation] }
                        className="mySwiper"
                    >
                        { suppoters.map(member => (
                            <SwiperSlide key={ member.id }>
                                <MemberCard member={ member } />
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Intro