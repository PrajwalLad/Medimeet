import React from 'react'

const SpecialtyPage = async({ params }) => {
    const {specialty} = await params;
  return (
    <div>
      SpecialtyPage: {specialty}
    </div>
  )
}

export default SpecialtyPage
