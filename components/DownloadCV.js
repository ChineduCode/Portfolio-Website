import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6' 

const DownloadCV = () => {
  return (
    <div className='download_cv_container'>
      <Link href={'RESUME-chinedu.pdf'} className="download_cv" download={'RESUME_CHINEDU.pdf'}>
        <span>Download CV</span> <FaDownload />
      </Link> 
    </div>
  );
}

export default DownloadCV;