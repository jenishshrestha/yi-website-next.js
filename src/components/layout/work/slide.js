import Link from 'next/link'

const Slide = (props) => {
  const { workStyles, title, heading } = props
  const slug = title.toLowerCase().split(' ').join('-')

  return (
    <div className={workStyles.slideContent}>
      <h2 className={workStyles.slideContent__heading}>{heading}</h2>
      <p className={workStyles.slideContent__title}>Project: {title}</p>
      <Link href={`/work/${slug}`}>
        <a className={workStyles.slideContent__link}>View case study</a>
      </Link>
    </div>
  )
}

export default Slide
