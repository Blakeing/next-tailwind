const previewSecret = "j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv"; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = "http://localhost:3000";

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
