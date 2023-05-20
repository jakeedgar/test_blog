import Table from '@/components/table/table'
import { NextPage } from 'next'
import { useMemo } from 'react'

type DataObject = {
  title: string
  href: string
}

const AdminPage: NextPage = () => {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'country', label: 'Country' },
  ]

  const userHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'E-Mail' },
  ]

  const rows = [
    { name: 'John', age: 25, country: 'USA' },
    { name: 'Alice', age: 32, country: 'Canada' },
    { name: 'Bob', age: 41, country: 'UK' },
  ]

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
    <div>
      This is the admin page
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
            }}
          >
            <div>
              <a href={item.href}>{item.title}</a>
            </div>
          </div>
        ))}
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
