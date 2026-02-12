import { Globe, Linkedin } from 'lucide-react'

import {
  SiGithub,
  SiInstagram,
  SiYoutube,
} from '@icons-pack/react-simple-icons'

import ObservooIcon from '@/assets/icons/observoo.svg?react'
import AcumulaeIcon from '@/assets/icons/acumulae.svg?react'
import DoctosaveIcon from '@/assets/icons/doctosave.svg?react'
import { DevexperienceLogo } from '@/components/devexperience-logo'

export const MAPPING_ICONS = {
  github: <SiGithub color="#181717" size={24} />,
  linkedin: <Linkedin className="h-4 w-4" />,
  instagram: <SiInstagram color="#E4405F" size={24} />,
  youtube: <SiYoutube color="#FF0000" size={24} />,
  observoo: <ObservooIcon width={24} height={24} />,
  acumulae: <AcumulaeIcon width={24} height={24} />,
  doctosave: <DoctosaveIcon width={24} height={24} />,
  devexperience: <DevexperienceLogo className="h-4" />,
  globe: <Globe className="h-4 w-4" />,
}
