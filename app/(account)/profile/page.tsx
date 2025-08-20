import React from 'react'
import { ProfileForm } from '../_components/ProfileEditForm'

const ProfilePage = () => {
  return (
    <div className='text-gray-700 bg-gray-50 p-4 rounded-2xl space-y-3'>
        <h3 className='text-2xl font-semibold text-center'>My Profile</h3>
        <h4 className='text-sm max-w-2xl mx-auto text-center'>Any changes made here will apply to future bookings only. To update an existing trip, head to  “My Trips” and choose the one you’d like to modify.</h4>
        <ProfileForm />
    </div>
  )
}

export default ProfilePage