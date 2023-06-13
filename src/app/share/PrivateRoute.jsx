import React, { useContext, useEffect } from 'react';
import { AuthContext, useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';

const PrivateRoute = (Component) => {
    return function PrivateRoute(props) {
        const auth = useContext(AuthContext);
        const router = useRouter();
        if (!auth?.user) {
            router.push('/pages/login')
            return "Loading..."
        }
        return <Component auth={auth} {...props} />
    }
};

export default PrivateRoute;