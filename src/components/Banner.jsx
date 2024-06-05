const Banner = ({ data }) => {
  const { redirect = '', img: { srcset = '', src = '' } = {} } = data || {};

  return (
    <a href={redirect} style={{ width: '393px' }}>
      <picture>
        <source srcset={srcset} media="(min-width: 1025px)" />
        <img src={src} loading="lazy" style={{ width: '393px' }}/>
      </picture>
    </a>
  )
}

export default Banner;
