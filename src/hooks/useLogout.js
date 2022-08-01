import { useEffect, useState } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext} from './useAuthContext'

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    
    const logout = async () => { 
        setError(null)
        setIsPending(true)
    
        try {
            // get current user
            const { uid } = projectAuth.currentUser
            await projectFirestore.collection('users').doc(uid).update({ online: false })
            // sign out
            await projectAuth.signOut()
            // update state
            dispatch({type: 'LOGOUT'})

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            } 
        } 
        catch(err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }
  
    useEffect(() => {
      return () => setIsCancelled(true)
    }, [])
  
    return { logout, error, isPending }
  }