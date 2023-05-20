import { NextPage } from 'next'
import { useRouter } from 'next/router'

type DataObject = {
  title: string
  href: string
}

const AdminPage: NextPage = () => {
  const router = useRouter()
  const handleBack = () => {
    router.push('/')
  }
  const data: DataObject[] = [
    {
      title: 'Users',
      href: '/users',
    },
    {
      title: 'Posts',
      href: '/posts',
    },
    {
      title: 'Profiles',
      href: '/profiles',
    },
  ]

  return (
    <div
      style={{
        margin: '2rem',
      }}
    >
      <button onClick={handleBack}>Go Home</button>
      <h1>This is the admin page</h1>
      <div>
        <br />
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              width: '360px',
              fontSize: '1.25em',
            }}
          >
            <div>
              <a href={item.href}>{item.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPage
