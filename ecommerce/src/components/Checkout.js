import React, { useEffect } from 'react';
import { useUser } from '../contexts/UserProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Checkout() {
      const { user } = useUser()
      const history = useHistory()

      useEffect(() => {
        if(!user) {
                history.push("/")
        }
      }, [user])

    return <div>Checkout Page</div>
}