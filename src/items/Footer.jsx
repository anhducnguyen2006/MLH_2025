export default function FooterPage() {
    return(
        <div>
            <footer className="d-flex align-items-center justify-content-center bg-black text-white pt-4 ">
                    <div className="container d-flex flex-column align-items-center text-center">
                    

                    {/* Copyright */}
                    <small>Copyright © 2024 ACM at Gettysburg. All Rights Reserved.</small>

                    {/* Social Media Links */}
                    <div className="d-flex gap-3 mt-3 mb-3">
                        <a href="https://www.instagram.com/gburg_acm/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram logo" width="50" height="50" />
                        </a>
                        <a href="linkedin.com/company/gettysburg-college-association-for-computing-machinery" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn logo" width="50" height="50" />
                        </a>
                        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/gmail.png" alt="Gmail logo" width="50" height="50" />
                        </a>
                    </div>
                    </div>
                </footer>
        </div>
    )
}