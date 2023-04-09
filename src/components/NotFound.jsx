import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <p>
        404 The page that you are trying to find dosen't exist. Go back to{' '}
        <Link to="/">Home</Link>
      </p>
    </>
  );
};
