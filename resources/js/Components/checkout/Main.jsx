import React from 'react'
import Commade from './Commade'
import InfoUser from './InfoUser'

const Main = () => {
  return (
    <div>
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-6">
                    <InfoUser />
                </div>
                <div className="col-span-4">
                    <Commade />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main
