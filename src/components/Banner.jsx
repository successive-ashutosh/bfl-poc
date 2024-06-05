const Banner = ({ data }) => {
  const { redirect = '', img: { srcset = '', src = '' } = {} } = data || {};

  return (
    <a href={redirect}>
      <picture>
        <source srcset={srcset} media="(min-width: 1025px)" />
        <img src={src} loading="lazy" style={{ width: '100%' }}/>
      </picture>
    </a>
  )
}

export default Banner;
