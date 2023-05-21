import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import styles from '@/styles/Draft.module.css'

const Create: React.FC = () => {
  const [bio, setBio] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)
  // const [profilePic, setProfilePic] = useState<string>('')
  const router = useRouter()

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { bio, userId }
      await fetch(`/api/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await router.push('/admin')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>Create Profile</h1>
        <input autoFocus onChange={(e) => setBio(e.target.value)} placeholder='Bio' type='text' value={bio} />
        <textarea cols={50} onChange={(e) => setUserId(Number(e.target.value))} placeholder='Content' rows={8} value={userId} />
        <input disabled={!userId || !bio} type='submit' value='Create' />
        <a className={styles.black} href='#' onClick={() => Router.push('/')}>
          or Cancel
        </a>
      </form>
    </div>
  )
}

export default Create
