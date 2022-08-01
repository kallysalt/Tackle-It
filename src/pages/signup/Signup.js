import './Signup.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [AvatarError, setAvatarError] = useState(null) 
  const {signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, avatar)
  }

  const handleFileChange = (e) => {

    setAvatar(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setAvatarError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setAvatarError('Selected file must be an image')
      return
    }
    if (selected.size > 100000) {
      setAvatarError('Image file size must be less than 100kb')
      return
    }
    setAvatarError(null)
    setAvatar(selected)
    console.log('avatar updated')
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">

      <h2>sign up</h2>
      
      <label>
        <span>email:</span>
        <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} /> 
      </label>
      <label>
        <span>password:</span>
        <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <label>
        <span>display name:</span>
        <input required type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName}/>
      </label>
      <label>
        <span>Profile avatar:</span>
        <input required type="file" onChange={handleFileChange} />
        {AvatarError && <div className="error">{AvatarError}</div>}
      </label>

      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <div className="error">{error}</div>}
      
    </form>
  )
}