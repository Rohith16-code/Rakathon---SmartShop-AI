import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProductCard from './chatbot/ProductCard'; // Adjust the import path as needed
import clothImages from '../Constants/ClothImages';
import sunglassesImages from '../Constants/SunglassesData';

const categories = {
  dresses: clothImages.map(cloth => ({
    title: cloth.caption,
    img: cloth.thumbnail,
    price: cloth.price,
    link: cloth.thumbnail,
    trialLink: `http://localhost:3000/try/cloth?product_id=${cloth.productId}`,
  })),
  sunglasses: sunglassesImages.map(glasses => ({
    title: glasses.title,
    img: glasses.img,
    price: glasses.price,
    link: glasses.img,
    trialLink: `/try/sunglasses?product_code=${glasses.code}`,
  })),
  phones: [
    { title: 'Latest Smartphone', img: '/phone1.jpg', price: '$999', link: 'https://amzn.in/d/9QK9bzW' },
    { title: 'High-performance Phone', img: '/phone2.jpg', price: '$899', link: 'https://amzn.in/d/02pwKNy' }
  ],
  laptops: [
    { title: 'Lightweight Laptop', img: '/laptop1.jpg', price: '$1299', link: 'https://amzn.in/d/iDt5h8D' },
    { title: 'Budget Laptop', img: '/laptop12.jpg', price: '$499', link: 'https://amzn.in/d/4hzPHm5' }
  ]
};

const styles = {
  bodyBackground: {
    backgroundImage: `url('/shopping.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  },
  productsContainer: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  
  },
  headerRow: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#fff',
  },
  categoryContainer: {
    marginBottom: '40px',
  },
  categoryTitle: {
    marginBottom: '20px',
    color:'#fff',
    textTransform: 'capitalize',
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  productCol: {
    flex: '1 1 calc(25% - 20px)', // Base size for larger screens
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    transition: 'transform 0.2s ease-in-out',
  },
  '@media (max-width: 1200px)': {
    productCol: {
      flex: '1 1 calc(33.333% - 20px)', // Adjust for medium screens
    },
  },
  '@media (max-width: 900px)': {
    productCol: {
      flex: '1 1 calc(50% - 20px)', // Adjust for smaller screens
    },
  },
  '@media (max-width: 600px)': {
    productCol: {
      flex: '1 1 100%', // Stack items for very small screens
    },
  },
};

function Products() {
  // Apply the global background style when the component mounts
  React.useEffect(() => {
    Object.assign(document.body.style, styles.bodyBackground);

    // Clean up by resetting the styles when the component unmounts
    return () => {
      Object.keys(styles.bodyBackground).forEach(key => {
        document.body.style[key] = ''; // Reset each style property
      });
    };
  }, []);

  return (
    <div style={styles.productsContainer}>
      <div style={styles.headerRow}>
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>
      </div>
      {Object.keys(categories).map((category, index) => (
        <div key={index} style={styles.categoryContainer}>
          <Typography variant="h5" gutterBottom style={styles.categoryTitle}>
            {category}
          </Typography>
          <div style={styles.productRow}>
            {categories[category].map((product, index) => (
              <div
                key={index}
                style={styles.productCol}
                onMouseEnter={(e) => {
                  const card = e.currentTarget.querySelector('div');
                  card.style.transform = styles.cardHover.transform;
                  card.style.boxShadow = styles.cardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector('div');
                  card.style.transform = '';
                  card.style.boxShadow = '';
                }}
              >
                <div style={styles.card}>
                  <img src={product.img} alt={product.title} style={styles.image} />
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    link={product.link}
                    trialLink={category !== 'phones' && category !== 'laptops' ? product.trialLink : undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
