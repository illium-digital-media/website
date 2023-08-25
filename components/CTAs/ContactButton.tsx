import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <button className="bg-cyan-400 text-xs rounded font-bold uppercase text-blue-900 px-6 py-3 hover:bg-orange-400 hover:text-white duration-200">
      <Link href="/contact">Dive In</Link>
    </button>
  );
}

export default ContactButton;
