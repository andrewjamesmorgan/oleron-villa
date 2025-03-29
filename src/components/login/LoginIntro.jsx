export default function LoginIntro() {
  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>Owner login</h1>
        <img
          src="../../images/login/oleron-unlock-door.jpg"
          alt="Prison guard about to unlock a cell using a large key"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>This page is only for use by the property owners</h2>
        <p>You will only need to log in once, using the username and password that you were given.</p>
        <p>You only need to log in once for any browser/device. The next time you come to the site, you'll automatically be logged in.</p>
        <p>While logged in, you'll have a slightly different view of the site. If you want to see the customer view, then use an anonymous browser.</p>
      </div>
    </>
  );
}