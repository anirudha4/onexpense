import { PATHS } from '@config/constants';
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={PATHS.DASHBOARD} className='flex items-center gap-2'>
            <FaBolt />
            <span className="text-sm font-semibold">onexpense</span>
        </Link>
    )
}

export default Logo