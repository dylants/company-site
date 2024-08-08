import { Separator } from 'components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full items-center h-[75%] justify-center gap-12">
      <div className="flex flex-col w-full items-center gap-6">
        <h1>Dylan Smith</h1>
      </div>
      <Separator />
      <div className="flex flex-col items-center gap-4">
        <h2>Connect for available services</h2>
        <div className="flex gap-4">
          <div>Resume</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
}
