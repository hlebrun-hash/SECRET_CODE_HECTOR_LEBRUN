'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SecretButton({ secret }: { secret: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.buttonContainer}>
      <button 
        className={styles.revealButton} 
        onClick={() => setShow(!show)}
      >
        {show ? 'Cacher le secret' : 'Révéler le secret'}
      </button>
      
      {show && (
        <div className={styles.secretValue}>
          {secret}
        </div>
      )}
    </div>
  );
}
