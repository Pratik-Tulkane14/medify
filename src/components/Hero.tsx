// import Search from './Search'
import Search from './Search'
import hero from '/doc&sister.png'
const Hero: React.FC = () => {
  return (
    <>

      <div className="hero-wrapper">
        <div className="hero-left">
          <p className='hero-heading'>
            Skip the travel! Find Online
          </p>
          <h1 className='hero-sub-heading'>Medical
            <span className='centers'>Centers</span>
          </h1>
          <p className='tagline'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
          <button className='find-centers'>Find Centers</button>
        </div>
        <div className="hero-right">
          <img src={hero} className='hero-img' alt="hero image" />
        </div>
      </div>
      <Search/>
      </>
  )
}

export default Hero