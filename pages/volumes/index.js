import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function VolumeIndex() {
  return (
    <>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
