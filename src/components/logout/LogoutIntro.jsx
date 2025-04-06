export default function LogoutIntro() {
  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>Owner logout</h1>
        <img
          src="../../images/login/oleron-unlock-door.jpg"
          alt="Prison guard about to unlock a cell using a large key"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>This page is only for use by the property owners</h2>
        <p>Logging out will mean that you can no longer see or use the admin content in the site - you will have the same view as all other visitors.</p>
        <p>You can log back in at any time by visiting <a href="https://oleronvilla.com/#/login">https://oleronvilla.com/#/login</a></p>
      </div>
    </>
  );
}