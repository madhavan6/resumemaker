import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Summarytips = () => {
  const navigate = useNavigate();

  // Define styles object
  const styles = {
    pageContainer: {
      display: 'flex',
      width: '100%',
      margin: 0,
      padding: 0
    },
    mainContent: {
      marginLeft: '250px',
      padding: '20px 20px 0 20px',
      backgroundColor: '#f9f9f9',
      width: 'calc(100% - 250px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    headerSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '20px',
      width: '100%',
      gap: '15px'
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    },
    goBackBtn: {
      background: 'none',
      border: 'none',
      color: '#39016c',
      cursor: 'pointer',
      padding: 0
    },
    tipsIcon: {
      backgroundColor: '#f0eef6',
      padding: '5px 10px',
      borderRadius: '4px',
      marginLeft: 'auto'
    },
    summaryHeading: {
      fontSize: '2rem',
      color: '#39016c',
      margin: '10px 0'
    },
    tipsContent: {
      padding: '10px 10px 0 10px',
      textAlign: 'left',
      width: '100%'
    },
    subHeading: {
      fontSize: '1.5rem',
      color: '#39016c',
      marginBottom: '15px',
      textAlign: 'left'
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#333',
      textAlign: 'left',
      marginBottom: '30px'
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      width: '100%',
      marginBottom: 0
    },
    previewBtn: {
      padding: '10px 20px',
      border: '1px solid #39016c',
      backgroundColor: 'white',
      color: '#39016c',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    nextBtn: {
      padding: '10px 20px',
      backgroundColor: '#39016c',
      color: 'white',
      border: 'none',
      borderRadius: '4px', 
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar activeStep={5} />
      <div style={styles.mainContent}>
        <div style={styles.headerSection}>
          <div style={styles.topRow}>
            <button 
              style={styles.goBackBtn}
              onClick={() => navigate('/skills')}
            >
              ← Go Back
            </button>
            <div style={styles.tipsIcon}>💡 Tips</div>
          </div>
          <h1 style={styles.summaryHeading}>Summary</h1>
        </div>

        <div style={styles.tipsContent}>
          <h2 style={styles.subHeading}>Let's write your professional summary</h2>
          <p style={styles.description}>
            A good summary grabs recruiters' attention and encourages them to read more.
            <br />
            We'll help you write a compelling one.
          </p>
          
          <div style={styles.navigationButtons}>
            <button 
              style={styles.previewBtn}
              onClick={() => navigate('/summary/preview')}
            >
              Preview
            </button>
            <button 
              style={styles.nextBtn}
              onClick={() => navigate('/summary')}
            >
              Next: Add Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarytips;