import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

export const NotFound = () => {
  return (
    <>
      <p className={style.notFound}>
        404 The page that you are trying to find dosen't exist. Go back to{' '}
        <Link to="/">Home</Link>
      </p>
    </>
  );
};
