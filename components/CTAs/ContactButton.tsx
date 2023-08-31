import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <button className="bg-gradient-to-t from-orange-800 via-orange-700 to-orange-800 text-sm rounded text-orange-100 px-6 py-3 hover:bg-orange-400 hover:scale-105  hover:shadow-cyan-glow duration-200 focus:ring focus:outline-none">
      <Link href="/contact">Dive In</Link>
    </button>
  );
}

export default ContactButton;
