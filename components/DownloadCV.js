import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6' 

const DownloadCV = () => {
  return (
    <div className='download_cv_container'>
      <Link href={'RESUME_CHINEDUCODE.PDF'} target='_blank' className="download_cv" download={'RESUME_CHINEDUCODE.PDF'}>
        <span>Download CV</span> <FaDownload />
      </Link> 
    </div>
  );
}

export default DownloadCV;
