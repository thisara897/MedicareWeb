import React from 'react'

const Pharmacy = () => {
  return (
    <div className='pharmacy_container'> 
      <h1>Welcome To Out Online Pharmacy</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo deleniti a magnam debitis! Excepturi doloribus at architecto numquam eum voluptatem, 
        tempore molestias quas magni nesciunt, facere natus perferendis dolorum amet!
      </p>

      <div className="uupload-area">
        <form action="upload.php">
          <input type="file" name='image' accept='image/*'/>
          <input type="submit" value = "Upload Image" />
        </form>
      </div>
      
    </div>
  )
}

export default Pharmacy
