import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <button className="bg-orange-400 text-xs rounded font-bold uppercase text-white px-6 py-3 hover:bg-orange-400 hover:scale-105  hover:shadow-cyan-glow duration-200 focus:ring focus:outline-none">
      <Link href="/contact">Dive In</Link>
    </button>
  );
}

export default ContactButton;
