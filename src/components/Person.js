import React from 'react'

function Person({hero, color}) {
  console.log({hero});
  console.log({color}.color);

  const colorUser = {
    color : {color}.color
  }

  if({hero}.hero.name =='Diana'){
    return(
      <div>        
        <h2 className='border pink'>
        I am the {hero.name}.
            I am {hero.age} years old. I know {hero.skill}
        </h2>
      </div>
    )
  }
else{
  return (
    <div>        
        <h2 style={colorUser} className='border indigo'>
        I am the {hero.name}.
            I am {hero.age} years old. I know {hero.skill}
        </h2>
    </div>
  )

}
}

export default Person