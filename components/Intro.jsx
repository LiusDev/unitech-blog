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
        avatar: "/quydx.png",
        desc: "Là người thông minh, có trách nhiệm trong công việc, luôn đưa ra những ý tưởng táo bạo nhưng lại mang tính hiệu quả rất cao",
        facebook: "https://www.facebook.com/x.quy.203",
    },
    {
        id: 2,
        name: "Nguyễn Thị Quỳnh",
        position: "Coordinator",
        avatar: "/quynhnt.png",
        desc: "Phân chia công việc, đảm bảo tất cả thành viên hoàn thành công việc đúng tiến độ, kết nối mọi người trong nhóm lại với nhau",
        facebook: "https://www.facebook.com/quyn.nguyt",
    },
    {
        id: 3,
        name: "Ngô Sỹ Thắng",
        position: "PR",
        avatar: "/thangns.jpg",
        desc: "Truyền thông, lên ý tưởng truyền thông về dự án, thu thập dữ liệu, quản lý Fanpage. Là người giao tiếp tốt, hoà đồng",
        facebook: "https://www.facebook.com/up.cheer.7796",
    },
    {
        id: 4,
        name: "Hà Việt Hiếu",
        position: "Content Creator",
        avatar: "/hieuhv.jpg",
        desc: "Sáng tạo nội dung, tổng hợp kiến thức, viết bài trên blog. Là người thông minh và sáng tạo",
        facebook: "https://www.facebook.com/haviethieu8888.jsclub",
    },
    {
        id: 5,
        name: "Nguyễn Lê Quỳnh Trang",
        position: "Supporter",
        avatar: "/trangnlq.jpg",
        desc: '"Cô coder xinh đẹp", hỗ trợ nhân lực cho team, có trách nhiệm trong công việc',
        facebook: "https://www.facebook.com/trang.nguyenquynh.988373",
    },
    {
        id: 6,
        name: "Trần Quốc Việt",
        position: "Designer",
        avatar: "/viettq.jpg",
        desc: "Phụ trách thiết kế các ấn phẩm, bài đăng cho blog cũng như fanpage..",
        facebook: "https://www.facebook.com/khong.phai.quoc.viet",
    },
]

const suppoters = [
    {
        id: 1,
        name: "Đỗ Thị Thu Hà",
        position: "Giảng viên hướng dẫn",
        avatar: "/hadtt.png",
        desc: "Giảng viên hướng dẫn nhóm UniTym trong quá trình thực hiện dự án",
        facebook: "https://www.facebook.com/",
    },
    {
        id: 2,
        name: "Cấn Nguyễn Bảo Châu",
        position: "UI/UX Support",
        avatar: "/chaucnb.jpg",
        desc: "Hỗ trợ thiết kế giao diện cho website",
        facebook: "https://www.facebook.com/choldchold14",
    },
    {
        id: 3,
        name: "Triệu Đình Quang",
        position: "Security Support",
        avatar: "/quangtd.jpg",
        desc: "Hỗ trợ các vấn đề liên quan tới bảo mật cho website",
        facebook: "https://www.facebook.com/best.yasuo.5623",
    },
]

const Intro = () => {
    return (
        <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 rounded-lg mb-8 border border-sky-900'>
            <h3 className='mb-8 m-8 pb-4 font-semibold border-b border-sky-900'>Giới thiệu dự án</h3>
            <div>
                <p className='mb-4 leading-relaxed m-8'>UniTech Blog Là một website chia sẻ những kỹ năng phần mềm cho lập trình viên được thực hiện bởi những bạn trẻ trong nhóm UniTym đến từ lớp SE1748 - ĐH FPT Hà Nội. Blog có những bài viết rất bổ ích liên quan tới khối ngành công nghệ thông tin, tips, tricks, những kiến thức ngoài giảng đường... từ đó giúp các bạn sinh viên thêm động lực để tiếp tục con đường theo đuổi ngành công nghệ thông tin.</p>
                <h3 className='mx-8 mt-8 text-center'>Fanpage</h3>
                <div className='hidden lg:flex items-center justify-center'>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSSG.UniTech.Blog&tabs&width=500&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="130" style={ { border: "none", overflow: "hidden" } } frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='flex lg:hidden items-center justify-center'>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSSG.UniTech.Blog&tabs&width=280&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="130" style={ { border: "none", overflow: "hidden" } } allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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