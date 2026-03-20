"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from './banner.module.css';

const bannerImages = [
  '/img/cover.jpg',
  '/img/cover2.jpg',
  '/img/cover3.jpg',
  '/img/cover4.jpg',
];

export default function Banner() {
  const [imgIndex, setImgIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleBannerClick = () => {
    setImgIndex((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
      <Image
        src={bannerImages[imgIndex]}
        alt="Banner Image"
        fill={true}
        priority
        className={styles.bannerImg}
      />
      <div className={styles.bannerText}>
        <h1>where every event finds its venue</h1>
        <p>สัมผัสประสบการณ์การจัดงานที่เหนือระดับ</p>
      </div>
      {session && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: '#fff',
          fontWeight: 600,
          fontSize: '18px',
          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
        }}>
          Welcome {session.user.name}
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push('/venue');
        }}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 24px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Select Venue
      </button>
    </div>
  );
}