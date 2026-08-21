import { Globe } from "lucide-react";

import { DevexperienceLogo } from "@/components/devexperience-logo";

export const MAPPING_ICONS = {
  github: (
    <img src="/assets/icons/github.ico" alt="Aventurai" className="h-6 w-6" />
  ),
  linkedin: (
    <img src="/assets/icons/linkedin.ico" alt="Aventurai" className="h-6 w-6" />
  ),
  instagram: (
    <img
      src="/assets/icons/instagram.png"
      alt="Aventurai"
      className="h-6 w-6"
    />
  ),
  youtube: (
    <img src="/assets/icons/youtube.ico" alt="Aventurai" className="h-6 w-6" />
  ),
  devexperience: <DevexperienceLogo className="h-4" />,
  aventurai: (
    <img
      src="https://aventurai.com.br/favicon.ico"
      alt="Aventurai"
      className="h-6 w-6"
    />
  ),
  arvono: (
    <img
      src="https://arvono.com.br/favicon.ico"
      alt="Arvono"
      className="h-6 w-6"
    />
  ),
  afetoe: (
    <img
      src="https://afetoe.com.br/favicon.ico"
      alt="Afetoe"
      className="h-6 w-6"
    />
  ),
  tocreators: (
    <img
      src="https://tocreators.com/favicon.ico"
      alt="TocCreators"
      className="h-6 w-6"
    />
  ),
  datadev: (
    <img
      src="https://datadev.devexperience.co/favicon.png"
      alt="Datadev"
      className="h-6 w-6"
    />
  ),
  saveimposto: (
    <img
      src="https://saveimposto.com.br/favicon.ico"
      alt="SaveImposto"
      className="h-6 w-6"
    />
  ),
  foundsafe: (
    <img
      src="https://foundsafe.online/favicon.ico"
      alt="Foundsafe"
      className="h-6 w-6"
    />
  ),
  globe: <Globe className="h-4 w-4" />,
};
