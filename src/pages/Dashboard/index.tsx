import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { PageBreadcrumb } from '@/components';

// Define the Author type
interface Author {
  _id: string;
  firstname: string;
  lastname: string;
  profileImage: string; // Assuming profileImage is a string representing the URL of the image
  description: string;
}

const Dashboard = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://13.215.35.0:5002/api/authors/all');
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors data:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <>
      <PageBreadcrumb title="Welcome!" subName="Dashboards" />
    
      <Row>
        {authors.map((author) => (
          <Col key={author._id} sm={6} md={4} lg={3}>
            <div style={styles.authorCard}>
              <img src={author.profileImage} alt={`${author.firstname} ${author.lastname}`} style={styles.authorImg} />
              <div style={styles.authorCard}> {/* Fix: Change to authorCard */}
                <p style={styles.authorName}>{author.firstname} {author.lastname}</p>
                <p style={styles.authorDescription}>{author.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

const styles = {
  authorCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  authorImg: {
    width: '50px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '5px',
  },
  authorDescription: {
    fontSize: '14px',
  },
};

export default Dashboard;
