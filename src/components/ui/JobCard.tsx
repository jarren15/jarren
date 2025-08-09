import React from "react";

interface JobCardType {
  role: string;
  company: string;
  date: string;
  description: string;
}

export default function JobCard({ role, company, date, description }: Readonly<JobCardType>) {
  return (
    <div className="py-5">
      <span className="capitalize mb-[.5rem] text-accent text-sm">{date}</span>
      <h5 className="flex gap-2 mb-2">
        <span className="font-medium text-lg uppercase">{role}</span>
        <span className="capitalize flex-1 text-base text-secondary">/ {company}</span>
      </h5>
      <p className="text-base">{description}</p>
    </div>
  );
}
