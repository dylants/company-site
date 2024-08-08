import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full items-center h-[75%] justify-center gap-12">
      <div className="flex flex-col w-full items-center gap-6">
        <Image
          alt="dylants"
          src="https://s3.amazonaws.com/dylants-company-site/public/images/prompt.png"
          width={64}
          height={64}
        />
        <div className="flex flex-col w-full items-center">
          <h1>dylants</h1>
          <h2 className="font-light">engineering services</h2>
        </div>
      </div>
      <Separator className="bg-slate-400" />
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-light">Connect</h2>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/dylants/"
            className="flex items-center gap-2"
          >
            <Image
              alt="LinkedIn"
              src="https://s3.amazonaws.com/dylants-company-site/public/images/LinkedIn.png"
              width={20}
              height={20}
            />
            <div>LinkedIn</div>
          </Link>
          <div className="text-slate-400">|</div>
          <Link
            href="https://resume.dylants.com/"
            className="flex items-center gap-2"
          >
            <Image
              alt="Resume"
              src="https://s3.amazonaws.com/dylants-company-site/public/images/resume.png"
              width={20}
              height={20}
            />
            <div>Resume</div>
          </Link>
          <div className="text-slate-500">|</div>
          <Link
            href="https://github.com/dylants"
            className="flex items-center gap-2"
          >
            <Image
              alt="GitHub"
              src="https://s3.amazonaws.com/dylants-company-site/public/images/GitHub.png"
              width={20}
              height={20}
            />
            <div>GitHub</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
