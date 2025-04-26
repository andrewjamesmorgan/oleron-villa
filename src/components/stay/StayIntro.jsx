export default function StayIntro() {
  return (
    <>
      <div id='stay-intro' className='banner-image-text'>
        <h1>Your stay with us</h1>
        <img
          src="../../images/stay/tenant-information-wide.jpg"
          alt="Nothing too useful. Mix of TV, WiFi, parking, cooking. cleaning, etc."
          className='full-width-image'
        />  
      </div>
      <div className='responsive-text'>
        <h2>Useful information during your stay</h2>
        <p>The purpose of this page is to provide you with information about the apartment and area that could be useful while you're staying in the apartment.</p>
        <p>If you don't find what you need then please let us know, and we'll do whatever we can to help.</p>
      </div>
    </>
  );
}