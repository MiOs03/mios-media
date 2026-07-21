import React from "react";
import { Instagram } from "lucide-react";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mios.agency/",
    icon: "instagram" as const,
    hoverColor: "hover:text-[#E4405F]",
  },
  {
    label: "Viber",
    href: "https://viber.me/38766011491",
    icon: "viber" as const,
    hoverColor: "hover:text-[#7360F2]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/AMQVOYLQZKBEC1",
    icon: "whatsapp" as const,
    hoverColor: "hover:text-[#25D366]",
  },
];

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.4 0C9.473.028 5.333.276 2.73 2.838.817 4.726.025 7.262 0 11.138c-.002.355.093.702.275 1.005l-1.016 3.75a.75.75 0 0 0 .918.918l3.75-1.016a2.254 2.254 0 0 1 1.005.275c3.876.025 6.412-.817 8.3-2.73 2.562-2.603 2.81-6.743 2.838-8.67C18.724 1.276 14.584.028 12.657 0h-1.257zm.6 1.5h.657c1.7.024 5.2.24 7.35 2.39 1.85 1.884 2.066 5.384 2.09 7.084.024 1.7-.24 5.2-2.39 7.35-1.5 1.525-3.9 2.2-7.35 2.25-3.45-.05-5.85-.725-7.35-2.25-2.15-2.15-2.414-5.65-2.39-7.35.024-1.7.24-5.2 2.09-7.084 2.15-2.15 5.65-2.366 7.35-2.39zM8.2 7.8c-.3-.675-.615-.69-.9-.702-.232-.01-.498-.01-.764-.01s-.698.1-1.063.498c-.365.398-1.394 1.362-1.394 3.322s1.428 3.852 1.627 4.12c.2.268 2.75 4.418 6.785 6.01 3.356 1.326 4.037 1.062 4.768.996.732-.066 2.365-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.365-.267-.764-.467-.398-.2-2.365-1.167-2.73-1.3-.365-.133-.631-.2-.898.2-.267.398-1.033 1.3-1.265 1.567-.233.267-.465.3-.864.1-.398-.2-1.683-.62-3.205-1.975-1.185-1.057-1.985-2.36-2.217-2.758-.233-.398-.025-.613.175-.812.18-.18.398-.465.598-.698.2-.233.267-.398.398-.664.133-.267.067-.498-.033-.698-.1-.2-.898-2.167-1.23-2.967z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function SocialIcon({
  icon,
  className = "w-5 h-5",
}: {
  icon: (typeof socialLinks)[number]["icon"];
  className?: string;
}) {
  if (icon === "instagram") return <Instagram className={className} strokeWidth={1.75} />;
  if (icon === "viber") return <ViberIcon className={className} />;
  return <WhatsAppIcon className={className} />;
}

type SocialLinksRowProps = {
  className?: string;
  iconClassName?: string;
  onLinkClick?: () => void;
};

export function SocialLinksRow({ className = "flex gap-6", iconClassName = "w-5 h-5 text-zinc-500 hover:text-white transition-colors", onLinkClick }: SocialLinksRowProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          onClick={onLinkClick}
          className={`${iconClassName} ${link.hoverColor}`}
        >
          <SocialIcon icon={link.icon} className="w-full h-full" />
        </a>
      ))}
    </div>
  );
}
