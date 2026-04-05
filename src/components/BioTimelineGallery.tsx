import Link from 'next/link';

const ENTRIES = [
  {
    image: '/nancy-1.jpg',
    imagePos: 'left',
    text: 'Nancy Kacungira works with senior leaders and high-performing professionals to sharpen how they communicate in environments where the quality of a conversation determines the quality of an outcome.',
  },
  {
    image: '/nancy-3.jpg',
    imagePos: 'right',
    text: 'A former lead presenter and correspondent for BBC News with nearly two decades of broadcast experience, she has built a career at the intersection of storytelling, influence, and strategic communication.',
  },
  {
    image: '/nancy-5.jpg',
    imagePos: 'left',
    text: 'Her journey began with presenting on radio in Uganda while studying at Makerere University, graduating with first-class honours. She obtained a Master\'s degree in Communication studies from Leeds University before joining KTN Kenya as a news anchor.',
  },
  {
    image: '/nancy-7.jpg',
    imagePos: 'right',
    text: 'She won the inaugural BBC Komla Dumor Award — recognising the next generation of African broadcast talent — in 2015. She now applies the communication skills and narrative awareness she developed in international broadcast to help senior professionals and organisations communicate with the authority their work deserves.',
  },
];

export default function BioTimelineGallery() {
  return (
    <section className="bio-tl-section">
      <div className="bio-tl-header">
        <h2 className="bio-editorial-title">My <em>story.</em></h2>
      </div>
      <div className="bio-tl-entries">
        {ENTRIES.map((e, i) => (
          <div key={i} className={`bio-tl-entry bio-tl-entry--${e.imagePos}`}>
            <div className="bio-tl-image">
              <img src={e.image} alt="" />
            </div>
            <div className="bio-tl-text">
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bio-tl-footer">
        <Link href="/about" className="bio-cta">More about Nancy{' '}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
      </div>
    </section>
  );
}
