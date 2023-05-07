import Logo from '@components/common/Logo';
import Navbar from './Navbar';
import Profile from './Profile';
import Dropdown from '@components/common/Dropdown';
import { useUser } from '@hooks';
import Alert from '@components/common/Alert';
import { BsEnvelopeX } from 'react-icons/bs';
import ActiveWallet from './ActiveWallet';

const Header = ({ }) => {
    const { user } = useUser();
    return (
        <div className="
            flex h-16 min-h-[4rem] items-center justify-between 
            px-4 border-b sticky backdrop-blur-sm top-0 left-0 z-50
        ">
            <div className="flex items-center gap-5">
                {/* logo */}
                <Logo />
                {/* divider */}
                <div className="h-6 w-[1px] border-x"></div>
                {/* navbar */}
                <Navbar />
            </div>
            <div className="flex items-center gap-3">
                {!user.isVerified && (
                    <Alert
                        variant={'destructive'}
                        text={'Email not verified'}
                        icon={<BsEnvelopeX />}
                    />
                )}
                {user.isVerified && (
                    <div className='flex items-center'>
                        <ActiveWallet />
                    </div>
                )}
                <Dropdown trigger={<Profile />} />
            </div>
        </div>
    )
}

export default Header