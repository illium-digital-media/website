import React, { ReactElement } from "react";

interface ContactItemProps {
  icon: ReactElement;
  title: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center pr-4">
      <div className="p-2 shadow-lg rounded-full inline-block overflow-hidden mr-3 bg-white text-primary">
        {icon}
      </div>
      <div className="grid">
        <span className="text-2xl font-bold">{value}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ContactItem;
