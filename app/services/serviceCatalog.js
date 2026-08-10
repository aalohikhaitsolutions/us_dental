export const serviceCatalog = [
  { slug: "invisalign", label: "Invisalign" },
  { slug: "braces", label: "Braces" },
  { slug: "crowns", label: "Dental Crowns" },
  { slug: "deep-cleaning", label: "Deep Cleaning" },
  { slug: "extractions", label: "Extractions" },
  { slug: "fillings", label: "Fillings" },
  { slug: "gingivectomy", label: "Gingivectomy" },
  { slug: "implants", label: "Implants" },
  { slug: "restoration", label: "Restoration" },
  { slug: "root-canal", label: "Root Canal" },
  { slug: "teeth-cleaning", label: "Teeth Cleaning" },
  { slug: "dentures", label: "Dentures" },
  { slug: "wisdom-teeth", label: "Wisdom Teeth" },
];

export function getMoreServices(currentSlug) {
  return serviceCatalog.filter((service) => service.slug !== currentSlug);
}
