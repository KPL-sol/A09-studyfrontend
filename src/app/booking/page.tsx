import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import getUserProfile from '@/libs/getUserProfile'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import DateReserve from '@/components/DateReserve'

export default async function BookingPage() {
  const session = await getServerSession(authOptions)
  const profile = session ? await getUserProfile(session.user.token) : null

  return (
    <main>
      {profile && (
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', marginBottom: '16px' }}>
          <p><strong>Name:</strong> {profile.data.name}</p>
          <p><strong>Email:</strong> {profile.data.email}</p>
          <p><strong>Tel:</strong> {profile.data.tel}</p>
          <p><strong>Member Since:</strong> {profile.data.createdAt}</p>
        </div>
      )}
      <h1>Venue Booking</h1>
      <TextField label="Name-Lastname" name="Name-Lastname" variant="standard" />
      <TextField label="Contact-Number" name="Contact-Number" variant="standard" />
      <Select id="venue">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
      <DateReserve />
      <Button name="Book Venue">Book Venue</Button>
    </main>
  )
}