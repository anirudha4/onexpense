import { Navigate } from "react-router-dom";
import { useAuth } from "@hooks";

const withGaurd = (WrappedComponent) => {
    return function Component(props) {
        const { isLoggedIn } = useAuth();
        if (!isLoggedIn) {
            return <Navigate to={'/'} />
        }
        return <WrappedComponent {...props} />;
    }
};
withGaurd.displayName = 'withGaurd';
export default withGaurd