import React from 'react'

const Card = ({ username = "Nupur", post = "Not assigned yet", image="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" }) => {
  //! uper props bhi use kar sakte hai username = "Nupur" ke badale  
  // UserName App wale mein passs karna padhta hai 
  // console.log(props)
  let myObj = {
    name: "Aditya",
    age: "19",
    address: {
      city: "Mumbai",
      state: "Maharastra",
      country: "India"
    }
  }

  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(myObj)
  console.log(myArr)
  {/* <pre>{JSON.stringify(myObj, null, 2)}</pre> */ }


  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="image" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
              {/* {props.username} */}

              {/* {seconduser} */}

            </div>
            <div>
              {post}
              {/* Staff Engineer, Algolia */}
              {/* <pre>{JSON.stringify(myObj, null, 2)}</pre> */}


            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Card
