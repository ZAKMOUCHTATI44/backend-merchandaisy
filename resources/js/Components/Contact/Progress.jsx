import React from 'react'

const Progress = () => {
  return (
    <div className='mt-24'>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="text-center py-5 font-extrabold uppercase" style={{ backgroundColor: "rgb(112, 224, 0)"}}>
                Paiement sécurisé
            </div>
            <div className="text-center py-5 font-bold uppercase" style={{ backgroundColor:"rgb(164, 235, 92)"}}>
                Fait maison
            </div>
            <div className="text-center py-5 font-semibold uppercase" style={{ backgroundColor:"rgb(205, 244, 166)"}}>
                Livraison rapide
            </div>
        </div>
    </div>
  )
}

export default Progress
