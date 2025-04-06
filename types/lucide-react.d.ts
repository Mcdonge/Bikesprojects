import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

declare module 'lucide-react' {
  export interface IconProps extends LucideProps {
    ref?: RefAttributes<SVGSVGElement>;
  }

  export type Icon = ForwardRefExoticComponent<IconProps>;

  export const Star: Icon;
  export const MapPin: Icon;
  export const CalendarDays: Icon;
  export const Clock: Icon;
  export const Shield: Icon;
  export const Info: Icon;
} 