import Notice from "./Notice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Download from "./Download";

const Layout = () => {
    return (
        <div>
            <Notice />
            <Navbar />
            <Download />
            <Footer />
        </div>
    );
};

export default Layout;
