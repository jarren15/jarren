import tempData from "@/temp-data.json";
import JobCard from "@/components/ui/JobCard";

export default function Home() {
  const jobElements = tempData.jobs
    .sort((a, b) => b.id - a.id)
    .map((job) => {
      return <JobCard key={`job-${job.id}`} role={job.role} date={job.date} company={job.company} description={job.description} />;
    });

  return (
    <main className="ml-[88px]">
      <section id="about" className="px-[6%] py-21">
        <div className="flex gap-19">
          <div className="flex-1">
            <h2 className="custom-heading-2">Heading</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus sint error nesciunt similique asperiores eum suscipit facilis impedit aspernatur aperiam vero eveniet sapiente
            numquam consequuntur, voluptatum at quia voluptas. Expedita mollitia explicabo beatae amet voluptatum repellendus blanditiis consequuntur. Amet sequi voluptatem vero at cumque obcaecati et
            dolores. Aperiam, natus.
          </div>
          <div className="flex-1">
            <h2 className="custom-heading-2">Heading</h2>
            <div className="divide-y divide-solid divide-color">{jobElements}</div>
          </div>
          <div className="flex-1">
            <h2 className="custom-heading-2">Heading</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus sint error nesciunt similique asperiores eum suscipit facilis
            impedit aspernatur aperiam vero eveniet sapiente numquam consequuntur, voluptatum at quia voluptas. Expedita mollitia explicabo beatae amet voluptatum repellendus blanditiis consequuntur.
            Amet sequi voluptatem vero at cumque obcaecati et dolores. Aperiam, natus.
          </div>
        </div>
      </section>
    </main>
  );
}
