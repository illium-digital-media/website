import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <button className="text-xs rounded font-bold uppercase text-white border-2 border-white p-3  hover:text-white duration-200">
      <Link href="/contact">Contact Us </Link>
    </button>
  );
}

export default ContactButton;
