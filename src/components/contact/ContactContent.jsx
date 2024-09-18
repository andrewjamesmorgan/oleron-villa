import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';

export default function Home() {
  // const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className='space-above'>
      <ContactIntro />
      <ContactForm />
    </div>
  );
}

